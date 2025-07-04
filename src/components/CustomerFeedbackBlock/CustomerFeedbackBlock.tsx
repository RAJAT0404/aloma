"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, ThumbsUp, ThumbsDown, VerifiedIcon } from 'lucide-react';

interface Review {
    id: number;
    customerName: string;
    customerInitial: string;
    isVerified: boolean;
    rating: number;
    title: string;
    comment: string;
    date: string;
    helpful: number;
    notHelpful: number;
}

interface ReviewData {
    productTitle: string;
    overallRating: number;
    totalReviews: number;
    ratingDistribution: {
        5: number;
        4: number;
        3: number;
        2: number;
        1: number;
    };
    reviews: Review[];
}

const reviewData: ReviewData = {
    productTitle: "Eddie Bauer Sweater Fleece Full-Zip Customer Feedback",
    overallRating: 4.5,
    totalReviews: 2,
    ratingDistribution: {
        5: 1,
        4: 1,
        3: 0,
        2: 0,
        1: 0
    },
    reviews: [
        {
            id: 1,
            customerName: "Garrick M.",
            customerInitial: "G",
            isVerified: true,
            rating: 4,
            title: "Eddie Bauer fleece",
            comment: "We had about 11 jackets made and they are great. The logo is better than expected. The one downside to this specific fleece jacket is the sleeves are really long. Several of my staff roll the sleeves up some and other are getting them hemmed.",
            date: "02/18/24",
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 2,
            customerName: "Rey, H.",
            customerInitial: "R",
            isVerified: true,
            rating: 5,
            title: "You guys are great. Thank",
            comment: "You guys are great. Thank you!",
            date: "10/13/23",
            helpful: 0,
            notHelpful: 0
        }
    ]
};

const CustomerFeedbackBlock = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [ratingFilter, setRatingFilter] = useState('all');
    const [sortBy, setSortBy] = useState('most-relevant');
    const [useCase, setUseCase] = useState("all");
    const [fit, setFit] = useState("all");
    const [productQuality, setProductQuality] = useState("all");
    const [mediaFilter, setMediaFilter] = useState('with-media'); 



    const filteredReviews = reviewData.reviews.filter(review => {
        const matchesSearch = review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.comment.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRating = ratingFilter === 'all' || review.rating.toString() === ratingFilter;
        return matchesSearch && matchesRating;
    });

    const renderStars = (rating: number, size = 'sm') => {
        const sizeClass = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        className={`${sizeClass} ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    const renderRatingBar = (rating: number, count: number, total: number) => {
        const percentage = total > 0 ? (count / total) * 100 : 0;
        return (
            <div className="flex items-center gap-2 text-sm">
                <span className="w-2">{rating}</span>
                <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <span className="w-4 text-right text-gray-600">{count}</span>
            </div>
        );
    };

    return (
        <div className='bg-[#F4F8FC]'>


            <h1 className="text-[36px] font-bold text-center text-gray-900 mb-2">
                {reviewData.productTitle}
            </h1>
            <div className="max-w-6xl mx-auto p-6 bg-white">
                <div className=" mb-8 ">
                    <div className="flex gap-4 p-6">
                        <button className="text-lg font-bold underline cursor-pointer">Reviews</button>
                        <button className="text-lg font-bold cursor-pointer">Q&A</button>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-[36px] font-semibold text-gray-900 mb-6 text-center">Customer Reviews</h2>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-[650px] mx-auto mb-[30px]">
                        <div className="w-full">
                            <div className="flex justify-end gap-2 items-center mb-6">

                                <div className="text-5xl font-bold text-gray-900 mb-2">
                                    {reviewData.overallRating}
                                </div>

                                <div className='flex flex-col'>

                                    <div className="mb-2">{renderStars(reviewData.overallRating, 'lg')}</div>
                                    <div className="text-sm text-gray-600">
                                        Based on {reviewData.totalReviews} reviews
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block border-l border-gray-200 mx-6"></div>

                        <div className="w-full">
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <div key={rating}>
                                        {renderRatingBar(
                                            rating,
                                            reviewData.ratingDistribution[rating as keyof typeof reviewData.ratingDistribution],
                                            reviewData.totalReviews
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200 my-8" />

                    <div className="flex flex-wrap mb-2 gap-4 text-sm">
                        <div className="relative w-40">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search reviews"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-8 w-full"
                            />
                        </div>

                        <Select value={ratingFilter} onValueChange={setRatingFilter}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Rating" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Rating</SelectItem>
                                <SelectItem value="5">5 Stars</SelectItem>
                                <SelectItem value="4">4 Stars</SelectItem>
                                <SelectItem value="3">3 Stars</SelectItem>
                                <SelectItem value="2">2 Stars</SelectItem>
                                <SelectItem value="1">1 Star</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={mediaFilter} onValueChange={setMediaFilter}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="With media" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="with-media">With media</SelectItem>
                                <SelectItem value="without-media">Without media</SelectItem>
                            </SelectContent>
                        </Select>


                        <Select value={useCase} onValueChange={setUseCase}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Use Case" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="work">Work</SelectItem>
                                <SelectItem value="casual">Casual</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={fit} onValueChange={setFit}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Fit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="tight">Tight</SelectItem>
                                <SelectItem value="perfect">Perfect</SelectItem>
                                <SelectItem value="loose">Loose</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={productQuality} onValueChange={setProductQuality}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Product Quality" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="excellent">Excellent</SelectItem>
                                <SelectItem value="good">Good</SelectItem>
                                <SelectItem value="average">Average</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>


                    <div className="flex justify-end items-center mb-6">
                        <div className="text-sm text-gray-600">
                            Sort by:
                        </div>
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="border-none shadow-none">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="most-relevant">Most relevant</SelectItem>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="oldest">Oldest</SelectItem>
                                <SelectItem value="highest-rating">Highest rating</SelectItem>
                                <SelectItem value="lowest-rating">Lowest rating</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <hr className="my-2" />
                    <div className="space-y-6">
                        {filteredReviews.map((review) => (
                            <Card key={review.id} className="outline-none border-0 shadow-none">
                                <CardContent className="p-6">
                                    <div className="flex flex-col gap-2">

                                        <div className='flex flex-col sm:flex-row justify-between'>

                                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[100px] items-start">


                                                <div>

                                                    <div className="text-sm font-medium text-gray-800">
                                                        {review.customerName}
                                                    </div>


                                                    {review.isVerified && (
                                                        <div className="text-xs text-blue-600 mt-1 flex items-center gap-1">
                                                            <VerifiedIcon className="w-3 h-3 text-blue-600" />
                                                            <span>Verified Buyer</span>
                                                        </div>
                                                    )}


                                                </div>


                                                <div className='max-w-full sm:max-w-[500px]'>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        {renderStars(review.rating)}
                                                        <span className="font-bold text-sm text-gray-800">{review.title}</span>
                                                    </div>

                                                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                                                        {review.comment}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-sm ">{review.date}</div>
                                        </div>

                                        <div className="flex justify-end gap-2 items-center text-sm text-gray-600">
                                            <span>Was this review helpful?</span>
                                            <div className="flex items-center gap-4">
                                                <button className="flex items-center gap-1 hover:text-green-600">
                                                    <ThumbsUp className="w-4 h-4" />
                                                    <span>{review.helpful}</span>
                                                </button>
                                                <button className="flex items-center gap-1 hover:text-red-600">
                                                    <ThumbsDown className="w-4 h-4" />
                                                    <span>{review.notHelpful}</span>
                                                </button>
                                            </div>
                                        </div>
                                        <hr className="my-4 border-gray-200" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerFeedbackBlock;