/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import Sheet from 'react-modal-sheet';
import './style.scss';

type Props = {
    children?: ReactNode,
    isShow?: boolean,
    className?: string,
    title?: string,
    handleShow?: (isShow: boolean) => void
}

const DrawerWrapper: FC<Props> = ({ children, className, title = '', isShow = false, handleShow }) => {
    const handleClick = () => {
        handleShow && handleShow(false);
    };

    return (
        <>
            <Sheet isOpen={isShow} onClose={handleClick}>
                <Sheet.Container style={{ borderRadius: '20px 20px 0px 0px' }}>
                    <div
                        id='kt_drawer_wrapper'
                        className={clsx('w-100')}
                    >
                        <div className='card w-100' id='kt_drawer_wrapper_messenger'>
                            <Sheet.Header>
                                <div className='w-100 p-0 m-0 justify-center' id='kt_drawer_wrapper_messenger_header'>
                                    <div className='card-title m-0'>
                                        <div className='d-flex justify-content-center align-items-center flex-column'>
                                            <div className='btn btn-icon w-auto h-auto' id='kt_drawer_wrapper_close' onClick={handleClick}>
                                                <svg width="64" height="4" viewBox="0 0 64 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 2H62" stroke="#9C9C9C" strokeWidth="4" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <div className='mb-0'>
                                                <span className='title-drawer-group'>{title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Sheet.Header>
                            <div id='kt_drawer_wrapper_messenger_body'>
                                <div
                                    className='scroll-y me-n5 pe-5 hidden-scroll'
                                    data-kt-element='messages'
                                    data-kt-scroll='true'
                                    data-kt-scroll-activate='{default: false, lg: true}'
                                    data-kt-scroll-max-height='auto'
                                    data-kt-scroll-dependencies='#kt_drawer_wrapper_messenger_header, #kt_drawer_wrapper_messenger_footer'
                                    data-kt-scroll-wrappers='#kt_drawer_wrapper_messenger_body'
                                    data-kt-scroll-offset='0px'
                                >
                                    {children}
                                </div>

                            </div>
                        </div>
                    </div>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </>
    )
};

export { DrawerWrapper };

