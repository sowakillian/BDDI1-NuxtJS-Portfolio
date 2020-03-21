export const state = () => ({
  indexAnimations: {
    titleVisible: false,
    overlayHidden: false,
    otherAnimations: false,
  }
});

export const mutations = {
  CHANGE_INDEXANIMATION_TITLEVISIBLE_STATE (state, data) {
    state.indexAnimations.titleVisible = data;
  },

  CHANGE_INDEXANIMATION_OVERLAYHIDDEN_STATE (state, data) {
    state.indexAnimations.overlayHidden = data;
  },

  CHANGE_INDEXANIMATION_OTHERANIMATIONS_STATE (state, data) {
    state.indexAnimations.otherAnimations = data;
  },
};

