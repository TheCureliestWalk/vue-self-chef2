<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabase";
import HeartBookmark from "@/components/icons/HeartBookmark.vue";

let ingredients = ref();
onMounted(async () => {
  const { data, error } = await supabase.from("ingredients").select();
  ingredients.value = data;
  console.log(ingredients);
});
</script>

<template>
  <!-- Popular Ingredient -->
  <h1 class="my-4">วัตถุดิบยอดนิยม</h1>
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8 space-y-6">
    <div v-for="x in ingredients" class="max-w-sm rounded overflow-hidden shadow-lg mx-auto hover:shadow-xl hover:backdrop-brightness-50 hover:bg-white/90">
      <img class="w-full object-cover w-48 h-48" :src="x.picture_url" alt="หัวหอม" />
      <div class="px-6 py-6">
        <div class="font-bold text-xl mb-2">{{ x.name }}</div>
        <p class="text-gray-700 text-base">
          {{ x.description }}
        </p>
        <div class="flex flex-row-reverse mt-2">
          <button class="flex p-1.5 gap-2 items-center bg-amber-400 hover:bg-amber-500 text-white text-sm px-2 rounded">
            <HeartBookmark />
            <span>บันทึก</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
