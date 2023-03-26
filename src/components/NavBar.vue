<template>
  <nav class="bg-base-700">
    <div class="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex w-full h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button v-on:click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-base-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <a href="/" class="font-bold normal-case text-xl pointer-cursor">Self-Chef</a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <RouterLink to="/" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <Home class="w-4 h-4" />
                <span>หน้าหลัก</span>
              </RouterLink>

              <RouterLink v-if="!user.session" to="/register" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">
                <NewUser class="w-4 h-4" />
                <span>สมัครสมาชิก</span>
              </RouterLink>

              <RouterLink v-if="!user.session" to="/login" href="#" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">
                <SignIn class="w-4 h-4" />
                <span>เข้าสู่ระบบ</span>
              </RouterLink>
              <RouterLink to="/about" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">
                <About class="w-4 h-4" />
                <span>เกี่ยวกับ</span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div v-if="user.session" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="relative ml-3" v-on:click="isOpen = !isOpen">
            <div>
              <button type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="gravatarImg" />
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div v-if="isOpen" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <RouterLink v-if="user.session" to="/account" class="flex gap-2 items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <Settings class="w-4 h-4" />
                ตั้งค่าบัญชี
              </RouterLink>
              <a v-if="user.session" href="#" @click.prevent="logout" class="flex gap-2 items-center px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">
                <SignOut class="w-4 h-4" />
                ออกจากระบบ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div @click="isOpen = !isOpen" class="sm:hidden" id="mobile-menu">
      <div v-if="isOpen" class="space-y-1 px-2 pt-2 pb-3 flex flex-col">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <RouterLink to="/" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
          <Home class="w-4 h-4" />
          <span>หน้าหลัก</span>
        </RouterLink>

        <RouterLink v-if="!user.session" to="/register" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">
          <NewUser class="w-4 h-4" />
          <span>สมัครสมาชิก</span>
        </RouterLink>

        <RouterLink v-if="!user.session" to="/login" href="#" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">
          <SignIn class="w-4 h-4" />
          <span>เข้าสู่ระบบ</span>
        </RouterLink>
        <RouterLink to="/about" class="flex gap-2 items-center text-gray-700 hover:bg-gray-300 hover:text-black rounded-md px-3 py-2 text-sm font-medium">
          <About class="w-4 h-4" />
          <span>เกี่ยวกับ</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

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

const gravatarImg = () => {
  const email = user.session.user.email;
  const hash = md5(email);
  return `https://www.gravatar.com/avatar/${hash}?s=200`;
};
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

let isOpen = ref(false);

const menuDefault = [{
  name: "หน้าหลัก", to: '/', icon: "", hideSignedIn: false
}, {
  name: "สมัครสมาชิก", to: '/register', icon: "", hideSignedIn: true
}, {
  name: "เข้าสู่ระบบ", to: '/login', icon: "", hideSignedIn: true
}, {
  name: "เกี่ยวกับ", to: '/about', icon: "", hideSignedIn: false
}]
</script>
