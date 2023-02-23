<template>
  <div>
    <section class="flex justify-between ml-4 pt-4 items-center">
      <!-- Department -->
      <div class="flex items-center">
        <div class="font-medium pr-10 text-sm"></div>
        <div class="flex pr-6 items-center text-sm">
          <div class="pr-1">Department :</div>
          <div class="bg-white shadow-md p-1 rounded-full text-sm">
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
        <div class="bg-white shadow-md p-1 rounded-full px-5">
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
        <div class="bg-white shadow-md rounded-full p-1 px-5">
          <select class="bg-white w-full">
            <option>IT13M1</option>
            <option>IT13M2</option>
            <option>IT13M3</option>
            <option>IT13M4</option>
            <option>IT13M5</option>
            <option>IT13M6</option>
            <option>IT13M7</option>
            <option>IT13M8</option>
          </select>
        </div>
      </div>
      <section></section>
    </section>
    <section class="bg-red-400 h-full w-full relative"><div class="absolute bottom-2 right-2">OK</div></section>
  </div>
</template>

<script setup></script>

<style scoped></style>
