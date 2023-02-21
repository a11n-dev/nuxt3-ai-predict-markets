<template>
  <div
    class="page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"
    v-if="currentView == 'ChatGPT' || article || articleList"
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

      <Pagination
        v-if="currentView == 'ChatGPT' && prompt"
        :pageCount="Math.ceil(articlesListLength / pagination.perPage)"
        :postCount="articlesListLength"
        :page="pagination.page"
        :perPage="pagination.perPage"
        @changePage="
          pagination.page = $event;
          getValidationItem();
        "
      />

      <div
        class="h-1/5"
        v-if="currentView === 'Single View' && article"
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
        v-else-if="currentView == 'Table View' && articleList"
      />

      <ChatGPT
        :prompt="prompt"
        v-else-if="currentView == 'ChatGPT' && prompt"
      />
    </div>

    <div
      class="absolute bottom-0 left-0 w-full"
      v-if="currentView === 'Single View'"
    >
      <div class="stretch grid grid-cols-3 gap-6 last:mb-6 mx-auto max-w-3xl bg-dark rounded-3xl p-6">
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
  {
    name: "ChatGPT",
  },
]);

const article = ref(null);
const articleList = ref(null);
const validatedCount = ref(0);
const articleCount = ref(0);

const prediction = ref("");

const prompt = ref(null);

const articlesListLength = ref(0);
const pagination = ref({
  perPage: 50,
  page: 1,
  pageCount: 0,
});

getValidationItem();

async function getValidationItem() {
  const { data: articleData } = await useLazyFetch("/api/articles/validation-v2", {
    method: "post",
    body: { userID: localStorage?.getItem("aiUserUID"), tableView: currentView.value === "Table View", chatGPT: currentView.value === "ChatGPT", page: pagination.value.page, perPage: pagination.value.perPage },
  });

  watch(articleData, (newArticle) => {
    if (currentView.value === "Single View") {
      article.value = newArticle;
    } else if (currentView.value === "Table View") {
      articleList.value = newArticle;
    } else if (currentView.value === "ChatGPT") {
      prompt.value = `Below you will find headlines and descriptions of articles related to the crypto market and bitcoin separated by paragraphs and having an index. In order to train an artificial intelligence model that can determine which news will affect the crypto market and bitcoin price and which will not. Which of these news articles should give the artificial intelligence model as those that can hypothetically affect the cryptocurrency market and the pattern of such news and what news should not be given to an AI model for training. Parse this list entries and return me only the indexes of articles. Split indexes with spaces. The answer should be like this example: "2 5 7 32 154"`;

      articlesListLength.value = newArticle.postCount;
      pagination.value.pageCount = newArticle.pageCount;

      newArticle.list.forEach((article, index) => {
        prompt.value += `<br><br> ${index + (pagination.value.page - 1) * pagination.value.perPage}. ${article.title} <br> ${article.excerpt}`;
      });
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
