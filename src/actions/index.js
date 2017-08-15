import {v4} from 'uuid';
export const addCard = (currentCat, text) => {
  const card = {id: v4(), text};
  return {
    type: "ADD_CARD",
    card,
    currentCat
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

export const removeCard = (currentCat, id) => {
  return {
    type: "REMOVE_CARD",
    id,
    currentCat
  }
}
