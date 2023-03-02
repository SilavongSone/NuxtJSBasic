<template>
  <div class="box-border w-full h-full p-2 ">
    <div class="grid grid-cols-4 h-full shadow-md bg-white m-2 rounded-md">
      <div class="col-span-4 p-2 h-full">
        <section class="h-full p-2">
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
                class="text-gray-500 mt-2 hidden"
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
              <p>Address :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.address }}
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
              <p>Gender :</p>
              <p
                class="bg-gray-200 rounded-sm text-lg p-1 w-full text-black h-9"
                type="text"
              >
                {{ person.gender }}
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

            <div class="col-span-2 flex justify-end">
              <NuxtLink to="/profile/edit"
                ><button class="m-2 pr-8">
                  <input
                    class="bg-violet-500 text-white text-md rounded-md p-2 px-6 cursor-pointer hover:underline active:translate-y-1"
                    type="submit"
                    value="Edit"
                  /></button
              ></NuxtLink>
            </div>
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
