<template>
  <h1 class="text-center">แก้ไขอาหาร ID {{ route.params.id }}</h1>
  <form class="form-control-custom">
    <label for="id" class="font-bold">💳 ID</label>
    <input type="text" disabled :placeholder="item[0].id" />
    <label for="name" class="font-bold">🏷 ชื่ออาหาร</label>
    <input type="text" v-model="item[0].name" />
    <label for="description" class="font-bold">📰 คำอธิบาย</label>
    <textarea name="description" id="description" cols="30" rows="3" v-model="item[0].description"></textarea>
    <label for="ingredient" class="font-bold">🪄 ส่วนผสม</label>
    <input type="text" v-model="item[0].ingredient" />
    <label for="step" class="font-bold">🎐 วิธีทำ</label>
    <textarea name="step" id="description" cols="30" rows="10" v-model="item[0].step"></textarea>
    <label for="picture_url" class="font-bold">🖼️ URL ภาพอาหาร</label>
    <input type="text" v-model="item[0].picture_url" />
    <label for="tag" class="font-bold">🏷 แท็ก</label>
    <input type="text" v-model="item[0].tag" />
    <label for="tag" class="font-bold">🧷 แหล่งอ้างอิง</label>
    <input type="text" v-model="item[0].source" />
    <button @click="save()" type="submit" class="w-full max-w-md p-2 rounded bg-amber-300 text-white hover:bg-amber-500">💾 แก้ไขข้อมูล</button>
  </form>
</template>

<script setup>
import { supabase } from "@/lib/supabase";
import toastr from "toastr";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const item = ref([]);

const getItem = async () => {
  const { data } = await supabase.from("foods").select("*").eq("id", route.params.id);
  item.value = [...data];
};

getItem();

const save = async () => {
  const { data, error } = await supabase
    .from("foods")
    .update({
      name: item.value[0].name,
      description: item.value[0].description,
      ingredient: item.value[0].ingredient,
      step: item.value[0].step,
      picture_url: item.value[0].picture_url,
      tag: item.value[0].tag,
      source: item.value[0].source,
    })
    .eq("id", item.value[0].id);
  if (data) {
    toastr.success(data);
  }
  if (error) {
    console.log(error);
  }
};
</script>
