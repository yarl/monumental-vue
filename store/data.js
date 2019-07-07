import { getEntities } from "../utils/search";

export const state = () => ({
  entities: {}
});

export const mutations = {
  ADD_ENTITIES(state, entities = {}) {
    state.entities = {
      ...state.entities,
      ...entities
    };
  }
};

export const actions = {
  addEntities({ commit }, ids = []) {
    getEntities(ids).then(response => {
      commit("ADD_ENTITIES", response.data.entities);
    });
  }
};
