<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import Home from "./icons/Home.vue";
import SignIn from "./icons/SignIn.vue";
import NewUser from "./icons/NewUser.vue";
import SignOut from "./icons/SignOut.vue";
import Settings from "./icons/Settings.vue";
import About from "./icons/About.vue";
import { userStore } from "../stores/user";
import { supabase } from "../lib/supabase";
import router from "../router";
import toastr from "toastr/toastr";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

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

let isCollapsed = ref(true);
</script>

<template>
  <div class="navbar bg-base-500">
    <!-- Left-->
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl">Self-Chef</RouterLink>
    </div>
    <!-- Right -->
    <div class="flex flex-col gap-2">
      <button @click="isCollapsed = !isCollapsed" class="md:invisible place-self-end text-gray-500 bg-gray-300 bg-opacity-70 hover:bg-gray-500 hover:text-white p-1"><Bars3Icon class="w-6 h-6" /></button>
      <ul class="flex flex-col md:flex-row menu menu-horizontal px-1" :class="{ 'hidden': isCollapsed }">
        <li>
          <RouterLink to="/">
            <Home class="w-4 h-4" />
            หน้าหลัก
            <i class="bi bi-yelp"></i>
          </RouterLink>
        </li>
        <li tabindex="0">
          <a v-if="!user.session">
            บัญชี
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li>
              <RouterLink to="/register">
                <NewUser class="w-4 h-4" />
                สมัครสมาชิก
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/login">
                <SignIn class="w-4 h-4" />
                เข้าสู่ระบบ
              </RouterLink>
            </li>
          </ul>
        </li>

        <li>
          <RouterLink to="/about">
            <About class="w-4 h-4" />
            เกี่ยวกับ
          </RouterLink>
        </li>
        <li v-if="user.session">
          <RouterLink to="/account">
            <Settings class="w-4 h-4" />
            ตั้งค่าบัญชี
          </RouterLink>
        </li>
        <li v-if="user.session" class="text-red-500">
          <a href="#" @click.prevent="logout">
            <SignOut class="w-4 h-4" />
            ออกจากระบบ
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
