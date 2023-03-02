<script setup>
import { supabase } from "../lib/supabase";
import { onMounted, ref, toRaw } from "vue";
import router from "../router";
import toastr from "toastr/toastr";
let email = ref();
let password = ref();
const login = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (data.session !== null) {
      toastr.success("เข้าสู่ระบบสำเร็จ");
      router.push("/");
    }
    if (error) {
      alert(error.message);
    }
  } catch (error) {
    alert(error);
  }
};
</script>

<template>
  <form @submit.prevent="login" class="form-control-custom">
    <label for="email">ชื่อผู้ใช้/อีเมลล์</label>
    <input type="text" name="email" id="email" placeholder="" v-model="email" />
    <label for="password">รหัสผ่าน</label>
    <input type="password" name="password" id="password" placeholder="" v-model="password" />
    <button type="submit">เข้าสู่ระบบ</button>
  </form>

</template>

<style scoped>
input {
    @apply max-w-sm border p-2 ml-3;
}

input:focus {
    @apply ring-2 ring-amber-300 outline-none;
}
</style>
