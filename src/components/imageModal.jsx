import React from 'react';
import { MdClose } from "react-icons/md";

const ImageModal = ({ setModal, file }) => {
    return (
        <div
            onClick={() => setModal(false)}
            className="fixed inset-0 sm:px-[5rem] px-[2rem] py-[5rem] flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div className='absolute top-[2rem] right-[2rem]'>
                <MdClose onClick={() => setModal(false)} className='cursor-pointer' size={'3rem'} color='black' />
            </div>
            <img
                onClick={(e) => e.stopPropagation()}
                className="max-w-[90vh] max-h-[90vh] object-contain"
                src={file}
                alt="img"
            />
        </div>
    );
};

export default ImageModal;