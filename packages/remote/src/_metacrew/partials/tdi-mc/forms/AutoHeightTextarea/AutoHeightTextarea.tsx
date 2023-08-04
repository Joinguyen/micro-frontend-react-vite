import React, { ChangeEventHandler, useState } from 'react';
import './style.scss';

type Props = {
  className?: string,
}

const AutoHeightTextarea: React.FC<Props> = ({ className }) => {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setText(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      style={{ height: 'auto', overflow: 'hidden' }}
    />
  );
};

export default AutoHeightTextarea;
