<script setup lang="ts">
import VIcon from '../icons/VIcon.vue';

interface Props {
  name: string;
}

const props = defineProps<Props>();

</script>

<template>
  <div class="directory-item">
    <!-- <img width="18" height="18" src="../../assets/folder.png" /> -->
    <VIcon class="directory-item__icon" name="Folder" :width="18" :height="18" />
    <span class="directory-item__text">{{ props.name }}</span>
  </div>
</template>

<style>
.directory-item {
  display: flex;
  align-items: center;
  column-gap: 4px;
}

.directory-item__text {
  text-overflow: ellipsis;
  overflow: hidden;
  text-wrap: nowrap;
  font-size: 13px;
}

.directory-item__icon {
  flex-shrink: 0;
}
</style>