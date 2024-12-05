import React from 'react';

const ImageModal = ({ setModal, file }) => {
    return (
        <div
            onClick={() => setModal(false)}
            className="fixed inset-0 sm:px-[5rem] px-[2rem] py-[5rem] flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
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