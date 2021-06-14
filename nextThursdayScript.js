// function dates() {
//   var dayOfWeek = 4; //friday
//   var date = new Date();
//   date.setDate(date.getDate() + ((dayOfWeek + 7 - date.getDay()) % 7));
//   console.log(date);
// }
// dates()

  const targetDayOfWeek = 4; //Thursday
  const today = new Date();
  const currentDayOfWeek = today.getDay();

  if (currentDayOfWeek === 3 || currentDayOfWeek === 4) {
    today.setDate(
      today.getDate() + 7 + ((targetDayOfWeek + 7 - today.getDay()) % 7)
    );
    console.log(today);
  } else {
    today.setDate(
      today.getDate() + ((targetDayOfWeek + 7 - today.getDay()) % 7)
    );
    console.log(today.toString().split(" ").slice(1, 3));
  }
