<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabase";

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
  <div class="grid md:grid-cols-5 lg:grid-cols-6 justify-items-center gap-4">
    <div v-for="x in ingredients" class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl">
      <img class="w-full object-cover w-48 h-48" :src="x.picture_url" alt="หัวหอม" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ x.name }}</div>
        <p class="text-gray-700 text-base">
          {{ x.description }}
        </p>
      </div>
    </div>
  </div>
</template>
