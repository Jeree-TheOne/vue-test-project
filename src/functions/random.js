export const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const randomInt = () => {
  return Math.trunc(Math.random() * 9) + 1;
};
