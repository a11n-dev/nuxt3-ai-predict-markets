<template>
  <div class="menu fixed left-0 top-0 h-full p-4 flex flex-col justify-between bg-dark w-[260px]">
    <div class="navigation">
      <nav class="flex flex-col gap-2">
        <li
          v-for="link in links.filter((el) => !el.disabled)"
          class="w-100"
          :class="{ active: $route.path == link.path }"
          :key="link"
        >
          <NuxtLink
            class="flex align-center gap-10 p-3"
            :to="link.path"
          >
            <img :src="link.iconPath" />
            <span class="-mb-[3px]">
              {{ link.name }}
            </span>
          </NuxtLink>
        </li>
      </nav>
    </div>

    <div class="actions flex flex-col">
      <div class="info text-left w-full mb-4">
        <small class="block text-sm mb-2"> id: {{ uid }} </small>
        <div class="model-status flex items-center justify-start mb-2 text-sm">
          <span class="block w-2 h-2 rounded-full mr-2 red"></span>

          news model
        </div>
        <div class="model-status flex items-center justify-start text-sm">
          <span
            class="block w-2 h-2 rounded-full mr-2"
            :class="{ green: !modelTraining, red: modelTraining }"
          ></span>

          validation model
        </div>
      </div>

      <button
        class="w-100"
        @click="logout()"
      >
        <img
          src="/icons/login.svg"
          alt=""
        />
        <span>Log out</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const uid = ref(localStorage?.getItem("aiUserUID"));
const { $socket } = useNuxtApp();

const modelTraining = ref(true);

onMounted(() => {
  $socket.on("model-training-status", (data) => {
    modelTraining.value = data;
  });
});

const links = ref([
  {
    name: "News model",
    path: "/news",
    iconPath: "/icons/document-text.svg",
    disabled: false,
  },
  {
    name: "Validation",
    path: "/validation",
    iconPath: "/icons/tick-square.svg",
    disabled: false,
  },
  {
    name: "Validation AI",
    path: "/validation-ai",
    iconPath: "/icons/tick-square.svg",
    disabled: true,
  },
  {
    name: "Statistics",
    path: "/statistics",
    iconPath: "/icons/activity.svg",
    disabled: false,
  },
  {
    name: "Parsers",
    path: "/parsers",
    iconPath: "/icons/document-code.svg",
    disabled: false,
  },
  {
    name: "Charts Model",
    path: "/charts",
    iconPath: "/icons/chart.svg",
    disabled: true,
  },
]);

function logout() {
  localStorage.removeItem("aiUserUID");
  location.href = "/";
}
</script>

<style lang="scss">
.menu {
  .navigation {
    nav {
      li {
        &.active {
          a {
            background-color: #343541;
          }
        }

        &:not(.active):hover {
          a {
            background-color: rgba(141, 141, 160, 0.1);
          }
        }

        a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: 12px;

          span {
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }
  }

  .model-status {
    span {
      &.green {
        background: #3bada9;
      }

      &.red {
        background: #f95049;
      }
    }
  }

  .actions {
    padding-top: 6px;

    button {
      display: flex;
      align-items: center;
      gap: 10px;
      text-align: left;
      padding: 10px;
      border-radius: 12px;

      &:hover {
        opacity: 1;
        background-color: rgba(141, 141, 160, 0.1);
      }

      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
