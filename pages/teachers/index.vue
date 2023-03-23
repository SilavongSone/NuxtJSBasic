<template>
  <div>
    <section class="h-full w-full overflow-auto">
      <ol class="p-1" v-for="item in teachers" :key="item.id">
        <NuxtLink :to="`/teachers/${item.id}`"
          ><li
            class="items-center grid grid-cols-4 h-16 bg-white shadow-md p-2 hover:bg-violet-500 rounded-sm"
          >
            <p>Name: {{ item.tc_fname }} {{ item.tc_lname }}</p>
            <p>ID: {{ item.id }}</p>
            <p>Date of Birth: {{ item.tc_date_of_birth }}</p>
            <p>Email: {{ item.tc_email }}</p>
          </li></NuxtLink
        >
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import { GET_TEACHERS} from "~~/gql/query/teacherQuery";
import { Teacher } from "~~/types/teaccher";

definePageMeta({
  middleware: "user-only",
});

const teachers = ref<Teacher[]>([]);
const search = ref("");

const getTeacher = async () => {
  const { data, error } = await useAsyncQuery<any>(GET_TEACHERS, {
    where: {
      tc_fname: {
        _ilike: `%${search.value}%`,
      },
    },
  });
  if (error.value) {
    console.error(error.value);
  }
  console.log(data.value.teachers);
  const { teachers: tc } = data.value;
  teachers.value = tc;
};

watchEffect(() => {
  getTeacher();
});
</script>
