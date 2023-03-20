import { BellAlertIcon } from '@heroicons/vue/24/outline';
<script setup>
import { BellAlertIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="absolute top-4 rounded shadow-lg flex justify-center gap-2.5 items-center overflow-x-hidden p-2 w-full max-w-sm border-l-4 border-amber-900 bg-amber-300 text-gray-700 cursor-pointer duration-300 hover:translate-y-4 hover:ease-out">
    <BellAlertIcon class="w-4 h-4 rounded-full border" />
    <h2 class="font-bold text-sm">Alert</h2>
    <span class="text-sm">
      You are not allow to visit this site.
      <strong>Please Login.</strong>
    </span>
  </div>
</template>
