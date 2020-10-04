import randomInteger from './randomInteger';

export default function addNextQuestion(choosenQuestions, allQuestions) {
  let newNumber = randomInteger(0, allQuestions.length - 1);
  let counter = 0;
  while (choosenQuestions.includes(newNumber)) {
    if (counter > allQuestions.length) break;
    newNumber = randomInteger(0, allQuestions.length - 1);
    counter++;
  }
  return [...choosenQuestions, newNumber].reverse();
}
