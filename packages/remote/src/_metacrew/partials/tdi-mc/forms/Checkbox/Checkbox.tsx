import React from 'react';
import './style.scss';

type Props = {
  className?: string,
}

const Checkbox: React.FC<Props> = ({ className = '' }) => {
  return (
    <>
      <div className={`form-check form-check-custom ${className}`}>
        <input className="form-check-input" type="checkbox" value="1" name="option2" />
        {/* <div className="form-check-label">
          Option 1
        </div> */}
      </div>
    </>
  )
}

export { Checkbox };

