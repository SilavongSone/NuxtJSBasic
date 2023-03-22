<template>
  <div>
    <div class="h-screen">
      <section
        class="flex flex-col p-10 justify-center items-center gap-2 rounded-md h-full bg-violet-50"
      >
        <div class="bg-violet-500 shadow-sm h-40 p-2">
          <h1 class="flex text-white p-2 justify-center text-xl">
            LOGIN
          </h1>
          <div class="flex flex-col">
            <p>Email</p>
            <input class="border" v-model="email" type="email" required />  
            <p>password</p>
            <input class="border" v-model="password" type="password" required />
          </div>
          <div class="flex justify-between bg-violet-500 ">
            <button
              class="bg-gray-100 hover:bg-gray-300 rounded-sm p-1 mt-4"
              @click.prevent="handleLogin"
            >
              Login
            </button>
            <button class="bg-gray-100 hover:bg-gray-300 rounded-sm p-1 mt-4">
            Register
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const email = ref("");
const password = ref("");
const isLogin = ref(false);
const handleLogin = async () => {
  try {
    const { login } = useAuth();
    isLogin.value = true;
    await login(email.value, password.value);
    isLogin.value = false;
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>
