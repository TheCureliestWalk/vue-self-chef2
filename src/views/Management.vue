<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../lib/supabase";
import router from "../router";

let ingredients = ref();

onMounted(async () => {
  const { data } = await supabase.from("ingredients").select();
  ingredients.value = data;
});

const newList = () => {
  router.push("/newlist");
};
</script>

<template>
  <h1>จัดการรายการ</h1>

  <!-- Action Buttons -->
  <button @click="newList()" class="bg-amber-400 rounded-md text-white p-2 mt-2 mb-2.5 hover:bg-amber-300">เพิ่มรายการ</button>
  <h3 class="pl-4">รวมทั้งหมด รายการ</h3>
  <table class="w-full">
    <tr>
      <th>ลำดับ</th>
      <th>รายการ</th>
      <th>จัดการ</th>
    </tr>
    <tr v-for="x in ingredients">
      <td>{{ x.id }}</td>
      <td>{{ x.name }}</td>
      <td><span>ลบ | แก้ไข</span></td>
    </tr>
  </table>
</template>
