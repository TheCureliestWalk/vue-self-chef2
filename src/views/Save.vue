<template>
  <h1>บันทึกรายการอาหาร</h1>
  <h2 class="text-center" v-if="getSavedList === null">~ 😥 ไม่มีรายการบันทึก ณ ขณะนี้ ~</h2>
  <div class="flex flex-col lg:flex-row items-center mt-4 gap-4">
    <div v-for="x in getSavedList" class="flex max-w-md shadow-lg">
      <img class="w-28 h-28 object-cover" :src="x.picture_url" :alt="x.name" />
      <div class="flex flex-col flex-1 w-full px-4 py-2">
        <h2 class="my-1.5">{{ x.name }}</h2>
        <div class="flex gap-2 w-full">
          <button class="rounded flex-1 shadow p-2 bg-cyan-400 hover:bg-cyan-500 hover:text-white">ดูเพิ่มเติม</button>
          <button @click="deleteSavedList" class="flex gap-1 items-center rounded shadow p-2 text-red-400 hover:bg-red-400 hover:text-white ring-red-400">
            <TrashIcon class="w-4 h-4" />
            <span>ลบ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";

const getSavedList = JSON.parse(localStorage.getItem("savedFoods"));

const deleteSavedList = () => {
  localStorage.clear();
  window.location.reload();
};
</script>
