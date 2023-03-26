<script setup>
import FoodMenu from "@/components/FoodMenu.vue";
import router from "../router";
import { BookOpenIcon, PlusIcon } from "@heroicons/vue/24/outline";
import Alert from "../components/Alert.vue";
import { userStore } from "../stores/user";

const user = userStore()
</script>

<template>
  <!-- Action Buttons -->
  <div v-if="user.session" class="flex gap-2 justify-center">
    <button @click="router.push('/new')" class="flex items-center gap-2 p-4 rounded shadow bg-amber-200 hover:bg-amber-300 hover:text-amber-700">
      <PlusIcon class="w-4 h-4" />
      <span>เพิ่มรายการ</span>
    </button>
    <button @click="router.push('/save')" class="flex items-center gap-2 p-4 rounded shadow bg-amber-200 hover:bg-amber-300 hover:text-amber-700">
      <BookOpenIcon class="w-4 h-4" />
      <span>ดูบันทึกรายการ</span>
    </button>
  </div>
  <FoodMenu />
</template>
