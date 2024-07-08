export function parseDate(date: Date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aout",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateObj = new Date(date);
  const dateMonth = months[dateObj.getMonth()];
  const dateDay = dateObj.getDate();
  const dateYear = dateObj.getFullYear();

  const fullDate = `${dateMonth} ${dateDay}, ${dateYear}`;

  return fullDate;
}
