<script setup lang="ts">
import { computed } from 'vue';
import SelectWorkingDirectoryWindow from './components/select-working-directory-window/SelectWorkingDirectoryWindow.vue';
import { workDirectory } from './stores/work-directory-store';
import { photoDirectory } from './stores/photo-directory-store';
import SelectPhotoDirectoryWindow from './components/select-photo-directory-window/SelectPhotoDirectoryWindow.vue';
import DirectoryList from './components/directory-list/DirectoryList.vue';
import ImageViewer from './components/image-viewer/ImageViewer.vue';

// const stories = ref<{ name: string }[]>([]);
// const dirName = ref('');
// const directory = ref<FileSystemDirectoryHandle | undefined>();

const isWorkingDirectoryNotSelected = computed(() => workDirectory.value === undefined);
const isPhotoDirectoryNotSelected = computed(() => photoDirectory.value === undefined);

// async function open() {
//   directory.value = await window.showDirectoryPicker();
//   await updateDirs();
// }

// async function createDir() {
//   if (directory.value === undefined) return;

//   await directory.value.getDirectoryHandle(dirName.value, { create: true });
//   await updateDirs();
// }

// async function updateDirs() {
//   if (directory.value === undefined) return;

//   stories.value = [];

//   for await (const entry of directory.value.values()) {
//     if (entry.kind === 'directory') {
//       stories.value.push({ name: entry.name });
//     }
//   }
// }

const isAllDirectoryExists = computed(() => isWorkingDirectoryNotSelected.value || isPhotoDirectoryNotSelected.value);
</script>

<template>
  <div v-if="isAllDirectoryExists" class="app">
    <SelectWorkingDirectoryWindow v-if="isWorkingDirectoryNotSelected" class="app__select-directory" />
    <SelectPhotoDirectoryWindow v-else-if="isPhotoDirectoryNotSelected" class="app__select-directory" />
  </div>
  <div v-else class="app-v2">
    <DirectoryList />
    <ImageViewer />
  </div>
</template>

<style>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}

.app-v2 {
  display: grid;
  grid-template-columns: max-content 1fr;
}

.app__select-directory {
  width: 450px;
}
</style>