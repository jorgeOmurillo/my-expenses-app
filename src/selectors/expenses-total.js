export default expenses => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((accum, amount) => accum + amount, 0);
};
