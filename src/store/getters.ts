import state from './state';
import { RootStateTypes } from './types';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootStateTypes, any> = {
// tslint:disable-next-line: no-shadowed-variable
  name: (state: RootStateTypes) => state.name,
};

export default getters;
