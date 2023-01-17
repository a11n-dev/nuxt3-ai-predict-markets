<template>
  <div
    class="modal micromodal-slide"
    id="modal-train-news-model"
    aria-hidden="true"
  >
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div
        class="modal__container d-flex"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-form-title"
      >
        <div class="modal__container-left">
          <h3 class="modal-title">Enter article options</h3>

          <div class="option-list">
            <div class="option option-market">
              <h5 class="modal-sub-title">Market Category</h5>

              <ul>
                <li
                  v-for="market in markets"
                  :key="market"
                  @click="marketCategory = market.name"
                  :class="{ active: marketCategory == market.name }"
                >
                  {{ market.name }}
                </li>
              </ul>
            </div>

            <div class="option">
              <h5 class="modal-sub-title">Currency/Company Name</h5>

              <input
                type="text"
                name=""
                id=""
                placeholder="Ex: Bitcoin/Apple Inc."
                v-model="articleCategory"
              />
            </div>

            <div class="option">
              <h5 class="modal-sub-title">Article Link</h5>

              <input
                type="text"
                name=""
                id=""
                placeholder="Ex: https://example.com/post"
                v-model="articleLink"
              />
            </div>

            <div class="option">
              <h5 class="modal-sub-title">Article Date</h5>

              <input
                type="text"
                name=""
                id=""
                placeholder="Pattern: dd/mm/yyyy"
                v-model="articleDate"
              />
            </div>

            <div class="option option-select">
              <h5 class="modal-sub-title">Select Result</h5>

              <ul>
                <li
                  v-for="result in results"
                  :key="result"
                  :class="{ active: articleResult == result.name }"
                  @click="articleResult = result.name"
                >
                  <img :src="result.iconPath" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="modal__container-right">
          <div
            class="
              modal__container-right-header
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <button class=""></button>

            <div class="title">
              <h3>Input article text</h3>
            </div>

            <button class="close-modal-button" data-micromodal-close>
              <svg
                aria-hidden="true"
                fill="none"
                height="10"
                viewBox="0 0 10 10"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="
              modal__container-right-content
              h-100
              d-flex
              flex-column
              align-items-center
              justify-content-center
            "
          >
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              v-model="articleText"
            ></textarea>
          </div>
          <div
            class="
              modal__container-right-footer
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <button class="btn btn-fill w-100" @click="trainModel()">
              Train the model
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import MicroModal from "micromodal";
import { createToast } from "mosha-vue-toastify";
const { $socket } = useNuxtApp();

const marketCategory = ref('Crypto');
const articleCategory = ref(null);
const articleDate = ref(null);
const articleResult = ref(null);
const articleText = ref(null);
const articleLink = ref(null);

const markets = ref([
  {
    name: "Crypto",
  },
  {
    name: "Stock",
  },
]);

const results = ref([
  {
    name: "up",
    iconPath: "/icons/arrow-up.svg",
  },
  {
    name: "down",
    iconPath: "/icons/arrow-down.svg",
  },
  {
    name: "no",
    iconPath: "/icons/arrow-swap-horizontal.svg",
  },
]);

function trainModel() {
  if (
    !marketCategory.value ||
    !articleCategory.value ||
    !articleDate.value ||
    !articleResult.value ||
    !articleText.value || 
    !articleLink.value
  ) {
    createToast(
      {
        title: "Warning",
        description: "It looks like you missed some data",
      },
      { type: "warning", showIcon: true, transition: "slide" }
    );

    return;
  }

  try {
    const data = {
      text: articleText.value.toLowerCase(),
      user: localStorage.getItem("aiUserUID"),
      marketCategory: marketCategory.value.toLowerCase(),
      articleCategory: articleCategory.value.toLowerCase(),
      articleDate: articleDate.value,
      articleResult: articleResult.value,
      articleLink: articleLink.value,
    };

    $socket.emit("add-article", data, (response) => {
      if (!response.error) {
        createToast(
          {
            title: "Success",
            description: "Model successfully trained",
          },
          { type: "success", showIcon: true, transition: "slide" }
        );

        articleResult.value = null;
        articleDate.value = "";
        articleText.value = "";
        articleLink.value = "";
      } else {
        createToast(
          {
            title: "Error",
            description:
              "There was a problem in the process. Look at the console for details",
          },
          { type: "warning", showIcon: true, transition: "slide" }
        );

        console.error(response);
      }
    });
  } catch (error) {
    createToast(
      {
        title: "Error",
        description:
          "There was a problem in the process. Look at the console for details",
      },
      { type: "warning", showIcon: true, transition: "slide" }
    );

    console.error(error);
  }
}
</script>

<style lang="scss" scoped>
#modal-train-news-model {
  .modal__container {
    background: #fff;
    min-width: 720px;
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

    &-left {
      min-width: 260px;
      max-width: 260px;
      border-right: 1px solid #0000000f;
      padding-right: 24px;

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
          }

          &-market{
            ul{
              width: 100%;
              display: flex;
              background: #0000000f;
              border-radius: 12px;
              padding: 4px;

              li{
                color: #202123;
                width: 50%;
                text-align: center;
                padding: 6px 0;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                
                &:not(.active):hover{
                  opacity: .7;
                }

                &.active{
                  background: #202123;
                  border-radius: 10px;
                  color: #fff;
                }
              }
            }
          }

          &-select {
            ul {
              display: flex;
              gap: 10px;

              li {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border: 1px solid #0000000f;
                transition: all 0.3s;
                border-radius: 8px;
                cursor: pointer;

                &.active {
                  border: 1px solid #202123;
                }

                &:hover {
                  opacity: 0.7;
                }
              }
            }
          }
        }
      }
    }

    &-right {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 24px;

      &-header {
        margin-bottom: 16px;

        h3 {
          font-weight: bold;
          color: #202123;
        }
      }

      &-content {
        padding: 16px;
        border-radius: 12px;
        border: 1px solid #0000000f;

        textarea {
          border: none;
          resize: none;
          width: 100%;
          height: 100%;
        }
      }

      &-footer {
        margin-top: 16px;
      }
    }
  }
}
</style>