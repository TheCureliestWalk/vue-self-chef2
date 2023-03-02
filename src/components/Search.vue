<script setup>
import { ref } from "vue";

let search = ref("");
let isChecked = ref();
</script>

<template>
  <h1 class="my-4 text-center">ค้นหาเมนู</h1>
  <div class="max-w-md mx-auto">
    <div class="relative flex items-center rounded-lg focus-within:shadow-lg overflow-hidden border">
      <!-- Search icon-->
      <div class="grid place-items-center h-full w-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input type="text" class="peer h-full w-full pr-2 input w-full max-w-md" placeholder="พริก, ต้นหอม, ..." v-model="search" />
    </div>
  </div>
  <div class="flex flex-col">
    <div class="mx-auto w-48">
      <label class="cursor-pointer label">
        <span class="label-text text-lg">ค้นหาจากวัตถุดิบ</span>
        <input type="checkbox" class="toggle toggle-primary" :checked="isChecked" />
      </label>
    </div>

  </div>
</template>

<style scoped>
input[type="text"] {
  @apply p-3.5 ml-3;
}

input[type="text"]:focus {
  @apply border-0 outline-none;
}
</style>
