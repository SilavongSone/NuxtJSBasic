<template>
  <div class="flex flex-col justify-center mt-4 text-lg p-2">
    <div class="grid grid-cols-2">
      <ol class="grid grid-cols-2 border-r-2">
        <li>First Name:</li>
        <li>{{ teacher?.tc_fname }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>First Name:</li>
        <li>{{ teacher?.tc_lname }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>Courses:</li>
        <li>{{ teacher?.tc_courses }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>First Name:</li>
        <li>{{ teacher?.tc_date_of_birth }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>Firsts Name:</li>
        <li>{{ teacher?.tc_phone }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>First Name:</li>
        <li>{{ teacher?.tc_gender }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>First Name:</li>
        <li>{{ teacher?.tc_email }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_TEACHERS_PK } from "~~/gql/query/teacherQuery";
import { Teacher } from "~~/types/teaccher";
const { id } = useRoute().params;

const teacher = ref<Teacher>();

const getData = async () => {
  const { data, error } = await useAsyncQuery<any>(GET_TEACHERS_PK, {
    id,
  });
  if (error.value) {
    console.error(error.value);
    return;
  }
  console.log(data.value);
  teacher.value = data.value.teacher;
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
