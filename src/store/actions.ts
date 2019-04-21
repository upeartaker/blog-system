import state from './state';
import { RootStateTypes } from './types';
import { ActionTree } from 'vuex';

const actions: ActionTree<RootStateTypes, any> = {
// tslint:disable-next-line: no-shadowed-variable
  CHANGE_NAME_ASYNC({ commit, state: RootStateTypes}, data: string) {
    commit('SET_AUTHOR', data);
  }
}

export default actions;
