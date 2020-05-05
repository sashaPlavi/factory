const state = {
  fields: [
    {
      id: 1,
      name: "A",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 2,
      name: "B",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 3,
      name: "C",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 4,
      name: "D",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 5,
      name: "E",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 6,
      name: "F",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 7,
      name: "G",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 8,
      name: "H",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 9,
      name: "I",
      value: 3,
      sign: "",
      generating: true,
    },
    {
      id: 10,
      name: "J",
      value: 3,
      sign: "",
      generating: true,
    },
  ],
};

const getters = {
  allFields: (state) => {
    return state.fields;
  },
};
const actions = {
  randomize({ commit }) {
    setInterval(() => {
      commit("setValue");
    }, 1000);
  },
  togleRandomize({ commit }, id) {
    commit("setGenerating", id);
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
