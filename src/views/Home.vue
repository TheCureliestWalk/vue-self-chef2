<script setup>
import FoodMenu from "@/components/FoodMenu.vue";
import router from "../router";
import { BookOpenIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <!-- Action Buttons -->
  <div class="flex justify-center">
    <button @click="router.push('/save')" class="flex items-center gap-2 p-4 rounded shadow bg-amber-200 hover:bg-amber-300 hover:text-amber-700">
      <BookOpenIcon class="w-4 h-4" />
      <span>ดูบันทึกรายการ</span>
    </button>
  </div>
  <FoodMenu />
</template>
