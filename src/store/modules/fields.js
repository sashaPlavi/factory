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
const acctions = {};
const muttations = {};

export default {
  state,
  getters,
  acctions,
  muttations,
};
