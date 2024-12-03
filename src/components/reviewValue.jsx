import React from 'react';

const ReviewValue = () => {
    return (
        <div className='flex gap-[4rem]'>
            <div className='flex gap-[1rem]'>
                <div className='w-[4rem] h-[4rem] border rounded-full'></div>
                <div className='flex flex-col gap-[0.5rem] font-label py-[0.3rem]'>
                    <div className='text-[1rem]'>박상현</div>
                    <div className='font-body w-[3rem] text-[0.6rem] bg-neutral-10 text-neutral-50 rounded-sm text-center py-[0.2rem] px-[0.5rem]'>체험단</div>
                </div>
            </div>
            <div className='flex flex-col font-body gap-[1rem]'>
                <div className='flex gap-[1.5rem] items-center'>
                    <div className='text-[2rem] text-yell'>★★★★★</div>
                    <div className='text-neutral-50 text-[1rem]'>2024. 12. 03</div>
                </div>
                <div className='text-[1rem]'>
                    <div>
                        약산성 클렌징폼보다는 조금 더 뽀독?한 제형의 느낌인데 막상 세안하기 시작하면 "아~ 약산성클렌징폼은 맞구나"하는 생각 들어요. 그래도 일반 클렌징폼이랑 약산성 클렌징폼 그 사이를 생각하시면 될 것 같아요.<br />거품은 일반 약산성 클렌징폼보다 조금 더 나는 편이고 세정력은 굉장히 좋은 편에 속합니다. <br />약산성클렌저가 어딘가 부족하다 느끼시는 분들께서는 이거 쓰셔도 좋을 것 같아요.
                    </div>
                </div>
                <div className='flex gap-[0.5rem]'>
                    <div className='w-[5rem] h-[5rem] bg-neutral-20'></div>
                    <div className='w-[5rem] h-[5rem] bg-neutral-20'></div>
                    <div className='w-[5rem] h-[5rem] bg-neutral-20'></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewValue;