/* eslint-disable no-param-reassign */
const mutations = {
  setFlexItemToCustomWidth_MUTA(state, { rootState, payload: { parentIndex, isCustomWidth } }) {
    rootState.flexItemGroup[parentIndex]
      .isCustomWidth = isCustomWidth;
  },
  setCustomWidthValue_MUTA(state, { rootState, payload: { parentIndex, value } }) {
    rootState.flexItemGroup[parentIndex]
      .customWidth = value;
  },
  setCustomWidthUnits_MUTA(state, {
    rootState, payload: { parentIndex, measurementUnits },
  }) {
    rootState.flexItemGroup[parentIndex]
      .measurementUnits = measurementUnits;
  },
};

const actions = {
  setCustomWidth_STORE({ commit, rootState }, payload) {
    commit('setFlexItemToCustomWidth_MUTA', { rootState, payload });
    commit('setCustomWidthValue_MUTA', { rootState, payload });
    commit('setCustomWidthUnits_MUTA', { rootState, payload });
  },
  setCustomWidthUnits_STORE({ commit, rootState }, payload) {
    commit('setCustomWidthUnits_MUTA', { rootState, payload });
  },
};

export default {
  mutations,
  actions,
};
