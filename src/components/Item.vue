<template>
  <div class="item">
    <p><span>Address: </span>{{ display_name }}</p>
    <p><span>Rank: </span>{{ place_rank }}</p>
    <p><span>Type: </span>{{ type }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ data: { type: Object, required: true } });

const { display_name, place_rank, type } = props.data;
</script>

<style lang="scss" scoped>
.item {
  padding: 10px;
  border: 3px solid #25b09b;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  p {
    margin: 5px;
  }

  span {
    color: #25b09b;
    font-weight: bold;
  }
}
</style>
