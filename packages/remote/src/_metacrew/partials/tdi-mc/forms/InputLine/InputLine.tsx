import React, { useState } from 'react';
import './style.scss';

type Props = {
  className?: string,
}

const InputLine: React.FC<Props> = ({ className }) => {
  const [value, setValue] = useState<string>('100일 걷기 프로젝트');
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <form className='w-100 position-relative' autoComplete='off'>
      <input
        type='text'
        className='form-control form-control-mc-border-bottom text-input'
        name='search'
        placeholder='100일 걷기 프로젝트'
        onChange={handleChange}
        value={value}
      />
      <div
        className='text-lg-1 position-absolute top-50 end-0 translate-middle-y text-check'>
        7/20
      </div>
    </form>
  )
}

export { InputLine };

