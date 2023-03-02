<template>
  <div class="h-screen w-full flex">
    <!-- Navbar -->
    <section class="h-full w-44">
      <div>
        <navBar> </navBar>
      </div>
    </section>

    <section class="flex flex-col h-full w-full">
      <!-- Headbar -->
      <nav>
        <div>
          <headBar></headBar>
        </div>
      </nav>
      <!-- Router view -->
      <div class=" h-full overflow-auto">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
