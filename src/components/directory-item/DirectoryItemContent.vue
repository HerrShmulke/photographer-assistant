<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core';
import VHotkey from '../v-hotkey/VHotkey.vue';
import { computed } from 'vue';

interface Props {
  text: string;
  hotkey: number;
}

const props = defineProps<Props>();

const { meta } = useMagicKeys();

const isShowHotKeys = computed(() => meta.value);
</script>

<template>
  <div class="directory-item-content">
    <span class="directory-item-content__text">{{ props.text }}</span>
    <span class="directory-item-content__hotkey" :class="{'directory-item-content__hotkey--show': isShowHotKeys}">
      <VHotkey>⌘</VHotkey>
      <VHotkey>{{ props.hotkey }}</VHotkey>
    </span>
  </div>
</template>

<style>
.directory-item-content {
  display: flex;
  font-size: 13px;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
  overflow: hidden;
  column-gap: 4px;
}

.directory-item-content__hotkey > * {
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
}

.directory-item-content__hotkey {
  opacity: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  column-gap: 4px;
}

.directory-item-content__hotkey--show {
  opacity: 1;
}

.directory-item-content__text {
  text-overflow: ellipsis;
  overflow: hidden;
  text-wrap: nowrap;
  display: block;
  flex-grow: 1;
  white-space: nowrap;
  min-width: 0;
}
</style>