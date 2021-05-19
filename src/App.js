import React from 'react';
import './style.css';
import Timer from './Timer.js';
import ClassSayac from './ClassSayac.js';
import HooksSayac from './HooksSayac.js';

export default function App() {
  return (
    <div>
      <h1>REACT</h1>
      <h1>🤠 Timer</h1>
      <Timer />
      <h1>🥳 Sayaç</h1>

      <HooksSayac />
      <ClassSayac />
    </div>
  );
}
