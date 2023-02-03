<template>
  <div
    class="page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"
    v-if="statistics"
  >
    <div class="pt-10 h-3/5 w-full mx-auto max-w-5xl">
      <h3 class="text-2xl font-semibold mb-6">Profile Statistics</h3>

      <div class="flex flex-col gap-6 p-6 bg-[#444653] rounded-3xl overflow-y-auto mb-4">
        <div class="grid grid-cols-2 gap-6">
          <div class="flex flex-col text-center">
            <b class="text-xl">{{ statistics.training.total }}</b>
            <small>Articles added</small>
          </div>
          <div class="flex flex-col text-center">
            <b class="text-xl">{{ `${statistics.validation.validated.total} / ${statistics.validation.articlesCount}` }}</b>
            <small>Validated articles</small>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-6">
          <div class="flex flex-col text-center p-4 bg-green-600 rounded-xl font-semibold">
            <b class="text-xl">{{ statistics.validation.validated.accepted }}</b>
            <small>Validation accepted</small>
          </div>
          <div class="flex flex-col text-center p-4 bg-red-600 rounded-xl font-semibold">
            <b class="text-xl">{{ statistics.validation.validated.rejected }}</b>
            <small>Validation rejected</small>
          </div>
          <div class="flex flex-col text-center p-4 bg-sky-600 rounded-xl font-semibold">
            <b class="text-xl">{{ statistics.validation.validated.skiped }}</b>
            <small>Validation skiped</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const statistics = ref(null);

getValidationItem();

async function getValidationItem() {
  const { data: statisticsData } = await useLazyFetch("/api/articles/statistics", {
    method: "post",
    body: { userID: localStorage?.getItem("aiUserUID") },
  });

  watch(statisticsData, (newStatistics) => {
    statistics.value = newStatistics;
  });
}
</script>
