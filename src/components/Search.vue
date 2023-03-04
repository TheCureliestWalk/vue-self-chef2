<template>
  <div class="fixed top-16 w-72">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <ComboboxInput class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" :displayValue="(person) => person.name" @change="query = $event.target.value" />
          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" @after-leave="query = ''">
          <ComboboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <div v-if="filteredPeople.length === 0 && query !== ''" class="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>

            <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person" v-slot="{ selected, active }">
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4"
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }">
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ person.name }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3" :class="{ 'text-white': active, 'text-teal-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption, TransitionRoot } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

let selected = ref(people[0]);
let query = ref("");

let filteredPeople = computed(() => (query.value === "" ? people : people.filter((person) => person.name.toLowerCase().replace(/\s+/g, "").includes(query.value.toLowerCase().replace(/\s+/g, "")))));
</script>

<!--<script setup>-->
<!--import { ref } from "vue";-->

<!--let search = ref("");-->
<!--let isChecked = ref();-->
<!--</script>-->

<!--<template>-->
<!--  <h1 class="my-4 text-center">ค้นหาเมนู</h1>-->
<!--  <div class="max-w-md mx-auto">-->
<!--    <div class="relative flex items-center rounded-lg focus-within:shadow-lg overflow-hidden border">-->
<!--      &lt;!&ndash; Search icon&ndash;&gt;-->
<!--      <div class="grid place-items-center h-full w-12">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />-->
<!--        </svg>-->
<!--      </div>-->
<!--      <input type="text" class="peer h-full w-full pr-2 input w-full max-w-md" placeholder="พริก, ต้นหอม, ..." v-model="search" />-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="flex flex-col">-->
<!--    <div class="mx-auto w-48">-->
<!--      <label class="cursor-pointer label">-->
<!--        <span class="label-text text-lg">ค้นหาจากวัตถุดิบ</span>-->
<!--        <input type="checkbox" class="toggle toggle-primary" :checked="isChecked" />-->
<!--      </label>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--input[type="text"] {-->
<!--  @apply p-3.5 ml-3;-->
<!--}-->

<!--input[type="text"]:focus {-->
<!--  @apply border-0 outline-none;-->
<!--}-->
<!--</style>-->
