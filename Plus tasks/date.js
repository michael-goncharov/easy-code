// Функция принимает год и возвращает день 1-го января в русском формате
function weekDay(year) {
  const day = new Date (year, 0);
  const wDay = day.toLocaleString("ru", { weekday: "long" });
  return wDay;
}
weekDay(2018);

// Функция принимает дату в формате дд.мм.гггг и возвращает день недели
function weekDay2(dateString) {
  const arg = dateString.split('.');
  const date = new Date(arg[2], arg[1] - 1, parseInt(arg[0]) + 1 );
  return(date.toLocaleString("ru", {weekday: "long"}));
}
weekDay2('21.01.1978');

// Сколько полных недель прошло с 1-го января 2017
(function fullWeeks() {
  const now = new Date(Date.now());
  const startDate = new Date(2017, 0);
  return(Math.floor((now - startDate)/604800000));
})()
