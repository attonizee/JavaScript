let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnersAge = 18;

if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am, your number ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am, your number ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`Ypu will race at 12:30 pm, your number ${raceNumber}`);
} else {
  console.log('See the registration desk.')
}

