<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Icon from "@/components/icons/Icon.vue";
import { supabase } from "@/lib/supabase";
</script>

<template>
  <NavBar />
  <header class="flex flex-col space-y-4 items-center p-8 w-full h-128 bg-amber-300 text-white object-cover bg-cover bg-center bg-[url('./bg.jpg')]">
    <div class="p-6 mt-3 backdrop-blur-sm rounded bg-white/30 text-center">
      <h1 class="text-4xl">Self-Chef</h1>
      <h3 class="text-sm">มีวัตถุดิบ แต่ไม่รู้จะทำอะไร?</h3>
      <Icon class="w-48 h-48" />
    </div>
  </header>
  <main class="container mx-auto px-4 my-8">
    <RouterView />
  </main>
</template>
