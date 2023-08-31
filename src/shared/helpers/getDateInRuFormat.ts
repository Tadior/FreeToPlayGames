export const getDateInRuFormat = (value: string) => {
  if (!Date.parse(value)) {
    console.log('Incorrect Date');
    return 'Unknown';
  }
  const date = new Date(value);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
};
