export const getRussianDate = (date: string) => {
  const initialDate = new Date(date);
  let day = initialDate.getDay().toString();
  let month = (initialDate.getMonth() + 1).toString();
  const year = initialDate.getFullYear().toString();
  if (day.length === 1) {
    day = `0${day}`;
  }
  if (month.length === 1) {
    month = `0${month}`;
  }
  return `${day}.${month}.${year}`;
};
