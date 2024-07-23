import { ref } from "vue";
import { DirectoryService } from "../services/directory-service/directory-service";
import { IDirectory } from "src/services/directory-service/types/directory";

const directoryService = new DirectoryService();

export function useDirectories() {
  const directories = ref<IDirectory[]>(directoryService.directories);

  async function getDirectories() {
    await directoryService.getDirectories();

    directories.value = directoryService.directories;
  }

  async function createFile(dirname: string, file: File) {
    await directoryService.createFile(dirname, file);
  }

  return {
    directories,
    getDirectories,
    createFile
  }
}