import state from './state';
import { RootStateTypes } from './types';
import { MutationTree  } from 'vuex';

const mutations: MutationTree<RootStateTypes> = {
// tslint:disable-next-line: no-shadowed-variable
  CHANGE_NAME(state: RootStateTypes, payload: string) {
    state.name = payload;
  },
};

export default mutations;
