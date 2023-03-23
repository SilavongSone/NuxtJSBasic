<template>
  <div>
    <div>ID: {{ id }}</div>
    <div>PAGE:{{}}</div>
    <div>Learn:{{}}</div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
</script>

<style scoped></style>
