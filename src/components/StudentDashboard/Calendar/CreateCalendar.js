const createCalendarArray = (currentDay, taskList) =>{
    let daysToAddToCalendar = [];
    // console.log(new Date(currentDay.getFullYear(), currentDay.getMonth(), 1));
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
        let checkFor = `${firstDayOfMonth.toLocaleDateString('en-ca')}`
        // console.log(taskList);
        // console.log(checkFor);
        let task = null;
        taskList.map((hastask)=>{
          // console.log(checkFor == hastask.task.task_deadline);
          if(checkFor == hastask.task.task_deadline){
            task = {...hastask};
          }
        })
        console.log(task);
        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === currentDay.getMonth()),
          number: firstDayOfMonth.getDate(),
          task: task,
          id:i
        }
        // console.log(`${currentDay.getFullYear()}-${currentDay.getMonth()}-${currentDay.getDate()}`);
        daysToAddToCalendar.push(calendarDay);
    }
    return daysToAddToCalendar;
}

export default createCalendarArray;