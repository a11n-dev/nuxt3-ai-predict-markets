<template>
  <div class="relative pt-6 pb-20 w-full h-full mx-auto max-w-5xl">
    <div class="fixed right-6 top-6 flex flex-col gap-2 z-10">
      <button
        class="w-12 h-12 bg-white rounded-xl flex items-center justify-center"
        @click.prevent="copyToClipboard()"
      >
        <img src="/icons/copy.svg" />
      </button>
    </div>

    <div
      class="p-6 bg-[#444653] h-full rounded-3xl mb-4 overflow-y-auto"
      v-if="props.prompt"
    >
      <p v-html="props.prompt"></p>
    </div>
  </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";

const props = defineProps({
  prompt: {
    type: String,
    required: true,
  },
});

function copyToClipboard() {
  const type = "text/html";
  const blob = new Blob([props.prompt], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  // Copy the text inside the text field
  navigator.clipboard.write(data).then(() => {
    // Alert about success
    createToast(
      {
        title: "Success",
        description: "Text copied successfully.",
      },
      { type: "success", showIcon: true, transition: "slide" }
    );
  });
}
</script>
