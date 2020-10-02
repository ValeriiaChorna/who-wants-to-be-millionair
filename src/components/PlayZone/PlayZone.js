import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gameSelectors from '../../redux/game/gameSelectors';
import gameOperations from '../../redux/game/gameOperations';
import questions from '../../content/questions.json';
import answerLabel from '../../content/answerLebels.json';
import randomInteger from '../../utils/randomInteger';
import addNextQuestion from '../../utils/addNextQuestion';
import { ReactComponent as BorderQuestIcon } from '../../assets/img/borderQuestionIcon.svg';
import './PlayZone.css';

export default function PlayZone() {
  const currentLevel = useSelector(gameSelectors.getUserLevel);

  const [choosenQuestions, setChoosenQuestions] = useState([
    randomInteger(0, questions.length - 1),
  ]);
  const { question, answers, correctAnswIndex } = questions[
    choosenQuestions[0]
  ];

  const [selectedAnswInd, setSelectedAnswInd] = useState();
  const [styleAnswer, setStyleAnswer] = useState('');
  const dispatch = useDispatch();
  const offGameSession = () => dispatch(gameOperations.restartGame());
  const nextLev = level => dispatch(gameOperations.addUserLevel(level));
  const addCoins = coins => dispatch(gameOperations.addUserCoins(coins));

  const handleChange = async ({ target: { value } }) => {
    setSelectedAnswInd(parseInt(value));
    if (parseInt(value) === correctAnswIndex) {
      // await setTimeout(() => setStyleAnswer('correct'), 500);
      await setTimeout(() => nextLev(currentLevel.level + 1), 500);
      addCoins(currentLevel.amount);
      await setTimeout(
        () => setChoosenQuestions(addNextQuestion(choosenQuestions, questions)),
        500,
      );
      await setTimeout(() => setSelectedAnswInd(), 550);
      if (currentLevel.amount === 1000000) {
        await setTimeout(() => offGameSession(), 500);
      }
    } else {
      // await setTimeout(() => setStyleAnswer('wrong'), 500);
      await setTimeout(() => offGameSession(), 500);
      await setTimeout(() => setChoosenQuestions([]), 550);
    }
  };

  return (
    <div className="playZone">
      <h3 className="questionName">{question}</h3>
      <form className="answersWrapper">
        {answers.map((el, i) => (
          <label className="answerItem" key={i + el}>
            <input
              type="radio"
              value={i}
              checked={i === selectedAnswInd}
              onChange={handleChange}
              className="answButton"
              key={el}
            />
            <BorderQuestIcon className="borderQuestIcon" />
            <div className="answerItemTitle">
              <span className="answerLabel">{answerLabel[i]}</span>
              <p className="answerName">{el}</p>
            </div>
          </label>
        ))}
      </form>
    </div>
  );
}
