<script setup lang="ts">
import VButton from '../v-button/VButton.vue';
import { photoDirectory } from '../../stores/photo-directory-store';
import { ref } from 'vue';
import VAlert from '../v-alert/VAlert.vue';
import photos from '../../assets/photos.png';

const errorText = ref('');

async function selectDirectory() {
  try {
    photoDirectory.value = await window.showDirectoryPicker({ id: 'photo' });
  } catch {
    errorText.value = 'Папка не выбрана';
  }
}
</script>

<template>
  <VAlert 
    :img="photos"
    title="Импортируйте фотографии" 
    description="Выберите папку, откуда будут импортированы фотографии"
  >
    <VButton block @click="selectDirectory">
      Выбрать папку
    </VButton>
  </VAlert>
</template>

<style>
.select-photo-directory-window__error {
  color: #FE5F57;
  text-align: center;
}

.select-photo-directory-window__img {
  width: 64px;
}
</style>