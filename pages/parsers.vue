<template>
  <div class="page relative h-full w-full transition-width overflow-y-scroll">
    <div class="fixed right-6 top-6 flex flex-col gap-2 z-10">
      <button
        class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
        @click.prevent="MicroModal.show('modal-create-parser', { onClose: () => getParsers() })"
      >
        <img
          class="w-8"
          src="/icons/add.svg"
        />
      </button>

      <div
        v-if="parsers"
        class="flex flex-col gap-2"
      >
        <button
          class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
          @click.prevent="setStatus(null, true, true)"
        >
          <img
            src="/icons/play-dark.svg"
            alt=""
          />
        </button>
        <button
          class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
          @click.prevent="setStatus(null, false, true)"
        >
          <img
            src="/icons/stop-dark.svg"
            alt=""
          />
        </button>
      </div>
    </div>

    <div
      class="py-10 w-full mx-auto max-w-5xl grid grid-cols-2 gap-4"
      v-if="parsers"
    >
      <div
        class="relative bg-[#444653] rounded-2xl"
        v-for="parser in parsers"
        :key="parser._id"
      >
        <div class="flex justify-between p-4">
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ parser.name }}</h3>

            <a
              class="text-sm text-blue-400 hover:opacity-80"
              :href="parser.link"
              target="_blank"
              >{{ parser.link }}</a
            >
          </div>

          <div class="flex gap-2">
            <button
              v-if="!parser.status"
              @click.prevent="setStatus(parser._id, true, false)"
            >
              <img
                src="/icons/play.svg"
                alt=""
              />
            </button>
            <button
              v-else
              @click.prevent="setStatus(parser._id, false, false)"
            >
              <img
                src="/icons/stop.svg"
                alt=""
              />
            </button>
            <button @click.prevent="deleteParser(parser._id)">
              <img
                src="/icons/trash.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <div class="flex justify-end pt-2 pb-2 pr-4 bg-dark rounded-b-xl">
          <ul class="metadata text-xs flex items-center gap-2">
            <li>
              24h: <b>{{ parser.statistics.parsed_24h }}</b>
            </li>
            <li>
              7d: <b>{{ parser.statistics.parsed_7d }}</b>
            </li>
            <li>
              Total: <b>{{ parser.statistics.parsed }}</b>
            </li>
            <li>
              Last check:
              <b>{{ new Date(parser.lastCheck).toLocaleDateString() }} {{ new Date(parser.lastCheck).toLocaleTimeString() }}</b>
            </li>
            <li class="flex items-center">
              <span
                class="block w-2 h-2 rounded-full"
                :class="{ 'bg-green-600': parser.status, 'bg-red-600': !parser.status }"
              ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MicroModal from "micromodal";

const parsers = ref(null);

getParsers();

async function getParsers() {
  const { data: parserList } = await useLazyFetch("/api/parsers");

  watch(parserList, (newParserList) => {
    parsers.value = newParserList;
  });
}

async function deleteParser(parserId) {
  await useFetch("/api/parsers/remove", {
    method: "delete",
    body: { parserId },
  }).then(() => {
    getParsers();
  });
}

async function setStatus(parserId, parserStatus, setAll) {
  await useFetch("/api/parsers/status", {
    method: "put",
    body: { parserId, parserStatus, setAll },
  }).then((res) => {
    getParsers();
  });
}
</script>
