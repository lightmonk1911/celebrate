import example from './example';

describe('example test', () => {
  test('test should work', () => {
    expect(example(console.log)).toBe('done');
  });
});
