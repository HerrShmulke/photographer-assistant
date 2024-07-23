<script setup lang="ts">
import VButton from '../v-button/VButton.vue';
import VAlert from '../v-alert/VAlert.vue';
import { workDirectory } from '../../stores/work-directory-store';
import folder from '../../assets/folder.png';

async function selectDirectory() {
  try {
    workDirectory.value = await window.showDirectoryPicker({ mode: 'readwrite', id: 'work' });
  } catch {}
}
</script>

<template>
  <VAlert :img="folder" title="Выберите рабочую папку" description="Выберите папку, куда будут сохраняться истории">
    <VButton block @click="selectDirectory">
      Выбрать папку
    </VButton>
  </VAlert>
</template>

<style>
.select-working-directory-window__error {
  color: #FE5F57;
  text-align: center;
}

.select-working-directory-window__img {
  width: 64px;
}
</style>