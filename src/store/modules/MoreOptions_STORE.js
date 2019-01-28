/* eslint-disable no-param-reassign */

const mutations = {
  duplicateFlexItem_AtPrevIndex_MUTA(state, { rootState, parentIndex }) {
    if (rootState.flexItemGroup.length > 4) {
      console.log('max flex items reached');
      return;
    }
    const duplicatedFlexItem = JSON.parse(JSON.stringify(rootState.flexItemGroup[parentIndex]));
    if (parentIndex === 0) {
      rootState.flexItemGroup.unshift(duplicatedFlexItem);
    } else {
      rootState.flexItemGroup.splice(parentIndex, 0, duplicatedFlexItem);
    }
  },
  duplicateFlexItem_AtNextIndex_MUTA(state, { rootState, parentIndex }) {
    if (rootState.flexItemGroup.length > 4) {
      console.log('max flex items reached');
      return;
    }
    const duplicatedFlexItem = JSON.parse(JSON.stringify(rootState.flexItemGroup[parentIndex]));
    rootState.flexItemGroup.splice(parentIndex + 1, 0, duplicatedFlexItem);
  },

  toggleNestedFlexMargin_MUTA(state, { rootState, parentIndex }) {
    rootState.flexItemGroup[parentIndex].nested.nestedFlexMargin = !rootState
      .flexItemGroup[parentIndex].nested.nestedFlexMargin;
  },

  randomizeFlexItem_MUTA(state, { rootState, parentIndex }) {
    alert('randomize: ', parentIndex);
  },
};

const actions = {
  duplicateFlexItem_AtPrevIndex_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('duplicateFlexItem_AtPrevIndex_MUTA', { rootState, parentIndex });
  },
  duplicateFlexItem_AtNextIndex_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('duplicateFlexItem_AtNextIndex_MUTA', { rootState, parentIndex });
  },

  toggleNestedFlexMargin_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('toggleNestedFlexMargin_MUTA', { rootState, parentIndex });
  },

  randomizeFlexItem_STORE({ commit, rootState }, payload) {
    const parentIndex = payload;
    commit('randomizeFlexItem_MUTA', { rootState, parentIndex });
  },
};

export default {
  mutations,
  actions,
};
