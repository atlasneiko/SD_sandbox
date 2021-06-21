//* prototype for the SquareSpace date update script
//* kept it only as a source of reference.

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
