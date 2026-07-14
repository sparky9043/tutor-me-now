import { describe, expect, it } from 'vitest'

describe('Generic truthy statement', () => {
  it('True must equal true', () => {
    expect(true).toEqual(true);
  });
});