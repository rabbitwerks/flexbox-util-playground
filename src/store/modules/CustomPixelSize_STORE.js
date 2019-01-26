/* eslint-disable no-param-reassign */
const mutations = {
  // eslint-disable-next-line object-curly-newline
  setFlexItemToCustomPixelSize_MUTA(state, {
    rootState, payload: { parentIndex, isCustomPixelSize } }) {
    rootState.flexItemGroup[parentIndex]
      .isCustomPixelSize = isCustomPixelSize;
  },
  setCustomPixelSizeValue_MUTA(state, { rootState, payload: { parentIndex, value } }) {
    rootState.flexItemGroup[parentIndex]
      .customPixelSize = value;
  },
  setCustomPixelSizeUnits_MUTA(state, {
    rootState, payload: { parentIndex, measurementUnits },
  }) {
    rootState.flexItemGroup[parentIndex]
      .measurementUnits = measurementUnits;
  },
};

const actions = {
  setCustomPixelSize_STORE({ commit, rootState }, payload) {
    commit('setFlexItemToCustomPixelSize_MUTA', { rootState, payload });
    commit('setCustomPixelSizeValue_MUTA', { rootState, payload });
    commit('setCustomPixelSizeUnits_MUTA', { rootState, payload });
  },
  setCustomPixelSizeUnits_STORE({ commit, rootState }, payload) {
    commit('setCustomPixelSizeUnits_MUTA', { rootState, payload });
  },
};

export default {
  mutations,
  actions,
};
