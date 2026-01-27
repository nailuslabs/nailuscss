export class StringMap {
  private map: Map<string, any> = new Map();

  set(key: string, value: any): void {
    this.map.set(key, value);
  }

  get(key: string): any {
    return this.map.get(key);
  }

  has(key: string): boolean {
    return this.map.has(key);
  }

  delete(key: string): boolean {
    return this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }

  keys(): string[] {
    return Array.from(this.map.keys());
  }
}