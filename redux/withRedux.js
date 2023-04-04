// withRedux.js
import { createWrapper } from 'next-redux-wrapper';
import store from './store';

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper;
