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
        <section class="h-full relative p-2">
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

          <from class="my-2 grid grid-cols-2 mt-6 text-gray-600">
            <div class="my-1 mr-10">
              <p>First name :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.firstName }}
              </p>
            </div>
            <div class="my-1 mr-10">
              <p>Last name :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.lastName }}
              </p>
            </div>
            <div class="my-1 mr-10">
              <p>Email :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.mail }}
              </p>
            </div>
            <div class="my-1 mr-10">
              <p>Phone :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.phone }}
              </p>
            </div>
            <div class="my-1 mr-10">
              <p>Address :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.address }}
              </p>
            </div>
            <div class="my-1 mr-10">
              <p>Gender :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.gender }}
              </p>
            </div>

            <nuxt-link class="col-span-2 flex justify-end" to="/profile/edit"
              ><button class="m-2 pr-8">
                <input
                  class="bg-violet-500 text-white text-md rounded-md p-2 px-6 cursor-pointer hover:underline active:translate-y-1"
                  type="submit"
                  value="Edit"
                /></button
            ></nuxt-link>
          </from>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { eventNames } from "process";

const imgSrc = ref();

const inputImage = (event) => {
  const file = event.target.files[0];
  imgSrc.value = URL.createObjectURL(file);
};

const settingMenu = ref([
  {
    label: "Personal data",
    icon: "fluent:people-edit-20-filled",
    path: "/profile",
  },
  {
    label: "Privacy",
    icon: "fluent:shield-lock-16-filled",
    path: "",
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

<script>
export default {
  name: "App",
  data() {
    return {
      fName: "Pro",
      lName: "Include",
      Nname: "",
      age: 20,
      gMail: "ProInclude@gmail.com",

      // Array
      hobby: ["Playingame", "listenMusic"],

      // Object
      status: { gender: "ຊາຍ", weight: 70, hight: 180, healty: false },
    };
  },
  methods: {
    fullName() {
      return this.fName + " " + this.lName;
    },

    nameAlt() {
      alert(this.fName + this.lName);
    },

    // Event argument
    increment(value) {
      this.age += value;
    },

    //Event Click
    decrement(value) {
      this.age -= value;
    },

    //Event Input
    NnamePut(event) {
      this.Nname = event.target.value;
    },
  },
};
</script>
