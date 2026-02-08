import colorString from 'color-string';

export type RGBA = [number, number, number, number?];

export function hsl2rgb(h: number, s: number, l: number): [number, number, number] {
  l /= 100;
  if (h >= 360) h %= 360;

  const c = (1 - Math.abs(2 * l - 1)) * (s / 100);
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c/2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c + m; g = x + m; b = m;
  } else if (60 <= h && h < 120) {
    r = x + m; g = c + m; b = m;
  } else if (120 <= h && h < 180) {
    r = m; g = c + m; b = x + m;
  } else if (180 <= h && h < 240) {
    r = m; g = x + m; b = c + m;
  } else if (240 <= h && h < 300) {
    r = x + m; g = m; b = c + m;
  } else if (300 <= h && h < 360) {
    r = c + m; g = m; b = x + m;
  }

  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255),
  ];
}

export function hwb2rgb(h: number, w: number, b: number): [number, number, number] {
  const rgb = hsl2rgb(h, 100, 50);

  for (let i = 0; i < 3; ++i) {
    let c = rgb[i] / 255;

    c *= 1 - w/100 - b/100;
    c += w/100;

    rgb[i] = Math.round(c * 255);
  }

  return rgb;
}

export function toRGBA(color: string): RGBA | undefined {
  if (/^hsla?/.test(color)) {
    const c = colorString.get.hsl(color);
    if (!c) return;
    return [...hsl2rgb(c[0], c[1], c[2]), c[3]];
  }

  if (/^rgba?/.test(color)) {
    const c = colorString.get.rgb(color);
    if (!c) return;
    return c as RGBA;
  }

  if (color.startsWith('hwb')) {
    const c = colorString.get.hwb(color);
    if (!c) return;
    return [...hwb2rgb(c[0], c[1], c[2]), c[3]];
  }

  const parsed = colorString.get(color)?.value;
  if (parsed && parsed.length >= 3) {
    return parsed as RGBA;
  }
}

export function toRGB(color: string): [number, number, number] | undefined {
  const rgba = toRGBA(color);
  if (!rgba) return;
  const [r, g, b] = rgba;
  return [r, g, b];
}

export function toColor(color_string: string): { color: string; opacity: string } {
  const rgba = toRGBA(color_string);

  const color = rgba
    ? rgba.slice(0, 3).join(', ')
    : color_string;

  const opacity =
    rgba && rgba[3] !== undefined
      ? rgba[3].toString()
      : '1';

  return { color, opacity };
}
