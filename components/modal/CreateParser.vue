<template>
  <div
    class="modal micromodal-slide"
    id="modal-create-parser"
    aria-hidden="true"
  >
    <div
      class="modal__overlay"
      tabindex="-1"
      data-micromodal-close
    >
      <div
        class="modal__container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-form-title"
      >
        <div class="modal__container-header flex justify-between align-center">
          <h3 class="modal-title">Enter parser options</h3>

          <button
            class="close-modal-button"
            data-micromodal-close
          >
            <svg
              aria-hidden="true"
              fill="#202123"
              height="10"
              viewBox="0 0 10 10"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                fill="#202123"
              ></path>
            </svg>
          </button>
        </div>

        <div class="option-list mb-6">
          <div class="option">
            <h5 class="modal-sub-title">Parser Name</h5>

            <input
              type="text"
              name=""
              id=""
              placeholder="Ex: www.example.com"
              v-model="parserName"
            />
          </div>

          <div class="option">
            <h5 class="modal-sub-title">Resource Link</h5>

            <input
              type="text"
              name=""
              id=""
              placeholder="Ex: https://www.example.com/tag/bitcoin/"
              v-model="resourceLink"
            />
          </div>

          <div class="option">
            <h5 class="modal-sub-title">Post Selector</h5>

            <input
              type="text"
              name=""
              id=""
              placeholder="Ex: .post-class"
              v-model="postSelector"
            />
          </div>

          <div class="option">
            <h5 class="modal-sub-title">Link Selector</h5>

            <input
              type="text"
              name=""
              id=""
              placeholder="Ex: a.post-link-class"
              v-model="linkSelector"
            />
          </div>
        </div>

        <button
          class="btn btn-fill w-full"
          @click.prevent="createParser()"
        >
          Create Parser
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MicroModal from "micromodal";
import { createToast } from "mosha-vue-toastify";

const parserName = ref(null);
const resourceLink = ref(null);
const postSelector = ref(null);
const linkSelector = ref(null);

async function createParser() {
  if (!parserName.value || !resourceLink.value || !postSelector.value || !linkSelector.value) {
    createToast(
      {
        title: "Warning",
        description: "Please, fill all field to continue.",
      },
      { type: "warning", showIcon: true, transition: "slide" }
    );

    return;
  }

  await useFetch("/api/parsers/create", {
    method: "post",
    body: { parserName: parserName.value, resourceLink: resourceLink.value, postSelector: postSelector.value, linkSelector: linkSelector.value },
  }).then((res) => {
    if (res.data.value.status === 200) {
      parserName.value = null;
      resourceLink.value = null;
      postSelector.value = null;
      linkSelector.value = null;

      createToast(
        {
          title: "Success",
          description: "Parser successfully created.",
        },
        { type: "success", showIcon: true, transition: "slide" }
      );

      MicroModal.close('modal-create-parser')
    } else {
      createToast(
        {
          title: "Error",
          description: "There was a problem in the process. Look at the console for details.",
        },
        { type: "warning", showIcon: true, transition: "slide" }
      );
    }
  });
}
</script>

<style lang="scss" scoped>
#modal-create-parser {
  .modal__container {
    background: #fff;
    min-width: 420px;
    min-height: 480px;
    padding: 24px;

    .modal-title {
      font-size: 18px;
      font-weight: bold;
      color: #202123;
    }

    .modal-sub-title {
      font-size: 14px;
      font-weight: bold;
      color: #3c424299;
    }

    .option-list {
      padding-top: 18px;

      .option {
        h5 {
          margin-bottom: 6px;
        }

        &:not(:last-of-type) {
          margin-bottom: 16px;
        }

        input {
          border: 1px solid #0000000f;
          border-radius: 12px;
          padding: 10px;
          font-size: 14px;
          width: 100%;
          color: #202123;
        }
      }
    }
  }
}
</style>
