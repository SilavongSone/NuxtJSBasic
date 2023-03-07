<template>
  <div>
    <section class="flex flex-col p-10 justify-center items-center gap-2">
      <input v-model="email" type="email" required />
      <input v-model="password" type="password" required />
      <button @click.prevent="handleLogin">submit</button>
    </section>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "blank",
  })

  const email = ref("")
  const password = ref("")
  const isLogin = ref(false)
  const handleLogin = async () => {
    try {
      const { login } = useAuth()
      isLogin.value = true
      await login(email.value, password.value)
      isLogin.value = false
      window.location.href = "/"
    } catch (error) {
      console.error(error)
    }
  }
</script>

<style scoped></style>
