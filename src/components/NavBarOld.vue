<script setup>
import { RouterLink } from "vue-router";
import Home from "./icons/Home.vue";
import SignIn from "./icons/SignIn.vue";
import NewUser from "./icons/NewUser.vue";
import SignOut from "./icons/SignOut.vue";
import Settings from "./icons/Settings.vue";
import { userStore } from "../stores/user";
import { supabase } from "../lib/supabase";
import router from "../router";
import toastr from "toastr/toastr";

const user = userStore();

const logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (e) {
    console.error(e.message);
  } finally {
    toastr.info("ออกจากระบบเรียบแล้ว");
    router.push("/");
  }
};
</script>
<template>
  <nav class="fixed right-2.5 top-2.5 sm:relative max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 px-6 py-3 text-gray-800 bg-white rounded">
    <div class="sm:hidden">
      <div class="relative flex flex-row-reverse gap-2.5">
        <span class="font-bold text-lg">✖</span>
      </div>
    </div>

    <div class="relative flex items-center gap-2.5">
      <Home class="w-4 h-4" />
      <RouterLink to="/">หน้าหลัก</RouterLink>
    </div>

    <div v-if="!user.session" class="relative flex items-center gap-2.5">
      <SignIn class="w-4 h-4" />
      <RouterLink to="/login">เข้าสู่ระบบ</RouterLink>
    </div>

    <div v-if="!user.session" class="relative flex items-center gap-2.5">
      <NewUser class="w-4 h-4" />
      <RouterLink to="/register">สมัครสมาชิก</RouterLink>
    </div>

    <div class="relative flex items-center gap-2.5">
      <NewUser class="w-4 h-4" />
      <RouterLink to="/about">เกี่ยวกับ</RouterLink>
    </div>

    <div v-if="user.session" class="relative flex items-center gap-2.5">
      <Settings class="w-4 h-4" />
      <RouterLink to="/management">จัดการรายการ</RouterLink>
    </div>

    <div v-if="user.session" class="relative flex items-center gap-2.5">
      <Settings class="w-4 h-4" />
      <RouterLink to="/account">ตั้งค่าบัญชี</RouterLink>
    </div>

    <div v-if="user.session" class="relative flex items-center gap-2.5">
      <SignOut class="w-4 h-4" />
      <button @click="logout" class="hover:underline underline-offset-4 decoration-2 decoration-amber-400">ออกจากระบบ</button>
    </div>
  </nav>
</template>
