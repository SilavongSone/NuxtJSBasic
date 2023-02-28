<template>
  <div class="box-border w-full h-full p-2">
    <div class="grid grid-cols-5 h-full">
      <section class="p-2 flex justify-center">
        <div class="bg-white rounded-lg p-2 shadow-md fixed">
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
        </div>
      </section>

      <section class="col-span-4 p-2 shadow-md m-2">
        <div class="p-2">

          <form class="items-center space-x-6">
            <div class="shrink-0 flex pl-10 items-center space-x-4 m-1 p-1">
              <img
                class="h-44 w-44 object-cover rounded-full text-xs bg-gray-200"
                :src="imgSrc"
                alt="Current profile photo"
              />
              <p class="text-xl font-semibold">{{ person.fullName() }}</p>
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
        </div>

        <div class="bg-blue-500 my-2">svv</div>
      </section>

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
  firstName: "Johny",
  lastName: "Dev",
  mail: "",
  phone: "",
  Address: "",
  gender: "",
  Nname: "",

  fullName() {
    return this.firstName + " " + this.lastName;
  },

  putName(event) {
    return (this.Nname = event.target.value);
  },

  saveputName(e) {
    alert("complice");
  },
};
</script>
