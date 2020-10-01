import React from 'react';
import questions from '../../content/questions.json';
import { ReactComponent as BorderQuestIcon } from '../../assets/img/borderQuestionIcon.svg';
import './PlayZone.css';

export default function PlayZone({ currentLevel }) {
  const answerLabel = ['A', 'B', 'C', 'D'];
  const { question, answers, correctAnswIndex } = questions[currentLevel];
  return (
    <div className="playZone">
      <h3 className="questionName">{question}</h3>
      <div className="answersWrapper">
        {answers.map((el, i) => (
          <div className="answerItem" key={i + el}>
            <BorderQuestIcon className="borderQuestIcon" />
            <div class="answerItemTitle">
              <span className="answerLabel">{answerLabel[i]}</span>
              <p className="answerName">{el}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
