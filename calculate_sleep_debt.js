//Sleeping hours on every night
const getSleepHours = (day) => {
  
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
       return 10;
       break;
      case 'sunday':
        return 11;
        break;
      default:
        return 'Wrong input';
    }
  };
  
  //Calculating sleeping for a week
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  //Defining ideal sleeping hours for a week
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  };
  
  //Main calculation of actual sleeping against ideal
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep'); 
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log(`User should get some rest, amount of under ideal sleep ${idealSleepHours - actualSleepHours}`);
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log(`User got more sleep than needed, amount of overall hours ${actualSleepHours - idealSleepHours}`);
    }
  
  };
  
  calculateSleepDebt();