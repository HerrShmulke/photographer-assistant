import { workDirectory } from '../../stores/work-directory-store';
import { IDirectory } from './types/directory';

export class DirectoryService {
  directories = new Array<IDirectory>();

  async getDirectories() {
    if (workDirectory.value === undefined) return;

    this.directories = [];

    for await (const entry of workDirectory.value.values()) {
      if (entry.kind === 'directory') {
        this.directories.push({
          name: entry.name,
          entry,
        });
      }
    }

    this.sortDirectories();
  }

  async createFile(dirname: string, file: File) {
    if (workDirectory.value === undefined) return;

    for await (const entry of workDirectory.value.values()) {
      if (entry.kind === 'directory' && entry.name === dirname) {
        const fileHandle = await entry.getFileHandle(file.name, {
          create: true
        });

        const stream = await fileHandle.createWritable();
        await stream.write(await file.arrayBuffer());
        await stream.close();
      }
    }
  }

  private sortDirectories() {
    this.directories = this.directories.sort((a, b) => a.name.localeCompare(b.name));
  }
}