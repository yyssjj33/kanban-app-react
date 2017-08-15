const tasks = (state, action) => {
  const {currentCat, card, nextCat, id} = action;
  switch (action.type) {
    case "ADD_CARD": 
      return {
        ...state,
        [currentCat]: [...state[currentCat], card]
      }
    case "MOVE_CARD":
      return {
        ...state,
        [currentCat]: state[currentCat].filter(c=>c.id!==id),
        [nextCat]: [...state[nextCat], ...state[currentCat].filter(c=>c.id===id)]
      }
    case "REMOVE_CARD":
      return {
        ...state,
        [currentCat]: state[currentCat].filter(c=>c.id!==id),
      }
    default:
      return state;
  }
}

export default tasks;
