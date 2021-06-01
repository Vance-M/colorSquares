import { useState } from 'react';

export const useRecord = () => {
  const [color, setColor] = useState([]);
  const [current, setCurrent] = useState([]);
  const [index, setIndex] = useState(0);

  const handleUndo = () => {
    setCurrent(color[index - 1]);
    setIndex(() => index - 1);
  };
  
  const handleRedo = () => {
    setCurrent(color[index + 1]);
    setIndex(() => index + 1);
  };
  
  const handleRecord = ({ target }) => {
    setCurrent(target.value);
    if(color.length === 0) {
      setColor([target.value]);
    } else if(index !== color.length - 1) {
      const everythingBefore = color.slice(0, index + 1);
      const everythingAfter = color.slice(index + 1, color.length);
      setColor([...everythingBefore, target.value, ...everythingAfter]);
      setIndex(everythingBefore.length);
    } else {
      setColor([...color, target.value]);
      setIndex(() => index + 1);
    }
  };

  return { color, current, index, handleRecord, handleRedo, handleUndo };
};


