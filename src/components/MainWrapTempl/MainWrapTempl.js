import React from 'react';
import { ReactComponent as HandImg } from '../../assets/img/hand-1.svg';
import './MainWrapTempl.css';

export default function MainWrapTempl({ buttonText, children }) {
  return (
    <div className="mainWrapTempl">
      <HandImg className="handImg" />
      <div className="titleWrapper">
        {children}
        <button type="button" className="mainButton">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
