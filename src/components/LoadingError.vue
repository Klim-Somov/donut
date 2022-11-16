<template>
  <div>
    <h2>произошла ошибка: {{ props.loadingError }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  loadingError: String,
});
</script>
<style scoped lang="scss">
div {
  width: 350px;
  color: rgb(223, 78, 78);
  margin: 20% auto;
  background-color: rgba(246, 246, 246, 0.184);
  border-radius: 10px;
  padding: 20px;
}
</style>
