<template>
  <div class="relative pt-10 pb-20 w-full h-full mx-auto max-w-5xl overflow-y-auto">
    <div
      class="p-6 bg-[#444653] rounded-3xl mb-4"
      v-for="article in props.articleList"
      :key="article._id"
    >
      <div class="flex justify-between items-center">
        <div>
          <a
            class="text-xl mb-2 text-blue-400 hover:opacity-80"
            :href="article.link"
            target="_blank"
            >{{ article.title }}</a
          >
          <p class="mb-4 text-md">{{ article.excerpt }}</p>
          <small class="block"> <b>Date:</b> {{ new Date(article.date).toLocaleDateString() }} {{ new Date(article.date).toTimeString() }} </small>
          <small class="block"><b>Parser:</b> {{ article.parserId.name }}</small>
        </div>

        <div
          class="flex gap-2 min-w-[200px] ml-4"
          v-if="!article.validated"
        >
          <button
            class="p-4 bg-green-600 rounded-xl font-semibold"
            @click="validateArticle(article._id, 'accept')"
          >
            <img
              src="/icons/accept.svg"
              alt=""
            />
          </button>
          <button
            class="p-4 bg-red-600 rounded-xl font-semibold"
            @click="validateArticle(article._id, 'reject')"
          >
            <img
              src="/icons/reject.svg"
              alt=""
            />
          </button>
          <button
            class="p-4 bg-sky-600 rounded-xl font-semibold"
            @click="validateArticle(article._id, 'skip')"
          >
            <img
              src="/icons/forward.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  articleList: {
    type: Array,
    required: true,
  },
});

async function validateArticle(articleId, validationResult) {
  await useFetch("/api/articles/validation-v2", {
    method: "put",
    body: { userID: localStorage?.getItem("aiUserUID"), articleId, validationResult },
  }).then(() => {
    props.articleList.find((article) => article._id === articleId).validated = true;
    getValidationItem();
  });
}
</script>
