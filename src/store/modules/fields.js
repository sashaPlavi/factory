const state = {
  fields: [
    {
      id: 1,
      name: "A",
      value: 3,
    },
    {
      id: 2,
      name: "B",
      value: 3,
    },
    {
      id: 3,
      name: "C",
      value: 3,
    },
    {
      id: 4,
      name: "D",
      value: 3,
    },
    {
      id: 5,
      name: "E",
      value: 3,
    },
    {
      id: 6,
      name: "F",
      value: 3,
    },
    {
      id: 7,
      name: "G",
      value: 3,
    },
    {
      id: 8,
      name: "H",
      value: 3,
    },
    {
      id: 9,
      name: "I",
      value: 3,
    },
    {
      id: 10,
      name: "J",
      value: 3,
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
      let random = Math.floor(Math.random() * 2) + 1;
      let sign = Math.random() > 0.5 ? "-" : "+";
      commit("setValue", {
        random,
        sign,
      });
    }, 1000);
  },
};
const mutations = {
  setValue: (state, payload) => {
    const random = payload.random;
    for (let i = 0; i < state.fields.length; i++) {
      payload.sign === "-"
        ? (state.fields[i].value = state.fields[i].value - random)
        : (state.fields[i].value = state.fields[i].value + random);
    }
    //state.fields.value = value;
    console.log(payload.random);
    console.log(payload.sign);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
