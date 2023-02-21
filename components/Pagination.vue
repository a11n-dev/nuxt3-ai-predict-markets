<template>
  <div class="pagination">
    <div class="flex justify-between items-center">
      <div class="flex items-center justify-center pagination-text">
        <span>
          <b>
            {{ 1 + (props.page - 1) * props.perPage }} to

            <template v-if="props.page == props.pageCount">{{ props.postCount }}</template>
            <template v-else>{{ props.page * props.perPage }}</template>
          </b>

          of {{ props.postCount }} articles
        </span>
      </div>
      <div class="flex items-center justify-center">
        <ul class="flex items-center pagination">
          <li
            class="prev"
            :class="{ disabled: props.page == 1 }"
            @click="changePage(Number(props.page) - 1)"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 292 492"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M267.01 484.132L283.238 468.016C288.306 462.944 291.098 456.196 291.098 448.984C291.098 441.776 288.306 435.02 283.238 429.948L99.39 246.108L283.442 62.056C288.51 56.992 291.298 50.236 291.298 43.028C291.298 35.82 288.51 29.06 283.442 23.992L267.314 7.87197C256.826 -2.62403 239.742 -2.62403 229.254 7.87197L9.32999 227.008C4.26599 232.072 0.69797 238.82 0.69797 246.092L0.69797 246.176C0.697971 253.388 4.26999 260.136 9.32999 265.2L228.658 484.132C233.722 489.204 240.674 491.988 247.882 491.996C255.094 491.996 261.95 489.204 267.01 484.132Z"
                fill="black"
              />
            </svg>
          </li>
          <!--  -->
          <li class="content">
            <span>Page</span>

            <form @submit.prevent="changePage(inputPageNumber)">
              <input
                type="number"
                min="1"
                :max="props.pageCount"
                :value="props.page"
                @change="inputPageNumber = $event.currentTarget.value"
              />
            </form>

            <span>of {{ props.pageCount }}</span>
          </li>
          <!--  -->
          <li
            class="next"
            :class="{ disabled: props.page == props.pageCount }"
            @click="changePage(Number(props.page) + 1)"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 292 492"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.986 7.86398L8.75798 23.98C3.68998 29.052 0.897983 35.8 0.897983 43.012C0.897983 50.22 3.68998 56.976 8.75798 62.048L192.606 245.888L8.554 429.94C3.486 435.004 0.697996 441.76 0.697996 448.968C0.697996 456.176 3.486 462.936 8.554 468.004L24.682 484.124C35.17 494.62 52.254 494.62 62.742 484.124L282.666 264.988C287.73 259.924 291.298 253.176 291.298 245.904L291.298 245.82C291.298 238.608 287.726 231.86 282.666 226.796L63.338 7.86398C58.274 2.79199 51.322 0.00796288 44.114 -3.24154e-05C36.902 -3.21001e-05 30.046 2.79199 24.986 7.86398Z"
                fill="black"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["changePage"]);
const inputPageNumber = ref(props.page);

const props = defineProps({
  pageCount: Number,
  postCount: Number,
  page: Number,
  perPage: Number,
});

function changePage(pageNumber) {
  emit("changePage", pageNumber);
}
</script>

<style lang="scss">
.pagination {
  &-text {
    span {
      font-size: 22px;
      color: #fff;

      b {
        color: #00c19f;
      }
    }
  }

  ul {
    display: flex;

    li {
      &.content {
        display: flex;
        align-items: center;

        span {
          margin: 0 10px;
          cursor: default;
        }

        input[type="number"] {
          -moz-appearance: textfield;
          color: #212121;
          text-align: center;
          border-radius: 6px;
          border: 1px solid #d8d6de;
          padding: 4px 8px;
          transition: all 0.3s;

          &:focus {
            border-color: #00c19f;
          }

          &::-webkit-inner-spin-button,
          &::-webkit-outer-spin-button {
            -webkit-appearance: none;
          }
        }
      }

      &:not(.disabled) {
        cursor: pointer;
      }

      &.active {
        background-color: #f3f2f7;
        border-radius: 0;
      }

      &.prev {
        margin-right: 4px;
      }

      &.next {
        margin-left: 4px;
      }

      &.next,
      &.prev {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f3f2f7;
        border-radius: 6px;
        transition: all 0.3s;

        svg {
          path {
            transition: fill 0.3s;
          }
        }

        &.disabled {
          pointer-events: none;

          svg {
            path {
              fill: #b9b9c3;
            }
          }
        }

        &:not(.disabled) {
          &:hover {
            background-color: #00c19f;

            svg {
              path {
                fill: #fff;
              }
            }
          }
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f3f2f7;
        font-size: 14px;
        width: 32px;
        height: 32px;
        border: none;
        cursor: pointer;

        &:hover {
          color: #00c19f;
        }
      }
    }
  }
}
</style>
