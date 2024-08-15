<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import VIcon from '../icons/VIcon.vue';

interface Emits {
  (e: 'blur', name: string): void;
}

const emit = defineEmits<Emits>();

const name = ref('');

const nameInputRef = ref();

function onBlur() {
  emit('blur', name.value);
}

onMounted(() => {
  nameInputRef.value?.focus();
});
</script>

<template>
  <div class="directory-item-edit">
    <VIcon class="directory-item-edit__icon" name="Folder" :width="18" :height="18" />

    <input v-model="name" ref="nameInputRef" class="directory-item-edit__input" @blur="onBlur" />
  </div>
</template>

<style>
.directory-item-edit {
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #4A4A4D;
}

.directory-item-edit__input {
  width: 100%;
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  border: none;
  color: #EAEAEB;
  font-size: 13px;
}

.directory-item-edit__icon {
  flex-shrink: 0;
  color: #2198E9;
}
</style>