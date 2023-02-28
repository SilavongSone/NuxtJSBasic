<template>
  <div class="h-full w-full">
  <!-- search -->
    <section class="drop-shadow-md bg-gray-200 w-52 rounded-full mt-3 mx-5  ">
      <label
        for="default-search"
        class="text-sm font-medium sr-only dark:text-white"
        >Search/ID</label
      >
      <div class="relative">
        <input
          type="search"
          id="default-search"
          class="p-2 text-xs rounded-full bg- bg-gray-200 text-black m-1"
          placeholder="Search/ID"
        />
        <button
          type="submit"
          class="absolute p-1 m-1.5 left-40 bg-fuchsia-400 rounded-full hover:bg-fuchsia-500"
        >
          <svg
            class="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </section>
    
    <div class="bg-fuchsia-500 w-full h-full m-4 ">
    
    </div>
  </div>
</template>

<script setup></script>