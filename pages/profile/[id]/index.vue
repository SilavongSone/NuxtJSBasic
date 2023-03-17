<template>
  <div>
    <p>{{ id }}</p>
    <p></p>
    <p>Page visits: {{ users }}</p>
    <div class="flex flex-col">
      <div v-for="(item, index) in users" :key="index">
        <div v-for="(childItem, childIndex) in item" :key="childIndex">
          <ul>
            <li>
              <span class="bg-red-500">{{ childItem.id }}</span>
              <span>{{ childItem.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const users = ref<any[]>([]);

const query = gql`
  query {
    Student {
      id
      fname
      lname
    }
  }
`;
const { data } = await useAsyncQuery(query);
console.log(data.value);

const getData = () => {};

onMounted(() => {
  getData();
});

</script>

<style scoped></style>
