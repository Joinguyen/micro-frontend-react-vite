/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEventHandler, useState } from 'react';
import './style.scss';

type Props = {
  className?: string,
  value?: string,
  handleChange?: (value: string) => void,
}

const Tab: React.FC<Props> = ({ className, value = '', handleChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);

  const handleOptionChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedOption(event.target.value);
    handleChange && handleChange(event.target.value);
  };

  return (
    <div className="tabs">
      <input type="radio" id="radio-1" name="tabs" value="radio-1" onChange={handleOptionChange} checked={selectedOption === 'radio-1'} />
      <label className="tab" htmlFor="radio-1">
        내가 참여한 채팅
        {/* <span className="tab-notification">2</span> */}
      </label>
      <input type="radio" id="radio-2" name="tabs" value="radio-2" onChange={handleOptionChange} checked={selectedOption === 'radio-2'} />
      <label className="tab" htmlFor="radio-2">
        참여 가능한 채팅
        {/* <span className="tab-notification">2</span> */}
      </label>
      <span className="glider"></span>
    </div>
  )
}

export { Tab };

