import {v4} from 'uuid';
export const addCard = (cat, text) => {
  const card = {id: v4(), text};
  return {
    type: "ADD_CARD",
    card,
    cat
  }
}
export const moveCard = (currentCat, nextCat, id) => {
  return {
    type: "MOVE_CARD",
    currentCat,
    nextCat,
    id
  }
}
