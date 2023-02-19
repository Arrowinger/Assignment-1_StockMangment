import { StatusCheckPipe } from './status-check.pipe';

describe('StatusCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
