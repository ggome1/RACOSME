import React, { useRef, useState } from 'react';
import { CiImageOn } from "react-icons/ci";
import axios from 'axios';
import { uploadImageAndGetURL } from '../firebase/uploadImageAndGetURL';
import { deleteObject, getStorage, ref } from 'firebase/storage';
const Modal = ({ setModal, func }) => {
    const [star, setStar] = useState(0);
    const [comment, setComment] = useState(null)
    const [nickname, setNickname] = useState('');
    const [content, setContent] = useState('');
    const [preview, setPreview] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        if (file) {
            const filePath = `/${Date.now()}`;
            const url = await uploadImageAndGetURL(formData, filePath);
            setPreview((preview) => [...preview, url]);
        }
    };

    const handleDeleteUnusedFiles = async () => {
        const storage = getStorage();
        preview.forEach(async (element) => {
            const storageRef = ref(storage, element);
            await deleteObject(storageRef).catch((error) => {
                console.error("Error deleting file:", error);
            });
        });
    };

    const handleClick = async () => {
        const reviewData = {
            nickname: nickname, // 닉네임
            content: content, // 리뷰 내용
            score: star, // 점수
            images: preview,
        };
        console.log(reviewData)

        try {
            const response = await axios.post('https://43.203.223.45.nip.io/reviews', reviewData, {
                headers: {
                    'Content-Type': 'application/json', // JSON 형식으로 전송
                },
            });
            func();
            setModal(false)
            console.log('응답 데이터:', response.data); // 서버 응답 출력
        } catch (error) {
            console.error('리뷰 전송 실패:', error.response || error.message || error);
        }
    }

    const triggerFileInput = () => {
        if (preview.length >= 3) {
            alert('사진은 3개까지 등록 가능합니다.')
            return ;
        } else {
            fileInputRef.current.click(); // 숨겨진 input을 클릭
        }
    };

    return (
        <div onClick={(e) => { e.stopPropagation(); handleDeleteUnusedFiles(); setModal(false) }} className="fixed inset-0 px-[5rem] py-[5rem] flex items-center justify-center bg-black bg-opacity-50">
            <div onClick={(e) => e.stopPropagation()} className="p-[2rem] bg-white rounded shadow-lg w-full h-full max-w-[1000px] overflow-auto flex flex-col">
                <button
                    className="absolute top-[0.5rem] right-[1rem] text-gray-500 hover:text-gray-800"
                    onClick={() => { handleDeleteUnusedFiles(); setModal(false); }}
                >
                    x
                </button>
                <div className='flex flex-col gap-[1rem] border-b py-[1rem]'>
                    <div className='font-title text-[1.2rem]'>어떤 점이 좋았나요?</div>
                    <div className='flex flex-col gap-[0.5rem]'>
                        <div className='font-label text-[1rem]'>닉네임 입력 (필수)</div>
                        <input className='text-[1rem] font-body border border-neutral-40 p-[0.5rem] rounded-lg' value={nickname} onChange={(e) => {if(e.target.value.length <= 6) setNickname(e.target.value)}} />
                        <div className='flex justify-end font-label text-neutral-40 text-[0.7rem]'>{nickname.length}/6</div>
                    </div>
                </div>
                <div className='flex flex-col gap-[1rem] border-b py-[1rem]'>
                    <div className='font-title text-[1.2rem]'>이 상품 어떠셨나요?</div>
                    <div className='flex gap-[0.2rem] items-center font-label'>
                        <div onClick={() => { setStar(1); setComment('별로예요') }} className={`text-[1.7rem] cursor-pointer ${star >= 1 ? 'text-yell' : 'text-neutral-40'}`}>★</div>
                        <div onClick={() => { setStar(2); setComment('그냥 그래요') }} className={`text-[1.7rem] cursor-pointer ${star >= 2 ? 'text-yell' : 'text-neutral-40'}`}>★</div>
                        <div onClick={() => { setStar(3); setComment('괜찮아요') }} className={`text-[1.7rem] cursor-pointer ${star >= 3 ? 'text-yell' : 'text-neutral-40'}`}>★</div>
                        <div onClick={() => { setStar(4); setComment('좋아요') }} className={`text-[1.7rem] cursor-pointer ${star >= 4 ? 'text-yell' : 'text-neutral-40'}`}>★</div>
                        <div onClick={() => { setStar(5); setComment('최고예요') }} className={`text-[1.7rem] cursor-pointer ${star >= 5 ? 'text-yell' : 'text-neutral-40'}`}>★</div>
                        <div className='text-[0.7rem] pl-[1rem]'>{comment}</div>
                    </div>
                </div>
                <div className='flex flex-col gap-[1rem] border-b py-[1rem]'>
                    <div className='font-title text-[1.2rem]'>어떤 점이 좋았나요?</div>
                    <div className='flex flex-col gap-[0.5rem]'>
                        <div className='font-label text-[1rem]'>본문 입력 (필수)</div>
                        <textarea value={content} onChange={(e) => {if(e.target.value.length <= 200) setContent(e.target.value)}} className='text-[1rem] font-body border border-neutral-40 p-[0.5rem] h-[7rem] rounded-lg'></textarea>
                        <div className='flex justify-end font-label text-neutral-40 text-[0.7rem]'>{content.length}/500</div>
                    </div>
                </div>
                <div className='flex flex-col gap-[1rem] py-[1rem]'>
                    <div className='font-title text-[1.2rem]'>사진 첨부</div>
                    <div className='font-label text-[1rem]'>파일 업로드 (선택)</div>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        style={{ display: "none" }} // 화면에 표시되지 않음
                    />
                    <div className='flex gap-[1rem]'>
                        <div onClick={triggerFileInput} className='cursor-pointer w-[5rem] h-[6rem] border rounded-lg border-neutral-40 flex justify-center items-center'>
                            <CiImageOn size={'3rem'} color='gray' />
                        </div>
                        {preview.length > 0 &&
                            preview.map((element) => {
                                return (
                                    <img
                                        src={element}
                                        alt="Uploaded"
                                        className="w-[5rem] h-[6rem] object-cover rounded-lg"
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex-grow flex items-end justify-end'>
                    <div onClick={handleClick} className='cursor-pointer hover:border hover:bg-white hover:text-black bg-black px-[4rem] py-[0.7rem] rounded-lg text-white font-label text-[1rem]'>등록하기</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;