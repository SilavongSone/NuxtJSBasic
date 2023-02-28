<template>
  <div class="box-border w-full h-full p-2">
    <div class="grid grid-cols-5 h-full">
      <div class="p-2 flex justify-center">
        <ul class="bg-white rounded-lg p-2 shadow-md fixed">
          <li
            class="text-gray-600 p-2 cursor-pointer hover:bg-violet-500 rounded-xl hover:text-white focus:bg-black active:bg-black active:will-change-transform"
            v-for="(item, index) in settingMenu"
            :key="index"
          >
            <button>
              <icon class="mr-2" :name="item.icon" size="26"></icon
              >{{ item.label }}
            </button>
          </li>
        </ul>
      </div>

      <div class="col-span-4 p-2 h-full relative bg-white shadow-md m-2">
        <ul class="h-full relative p-2">
          <form class="items-center space-x-6">
            <div class="shrink-0 flex pl-10 items-center space-x-4 m-1 p-1">
              <img
                class="h-44 w-44 object-cover rounded-full text-xs bg-gray-200"
                :src="imgSrc"
                alt="Current profile photo"
              />
              <p class="text-xl font-semibold">{{ fullName() }}</p>
            </div>
            <label class="block">
              <span class="sr-only"></span>
              <input
                class="text-gray-500 mt-2"
                type="file"
                @change="inputImage"
              />
            </label>
          </form>

          <form
            class="mt-6 my-2 grid grid-cols-2 text-gray-600"
            @submit.prevent="saveputName()"
          >
            <div class="my-1 mr-10">
              <label>First name :</label>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
                v-model="person.firstName"
              />
            </div>
            <div class="my-1 mr-10">
              <label>Last name :</label>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
                v-model="person.lastName"
              />
            </div>
            <div class="my-1 mr-10">
              <label>Email :</label>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
                v-model="person.emailName"
              />
            </div>
            <div class="my-1 mr-10">
              <label>Phone :</label>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
                v-model="person.phone"
              />
            </div>
            <div class="my-1 mr-10">
              <label>Address :</label>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
                v-model="person.address"
              />
            </div>
            <div class="my-1 mr-10">
              <label>Gender :</label>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
                v-model="person.gender"
              />
            </div>

            <div class="col-span-2 flex justify-end m-2 pr-8 space-x-4">
              <button
                class="bg-violet-500 text-white text-md rounded-md p-2 px-6 cursor-pointer hover:underline active:translate-y-1"
                type="submit"
              >
                Change
              </button>
              <nuxt-link to="/profile">
                <button
                  class="bg-violet-500 text-white text-md rounded-md p-2 px-6 cursor-pointer hover:underline active:translate-y-1"
                  type="reset"
                >
                  Cancel
                </button></nuxt-link
              >
            </div>
          </form>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const imgSrc = ref();

const inputImage = (event) => {
  const file = event.target.files[0];
  imgSrc.value = URL.createObjectURL(file);
};

const settingMenu = ref([
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
]);

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

function saveputName() {
  alert("complice");
}
</script>
