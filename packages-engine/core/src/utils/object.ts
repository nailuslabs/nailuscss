export function objectToString(obj: Record<string, any>): string {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
}

export function mergeObjects(...objects: Record<string, any>[]): Record<string, any> {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}