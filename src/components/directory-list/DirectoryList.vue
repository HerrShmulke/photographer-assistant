<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDirectories } from '../../composables/useDirectories';
import DirectoryItem from '../directory-item/DirectoryItem.vue';
import VIconButton from '../v-button/VIconButton.vue';
import DirectoryItemEdit from '../directory-item/DirectoryItemEdit.vue';

const directory = useDirectories();

directory.getDirectories();

const directories = computed(() => directory.directories.value.map((folder, index) => ({
  name: folder.name,
  entry: folder.entry
})));

const isOpened = ref(true);

const iconClass = ref('');

function toggleOpenState() {
  isOpened.value = !isOpened.value;
  iconClass.value = 'bounce';
}

function onAnimationEnd() {
  iconClass.value = '';
}

const isDirectoryCreated = ref(false);

function createNewFolder() {
  isDirectoryCreated.value = true;
}
</script>

<template>
  <div class="directory-list" :class="{ 'directory-list--open': isOpened }">
    <VIconButton 
      :icon-class="iconClass" 
      class="directory-list__icon" 
      name="SidebarLeft" 
      :width="24" 
      :height="24" 
      @click="toggleOpenState" 
      @animationend="onAnimationEnd" 
    />

    <VIconButton
      class="directory-list__add-icon" 
      name="FolderBadgePlus"
      :width="32"
      :height="32"
      @click="createNewFolder"
    />
    
    <div v-if="isOpened" class="directory-list__container">
      <DirectoryItemEdit v-if="isDirectoryCreated" />
      <DirectoryItem v-for="(folder, index) in directories" :index="index" :name="folder.name" />
    </div>
  </div>
</template>

<style>
.directory-list {
  position: relative;
  width: max-content;
}

.directory-list__container {
  padding: 44px 16px;
  background-color: #3A3A3C;
  height: 100vh;
  width: 240px;
  display: flex;
  flex-direction: column;
}

.directory-list__icon {
  position: absolute;
  left: 16px;
  top: 6px;
}

.directory-list__add-icon {
  left: 48px;
  top: 6px;
  position: absolute;
}
</style>