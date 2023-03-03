<template>
  <ais-instant-search :search-client="searchClient" index-name="self-chef">
    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <h2>{{ item.ชื่อวัตถุดิบ }}</h2>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        'YDL2PFZSFR',
        '8b4da0f7eda0ee4158af58f6ab80dd0a'
      ),
    };
  },
};
</script>
