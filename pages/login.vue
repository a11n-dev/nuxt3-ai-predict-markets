<template>
  <div class="page page-login h-100">
    <div class="wrapper">
      <div class="content d-flex mb-2">
        <input type="text" placeholder="Enter your uid" v-model="uid" />
        <button class="generate-uid" @click="generateUID()">
          <img src="/icons/refresh-2.svg" alt="" />
        </button>
      </div>

      <button class="btn btn-fill w-100" @click="login()">Log in</button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const uid = ref(null);

if (uid.value) router.push({ path: "/" });

onBeforeMount(() => {
  if (localStorage.getItem("aiUserUID")) {
    router.push({ path: "/" });
  }
});

function login() {
  if (uid.value) {
    localStorage.setItem("aiUserUID", uid.value);
    location.href = "/";
  }
}

function generateUID() {
  uid.value = crypto.randomUUID().slice(0, 13);
}
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  width: 300px;

  .content {
    position: relative;

    button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

input {
  border: 1px solid #0000000f;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
}
</style>