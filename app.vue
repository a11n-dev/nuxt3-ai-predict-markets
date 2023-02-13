<template>
  <div class="layout h-screen">
    <template v-if="isLoggedIn">
      <Menu />

      <div class="app-content relative h-full overflow-hidden ml-[260px] bg-[#343540]">
        <NuxtPage />
      </div>
    </template>

    <NuxtPage v-else />
  </div>

  <ModalTrainNewsModel />
  <ModalCreateParser />
</template>

<script setup>
const router = useRouter();
const isLoggedIn = ref(null);

onMounted(() => {
  isLoggedIn.value = localStorage?.getItem("aiUserUID");

  if (!isLoggedIn.value) {
    router.push({ path: "/login" });
  }
});
</script>

<style lang="scss">
@import "mosha-vue-toastify/dist/style.css";

* {
  outline: none;
  box-sizing: border-box;
}

html {
  font-family: "Gilroy";
  font-size: 16px;
}

body {
  position: relative;
  padding: 0;
  background-color: #565869;
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: 500;
}

a {
  text-decoration: none;
  transition: all 0.4s;
}

ul,
nav {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

p {
  font-style: normal;
  font-weight: 400;
  line-height: 2;
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

.layout {
  overflow: hidden;
}

.grid {
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: row;
}

#__nuxt {
  height: 100% !important;
  overflow-x: hidden;
}

.set-length {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

.btn {
  display: inline-block;
  padding: 12px 20px;
  color: #202123;
  font-size: 14px;
  font-weight: 600;
  background: #ffffff;
  border: none;
  border-radius: 12px;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &-fill {
    background: #202123;
    color: #fff;
  }

  &-outline {
    border: 1px solid #fff;

    &-red {
      border: 1px solid #f95049;
      color: #f95049;
    }
  }

  &-inline {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    color: #2d58f3;
    text-decoration: underline;
  }

  &-edit {
    padding: 8px 16px;
    background: #e8ebf6;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    color: #939aa4;
  }

  &:disabled {
    background: #e2e1e2;
    color: #fff;
    cursor: not-allowed;
  }
}

// Micromodal

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.modal__container {
  position: relative;
  background: transparent;
  box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  transition: all 0.3s;

  @media only screen and (max-width: 575.98px) {
    max-width: 95%;
    max-height: 95%;
  }
}

.close-modal-button {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 0.2s;
  background: #fff;
  border-radius: 50%;
  border: 1px solid rgba($color: #cdcdcd, $alpha: 0.4);

  &:hover {
    scale: 1.1;
  }
}

// Animation

@keyframes mmfadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes mmfadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes mmslideIn {
  from {
    transform: translateY(15%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes mmslideOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10%);
  }
}

.micromodal-slide {
  display: none;
}

.micromodal-slide.is-open {
  display: block;
}

.micromodal-slide[aria-hidden="false"] .modal__overlay {
  animation: mmfadeIn 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.micromodal-slide[aria-hidden="false"] .modal__container {
  animation: mmslideIn 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.micromodal-slide[aria-hidden="true"] .modal__overlay {
  animation: mmfadeOut 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.micromodal-slide[aria-hidden="true"] .modal__container {
  animation: mmslideOut 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.micromodal-slide .modal__container,
.micromodal-slide .modal__overlay {
  will-change: transform;
}

// Notifications

.mosha__toast {
  z-index: 9999999999 !important;
}
</style>
