const duplicates = require('./duplicates');

describe('findDuplicates', () => {
  it('[1, 2, 3, 3, 2, 1] should return [3,2,1]', () => {
    expect(duplicates([1, 2, 3, 3, 2, 1])).toStrictEqual([3,2,1]);
  });
  it('[1, 2, 3, 4, 3 should return [3]', () => {
    expect(duplicates([1, 2, 3, 4, 3])).toStrictEqual([3]);
  });
  it('[1, 2, 3, 4, 5] should return []', () => {
    expect(duplicates([1, 2, 3, 4, 5])).toStrictEqual([]);
  });
  it( "['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'] should return [4, 3, 'zut']", () => {
    expect(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut'])).toStrictEqual([4, 3, 'zut']);
  });
});

