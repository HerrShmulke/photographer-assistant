import { photoDirectory } from '../../stores/photo-directory-store';
import { workDirectory } from '../../stores/work-directory-store';
import { IImage } from './types/image';

export class ImageService {
  images = new Array<IImage>();

  async getImages() {
    if (photoDirectory.value === undefined) return;

    const blackListImages = await this.getAllImagesInWorkDirectory();

    this.images = [];

    for await (const entry of photoDirectory.value.values()) {
      if (entry.kind === 'file' && this.isImage(entry.name) && !blackListImages.includes(entry.name)) {
        const file = await entry.getFile();
        const imageUrl = await this.readImageFile(file);

        if (typeof imageUrl !== 'string') throw new Error('Не удалось получить изображение');

        this.images.push({ url: imageUrl, file });
      }
    }
  }

  private isImage(fileName: string) {
    const validExtensions = ['jpg', 'png'];

    const extension = fileName.split('.').at(-1);

    return validExtensions.some((validExtension) => validExtension === extension?.toLowerCase());
  }

  private readImageFile(file: File) {
    return new Promise<string | ArrayBuffer | null>((resolve) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);
    })
  }

  private async getAllImagesInWorkDirectory() {
    if (workDirectory.value === undefined) return new Array<string>();
    const result = new Array<string>();

    for await (const entry of workDirectory.value.values()) {
      if (entry.kind === 'directory') {
        for await (const entry2 of entry.values()) {
          if (entry2.kind === 'file' && this.isImage(entry2.name)) {
            result.push(entry2.name);
          }
        }
      }
    }

    return result;
  }
}