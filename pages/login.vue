<template>
  <div class="flex justify-center items-center h-screen bg-slate-700">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-3xl text-violet-500 block text-center font-semibold">
        <Icon name="material-symbols:account-circle-sharp" size="40" /> Login
      </h1>
      <hr class="mt-3" />
      <div class="mt-3">
        <p>Email</p>
        <input
          class="borde w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-gray-600"
          placeholder="Enter Email..."
          v-model="email"
          type="email"
          required
        />
      </div>
      <div class="mt-3">
        <p>Password</p>
        <input
          class="borde w-full text-base px-2 py-1 focus:outline-none focus:right-0 focus:border-gray-600"
          placeholder="Enter Password..."
          v-model="password"
          type="password"
          required
        />
        <div class="mt-3 flex justify-between items-center">
          <div class="space-x-2">
            <input class="" type="checkbox" />
            <label>Remember Me</label>
          </div>
          <div>
            <a href="#" class="text-red-500 font-semibold hover:text-violet-500"
              >Forgot Password?</a
            >
          </div>
        </div>
        <button
          class=" my-2 border-2 border-violet-500 bg-violet-500 text-black py-1 w-full"
          @click.prevent="handleLogin"
        >
        <Icon name="material-symbols:login-rounded" size="20" /> Login
        </button>
      </div>
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
