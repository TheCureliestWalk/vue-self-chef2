<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { supabase } from "../lib/supabase";
import { foodStore } from "../stores/food";
import { storeToRefs } from "pinia";
import { Switch, Dialog, DialogPanel, DialogTitle, DialogDescription, TransitionRoot } from "@headlessui/vue";
import { BookmarkIcon, EyeIcon, HeartIcon, PencilIcon } from "@heroicons/vue/24/outline";

// Modal
const isChecked = ref(true); // Checkbox Search Button
const isOpen = ref(false);
function setIsOpen(value) {
  isOpen.value = value;
}

let modalData = ref({});
const fireModal = (food) => {
  modalData.value = {};
  setIsOpen(true);
  modalData.value.id = food.id;
  modalData.value.name = food.name;
  modalData.value.description = food.description;
  modalData.value.ingredients = food.ingredients;
  modalData.value.picture_url = food.picture_url;
  modalData.value.source = food.source;
  modalData.value.step = food.step;
  modalData.value.tag = food.tag;
  console.log(food);
  return modalData;
};

const foods = ref([]);
const ingredients = ref([]);
//const store = foodStore()
//const { foods } = storeToRefs(store)
let searchInput = ref("");
let foodSearchResult = computed(() =>
  foods.value.filter((x) => {
    return x.name.includes(searchInput.value);
  })
);

let ingredientSearchResult = computed(() =>
  ingredients.value.filter((x) => {
    return x.name.includes(searchInput.value);
  })
);
// Log on console every input value
watch(searchInput, () => console.log(foodSearchResult.value));

const getFoods = async () => {
  const { data } = await supabase.from("foods").select();
  foods.value = data;
};

const getIngredient = async () => {
  const { data } = await supabase.from("ingredients").select();
  ingredients.value = data;
};

onMounted(async () => {
  getFoods();
  getIngredient();
});
</script>

<template>
  <!-- Modal -->
  <TransitionRoot :show="isOpen" as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
    <Dialog :open="isOpen" @close="setIsOpen">
      <div class="fixed inset-0 bg-black/30 backdrop-blur" aria-hidden="true" />
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <DialogPanel class="w-full max-w-xl rounded bg-white shadow-lg">
            <DialogTitle class="flex flex-col justify-end text-white font-bold leading-6  w-full object-cover object-center h-64 bg-[url('./bg.jpg')]">
              <h1 class="pt-4 pl-4 text-4xl w-full bg-slate-700 bg-opacity-70">{{ modalData.name ?? "ไม่ได้ระบุ" }}</h1>
          </DialogTitle>
            <DialogDescription class="p-4 space-y-3">
              <h2>คำอธิบาย</h2>
              <p>{{ modalData.description ?? "ไม่ได้ระบุ" }}</p>
              <h2>ส่วนผสม</h2>
                <p>{{ modalData.ingredients ?? "ไม่ได้ระบุ" }}</p>
              <h2>วิธีทำ</h2>
              <p>{{  modalData.step ?? "ไม่ได้ระบุ" }}</p>
              <h2>แท็ก</h2>
              <ul class="flex gap-3">
                <li v-for="tag in modalData.tag" class="list-none rounded bg-pink-100 hover:bg-pink-300 text-pink-700 px-1 cursor-pointer">{{ tag ?? "ไม่ได้ระบุ" }}</li>
              </ul>
              <h2>อ้างอิง</h2>
              <ul class="flex gap-3">
                  <li class="list-none rounded bg-blue-100 hover:bg-blue-300 text-blue-700 px-2 cursor-pointer">{{ modalData.source ?? "ไม่ได้ระบุ" }}</li>
                </ul>
              
            
            </DialogDescription>
            <div class="flex flex-row-reverse gap-4 mb-4 px-4">
              <button @click="setIsOpen(false)" class="py-2 px-4 rounded bg-purple-200 hover:bg-purple-300 text-purple-700">ไปยังเว็บไซต์ต้นทาง</button>
              <button @click="setIsOpen(false)" class="py-2 px-4 rounded bg-amber-200 hover:bg-amber-300 text-amber-700">ออก</button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>


  <!-- Search Bar -->
  <h1 class="my-4 text-center">ค้นหาเมนู</h1>
  <div class="max-w-md mx-auto">
    <div class="relative flex items-center rounded-lg shadow-lg overflow-hidden">
      <div class="grid place-items-center h-full w-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input type="text" class="peer h-full w-full pr-2 input w-full max-w-md" placeholder="พริก, ต้นหอม, ..." v-model="searchInput" />
    </div>
    <div class="flex items-end justify-center">
      <SwitchLabel class="mr-4">ค้นหาจากวัตถุดิบ</SwitchLabel>
      <Switch v-model="isChecked" :class="isChecked ? 'bg-amber-400' : 'bg-gray-200'" class="mt-4 relative inline-flex h-6 w-11 items-center rounded-full">
        <span class="sr-only">Enable notifications</span>
        <span :class="isChecked ? 'translate-x-6' : 'translate-x-1'" class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
      </Switch>
    </div>
  </div>

  <!-- Recomended Menu -->
  <h1 class="my-4">เมนูอาหารแนะนำ</h1>
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8 space-y-6">
    <div v-for="x in foodSearchResult" :key="x.id" class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:-translate-y-4 hover:scale-110 duration-100" @click="fireModal(x)">
      <img class="w-full object-cover h-48" :src="x.picture_url" :alt="x.name" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ x.name ?? "NO NAME" }}</div>
        <p class="text-gray-700 text-base">
          {{ x.description ?? "NO DESCRIPTION" }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 cursor-pointer">
        <h3 class="text-sm mb-1">แท็ก</h3>
        <span v-for="tag in x.tag" class="inline-block bg-pink-100 hover:bg-pink-200 rounded-full px-3 py-1 text-xs font-semibold text-pink-700 mr-2 mb-2">#{{ tag ?? "No Tag" }}</span>
      </div>
      <!-- Action buttons -->
      <div class="flex w-full justify-center p-1">
            <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
              <PencilIcon class="w-4 h-4" />
              <span>แก้ไข</span>
            </button>
            <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
              <EyeIcon class="w-4 h-4" />
              <span>{{ x.seen ?? "0" }}</span>
            </button>
            <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-gray-700 text-sm px-2 rounded">
              <BookmarkIcon class="w-4 h-4" />
              <span>{{ x.bookmark ?? "0" }}</span>
            </button>
            <button class="flex p-1.5 gap-2 items-center hover:bg-gray-100 text-700 text-sm px-2 rounded">
              <HeartIcon class="w-4 h-4" />
              <span>{{ x.like ?? "0" }}</span>
            </button>
          </div>
    </div>
  </div>

  <!-- Popular Ingredient -->
  <h1 class="my-4">วัตถุดิบยอดนิยม</h1>
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-8 space-y-6">
    <div v-for="x in ingredientSearchResult" class="max-w-sm rounded overflow-hidden shadow-lg mx-auto hover:shadow-xl hover:backdrop-brightness-70 hover:bg-white/90 hover:-translate-y-4 hover:scale-110 duration-100" @click="fireModal(x)">
      <img class="w-full object-cover h-48" :src="x.picture_url" :alt="x.name" />
      <div class="px-6 py-6">
        <div class="font-bold text-xl mb-2">{{ x.name }}</div>
        <p class="text-gray-700 text-base">
          {{ x.description }}
        </p>
      </div>
    </div>
  </div>
</template>
