const state = {
  fields: [
    {
      id: 1,
      name: "A",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 2,
      name: "B",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 3,
      name: "C",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 4,
      name: "D",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 5,
      name: "E",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 6,
      name: "F",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 7,
      name: "G",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 8,
      name: "H",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 9,
      name: "I",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
    {
      id: 10,
      name: "J",
      value: 3,
      valueHistory: [],
      sign: "",
      generating: false,
      sesion: [],
    },
  ],
};

const getters = {
  allFields: (state) => {
    return state.fields;
  },
};
const actions = {
  randomize({ commit, state }) {
    this.timer = setInterval(() => {
      commit("setValue");
    }, 2000);

    if (state.fields[0].sign) {
      clearInterval(this.timer);
    }
  },
  togleRandomize({ commit }, id) {
    commit("setGenerating", id);
  },
  stopRandomize({ commit }) {
    commit("stopGenerating");
  },
  startRandomize({ commit }) {
    commit("startGenerating");
  },
};
const mutations = {
  setValue: (state) => {
    for (let i = 0; i < state.fields.length; i++) {
      if (state.fields[i].generating) {
        let sign = Math.random() > 0.5 ? "-" : "+";
        let random = Math.floor(Math.random() * 2) + 1;
        sign === "-"
          ? ((state.fields[i].value = state.fields[i].value - random),
            (state.fields[i].sign = "-"))
          : ((state.fields[i].value = state.fields[i].value + random),
            (state.fields[i].sign = "+"));
        state.fields[i].sesion.push("s");
        state.fields[i].valueHistory.push(state.fields[i].value);
      }
    }
  },
  setGenerating: (state, id) => {
    for (let i = 0; i < state.fields.length; i++) {
      if (state.fields[i].id === id) {
        state.fields[i].generating === true
          ? (state.fields[i].generating = false)
          : (state.fields[i].generating = true);
      }
    }
  },
  stopGenerating: (state) => {
    for (let i = 0; i < state.fields.length; i++) {
      state.fields[i].generating = false;
    }
  },
  startGenerating: (state) => {
    for (let i = 0; i < state.fields.length; i++) {
      if (state.fields[i].generating === false) {
        state.fields[i].generating = true;
      }
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
