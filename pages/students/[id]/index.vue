<template>
  <div class="flex h-4/5">


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



watchEffect(() => {
  
});
</script>
