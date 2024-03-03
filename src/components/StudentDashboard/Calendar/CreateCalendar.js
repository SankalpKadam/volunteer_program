const createCalendarArray = (currentDay) =>{
    let daysToAddToCalendar = [];
    console.log(new Date(currentDay.getFullYear(), currentDay.getMonth(), 1));
    let firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
    let firstWeekday = firstDayOfMonth.getDay();
    for (let i = 0; i < 42; i++) {
        if (i === 0 && firstWeekday === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (i === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (i - firstWeekday));
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }
    
        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
          number: firstDayOfMonth.getDate(),
          task: (i === 0 || i === 5 || i===17 || i===28 || i===31),
          id:i
        }
        daysToAddToCalendar.push(calendarDay);
    }
    return daysToAddToCalendar;
}

export default createCalendarArray;