<script setup lang="ts">
import { computed } from 'vue';
import VWindow from '../v-window/VWindow.vue';

interface Props {
  img: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();

const src = computed(() => new URL(props.img, import.meta.url).href);
</script>

<template>
  <VWindow class="v-alert">
    <img class="v-alert__img" width="64" height="64" :src="src" />
    
    <div class="v-alert__info">
      <span class="v-alert__title">{{ props.title }}</span>
      <span class="v-alert__description">{{ props.description }}</span>
    </div>

    <div class="v-alert__actions">
      <slot />
    </div>
  </VWindow>
</template>

<style>
.v-alert {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
}

.v-alert__info {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
}

.v-alert__title {
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
}

.v-alert__description {
  font-size: 11px;
  line-height: 14px;
}

.v-alert__actions {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  width: 100%;
}
</style>