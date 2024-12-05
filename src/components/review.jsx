import React, { useEffect, useState } from 'react';
import { GoSmiley } from "react-icons/go";
import Modal from './modal';
import axios from 'axios';
import ImageModal from './imageModal';
import { GiButterflyFlower } from "react-icons/gi";
import { PiSortDescendingBold } from "react-icons/pi";
import { PiSortAscendingBold } from "react-icons/pi";

const Review = () => {
    const [review, setReview] = useState([]);
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('new');
    const [modal, setModal] = useState(false);
    const [imageModal, setImageModal] = useState(false);
    const [curFile, setCurFile] = useState(null);
    const [averageScore, setAverageScore] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지당 항목 수

    // 리뷰 데이터 가져오기 및 정렬
    const fetchReviews = async () => {
        try {
            const response = await axios.get('https://43.203.223.45.nip.io/reviews', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const sortedData = response.data.sort((a, b) => {
                if (filter === 'new') {
                    return new Date(b.updatedAt) - new Date(a.updatedAt);
                } else if (filter === 'old') {
                    return new Date(a.updatedAt) - new Date(b.updatedAt);
                }
                return 0;
            });

            setReview(sortedData);
            setCount(sortedData.length);
            calculateAverageScore(sortedData);
        } catch (error) {
            console.error('데이터 가져오기 실패:', error);
        }
    };

    // const deleteData = async () => {
    //     try {
    //         review.forEach(element => {
    //             console.log(element.id);
    //             const response = axios.delete(`https://43.203.223.45.nip.io/reviews/${element.id}`)
    //         });
    //     } catch {

    //     }
    // }

    // 평균 점수 계산
    const calculateAverageScore = (reviews) => {
        if (reviews.length === 0) {
            setAverageScore(0);
            return;
        }

        const totalScore = reviews.reduce((sum, item) => sum + item.score, 0);
        const avgScore = totalScore / reviews.length;
        setAverageScore(avgScore.toFixed(1));
    };
    // filter 변경 시 fetchReviews 호출
    useEffect(() => {
        fetchReviews();
    }, [filter]);

    // 현재 페이지에 해당하는 리뷰 데이터
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentReviews = review.slice(startIndex, startIndex + itemsPerPage);

    // 총 페이지 수 계산
    const totalPages = Math.ceil(review.length / itemsPerPage);

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
                        <div className='text-[3rem] font-title'>{averageScore}</div>
                        <div className='text-[2rem]'>점</div>
                    </div>
                    <div className='text-[2rem] text-yell'>★★★★★</div>
                </div>
            </div>
            <div className='flex flex-col gap-[3rem] sm:px-[10rem]'>
                <div className='text-[1rem] flex justify-between items-center font-label'>
                    <div className='flex items-center gap-[1rem]'>
                        <div onClick={() => setFilter('new')} className={`cursor-pointer ${filter === 'new' ? 'text-black' : 'text-neutral-30 hover:text-neutral-90'}`}>최신순</div>
                        <div onClick={() => setFilter('old')} className={`cursor-pointer ${filter === 'old' ? 'text-black' : 'text-neutral-30 hover:text-neutral-90'}`}>오래된 순</div>
                        {filter === 'new' && <PiSortDescendingBold size={'1rem'} />}
                        {filter === 'old' && <PiSortAscendingBold size={'1rem'} />}
                    </div>
                    <div onClick={() => setModal(true)} className='cursor-pointer border border-black hover:text-white hover:bg-black rounded-lg px-[1rem] py-[0.5rem]'>리뷰 작성하기</div>
                </div>
                {currentReviews.map((element) => (
                    <div key={element.id} className='flex gap-[4rem]'>
                        <div className='flex gap-[1rem]'>
                            <div className='w-[4rem] h-[4rem] border border-neutral-40 rounded-full flex justify-center items-center'>
                                <GiButterflyFlower color='gray' size={'1.5rem'} />
                            </div>
                            <div className='flex flex-col gap-[0.5rem] font-label py-[0.3rem]'>
                                <div className='flex items-center gap-[0.5rem] min-w-[5rem]'>
                                    <div className='text-[1rem]'>{element.nickname}</div>
                                    {element.instagramUrl && <img onClick={() => window.open(element.instagramUrl)} className='cursor-pointer w-[1rem] h-[1rem]' src={`${process.env.PUBLIC_URL}/images/instagram.svg`} alt='' />}
                                </div>
                                <div className='font-body w-[3rem] text-[0.6rem] bg-neutral-10 text-neutral-50 rounded-sm text-center py-[0.2rem] px-[0.5rem] whitespace-nowrap'>체험단</div>
                            </div>
                        </div>
                        <div className='flex flex-col font-body gap-[1rem]'>
                            <div className='flex gap-[1.5rem] items-center'>
                                <div className='flex gap-[0.2rem] font-label'>
                                    {Array.from({ length: element.score }).map((_, idx) => (
                                        <div key={idx} className={`text-[1.7rem] cursor-pointer text-yell`}>★</div>
                                    ))}
                                </div>
                                <div className='text-neutral-50 text-[1rem] whitespace-nowrap'>{element.updatedAt.slice(0, 10)}</div>
                            </div>
                            <div className='text-[1rem]'>
                                <div className='whitespace-pre-line'>{element.content}</div>
                            </div>
                            {element.images?.length > 0 &&
                                <div className='flex gap-[0.5rem] w-[6rem] h-[7rem]'>
                                    {element.images.map((file, index) => (
                                        <img onClick={() => { setCurFile(file); setImageModal(true); }} className='rounded-lg cursor-pointer object-cover' key={index} src={file} alt='img' />
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* 페이지 네비게이션 */}
            <div className="flex justify-center gap-[1rem]">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`cursor-pointer rounded-lg text-[1rem] min-w-[1rem] font-label border py-[0.5rem] px-[0.5rem] ${currentPage === index + 1 ? ' text-black border-black' : 'text-neutral-30 hover:border-black hover:text-black'}`}
                    >
                        <div className='min-w-[1rem] text-center'>
                            {index + 1}
                        </div>
                    </div>
                ))}
            </div>

            {imageModal && <ImageModal setModal={setImageModal} file={curFile} />}
            {modal && <Modal func={fetchReviews} setModal={setModal} />}
        </div>
    );
};

export default Review;
