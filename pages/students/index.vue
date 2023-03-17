<template>
  <div
    class="bg-gray-50 w-full h-full"
  >
    <section class="flex justify-between ml-4 pt-4 items-center">
      <!-- Department -->
      <div class="flex items-center">
        <div class="font-medium pr-10 text-sm"></div>
        <div class="flex pr-6 items-center text-sm">
          <div class="pr-1">Department:</div>
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
        <div class="pr-1">Years:</div>
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
            <div>
              <option>IT13M1</option>
              <option>IT13M2</option>
              <option>IT13M3</option>
              <option>IT13M4</option>
              <option>IT13M5</option>
              <option>IT13M6</option>
              <option>IT13M7</option>
              <option>IT13M8</option>
            </div>

            <div>
              <option>CB13M1</option>
              <option>CB13M2</option>
              <option>CB13M3</option>
              <option>CB13M4</option>
              <option>CB13M5</option>
              <option>CB13M6</option>
              <option>CB13M7</option>
              <option>CB13M8</option>
            </div>

            <div>
              <option>EL13M1</option>
              <option>EL13M2</option>
              <option>EL13M3</option>
              <option>EL13M4</option>
              <option>EL13M5</option>
              <option>EL13M6</option>
              <option>El13M7</option>
              <option>EL13M8</option>
            </div>
            <!-- <option v-for="(item, index) in classroom" :key="index">
              <div>{{ item.label }}</div>
              <div>{{ item.label1 }}</div>
              <div>{{ item.label2 }}</div>
            </option> -->
          </select>
        </div>
      </div>
    </section>
    <div class="h-4/5 relative">
      <ul
        class="cursor-pointer flex justify-end p-2 px-6 right-2 absolute bottom-1"
      >
        <NuxtLink to="/students/std">
          <li class="bg-green-500 hover:bg-green-600 px-6 m-2">OK</li>
        </NuxtLink>
        <li class="bg-red-500 hover:bg-red-600 px-6 m-2 active:translate-x-2">
          Cancel
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "user-only",
});

// const classroom = [
//   // IT
//   {
//     label: "IT13M1",
//   },
//   {
//     label: "IT13M2",
//   },
//   {
//     label: "IT13M3",
//   },
//   {
//     label: "IT13M4",
//   },
//   {
//     label: "IT13M4",
//   },
//   {
//     label: "IT13M5",
//   },
//   {
//     label: "IT13M6",
//   },
//   {
//     label: "IT13M7",
//   },
//   {
//     label: "IT13M8",
//   },
//   //DA
//   {
//     label1: "DA13M1",
//   },
//   {
//     label1: "DA13M2",
//   },
//   {
//     label1: "DA13M3",
//   },
//   {
//     label1: "DA13M4",
//   },
//   {
//     label1: "DA13M4",
//   },
//   {
//     label1: "DA13M5",
//   },
//   {
//     label1: "DA13M6",
//   },
//   {
//     label1: "DA13M7",
//   },
//   {
//     label1: "DA13M8",
//   },
//   // EL
//   {
//     label2: "EL13M1",
//   },
//   {
//     label2: "EL13M2",
//   },
//   {
//     label2: "EL13M3",
//   },
//   {
//     label2: "EL13M4",
//   },
//   {
//     label2: "EL13M5",
//   },
//   {
//     label2: "EL13M6",
//   },
//   {
//     label2: "EL13M7",
//   },
//   {
//     label2: "EL13M8",
//   },
// ];
</script>
