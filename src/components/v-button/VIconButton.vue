<script setup lang="ts">
import VIcon from '../icons/VIcon.vue';
import { IconName } from '../icons/types/icon-name'

interface Props {
  name: IconName;
  width?: number;
  height?: number;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="v-icon-button">
    <VIcon :name="props.name" :width="props.width" :height="props.height" />
  </button>
</template>

<style>
.v-icon-button {
  background: transparent;
  padding: 4px;
  border-radius: 10px;
  border: none;
  color: #B2B2B3;
  cursor: pointer;
  transition: background .2s;
}

.v-icon-button:hover {
  background: #424243;
}
</style>