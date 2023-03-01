<template>
  <div class=" ">
    <div class="box-border p-2">
      <div class="grid grid-cols-5 h-full">
        <div class="p-2 flex justify-center">
          <section class="bg-white rounded-lg p-2 shadow-md fixed">
            <ul
              class="text-gray-600 p-2 cursor-pointer hover:bg-violet-500 rounded-xl hover:text-white focus:bg-black active:bg-black active:will-change-transform"
              v-for="(item, index) in settingMenu"
              :key="index"
            >
              <NuxtLink :to="item.path"
                ><button>
                  <icon class="mr-2" :name="item.icon" size="26"></icon
                  >{{ item.label }}
                </button></NuxtLink
              >
            </ul>
          </section>
        </div>

        <div class="col-span-4 p-2 h-full relative bg-white shadow-md m-2">
          <div><NuxtPage></NuxtPage></div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const settingMenu = ref([
  {
    label: "Personal data",
    icon: "fluent:people-edit-20-filled",
    path: "/profile/personal",
  },
  {
    label: "Privacy",
    icon: "fluent:shield-lock-16-filled",
    path: "/",
  },
  {
    label: "Language",
    icon: "fluent:earth-16-filled",
    path: "/",
  },
  {
    label: "Notification",
    icon: "fluent:alert-16-filled",
    path: "/",
  },
  {
    label: "Payment",
    icon: "fluent:payment-16-filled",
    path: "/",
  },
]);

const imgSrc = ref();

const inputImage = (event) => {
  const file = event.target.files[0];
  imgSrc.value = URL.createObjectURL(file);
};

const person = ref({
  firstName: "",
  lastName: "",
  mail: "",
  phone: "",
  address: "",
  gender: "",
});

function fullName() {
  return person.value.firstName + " " + person.value.lastName;
}
</script>

<style lang="scss" scoped></style>
