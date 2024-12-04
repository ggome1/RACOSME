import React, { useEffect, useState } from 'react';
import ReviewValue from './reviewValue';
import { GoSmiley } from "react-icons/go";
import Modal from './modal';
import axios from 'axios'


const Review = () => {
    const [review, setReview] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('https://43.203.223.45:8443/reviews', {
                    headers: {
                        'Content-Type': 'application/json', // 헤더 설정
                    },
                });
                setReview(response.data);
                setCount(response.data.length);
                console.log('응답 데이터:', response.data); // 가져온 데이터 출력
            } catch (error) {
                console.error('데이터 가져오기 실패:', error); // 에러 처리
            }
        };

        fetchReviews();

    }, [])
    const [filter, setFilter] = useState('new');
    const [modal, setModal] = useState(false);
    return (
        <div className='w-full flex-grow flex flex-col mt-[4rem] py-[3rem] px-[2rem] gap-[2rem]'>
            <div className='font-neue text-[3rem]'>RACOSME</div>
            <div className='flex justify-evenly border-y py-[2rem] px-[1rem]'>
                <div className='flex flex-col justify-center items-center gap-[0.5rem] text-[1rem] font-title'>
                    <GoSmiley size={'5rem'} color='green' />
                    <div>최고</div>
                </div>
                <div className='text-center font-label'>
                    <div className='text-[1.5rem]'>총 {count}건</div>
                    <div className='flex gap-[0.5rem] items-center justify-center'>
                        <div className='text-[3rem] font-title'>5.0</div>
                        <div className='text-[2rem]'>점</div>
                    </div>
                    <div className='text-[2rem] text-yell'>★★★★★</div>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] sm:px-[10rem]'>
                <div className='text-[1rem] flex justify-between items-center font-label'>
                    <div className='flex gap-[1rem]'>
                        <div onClick={() => setFilter('new')} className={`cursor-pointer ${filter === 'new' ? 'text-black' : 'text-neutral-30 hover:text-neutral-90'}`}>최신순</div>
                        <div onClick={() => setFilter('pop')} className={`cursor-pointer ${filter === 'pop' ? 'text-black' : 'text-neutral-30 hover:text-neutral-90'}`}>인기순</div>
                    </div>
                    <div onClick={() => setModal(true)} className='cursor-pointer border border-black hover:text-white hover:bg-black rounded-lg px-[1rem] py-[0.5rem]'>리뷰 작성하기</div>
                </div>
                {review.map((element) => {
                    return (
                        <div key={element.id} className='flex gap-[4rem]'>
                            <div className='flex gap-[1rem]'>
                                <div className='w-[4rem] h-[4rem] border rounded-full'></div>
                                <div className='flex flex-col gap-[0.5rem] font-label py-[0.3rem]'>
                                    <div className='text-[1rem] min-w-[5rem]'>{element.nickname}</div>
                                    <div className='font-body w-[3rem] text-[0.6rem] bg-neutral-10 text-neutral-50 rounded-sm text-center py-[0.2rem] px-[0.5rem]'>체험단</div>
                                </div>
                            </div>
                            <div className='flex flex-col font-body gap-[1rem]'>
                                <div className='flex gap-[1.5rem] items-center'>
                                    <div className='flex gap-[0.2rem] font-label'>
                                        {element.score > 0 && <div className={`text-[1.7rem] cursor-pointer text-yell`}>★</div>}
                                        {element.score > 1 && <div className={`text-[1.7rem] cursor-pointer text-yell`}>★</div>}
                                        {element.score > 2 && <div className={`text-[1.7rem] cursor-pointer text-yell`}>★</div>}
                                        {element.score > 3 && <div className={`text-[1.7rem] cursor-pointer text-yell`}>★</div>}
                                        {element.score > 4 && <div className={`text-[1.7rem] cursor-pointer text-yell`}>★</div>}
                                    </div>
                                    <div className='text-neutral-50 text-[1rem]'>{element.updatedAt.slice(0, 10)}</div>
                                </div>
                                <div className='text-[1rem]'>
                                    <div className='whitespace-pre-line'>
                                        {element.content}
                                    </div>
                                </div>
                                {element.image &&
                                    <div className='flex gap-[0.5rem]'>
                                        <div className='w-[5rem] h-[5rem] bg-neutral-20'>{element.image}</div>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            {modal && <Modal setModal={setModal} />}
        </div>
    );
};

export default Review;