<script setup lang="ts">
interface Props {
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  block: false,
});
</script>

<template>
  <button class="v-button" :class="{ 'v-button--block': props.block }">
    <slot />
</button>
</template>

<style>
.v-button {
  border-radius: 12px;
  background-color: #1472D5;
  border: none;
  box-shadow: 0 -1px 0 #5EA3EE;
  padding: 8px;
  color: #EAEAEB;
  cursor: pointer;
  transition: background .1s linear;
}

.v-button--block {
  width: 100%;
}

.v-button:active {
  background-color: #2198E9;
}
</style>