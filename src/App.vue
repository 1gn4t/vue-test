<template lang="">
  <header class="header">
    <img src="../public/vite.svg" alt="Logo" class="header-logo" />
    <h2>Search Test App</h2>
    <search />
  </header>
  <main class="app">
    <h3>Result Search</h3>
    <list />
  </main>
</template>

<script setup lang="ts">
import Search from './components/Search.vue';
import List from './components/List.vue';
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #25b09b;
}

.header-logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
