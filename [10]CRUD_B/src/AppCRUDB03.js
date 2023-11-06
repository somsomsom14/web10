import React, { useState } from 'react';

export default function AppCRUDB03() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div>{num + 5}</div>
      <NumberInput
        onValue={(value) => setNum(value)}
        onError={(msg) => alert(msg)}
      />
    </div>
  );
}
const NumberInput = ({ onValue, onError }) => {
  const [text, setText] = useState('');

  return (
    <input
      type="text"
      style={{ borderWidth: 1 }}
      onKeyPress={(evt) => {
        if (evt.key === 'Enter') {
          if (text != '' && !isNaN(Number(text))) {
            onValue(Number(text));
            setText('');
          } else onError('숫자가 아닙니다.');
        }
      }}
      onChange={(evt) => setText(evt.target.value)}
      value={text}
    />
  );
};
