<template>
  <div class="h-full p-1 bg-gray-100">
    <!-- search -->
    <div class="m-2 bg-red-400">search</div>

    <!-- body -->
    <div class=" p-1 bg-black">
      <div
        class="grid grid-cols-4 items-center rounded-l-md bg-white drop-shadow-md m-4 mt-4 h-16 hover:bg-violet-300 cursor-pointer p-2"
        v-for="(item, index) in stdData"
        :key="index"
      >
        <div class="flex items-center space-x-4">
          <img class="h-12 w-12 rounded-full" :src="item.icon" alt=""/>
          <p>{{ item.name }}</p>
        </div>

        <p>ID:{{ item.id }}</p>
        <p>Classrom:{{ item.class }}</p>
        <p>Year:{{ item.year }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import dosone from "../../assets/img//Anousone.jpg";
import pinmook from "../../assets/img/Untitled-1.png";
import nutnole from "../../assets/img/nut.png";
import wenkuku from "../../assets/img/Screenshot 2023-01-25 135650.png";
const stdData = [
  {
    name: "Anusone Silavong",
    id: "12345678",
    class: "IT13M3",
    year: "3",
    icon: dosone,
  },
  {
    name: "Pin Mook",
    id: "12345679",
    class: "IT13M3",
    year: "3",
    icon: pinmook,
  },
  {
    name: "Nut Noel",
    id: "123456710",
    class: "IT13M3",
    year: "3",
    icon: nutnole,
  },
  {
    name: "Wen Kuku",
    id: "123456711",
    class: "IT13M3",
    year: "3",
    icon: wenkuku,
  },
  {
    name: "Pin Mook",
    id: "123456711",
    class: "IT13M3",
    year: "3",
    icon: pinmook,
  },
  {
    name: "Nut Noel",
    id: "123456712",
    class: "IT13M3",
    year: "3",
    icon: nutnole,
  },
  {
    name: "Anusone Silavong",
    id: "123456713",
    class: "IT13M3",
    year: "3",
    icon: dosone,
  },
  {
    name: "Nut Noel",
    id: "123456714",
    class: "IT13M3",
    year: "3",
    icon: nutnole,
  },
  {
    name: "Pin Mook",
    id: "123456715",
    class: "IT13M3",
    year: "3",
    icon: pinmook,
  },
];
</script>
