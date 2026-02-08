import forms from '../../packages-engine/core/src/plugin/forms';
import { Processor } from '../../packages-engine/core/src/lib';
import { writeFileSync } from 'fs';

describe('forms plugin', () => {
  it('preflight', () => {
    const processor = new Processor();
    processor.loadPlugin(forms);
    const css = processor.preflight(undefined, false, false, true).build();
    writeFileSync('forms.css', css);
  });
});

