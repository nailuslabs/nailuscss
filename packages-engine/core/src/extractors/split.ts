export function splitExtractor(content: string): string[] {
  return content.match(/[^\s]+/g) || [];
}