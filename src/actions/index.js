export function selectBook(book){
  //action log selectBook is an action object withs property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
