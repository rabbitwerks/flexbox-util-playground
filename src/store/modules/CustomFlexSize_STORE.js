/* eslint-disable no-param-reassign */
const mutations = {
  // eslint-disable-next-line object-curly-newline
  setFlexItemToCustomFlexSize_MUTA(state, {
    rootState, payload: { parentIndex, isCustomFlexSize } }) {
    rootState.flexItemGroup[parentIndex]
      .isCustomFlexSize = isCustomFlexSize;
  },
  setCustomFlexSizeValue_MUTA(state, { rootState, payload: { parentIndex, value } }) {
    rootState.flexItemGroup[parentIndex]
      .customFlexSize = value;
  },
  setCustomFlexSizeUnits_MUTA(state, {
    rootState, payload: { parentIndex, measurementUnits },
  }) {
    rootState.flexItemGroup[parentIndex]
      .measurementUnits = measurementUnits;
  },
};

const actions = {
  setCustomFlexSize_STORE({ commit, rootState }, payload) {
    commit('setFlexItemToCustomFlexSize_MUTA', { rootState, payload });
    commit('setCustomFlexSizeValue_MUTA', { rootState, payload });
    commit('setCustomFlexSizeUnits_MUTA', { rootState, payload });
  },
  setCustomFlexSizeUnits_STORE({ commit, rootState }, payload) {
    commit('setCustomFlexSizeUnits_MUTA', { rootState, payload });
  },
};

export default {
  mutations,
  actions,
};
