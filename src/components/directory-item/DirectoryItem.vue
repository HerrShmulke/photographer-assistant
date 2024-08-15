<script setup lang="ts">
import VIcon from '../icons/VIcon.vue';
import DirectoryItemContent from './DirectoryItemContent.vue';

interface Props {
  name: string;
  index: number;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="directory-item">
    <VIcon class="directory-item__icon" name="Folder" :width="18" :height="18" />

    <DirectoryItemContent :text="props.name" :hotkey="props.index + 1" />
  </div>
</template>

<style>
.directory-item {
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
}

.directory-item:hover {
  background-color: #4A4A4D;
}

.directory-item__icon {
  flex-shrink: 0;
  color: #2198E9;
}
</style>