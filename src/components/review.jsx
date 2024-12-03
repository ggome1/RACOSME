import React, { useState } from 'react';
import ReviewValue from './reviewValue';
import { GoSmiley } from "react-icons/go";

const Review = () => {
    const [filter, setFilter] = useState('new');
    return (
        <div className='w-full flex-grow flex flex-col mt-[4rem] py-[2rem] px-[2rem] gap-[2rem]'>
            <div className='font-title text-[3rem]'>RACOSME</div>
            <div className='flex justify-evenly border-y py-[1rem] px-[1rem]'>
                <div className='flex flex-col justify-center items-center gap-[0.5rem]'>
                    <GoSmiley size={'5rem'} color='green'/>
                    <div>최고</div>
                </div>
                <div className='text-center font-label'>
                    <div className='text-[1.5rem]'>총 9999건</div>
                    <div className='flex gap-[0.5rem] items-center justify-center'>
                        <div className='text-[3rem] font-title'>5.0</div>
                        <div className='text-[2rem]'>점</div>
                    </div>
                    <div className='text-[2rem]'>★★★★★</div>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] sm:px-[10rem]'>
                <div className='text-[1rem] flex justify-between items-center font-label'>
                    <div className='flex gap-[1rem]'>
                        <div onClick={() => setFilter('new')} className={`cursor-pointer ${filter === 'new' ? 'text-black' : 'text-neutral-30 hover:text-neutral-90'}`}>최신순</div>
                        <div onClick={() => setFilter('pop')} className={`cursor-pointer ${filter === 'pop' ? 'text-black' : 'text-neutral-30 hover:text-neutral-90'}`}>인기순</div>
                    </div>
                    <div className='cursor-pointer border border-black hover:text-white hover:bg-black rounded-lg px-[1rem] py-[0.5rem]'>리뷰 작성하기</div>
                </div>
                <ReviewValue />
                <ReviewValue />
                <ReviewValue />
            </div>
        </div>
    );
};

export default Review;