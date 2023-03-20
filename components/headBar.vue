<template>
  <div
    class="bg-white w-full h-16 flex items-center justify-between p-6 drop-shadow-md"
  >
    <section>
      <div>
        <button @click="nameAlt">
          <h1 class="text-red-500">Hello# {{ fullName() }}</h1>
        </button>
      </div>
    </section>

    <section>
      <div>
        <NuxtLink to="/profile"
          ><div
            class="justify-between w-full bg-white rounded-full drop-shadow-md flex p-1 text-sm text-gray-500 font-semibold hover:brightness-95 hover:text-black items-center"
          >
            <img
              class="h-10 w-10 rounded-full cursor-pointer hover:brightness-75"
              src="../assets/img/Screenshot 2023-01-25 135650.png"
              alt="Profil"
            />

            <div class="pl-2">
              <ul class="cursor-pointer">
                {{
                  fullName()
                }}
              </ul>
              <p class="text-xs cursor-pointer">{{ gMail }}</p>
            </div>

            <ul
              class="bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 flex justify-center items-center m-1 w-8 h-8"
            >
              <Icon name="fluent:settings-16-filled" size="20"></Icon>
            </ul>
            <ul
              class="bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 flex justify-center items-center w-8 h-8"
            >
              <Icon name="fluent:alert-badge-16-filled" size="20"></Icon>
            </ul></div
        ></NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fName: "Pro",
      lName: "Include",
      gMail: "IncludePro@gmail.com",

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
