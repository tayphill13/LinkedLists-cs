import LinkedList from '../src/linked-list.js';

describe('LinkedList', () => {

  test('it should construct a linked list with a head property', () => {
      let linkedList = new LinkedList();
      expect(linkedList.head).toEqual(null);
  });

  test('LinkedList.prototype.insertLast() should add a node at the end if a linked list has no head', () => {
    let linkedList = new LinkedList();
    linkedList.insertLast("head");
    expect(linkedList.head.data).toEqual("head");
  })
});