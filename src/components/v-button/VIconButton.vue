<script setup lang="ts">
import VIcon from '../icons/VIcon.vue';
import { IconName } from '../icons/types/icon-name'

interface Emits {
  (e: 'animationend'): void;
}

interface Props {
  name: IconName;
  width?: number;
  height?: number;
  iconClass?: any;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function onAnimationend() {
  emit('animationend');
}
</script>

<template>
  <button class="v-icon-button">
    <VIcon :class="props.iconClass" :name="props.name" :width="props.width" :height="props.height" @animationend="onAnimationend" />
  </button>
</template>

<style>
.v-icon-button {
  background: transparent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #B2B2B3;
  cursor: pointer;
  transition: background .2s;
  width: 32px;
  height: 32px;
  padding: 0;
}

.v-icon-button:hover {
  background: #4A4A4D;
}
</style>