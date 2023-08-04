import React from 'react'
import './style.scss';

type Props = {
  text: string,
  className?: string,
  type?: 'submit' | 'button',
  onClick?: () => void
}

const ButtonPrimary: React.FC<Props> = ({ text = '', className, type = 'button', onClick }) => {

  const handleOnClick = (event: any) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <>
      <button className="btn btn-primary-mc" type={type} onClick={handleOnClick}>{text}</button>
    </>
  )
}

export { ButtonPrimary }
