<template>
  <div class="menu fixed left-0 top-0 h-full p-4 flex flex-col justify-between bg-dark w-[260px]">
    <div class="navigation">
      <small class="block mb-3 text-center">id: {{ uid }}</small>

      <nav class="flex flex-col gap-6">
        <li
          v-for="link in links.filter((el) => !el.disabled)"
          class="w-100"
          :class="{ active: $route.path == link.path }"
          :key="link"
        >
          <NuxtLink class="flex align-center gap-10 p-3" :to="link.path">
            <img :src="link.iconPath" />
            <span>{{ link.name }}</span>
          </NuxtLink>
        </li>
      </nav>
    </div>

    <div class="actions">
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

const links = ref([
  {
    name: "News model",
    path: "/news",
    iconPath: "/icons/document-text.svg",
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
