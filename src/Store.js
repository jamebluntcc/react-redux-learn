import {createStore} from 'redux';
import reducer from './reducer.js';

const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

const Store = createStore(reducer, initValues);

export default Store;
