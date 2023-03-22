<template>
  <div class="bg-violet-50 w-full h-full">
    <section class="grid grid-flow-col ml-10">
      <div class="flex items-center p-2">
        <p>Department :</p>
        <select>
          <option>Information Technology</option>
          <option>Electonic</option>
          <option>IT Subports</option>
        </select>
      </div>
      <div class="flex items-center">
        <p>Years :</p>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="flex items-center">
        <p>Classroom :</p>
        <select>
          <div>
            <option>IT13M1</option>
            <option>IT13M2</option>
            <option>IT13M3</option>
          </div>
          <div>
            <option>IT12M1</option>
            <option>IT12M2</option>
            <option>IT12M3</option>
          </div>

          <div>
            <option>CB13M1</option>
            <option>CB13M2</option>
            <option>CB13M3</option>
          </div>
          <div>
            <option>CB12M1</option>
            <option>CB12M2</option>
            <option>CB12M3</option>
          </div>

          <div>
            <option>EL13M1</option>
            <option>EL13M2</option>
            <option>EL13M3</option>
          </div>
          <div>
            <option>EL12M1</option>
            <option>EL12M2</option>
            <option>EL12M3</option>
          </div>
        </select>
      </div>
    </section>

    <section class="absolute bottom-10 right-10 p-2">
      <NuxtLink to="/students/std"
        ><span
          class="p-2 mx-10 shadow-md rounded-sm hover:underline cursor-pointer"
          >OK</span
        ></NuxtLink
      >
      <span class="p-2 shadow-md rounded-sm hover:underline cursor-pointer"
        >Cancel</span
      >
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "user-only",
});
</script>
