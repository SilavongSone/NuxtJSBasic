<template>
  <div>
    <section
      class="flex flex-col p-10 justify-center items-center gap-2 bg-white rounded-md"
    >
      <h1 class="text-white bg-black p-2">LOGIN</h1>
      <input class="border" v-model="email" type="email" required />
      <input class="border" v-model="password" type="password" required />
      <button class="bg-gray-100 hover:bg-gray-300 rounded-sm p-1" @click.prevent="handleLogin">Submit</button>
    </section>
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
