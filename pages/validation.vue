<template>
  <div
    class="page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"
    v-if="article"
  >
    <div class="pt-10 h-3/5 w-full mx-auto max-w-5xl">
      <h3 class="text-2xl font-semibold mb-6">Validate News Article</h3>

      <div class="relative h-full p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4">
        <small class="block text-right"
          ><b>{{ article.date }}</b></small
        >
        <h3
          class="text-lg mb-4"
          v-html="article.text.split(/\s+/).slice(0, 15).join(' ')"
        ></h3>
        <p
          class="text-md text-gray-100"
          v-html="article.text"
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

      <div class="p-6 bg-[#444653] rounded-3xl overflow-y-auto">AI Prediction is: {{ prediction }}</div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
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

const article = ref(null);
const validatedCount = ref(0);
const articleCount = ref(0);

const prediction = ref("");

getValidationItem();

onMounted(() => {
  $socket.on("model-training-status", (data) => {
    modelTraining.value = data;
  });
});

async function getValidationItem() {
  const { data: articleData } = await useLazyFetch("/api/articles/validation", {
    method: "post",
    body: { userID: localStorage?.getItem("aiUserUID") },
  });

  watch(articleData, (newArticle) => {
    article.value = newArticle;

    predict(article.value.text);
  });
}

async function validateArticle(validationResult) {
  await useFetch("/api/articles/validation", {
    method: "put",
    body: { userID: localStorage?.getItem("aiUserUID"), articleID: article.value?._id, validationResult },
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
