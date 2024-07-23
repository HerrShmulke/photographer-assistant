export class TextService {
  getTextWidth(text: string, font: string): number {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context === null) return 0;

    context.font = font;
    const metrics = context?.measureText(text);
    return metrics?.width ?? 0;
  }
}