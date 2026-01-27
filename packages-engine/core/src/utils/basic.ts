export function isString(val: any): val is string {
  return typeof val === 'string';
}

export function isArray(val: any): val is any[] {
  return Array.isArray(val);
}

export function isObject(val: any): val is Record<string, any> {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

export function isFunction(val: any): val is Function {
  return typeof val === 'function';
}