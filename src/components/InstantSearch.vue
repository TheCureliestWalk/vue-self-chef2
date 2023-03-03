<script setup>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

const searchClient = algoliasearch(
        'YDL2PFZSFR',
        '8b4da0f7eda0ee4158af58f6ab80dd0a');

let searchInput = '';

</script>

<template>
  <h1 class="my-4 text-center">ค้นหาเมนู</h1>
  <ais-instant-search :search-client="searchClient" index-name="self-chef" class="max-w-md mx-auto">
    <ais-search-box placeholder="พริก, ผัดกะเพรา, ..."/>
    <ais-hits v-slot:item="{ item }">
          <h3>{{ item.ชื่อวัตถุดิบ }}</h3>
    </ais-hits>
  </ais-instant-search>
</template>
