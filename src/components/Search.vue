<template lang="">
  <form @submit.prevent>
    <label>
      <input
        class="input"
        type="text"
        placeholder="Search"
        v-model="searchStr"
        @keyup="fetch(searchStr)"
      />
    </label>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from '../stores/MainStore';
import { debounce } from '../utils/debounce.ts';

const searchStr = ref('');
const fetchData = useMainStore().fetchData;

const fetch = debounce(fetchData, 500);
</script>

<style lang="scss" scoped>
.input {
  padding: 10px 15px;
  border: 1px solid 25b09b;
}
</style>
