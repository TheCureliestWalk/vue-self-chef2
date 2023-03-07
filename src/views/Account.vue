<script setup>
import { userStore } from "../stores/user";

const user = userStore();

const userEmail = user.session.user.email;
</script>

<template>
  <h1>จัดการบัญชี</h1>
  <form class="form-control-custom">
    <label for="email">อีเมลล์</label>
    <input type="text" id="email" v-model="userEmail" disabled />
  </form>
</template>
