<template>
  <div class="h-screen w-full flex">
    <!-- Navbar -->
    <section class="h-full w-44">
      <div class="h-full">
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
      <div class="h-full overflow-auto">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
