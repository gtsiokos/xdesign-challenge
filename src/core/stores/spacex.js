import { createStore } from 'react-sweet-state';

import launchActions from '../launch/actions';

const initialState = {
  launch: {
    items: [],
    years: [],
  }
};

const actions = {
  ...launchActions,
};

export default createStore({initialState, actions});