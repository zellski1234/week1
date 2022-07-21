
//object1 days
const days = {
    Weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    Weekends: ["Saturday", "Sunday"],
    everyday: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
};

let day = days.everyday[Math.floor(Math.random() * days.everyday.length)]
let alarm = ""


//object2 Alarm
const alarmSchedule = {
    weekendAlarm: "No alarm needed",
    weekdayAlarm: "get up at 7am"
};



if (day == days.Weekdays[0] || day == days.Weekdays[1] || day == days.Weekdays[2] || day == days.Weekdays[3] || day == days.Weekdays[4]){
    alarm = "set"
    console.log(`Tommorow is ${day} the alarm is ${alarm}, ${alarmSchedule.weekdayAlarm}`)
    
} else if (day == days.Weekends[0] || day == days.Weekends[1]){
    alarm = "not set"
    console.log(`Tommorow is ${day} ${alarmSchedule.weekendAlarm} it is ${alarm}`)
}

// console.log(`${person.name} is ${person.age} and his Top 3 movies are:\n${person.movies[0]}\n${person.movies[1]}\n${person.movies[2]}`)

