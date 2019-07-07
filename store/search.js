import { fullSearch } from "../utils/search";

export const state = () => ({
  isBusy: false,
  isError: false,
  searchText: "",
  results: []
});

export const mutations = {
  SET_BUSY(state, isBusy = true) {
    state.isBusy = isBusy;
  },
  SET_SEARCH_TEXT(state, text = "") {
    state.searchText = text;
  },
  SET_SEARCH_RESULTS(state, results = []) {
    state.results = results;
  }
};

export const actions = {
  searchText({ commit, dispatch }, text) {
    commit("SET_SEARCH_TEXT", text);

    if (text) {
      commit("SET_BUSY", true);
      fullSearch(text).then(response => {
        commit("SET_SEARCH_RESULTS", response.data.query.search);
        commit("SET_BUSY", false);

        const ids = response.data.query.search.map(result => result.title);
        dispatch("data/addEntities", ids, { root: true });
      });
    } else {
      commit("SET_SEARCH_RESULTS");
    }
  }
};
