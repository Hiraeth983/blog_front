<script setup lang="ts">
import { ref } from "vue";
import { GlobalStore } from "@/store";

const global = GlobalStore();
global.token = "TokenTest";

defineProps<{ msg: string }>();
const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{ global.token }}</div>

  <div class="card">
    <ElButton @click="count++">count is {{ count }}</ElButton>
  </div>
</template>

<style lang="less" scoped>
div {
  color: @primary-color;
}
</style>
