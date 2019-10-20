
function workingSchedule(inputArray) {

  let sevenDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
  let bigArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    const dayIsNotInOrder = i === 0 || (inputArray[i] - inputArray[i - 1]) !== 1;
    if (dayIsNotInOrder) {
      let smallArr = [inputArray[i]];
      bigArr.push(smallArr);
    }
    else {
      let smallArr = bigArr[bigArr.length - 1];
      smallArr.push(inputArray[i]);
    }
  }

  let result = '';

  for(let i = 0; i<bigArr.length; i++){
    let current = bigArr[i];
    result += sevenDays[current[0]];
    if(current.length > 1){
      let lastDayIndex = current[current.length - 1];
      result += `-${sevenDays[lastDayIndex]}`;
    }
    if(i !== bigArr.length - 1){
      result += ', ';
    }
  }
  return result;
}