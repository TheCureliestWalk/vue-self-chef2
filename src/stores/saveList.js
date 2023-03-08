import { defineStore } from "pinia";
import { ref } from "vue";

const useUserSaveListStore = defineStore("saveList", () => {
  const saveFood = ref([]);
  return { saveFood };
});
