<template>
  <div class="box-border p-2 w-full h-full">
    <div class="p-2 w-full">
      <ul
        class="bg-white rounded-lg p-2 shadow-md w-full h-full overflow-hidden items-center"
      >
        <li
          class="text-gray-600 px-2 py-3 cursor-pointer hover:bg-violet-500 rounded-xl hover:text-white focus:bg-black active:bg-black active:will-change-transform"
          v-for="(item, index) in settingMenu"
          :key="index"
        >
          <NuxtLink :to="item.path"
            ><button class="w-full flex flex-wrap">
              <icon class="mr-2" :name="item.icon" size="26"></icon
              >{{ item.label }}
            </button></NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const settingMenu = ref([
  {
    label: "Personal data",
    icon: "fluent:people-edit-20-filled",
    path: "/profile",
  },

  {
    label: "Language",
    icon: "fluent:earth-16-filled",
    path: "/profile/language",
  },
  {
    label: "Notification",
    icon: "fluent:alert-16-filled",
    path: "/profile/personal",
  },
  {
    label: "Payment",
    icon: "fluent:payment-16-filled",
    path: "/profile/personal",
  },
]);
</script>

<style lang="scss" scoped></style>
