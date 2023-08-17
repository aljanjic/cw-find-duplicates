const duplicates = require('./duplicates');

describe('findDuplicates', () => {
  it('should return findDuplicates', () => {
    expect(duplicates([1, 2, 3, 3, 2, 1])).toBe('findDuplicates');
  });
  it('should return findDuplicates', () => {
    expect(duplicates([1, 2, 3])).toBe('findDuplicates');
  });
});

