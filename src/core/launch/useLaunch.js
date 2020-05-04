import { createHook } from 'react-sweet-state';

import store from '../stores/spacex';

export default createHook(store, {selector: state => state.launch});