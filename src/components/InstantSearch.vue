<script setup>
import { ref } from "vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/reset.css";
import HeartBookmark from "@/components/icons/HeartBookmark.vue";

const searchClient = algoliasearch("YDL2PFZSFR", "8b4da0f7eda0ee4158af58f6ab80dd0a");
let isLike = ref(false);
let likeCount = ref(0);
let likeHandler = () => { 
  isLike.value = !isLike.value; 
  likeCount.value++;
  };
</script>

<template>
  <h1 class="my-4 text-center">ค้นหาเมนู</h1>
  <ais-instant-search :search-client="searchClient" index-name="self-chef">
    <ais-search-box placeholder="พริก, ผัดกะเพรา, ..." />
    <h1 class="my-4">วัตถุดิบยอดนิยม</h1>
    <ais-hits v-slot:item="{ item }">
      <img class="w-full object-cover w-48 h-48" :src="item.URLรูปภาพ" :alt="item.ชื่อวัตถุดิบ" />
      <div class="px-6 py-6">
        <div class="flex font-bold text-xl mb-2 gap-2 items-center">
          <span>{{ item.ชื่อวัตถุดิบ }}</span>
          <div class="flex gap-1 cursor-pointer" @click="likeHandler">
            <HeartIcon class="w-4 h-4 " :class="{ 'fill-current': isLike }" />
            <span class="text-sm">{{ likeCount }}</span>
          </div>
        </div>
        <p class="text-gray-700 text-base">
          {{ item.คำอธิบาย }}
        </p>
        <div class="flex flex-row-reverse mt-2">
          <button class="flex p-1.5 gap-2 items-center bg-amber-400 hover:bg-amber-500 text-white text-sm px-2 rounded">
            <HeartBookmark />
            <span>บันทึก</span>
          </button>
        </div>
      </div>
    </ais-hits>
  </ais-instant-search>
</template>

<style>
.ais-Hits-item {
  @apply list-none max-w-sm rounded overflow-hidden shadow-lg mx-auto hover:shadow-xl hover:backdrop-brightness-50 hover:bg-white/90;
}
.ais-Hits-list {
  @apply columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8 space-y-6;
}
.ais-SearchBox {
  @apply flex  mb-8 gap-4 justify-center;
}
.ais-SearchBox-form {
  @apply p-3.5 shadow-md;
}
.ais-SearchBox-form input[type="search"] {
  @apply ml-3 max-w-md;
}
.ais-SearchBox-form input[type="search"]:focus {
  @apply outline-none;
}
.ais-SearchBox button[type="submit"] {
  @apply ml-3 p-1.5 rounded-full hover:bg-gray-300;
}
.ais-SearchBox button[type="reset"] {
  @apply ml-3 p-1.5 rounded-full hover:bg-gray-300;
}
.ais-SearchBox-submitIcon {
  @apply w-4 h-4 text-gray-300;
}
.ais-SearchBox-resetIcon {
  @apply w-4 h-4 text-gray-300;
}
</style>
