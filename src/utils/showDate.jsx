function showDate(dateString, daysMonthsYears) {
  const dateToShow = new Date(dateString);

  if (!dateString || !dateToShow.getTime()) return '';

  dateToShow.setUTCHours(3);

  const { days, months, years } = daysMonthsYears;

  if (days) dateToShow.setDate(dateToShow.getDate() + Number(days));
  if (days) dateToShow.setMonth(dateToShow.getMonth() + Number(months));
  if (days) dateToShow.setFullYear(dateToShow.getFullYear() + Number(years));

  return dateToShow.toLocaleDateString();
}

export default showDate;
