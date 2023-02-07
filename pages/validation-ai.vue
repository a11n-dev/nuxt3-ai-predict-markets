<template>
  <div class="page relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
    <div class="flex-1 overflow-hidden">
      <div class="h-full relative">
        <div class="scrollable h-full w-full overflow-y-auto">
          <div class="flex flex-col items-center text-sm h-full">
            <template
              v-for="(message, index) in chat"
              :key="message"
            >
              <div
                class="w-full border-b border-black/10 border-gray-900/50 text-gray-100"
                v-if="(index + 1) % 2 != 0"
              >
                <div class="gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
                  <div class="w-[30px] flex flex-col relative items-end">
                    <div class="bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest h-8 w-8 text-xs">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                  <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                    <div class="flex flex-grow flex-col gap-3">
                      <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">{{ message }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="w-full border-b border-gray-900/50 text-gray-100 bg-[#444653]"
                v-else
              >
                <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
                  <div class="w-[30px] flex flex-col relative items-end">
                    <div
                      class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center"
                      style="background-color: rgb(16, 163, 127)"
                    >
                      <img
                        src="/icons/data.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="relative flex w-[calc(100%-50px)] md:flex-col lg:w-[calc(100%-115px)]">
                    <div class="flex flex-grow flex-col gap-3">
                      <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                        <div class="markdown prose w-full break-words dark:prose-invert light">
                          <p>AI prediction is: {{ message }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                      <button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg></button
                      ><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div class="w-full h-48 flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <form
        class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
        @submit.prevent="predict()"
      >
        <div class="relative flex h-full flex-1">
          <div class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white text-black rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)]">
            <textarea
              rows="1"
              class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 max-h-[200px] overflow-y-hidden"
              ref="textarea"
              v-model="article"
              @input="textChange()"
              @keypress.enter.exact.prevent="predict()"
              @keydown.enter.shift.exact.prevent="
                article += '\n';
                textChange();
              "
            ></textarea>
            <button
              class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 disabled:hover:bg-transparent"
              @click.prevent="predict()"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                class="h-4 w-4 rotate-90"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";

const { $socket } = useNuxtApp();

// DOM elements
const textarea = ref(null);

// Variables
const article = ref(null);
const chat = ref([]);

onMounted(() => {
  $socket.on("model-training-status", (data) => {
    modelTraining.value = data;
  });
});

function textChange() {
  setTimeout(() => {
    textarea.value.style.height = "0px";
    textarea.value.style.height = `${textarea.value.scrollHeight}px`;
  }, 50);
}

function scrollBottom() {
  document.querySelector(".scrollable").scrollTo(0, document.querySelector(".scrollable").scrollHeight);
}

function predict() {
  if (article.value) {
    chat.value.push(article.value);
    $socket.emit("predict-validation", article.value, (response) => {
      article.value = null;
      chat.value.push(response.prediction);
      textChange();
      scrollBottom();
    });
  }
}
</script>
