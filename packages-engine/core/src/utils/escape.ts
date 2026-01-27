export function cssEscape(str: string): string {
  return str.replace(/[^\w-]/g, (char) => {
    return '\\' + char;
  });
}