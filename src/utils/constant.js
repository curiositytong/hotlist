export const createConstants = (...constants) =>
  constants.reduce((acc, constant) => {
    return {
      ...acc,
      [constant]: constant
    };
  }, {});
