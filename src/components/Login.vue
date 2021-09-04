<template>
  <h2>Login Form</h2>
  <form @submit.prevent="Login">
      <input type="email" placeholder="Enter Your Email" v-model="email">
      <input type="password" placeholder=" Enter Your Password" v-model="password">
      <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
 setup() {
     let email = ref("");
     let password = ref("");

     let Login=()=>{
         console.log(email.value,password.value);
     }
     return {email,password,Login};
 }
}
</script>

<style>

</style>