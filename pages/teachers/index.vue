<template>
  <div>
    <section class="h-full w-full overflow-auto">
      <ol class="p-1" v-for="item in teacher" :key="item.name">
        <NuxtLink :to="`/teachers/${item.name}`"
          ><li
            class="grid grid-cols-4 h-16 bg-white shadow-md p-2 hover:bg-violet-500 rounded-sm"
          >
            <p>Name: {{ item.name}}</p>
            <p>Name: {{ item.numm}}</p>
          </li></NuxtLink
        >
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">

const teacher = [
  {
  name: "Teacher",
  numm:"Lolicon",
},
  {
  name: "hkjkbjk",
  numm:"Lolicon",
},
  {
  name: "chertes",
  numm:"Lolicon",
},
]

</script>
