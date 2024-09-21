const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
};

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("pt-BR", options);

export { formattedDate }
