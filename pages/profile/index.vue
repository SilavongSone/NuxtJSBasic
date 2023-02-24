<template>
  <div class="box-border w-full h-full">
    <div class="grid grid-cols-5 h-full">
      <div class="p-2">
        <section class="bg-white rounded-lg p-2 shadow-md">
          <ul
            class="text-gray-600 p-2 cursor-pointer hover:bg-violet-500 rounded-xl hover:text-white focus:bg-black active:bg-black active:will-change-transform"
            v-for="(item, index) in settingMenu"
            :key="index"
          >
            <button>
              <icon class="mr-2" :name="item.icon" size="26"></icon
              >{{ item.label }}
            </button>
          </ul>
        </section>
      </div>

      <div class="col-span-4 p-2 h-full relative bg-white shadow-md m-2">
        <section class="h-full relative p-2">
          <div class="bg-white">
            <div>PRo</div>
            <div>ID</div>
          </div>

          <from class="my-2 grid grid-cols-2">
            <div>
              Frist name
              <p><input type="text" /></p>
            </div>
            <div>
              Last name
              <p><input type="text" /></p>
            </div>
            <div>
              Email
              <p><input type="text" /></p>
            </div>
          </from>

          <div
            class="absolute bottom-10 right-10 flex space-x-10 text-lg font-medium text-white p-2"
          >
            <p
              class="bg-violet-500 p-2 rounded-md hover:underline cursor-pointer active:translate-y-1"
            >
              Changes
            </p>
            <p
              class="bg-violet-500 p-2 rounded-md hover:underline cursor-pointer active:translate-y-1"
            >
              Cancel
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const settingMenu = [
  {
    label: "Personal data",
    icon: "fluent:people-edit-20-filled",
  },
  {
    label: "Privacy",
    icon: "fluent:shield-lock-16-filled",
  },
  {
    label: "Language",
    icon: "fluent:earth-16-filled",
  },
  {
    label: "Notification",
    icon: "fluent:alert-16-filled",
  },
  {
    label: "Payment",
    icon: "fluent:payment-16-filled",
  },
];
</script>
