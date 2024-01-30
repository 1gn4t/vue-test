<template lang="">
  <div class="list">
    <Loading v-if="store.loading" />
    <Error v-else-if="store.error">{{ store.error }}</Error>
    <Item v-else v-for="item in store.data" :key="item.place_id" :data="item" />
  </div>
</template>

<script setup lang="ts">
import Item from './Item.vue';
import Loading from './Loading.vue';
import Error from './Error.vue';
import { useMainStore } from '../stores/MainStore';

const store = useMainStore();
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
</style>
