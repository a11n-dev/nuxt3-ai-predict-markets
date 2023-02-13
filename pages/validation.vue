<template>
  <div
    class="page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"
    v-if="article || articleList"
  >
    <div class="pt-10 w-full h-full mx-auto max-w-5xl">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-semibold">Validate News Articles</h3>

        <div class="view">
          <ul>
            <li
              v-for="view in views"
              :key="view"
              @click="
                currentView = view.name;
                getValidationItem();
              "
              :class="{ active: currentView == view.name }"
            >
              {{ view.name }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="h-1/5"
        v-if="currentView === 'Single View'"
      >
        <div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4">
          <h3 class="text-xl mb-2">{{ article.title }}</h3>
          <p class="mb-4 text-md">{{ article.excerpt }}</p>
          <small class="block"> <b>Date:</b> {{ new Date(article.date).toLocaleDateString() }} {{ new Date(article.date).toTimeString() }} </small>
          <small class="block"><b>Parser:</b> {{ article.parserId.name }}</small>
        </div>

        <div class="relative h-full p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4">
          <p
            class="text-md text-gray-100"
            v-html="article.content"
          ></p>
        </div>

        <div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4">
          <a
            class="text-md text-blue-400 hover:opacity-80"
            :href="article.link"
            target="_blank"
          >
            {{ article.link }}
          </a>
        </div>

        <!-- <div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto">AI Prediction is: {{ prediction }}</div> -->
      </div>

      <TableView
        :articleList="articleList"
        v-else
      />
    </div>

    <div
      class="absolute bottom-0 left-0 w-full"
      v-if="currentView === 'Single View'"
    >
      <div class="stretch mx-2 grid grid-cols-3 gap-6 last:mb-6 mx-auto max-w-3xl bg-dark rounded-3xl p-6">
        <button
          class="p-4 bg-green-600 rounded-xl font-semibold"
          @click="validateArticle('accept')"
        >
          Accept
        </button>
        <button
          class="p-4 bg-red-600 rounded-xl font-semibold"
          @click="validateArticle('reject')"
        >
          Reject
        </button>
        <button
          class="p-4 bg-sky-600 rounded-xl font-semibold"
          @click="validateArticle('skip')"
        >
          Skip
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $socket } = useNuxtApp();

const currentView = ref("Single View");

const views = ref([
  {
    name: "Single View",
  },
  {
    name: "Table View",
  },
]);

const article = ref(null);
const articleList = ref(null);
const validatedCount = ref(0);
const articleCount = ref(0);

const prediction = ref("");

getValidationItem();

async function getValidationItem() {
  const { data: articleData } = await useLazyFetch("/api/articles/validation-v2", {
    method: "post",
    body: { userID: localStorage?.getItem("aiUserUID"), tableView: currentView.value === "Table View" },
  });

  watch(articleData, (newArticle) => {
    if (currentView.value === "Single View") {
      article.value = newArticle;
    } else {
      articleList.value = newArticle;
    }

    // predict(article.value.text);
  });
}

async function validateArticle(validationResult) {
  await useFetch("/api/articles/validation-v2", {
    method: "put",
    body: { userID: localStorage?.getItem("aiUserUID"), articleId: article.value?._id, validationResult },
  }).then(() => {
    getValidationItem();
  });
}

function predict(article) {
  $socket.emit("predict-validation", article, (response) => {
    prediction.value = response.prediction;
  });
}
</script>

<style lang="scss" scoped>
.view {
  ul {
    width: 300px;
    display: flex;
    background: rgba($color: #fff, $alpha: 1);
    border-radius: 12px;
    padding: 4px;

    li {
      color: #202123;
      width: 50%;
      text-align: center;
      padding: 6px 0;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;

      &:not(.active):hover {
        opacity: 0.7;
      }

      &.active {
        background: #202123;
        border-radius: 10px;
        color: #fff;
      }
    }
  }
}
</style>
