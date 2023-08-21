const duplicates = require('./duplicates');

describe('findDuplicates', () => {
  it('should return findDuplicates', () => {
    expect(duplicates([1, 2, 3, 3, 2, 1])).toStrictEqual([3,2,1]);
  });
  it('should return findDuplicates', () => {
    expect(duplicates([1, 2, 3, 4, 3])).toStrictEqual([3]);
  });
});

