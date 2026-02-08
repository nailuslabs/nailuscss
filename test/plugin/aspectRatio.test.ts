import { Processor } from '../../packages-engine/core/src/lib';
import aspectRatio from '../../packages-engine/core/src/plugin/aspect-ratio';

describe('aspect ratio plugin', () => {
  it('interpret test', () => {
    const processor = new Processor();
    processor.loadPlugin(aspectRatio);
    const classes = `
      aspect-none
      aspect-auto
      aspect-square
      aspect-video
      aspect-w-16
      aspect-h-9
      aspect-9/16
      `;
    const utility = processor.interpret(classes);
    expect(utility.ignored.length).toEqual(0);
    expect(utility.styleSheet.build()).toMatchSnapshot('aspect-ratio base');
  });

  it('works with prefix', () => {
    const processor = new Processor({ prefix: 'nailus-' });
    processor.loadPlugin(aspectRatio);
    const classes = `
      nailus-aspect-none
      nailus-aspect-auto
      nailus-aspect-square
      nailus-aspect-video
      nailus-aspect-w-16
      nailus-aspect-h-9
      sm:nailus-aspect-9/16
      `;
    const utility = processor.interpret(classes);
    expect(utility.ignored.length).toEqual(0);
    expect(utility.styleSheet.build()).toMatchSnapshot('aspect-ratio with prefix');
  });

  it('add completions', () => {
    const processor = new Processor();
    processor.loadPlugin(aspectRatio);
    expect(processor._plugin.completions).toMatchSnapshot('completions');
  });
});

