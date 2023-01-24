<template>
  <div class="page page-login h-full">
    <div class="w-[300px]">
      <div class="relative flex mb-2">
        <input class="w-full p-3 text-dark" type="text" placeholder="Enter your uid" v-model="uid" />
        <button class="absolute m-auto top-1/2 right-3 -translate-y-1/2" @click="generateUID()">
          <img src="/icons/refresh-2.svg" alt="" />
        </button>
      </div>

      <button class="btn btn-fill w-full" @click="login()">Log in</button>
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

input {
  border: 1px solid #0000000f;
  border-radius: 12px;
}
</style>