import tasks from '../reducers/tasks';
import {createStore} from 'redux';
import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

let persistedState;
const ls = localStorage.getItem("tasks")
if (ls) {
  persistedState = JSON.parse(ls);
} else {
  persistedState = {
    todo: [],
    progress: [],
    review: [],
    done: []
  };
}

const store = createStore(tasks, persistedState);

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState()))
})

export default store;