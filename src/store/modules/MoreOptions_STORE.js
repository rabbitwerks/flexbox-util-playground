function createRandomNumber(num, startAtOne) {
  const randomNumber = Math.floor(Math.random() * num);
  if (startAtOne) {
    const plusOneRandom = randomNumber + 1;
    return plusOneRandom;
  }
  return randomNumber;
}

function randomFlexDirection() {
  if (createRandomNumber(4, false) === 0) {
    return 'flexdir-row';
  }
  if (createRandomNumber(4, false) === 1) {
    return 'flexdir-col';
  }
  if (createRandomNumber(4, false) === 2) {
    return 'flexdir-rowrev';
  }
  return 'flexdir-colrev';
}


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

  randomizeFlexItem_MUTA(state, { rootState, parentIndex, randomFlexItem }) {
    rootState.flexItemGroup.splice(parentIndex, 1);
    rootState.flexItemGroup.splice(parentIndex, 0, randomFlexItem);
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
    const randomColor = () => {
      const r = createRandomNumber(255, false);
      const g = createRandomNumber(255, false);
      const b = createRandomNumber(255, false);
      return `rgb(${r}, ${g}, ${b})`;
    };
    const isNestedFlex100Start = createRandomNumber(100, true);
    const randomNestedFlexGroup = [];
    let isNestedFlex = false;
    if (isNestedFlex100Start % 2 === 1) {
      isNestedFlex = true;
      const randomNestedFlexItemNumber = createRandomNumber(4, true);
      for (let i = 0; i < randomNestedFlexItemNumber; i += 1) {
        randomNestedFlexGroup.push({
          highlightActive: false,
          flex: createRandomNumber(20, true),
          customColor: randomColor(),
          pixelWidth: 0,
          pixelHeight: 0,
        });
      }
    }

    const randomFlexItem = {
      flex: createRandomNumber(20, true),
      highlightActive: false,
      isCustomFlexSize: false,
      customColor: randomColor(),
      customFlexSize: 0,
      measurementUnits: 'px',
      pixelWidth: 0,
      pixelHeight: 0,
      nested: {
        hasNestedFlexbox: isNestedFlex,
        nestedFlexMargin: true,
        nestedFlexGroup: randomNestedFlexGroup,
        nestedFlexDirection: randomFlexDirection(),
      },
    };

    commit('randomizeFlexItem_MUTA', { rootState, parentIndex, randomFlexItem });
  },
};

export default {
  mutations,
  actions,
};
