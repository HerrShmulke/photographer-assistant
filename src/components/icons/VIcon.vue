<script setup lang="ts">
import { computed, ComponentInstance } from 'vue';
import ChevronRight2 from './ChevronRight2.vue';
import Folder from './Folder.vue';
import { IconName } from './types/icon-name';
import SidebarLeft from './SidebarLeft.vue';

interface Props {
  name: IconName;
  width?: number;
  height?: number;
}

const props = defineProps<Props>();

const icons: Record<IconName, ComponentInstance<any>> = {
  'ChevronRight2': ChevronRight2,
  'Folder': Folder,
  'SidebarLeft': SidebarLeft
};

const icon = computed(() => icons[props.name]);
const width = computed(() => `${props.width ?? 24}px`);
const height = computed(() => `${props.height ?? 24}px`);
</script>

<template>
<div 
  class="v-icon" 
  :style="{ 
    '--icon-width': width, 
    '--icon-height': height 
  }"
>
  <component :is="icon" />
</div>
</template>

<style>
.v-icon {
  width: var(--icon-width);
  height: var(--icon-height);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>