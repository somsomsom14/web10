import React, { useState } from 'react';

export default function AppCRUDB02() {
  return (
    <div>
      <Count onError={(v, msg) => alert(v + ': ' + msg)} />
      <Count max={5} onError={(v, msg) => alert(v + ': ' + msg)} />
      <Count min={-3} max={3} onError={(v, msg) => alert(v + ': ' + msg)} />
    </div>
  );
}

const Count = ({ min = 0, max = 5, onError }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          if (count >= max) onError(count, '상한 범위를 벗어남');
          else setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (count <= min) onError(count, '하한 범위를 벗어남');
          else setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
