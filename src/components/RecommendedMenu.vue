<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabase";

let foods = ref();

const getFoodImgUrl = async (name) => {
  const { data, error } = await supabase.storage.from("foods").download(name);
  if (data) {
  }
  if (error) {
    throw error;
  }
};
onMounted(async () => {
  const { data } = await supabase.from("foods").select();
  foods.value = data;
  console.log(foods);
});
</script>

<template>
  <!-- Recomended Menu -->
  <h1 class="my-4">เมนูอาหารแนะนำ</h1>
  <div class="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
    <div v-for="x in foods" :key="x.id" class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://kravgbqsbncdxobmckcu.supabase.co/storage/v1/object/public/foods/0.9241123528598771.jpg?t=2023-02-23T17%3A21%3A46.925Z" alt="หัวหอม" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ x.name ?? "NO NAME" }}</div>
        <p class="text-gray-700 text-base">
          {{ x.description ?? "NO DESCRIPTION" }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="tag in x.tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag ?? "No Tag" }}</span>
      </div>
    </div>

    <div v-for="x in foods" :key="x.id" class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://kravgbqsbncdxobmckcu.supabase.co/storage/v1/object/public/foods/0.9241123528598771.jpg?t=2023-02-23T17%3A21%3A46.925Z" alt="หัวหอม" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ x.name ?? "NO NAME" }}</div>
        <p class="text-gray-700 text-base">
          {{ x.description ?? "NO DESCRIPTION" }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="tag in x.tag" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag ?? "No Tag" }}</span>
      </div>
    </div>
  </div>
</template>
