import { defineStore } from "pinia";
import { ref } from "vue";

export const foodStore = defineStore("food", () => {
  let foods = ref();
  let ingredients = ref();

  return { foods, ingredients };
});
