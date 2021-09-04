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
import {auth} from "../firebase/config"
export default {
 setup() {
     let displayName = ref("");
     let email = ref("");
     let password = ref("");
     let error = ref (null);
     let singUp=async()=>{
       try {
           let res = await auth.createUserWithEmailAndPassword(email.value,password.value)
           if(!res){
               throw new Error ("Could Not create New User")
           }
           res.user.updateProfile({displayName:displayName.value})
       } catch (err) {
           error.value=err.message;
       }
     }
     return {displayName,email,password,singUp};
 }
}
</script>

<style>

</style>