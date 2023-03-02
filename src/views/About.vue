<script setup>
import { useCounterStore } from "../stores/counter";
import { userStore } from "../stores/user";
let store = useCounterStore();
let user = userStore();
</script>

<template>
  <div class="mt-3 mb-4 max-w-lg mx-auto space-y-4">
    <h1>เกี่ยวกับ</h1>
    <p>เว็บไซต์นี้ได้จัดทำเนื่องจากโปรเจควิชา Entrepreneur Spirit Incubation (ESI) โดยมีสมชิกกลุ่มดังนี้</p>
    <ul>
      <li>นายควย 62xxxxxxx-x</li>
      <li>นายควย 63xxxxxxx-x</li>
      <li>นายควย 64xxxxxxx-x</li>
      <li>นายควย 65xxxxxxx-x</li>
      <li>นายควย 66xxxxxxx-x</li>
      <li>นายควย 67xxxxxxx-x</li>
    </ul>
  </div>
<!--TEST PURPOSE-->
<!--  <p>Count: {{ store.count }}</p>-->
<!--  <button @click="store.increment()" class="bg-red-200 p-2">+</button>-->
<!--  <button @click="store.decrement()" class="bg-amber-200 p-2">-</button>-->
</template>
