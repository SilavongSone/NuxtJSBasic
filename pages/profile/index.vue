<template>
  <div class="box-border w-full h-full p-2">
    <div class="grid grid-cols-5 h-full">
      <div class="p-2 flex justify-center">
        <section class="bg-white rounded-lg p-2 shadow-md fixed">
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
          <form class="items-center space-x-6">
            <div class="shrink-0 flex pl-10 items-center space-x-4 m-1 p-1">
              <img
                class="h-44 w-44 object-cover rounded-full text-xs bg-gray-200"
                :src="imgSrc"
                alt="Current profile photo"
              />
              <p class="text-xl font-semibold">fullName</p>
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

          <from class="my-2 grid grid-cols-2 mt-6 text-gray-500">
            <div class="my-1 mr-10">
              <p>Frist name</p>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
              />
            </div>
            <div class="my-1 mr-10">
              <p>Last name</p>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 text-black w-full"
                type="text"
              />
            </div>
            <div class="my-1 mr-10">
              <p>Email</p>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="email"
              />
            </div>
            <div class="my-1 mr-10">
              <p>Phone</p>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 text-black w-full"
                type="text"
              />
            </div>
            <div class="my-1 mr-10">
              <p>Address</p>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black"
                type="text"
              />
            </div>
            <div class="my-1 mr-10">
              <p>Gender</p>
              <input
                class="bg-gray-200 rounded-sm text-lg p-1 text-black w-full"
                type="text"
              />
            </div>
          </from>

          <div
            class="bottom-10 right-10 flex justify-end space-x-10 text-lg font-medium text-white p-2 mr-8"
          >
            <p class="bg-violet-500 p-2 rounded-md">
              <input
                class="hover:underline cursor-pointer active:translate-y-1"
                type="submit"
                value="Changes"
              />
            </p>
            <p class="bg-violet-500 p-2 rounded-md">
              <input
                class="hover:underline cursor-pointer active:translate-y-1"
                type="reset"
                value="Cancel"
              />
            </p>
          </div>
        </section>
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

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
</script>
