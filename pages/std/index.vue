<template>
  <div class="h-full p-1 bg-gray-100">
    <!-- search -->
    <div class="m-2">search</div>

    <!-- body -->
    <div class="h-full p-1">
      <div
        class="flex rounded-l-md bg-white drop-shadow-md m-4 mt-4 h-16 hover:bg-violet-300 cursor-pointer p-2 items-center justify-between"
        v-for="(item, index) in stdData"
        :key="index"
      >
        <div class="flex items-center space-x-4">
          <img
            class="h-12 w-12 rounded-full"
            :src=item.icon
            alt=""
          />
          <p>{{ item.name }}</p>
        </div>
        <p>{{ item.id }}</p>
        <p>{{ item.class }}</p>
        <p>{{ item.year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import dosone from "../../assets/img//Anousone.jpg";
import wensone from "../../assets/img/Untitled-1.png";
const stdData = [
  {
    name: "Anusone",
    id: "12345678",
    class: "",
    year: "d",
    icon: dosone,
  },
  {
    name: "Anusone",
    id: "12345679",
    class: "d",
    year: "d",
    icon: wensone,
  },
];
</script>
