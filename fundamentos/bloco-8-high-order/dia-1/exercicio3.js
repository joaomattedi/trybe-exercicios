const checker = ( gabarito, answers ) => {
  let counter = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (answers[index] === 'N.A' ) {
      counter += 0;
    } else if ( gabarito[index] === answers[index] ) {
      counter += 1;
    } else if (gabarito[index] !== answers[index]) {
      counter -= 0.5;
    }
  }
  return counter;
};

const testChecker = ( gabarito, answers, checker ) => {
  return checker( gabarito, answers );
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(testChecker(RIGHT_ANSWERS,STUDENT_ANSWERS,checker));