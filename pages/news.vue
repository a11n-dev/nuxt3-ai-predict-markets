<template>
  <div class="page page-news-model">
    <div class="actions">
      <button @click="MicroModal.show('modal-train-news-model')">
        <img src="/icons/teacher.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import MicroModal from "micromodal";
</script>

<style lang="scss" scoped>
.actions {
  position: absolute;
  right: 24px;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 45px;
    height: 45px;
    border-radius: 12px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>