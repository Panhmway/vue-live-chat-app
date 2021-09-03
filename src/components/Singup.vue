<template>
  <h2>Singup Form</h2>
  <form @submit.prevent="singUp">
      <input type="text" placeholder="Dispaly Name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Singup</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
 setup() {
     let displayName = ref("");
     let email = ref("");
     let password = ref("");

     let singUp=()=>{
         console.log(displayName.value,email.value,password.value);
     }
     return {displayName,email,password,singUp};
 }
}
</script>

<style>

</style>