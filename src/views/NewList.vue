<script setup>
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import toastr from "toastr/toastr";

let newList = ref();
let listDescription = ref();
let image = ref();
let tag = ref();
const previewImg = (event) => {
  image.value = URL.createObjectURL(event.target.files[0]);
  console.log(image);
};

const onSubmitEvent = async () => {
  let imageFile = document.querySelector("#listPicture").files[0];
  const fileExt = imageFile.name.split(".").pop();
  const filePath = `${Math.random()}.${fileExt}`;
  const { error } = await supabase.storage.from("foods").upload(filePath, imageFile, {
    cacheControl: '3600',
    upsert: true
  });
  if (error) {
    throw error;
  }

  const { data } = await supabase.from('foods').insert({
    name: newList.value,
    description: listDescription.value,
    picture_url: filePath
  })
  if (data) {
    toastr.success('เพิ่มรายการสำเร็จ!');
  }
};
</script>

<template>
  <h1>สร้างรายการใหม่</h1>
  <form @submit.prevent="onSubmitEvent" class="form-control">
    <label for="newList">ชื่อรายการ</label>
    <input type="text" id="newList" name="newList" v-model="newList" />
    <label for="listDescription">คำอธิบาย</label>
    <textarea name="listDescription" id="listDescription" cols="30" rows="10" v-model="listDescription"></textarea>

    <label for="listPicture">รูปภาพ</label>
    <img class="w-64" v-if="image" :src="image" alt="List image" />
    <input type="file" accept="image/*" name="listPicture" id="listPicture" @change="previewImg" />
    <label for="listTag">แท็ก</label>
    <div class="flex gap-2">
      <input type="checkbox" name="op1" id="op1" />
      <label for="op1">ยังไม่มี</label>
    </div>
    <button type="submit">สร้างรายการใหม่</button>
  </form>
</template>
