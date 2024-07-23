import { ref } from "vue";
import { ImageService } from "../services/image-service/image-service";
import { IImage } from "../services/image-service/types/image";

const imageService = new ImageService();

imageService.getImages();

export function useImages() {
  const images = ref<IImage[]>(imageService.images);

  async function getImages() {
    await imageService.getImages();
    images.value = imageService.images;
  }

  return {
    images,
    getImages
  }
}