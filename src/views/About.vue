<script setup>
import { useCounterStore } from "../stores/counter";
import { userStore } from "../stores/user";
let store = useCounterStore();
let user = userStore();
</script>

<template>
  <div class="mt-3 mb-4 max-w-lg mx-auto space-y-4">
    <h1>เกี่ยวกับ</h1>
    <p>
      เว็บไซต์นี้ได้จัดทำเนื่องจากโปรเจควิชา
      <strong>Entrepreneur Spirit Incubation (ESI)</strong>
      โดยมีสมาชิกกลุ่ม 10 คน ดังนี้
    </p>
    <ul class="space-y-2 leading-7">
      <li>
        <strong>633040426-1</strong>
        นายอรรถโกวิท ผิวเหลือง
      </li>
      <li>
        <strong>623040019-3</strong>
        นายไอโฮ โสมนาม
      </li>
      <li>
        <strong>633040607-7</strong>
        นายเสฎฐวุฒิ นัตธิลม
      </li>
      <li>
        <strong>623040011-9</strong>
        นายประวีร์ ติรวีรขจร
      </li>
      <li>
        <strong>633040419-8</strong>
        นายพีรพัฒน์ ศิริภักดิ์
      </li>
      <li>
        <strong>613040283-5</strong>
        นายณภัทร บุญสว่าง
      </li>
      <li>
        <strong>623040607-6</strong>
        นายพัฒน์สันต์ โอฆะพนม
      </li>
      <li>
        <strong>633040620-5</strong>
        นายวีรพล อุ่นแสง
      </li>
      <li>
        <strong>633040621-3</strong>
        นายศิวกร บุญทศ
      </li>
      <li>
        <strong>643040739-1</strong>
        นายธัชชัย คำโศ
      </li>
    </ul>
  </div>
  <!--TEST PURPOSE-->
  <!--  <p>Count: {{ store.count }}</p>-->
  <!--  <button @click="store.increment()" class="bg-red-200 p-2">+</button>-->
  <!--  <button @click="store.decrement()" class="bg-amber-200 p-2">-</button>-->
</template>
