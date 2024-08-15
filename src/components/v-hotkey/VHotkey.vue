<template>
  <kbd class="v-hotkey"><slot /></kbd>
</template>

<style>
.v-hotkey {
  border-radius: 4px;
  background-color: #333;
  aspect-ratio: 1 / 1;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #444;
  border-bottom-color: #555;
}
</style>