import React from 'react';
import '../Сomponents/ModalForm.css';


const ModalForm = ({ show, handleClose, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <div className='modal-main'>
                <section className='modal-card'>
                    {children}


                </section>
                <div className='modal-footer'>
                    <button type='button' className='btn-close' onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>

        </div>
    );
};


export default ModalForm;