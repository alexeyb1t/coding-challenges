const linkedList = {
  id: 1,
  next: {
    id: 2,
    next: {
      id: 3,
      next: {
        id: 4,
        next: {
          id: 5,
          next: null
        }
      }
    }
  }
};

export function getLastThreeOfLinkedList(list) {
  let currentNode = list.next;

  while (currentNode.next.next.next) {
    currentNode = currentNode.next;
  }

  return [currentNode.id, currentNode.next.id, currentNode.next.next.id];
}
