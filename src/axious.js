export default {
  get: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res([{ name: "Marco" }, { name: "Renan" }, { name: "Rubens" }]);
      }, 2000);
    });
  },
};
