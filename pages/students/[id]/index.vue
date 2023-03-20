<template>
  <div class="flex flex-col justify-center mt-4 text-lg p-2">
    <div class="grid grid-cols-2">
      <ol class="grid grid-cols-2 border-r-2">
        <li>First Name:</li>
        <li>{{ student?.std_fname }}</li>
      </ol>
      <ol class="grid grid-cols-2 ml-4">
        <li>Last Name:</li>
        <li>{{ student?.std_lname }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>Classroom:</li>
        <li>{{ student?.std_classroom }}</li>
      </ol>

      <ol class="grid grid-cols-2 ml-4">
        <li>Date of birth:</li>
        <li>{{ student?.std_date_of_birth }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>Phone:</li>
        <li>{{ student?.std_phone }}</li>
      </ol>
      <ol class="grid grid-cols-2 ml-4">
        <li>Gender:</li>
        <li>{{ student?.std_gender }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>Address of Birth:</li>
        <li>{{ student?.std_address_birth }}</li>
      </ol>
      <ol class="grid grid-cols-2 ml-4">
        <li>Address:</li>
        <li>{{ student?.std_address }}</li>
      </ol>
      <ol class="grid grid-cols-2 border-r-2">
        <li>Parent Name:</li>
        <li>{{ student?.std_parent }}</li>
      </ol>
      <ol class="grid grid-cols-2 ml-4">
        <li>Parent Phone:</li>
        <li>{{ student?.std_parent_phone }}</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GET_STUDENT_PK } from "~~/gql/query/studentQuery";
import { Student } from "~~/types/student";
const { client } = useApolloClient();
const { id } = useRoute().params;

const student = ref<Student>();

const getData = async () => {
  const { data } = await client.query({
    query: GET_STUDENT_PK,
    variables: {
      id,
    },
  });
  console.log(data);
  student.value = data.student;
};

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
