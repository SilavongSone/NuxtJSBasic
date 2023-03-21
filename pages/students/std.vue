<template>
  <div class="bg-violet-50 w-full h-full">
    <div class="flex-col w-full relative">
      <section class="sticky top-0 bg-white m-1">
        <input
          type="text"
          placeholder="Search"
          v-model="search"
          class="border rounded-full w-96 px-2 m-4"
        />
        <Icon
          class="bg-violet-500 w-7 h-7 rounded-full p-1"
          name="fluent:search-48-regular"
          size="28"
        ></Icon>
      </section>

      <section class="h-full w-full overflow-auto">
        <ol class="p-1" v-for="item in students" :key="item.id">
          <NuxtLink :to="`/students/${item.id}`"
            ><li
              class="grid grid-cols-4 h-16 bg-white shadow-md p-2 hover:bg-violet-500 rounded-sm"
            >
              <p>Name: {{ item.std_fname }} {{ item.std_lname }}</p>
              <p>ID: {{ item.std_id }}</p>
              <p>Birth Day: {{ item.std_date_of_birth }}</p>
              <p>Address: {{ item.std_address }}</p>
            </li></NuxtLink
          >
        </ol>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_STUDENT } from "~~/gql/query/studentQuery";
import { Student } from "~~/types/student";

definePageMeta({
  middleware: "user-only",
});

const students = ref<Student[]>([]);
const search = ref("");

const getStudent = async () => {
  const { data, error } = await useAsyncQuery(GET_STUDENT, {});
  if (error.value) {
    console.error(error.value);
  }
  console.log(data.value);
};

watchEffect(() => {
  getStudent();
});
</script>
