<script setup lang="ts">
import { useImages } from '../../composables/useImages';
import { computed, ref } from 'vue';
import { useWindowSize, onKeyStroke } from '@vueuse/core'
import { useDirectories } from '../../composables/useDirectories';

const { height } = useWindowSize();

const image = useImages();
const directory = useDirectories();

const images = computed(() => image.images.value);
const imageIndex = ref(0);
const currentImage = computed(() => images.value[imageIndex.value]);
const hasImage = computed(() => currentImage.value !== undefined);

image.getImages();

onKeyStroke(async (e) => {
  if (e.metaKey) {
    const index = Number(e.key) - 1;

    if (directory.directories.value[index] === undefined) return;

    const dirname = directory.directories.value[index];

    directory.createFile(dirname.name, currentImage.value.file);

    e.preventDefault();
    
    await image.getImages();

    if (currentImage.value === undefined) {
      imageIndex.value = image.images.value.length - 1;
    }
  }

  if (e.code === 'ArrowRight') {
    e.preventDefault();
    imageIndex.value = (imageIndex.value + 1) % images.value.length;
  }

  if (e.code === 'ArrowLeft') {
    e.preventDefault();
    imageIndex.value = imageIndex.value - 1 < 0 ? images.value.length -1 : imageIndex.value - 1;
  }
});

const imageHeight = computed(() => height.value - 20);
</script>

<template>
  <div class="image-viewer">
    <img v-if="hasImage" class="image-viewer__image" :height="imageHeight" :src="currentImage.url" />
  </div>
</template>

<style>
.image-viewer {
  padding: 10px 20px;
}

.image-viewer__image {
  display: block;
}
</style>