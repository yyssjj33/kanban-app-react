const initState = {
  todo: [],
  progress: [],
  review: [],
  done: []
}

const tasks = (state=initState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      const {cat, card} = action;
      const newCards = [...state[cat], card];
      return {
        ...state,
        [cat]: newCards
      }
    case "MOVE_CARD":
      const {currentCat, nextCat, id} = action;
      const newCurrentCards = state[currentCat].filter(c=>c.id!==id);
      const newNextCards = [...state[nextCat], ...state[currentCat].filter(c=>c.id===id)];
      return {
        ...state,
        [currentCat]: newCurrentCards,
        [nextCat]: newNextCards
      }
    default:
      return state;
  }
}

export default tasks;
