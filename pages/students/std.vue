<template>
  <div class="flex h-4/5">
    <div class="flex-col w-full">
      <!-- Headbar -->
      <section class="bg-blue-500">
        <input type="text" v-model="search" class="border border-red-400 m-4" />
      </section>
      <!-- Router view -->

      <section class="h-full w-full overflow-auto">
        <ul class="p-1 bg-red-500" v-for="item in students" :key="item.id">
          <NuxtLink :to="`/students/${item.id}`"
            ><li class="bg-pink-500 grid grid-flow-col">
              <p>{{ item.std_fname }} {{ item.std_lname }}</p>
              <p>{{ item.std_id }}</p>
              <!-- classroom -->
              <p>{{ "-" }}</p>
              <p>{{ "-" }}</p>
            </li></NuxtLink
          >
        </ul>
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


const { client } = useApolloClient();

const students = ref<Student[]>([]);
const search = ref("");

const getStudent = async () => {
  try {
    const { data } = await client.query({
      query: GET_STUDENT,
      variables: {
        where: {
          _or: [
            {
              std_fname: {
                _ilike: `%${search.value}%`,
              },
            },
            {
              std_gender: {
                _ilike: `%${search.value}%`,
              },
            },
          ],
        },
      },
      fetchPolicy: "no-cache",
    });
    students.value = data.student;
  } catch (error) {
    console.log(error);
  }
};

watchEffect(() => {
  getStudent();
});
</script>
