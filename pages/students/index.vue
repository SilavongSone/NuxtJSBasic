<template>
  <div class="h-full box-border bg-gradient-to-r from-fuchsia-100 to-fuchsia-400">

    <section class="flex justify-between ml-4 pt-4 items-center">
      <!-- Department -->
      <div class="flex items-center">
        <div class="font-medium pr-10 text-sm"></div>
        <div class="flex pr-6 items-center text-sm">
          <div class="pr-1">Department :</div>
          <div class="bg-white shadow-md p-1 rounded-md text-sm">
            <select>
              <option>Information Technology</option>
              <option>Department of Accounting</option>
              <option>Electonic</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Years -->
      <div class="flex pr-2 items-center text-sm">
        <div class="pr-1">Years :</div>
        <div class="bg-white shadow-md p-1 rounded-md px-5">
          <select class="bg-white w-full">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>

      <!-- Classroom -->
      <div class="flex pr-10 items-center text-sm">
        <div class="pr-1">Classroom :</div>
        <div class="bg-white shadow-md rounded-md p-1 px-5">
          <select class="bg-white w-full">
            <option v-for="(item, index) in classroom" :key="index">
              {{ item.label }}
            </option>
          </select>
        </div>
      </div>

    </section>
    <div class=" h-4/5  relative
    ">
      <ul class="cursor-pointer  flex justify-end p-2 px-6 right-2 absolute bottom-1">
        <NuxtLink to="/students/data"
          ><li class="bg-green-500 hover:bg-green-600 px-6 m-2">OK</li></NuxtLink
        >
        <li class="bg-red-500 hover:bg-red-600 px-6 m-2 active:translate-x-2">Cancel</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const classroom = [
  {
    label: "IT13M1",
  },
  {
    label: "IT13M2",
  },
  {
    label: "IT13M3",
  },
  {
    label: "IT13M4",
  },
  {
    label: "IT13M4",
  },
  {
    label: "IT13M5",
  },
  {
    label: "IT13M6",
  },
  {
    label: "IT13M7",
  },
  {
    label: "IT13M8",
  },
];
</script>
