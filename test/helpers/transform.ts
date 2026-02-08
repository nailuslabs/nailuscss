import { convert } from '../../packages-engine/core/src/helpers';

describe('transform', () => {
  it('convert code', () => {
    expect(convert('const plugin = require(\'tailwindcss/plugin\')')).toEqual('const plugin = require(\'nailuscss/plugin\')');
    expect(convert('const colors = require(\'tailwindcss/colors\')')).toEqual('const colors = require(\'nailuscss/colors\')');
    expect(convert(`
      const resolveConfig = require('tailwindcss/resolveConfig');
      const defaultTheme = require('tailwindcss/defaultTheme');
      const typography = require('@tailwindcss/typography');
    `)).toEqual(`
      const resolveConfig = require('nailuscss/resolveConfig');
      const defaultTheme = require('nailuscss/defaultTheme');
      const typography = require('nailuscss/plugin/typography');
    `);
  });
});

