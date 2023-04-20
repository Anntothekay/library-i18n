import React from 'react';
import { useTranslation } from 'react-i18next';

const books = [
  {
    id: '1',
    title: 'JavaScript - das umfassende Handbuch',
    isbn: '978-3836286299',
    release: 1632960000000,
    price: 49.9,
    pages: 1273,
  },
  {
    id: '2',
    title: 'Clean Code',
    isbn: '978-0132350884',
    release: 1217548800000,
    price: 29.09,
    pages: 464,
  },
  {
    id: '3',
    title: 'Design Patterns',
    isbn: '978-0201633610',
    release: 867715200000,
    price: 34.99,
    pages: 395,
  },
];

const List: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('title')}</h1>
      <table>
        <thead>
          <tr>
            <th>{t('list.title')}</th>
            <th>{t('list.isbn')}</th>
            <th>{t('list.release')}</th>
            <th>{t('list.price')}</th>
            <th>{t('list.pages')}</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
              <td>{book.release}</td>
              <td>{book.price}</td>
              <td>{t('list.pagesValue', { pages: book.pages })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
