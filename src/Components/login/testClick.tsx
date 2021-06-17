import React from 'react';

type ClickType = {
  func: (vl: string) => void;
};

function TestClick(props: ClickType) {
  const functt = () => {
    props.func('Haha');
  };
  return (
    <div>
      <button type="submit" onClick={functt}>
        ClickMe
      </button>
      <input type="hidden" name="tuanbtd" value="123" />
    </div>
  );
}

export default TestClick;
