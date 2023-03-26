<script setup>
import { ref, computed } from "vue";
import { supabase } from "@/lib/supabase";
import toastr from "toastr/toastr";

let newItem = ref("");
let itemDescription = ref("");
let howTo = ref("");
let image = ref("");
let tag = ref([]);

const onSubmitEvent = async () => {
  try {
    await supabase.from("foods").insert([
      {
        name: newItem.value,
        description: itemDescription.value,
        howTo: howTo.value,
        image: image.value,
        tag: tag.value,
      },
    ]);
    toastr.success("เพิ่มรายการสำเร็จ");
    newItem.value = "";
    itemDescription.value = "";
    howTo.value = "";
    image.value = "";
    tag.value = [];
  } catch (error) {
    alert.error(error.message);
  }
};

let newTagEnabled = ref(false);
const newTag = computed(() => (newTagEnabled.value = !newTagEnabled.value));
</script>

<template>
  <h1 class="text-center">สร้างรายการใหม่</h1>
  <form @submit.prevent="onSubmitEvent" class="form-control-custom">
    <label for="newList">🏷 ชื่อรายการ</label>
    <input type="text" id="newItem" name="newItem" v-model="newItem" />

    <label for="listDescription">📰 คำอธิบาย</label>
    <textarea name="listDescription" id="listDescription" cols="30" rows="3" v-model="itemDescription"></textarea>
    <label for="listDescription">🎐 วิธีทำ</label>
    <textarea name="listDescription" id="listDescription" cols="30" rows="10" v-model="howTo"></textarea>
    <label for="listPicture">🖼️ URL รูปภาพ</label>
    <input type="text" id="image" name="image" v-model="image" />

    <!-- <img class="w-64" v-if="image" :src="image" alt="List image" />
    <input type="file" accept="image/*" name="listPicture" id="listPicture" @change="previewImg" /> -->
    <label for="listTag">🏷 แท็ก</label>
    <div class="flex gap-2">
      <input type="checkbox" name="op1" id="op1" value="อาหารเช้า" v-model="tag" />
      <label for="op1">อาหารเช้า</label>
      <input type="checkbox" name="op1" id="op1" value="อาหารเที่ยง" v-model="tag" />
      <label for="op1">อาหารเที่ยง</label>
      <input type="checkbox" name="op1" id="op1" value="อาหารเย็น" v-model="tag" />
      <label for="op1">อาหารเย็น</label>
    </div>
    <a class="font-bold underline underline-offset-2 cursor-pointer" @click="newTag">+ เพิ่มแท็กใหม่</a>
    <input type="text" v-if="newTagEnabled" />
    <button type="submit">💾 สร้างรายการใหม่</button>
  </form>
</template>
