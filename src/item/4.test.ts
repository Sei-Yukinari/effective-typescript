import { DB, Author, getAuthors } from './4';

describe('getAuthors function', () => {
  it('returns formatted author objects from database rows', () => {
    const authorsData: Author[] = [
      { first: 'Toni', last: 'Morrison' },
      { first: 'Maya', last: 'Angelou' },
    ];

    const db: DB = {
      runQuery: () => authorsData,
    };

    const authors = getAuthors(db);
    expect(authors).toEqual(authorsData);
  });
});
