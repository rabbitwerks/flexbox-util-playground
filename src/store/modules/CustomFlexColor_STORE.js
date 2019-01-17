/* eslint-disable no-param-reassign */

const mutations = {
  setFlexParentColor_MUTA(state, { rootState, payload: { parentIndex, newValue } }) {
    rootState.flexItemGroup[parentIndex].customColor = newValue;
  },
  setNestedFlexColor_MUTA(state, { rootState, payload: { parentIndex, nestedIndex, newValue } }) {
    state.flexItemGroup[parentIndex].nested.nestedFlexGroup[nestedIndex].customColor = newValue;
  },

};

const actions = {
  setFlexParentColor_STORE({ commit, rootState }, payload) {
    commit('setFlexParentColor_MUTA', { rootState, payload });
  },
  setNestedFlexColor_STORE({ commit, rootState }, payload) {
    commit('setNestedFlexColor_MUTA', { rootState, payload });
  },
};

export default {
  mutations,
  actions,
};
