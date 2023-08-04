import { FC } from 'react'
import { PurchaseButton } from './purchase/PurchaseButton'

const RightToolbar: FC = () => {
  return (
    <>
      <div className='engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2'>
        <PurchaseButton />
      </div>
    </>
  )
}

export { RightToolbar }
