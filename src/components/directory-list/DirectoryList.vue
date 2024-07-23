<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDirectories } from '../../composables/useDirectories';
import DirectoryItem from '../directory-item/DirectoryItem.vue';
import VIconButton from '../v-button/VIconButton.vue';

const directory = useDirectories();

directory.getDirectories();

const directories = computed(() => directory.directories.value.map((folder, index) => ({
  name: `[${index + 1}] ${folder.name}`,
  entry: folder.entry
})));

const isOpened = ref(true);

function toggleOpenState() {
  isOpened.value = !isOpened.value;
}
</script>

<template>
  <div class="directory-list" :class="{ 'directory-list--open': isOpened }">
    <VIconButton class="directory-list__icon" name="ChevronRight2" :width="24" :height="24" @click="toggleOpenState" />

    <div v-if="isOpened" class="directory-list__container">
      <DirectoryItem v-for="folder in directories" :name="folder.name" :folder-handle="folder.entry" />
    </div>
  </div>
</template>

<style>
.directory-list {
  position: relative;
  width: max-content;
}

.directory-list__container {
  height: 100vh;
  width: 200px;
  padding: 10px;
  background-color: #242526;
  border-right: 1px solid #000;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.directory-list--open .directory-list__icon {
  transform: scale(-1);
}

.directory-list__icon {
  position: absolute;
  right: -34px;
  top: 10px;
}
</style>