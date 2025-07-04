import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { VscUnverified } from "react-icons/vsc";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

export interface Review {
  rating: number;
  title: string;
  review: string;
  author: string;
  verified: boolean;
  source: string;
}

const REVIEWS: Review[] = [
  {
    rating: 5,
    title: "Many Items Ordered",
    review: "I have used Rush Order Tees for many items. This company always comes thru with a quality product. They go over your order in detail and it is always delivered on time. Definitely recommend them to anyone looking for a custom print.",
    author: "Michael L.",
    verified: false,
    source: "Yotpo",
  },
  {
    rating: 5,
    title: "T-shirts Arrived Before Expected Date",
    review: "T-shirts arrived before expected date. Sizes were true to size. Quality of the fabric is good. Very pleased with this company and would use them again and recommend them.",
    author: "Susan S.",
    verified: true,
    source: "Yotpo",
  },
  {
    rating: 5,
    title: "Great experience dealing with this company.",
    review: "I would give it more stars if I could. The quality of the shirt and printing were amazing. Customer service was also great.",
    author: "Carol B.",
    verified: true,
    source: "Yotpo",
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div>
    {Array.from({ length: rating }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400 inline-block mr-1" />
    ))}
  </div>
);

const VerificationBadge = ({ verified }: { verified: boolean }) => (
  verified ? <MdVerified className="text-green-400" /> : <VscUnverified className="text-red-500" />
);

function CustomerReview() {
  return (
    <section className="bg-[#f4f8fc] w-full py-10 px-5">
      <div className="max-w-[1152px] mx-auto px-5">
        <Carousel>
          <CarouselContent className="flex justify-between">
            {REVIEWS.map((review, id) => (
              <CarouselItem key={id} className="lg:basis-1/3 md:basis-1/2 basis-1/1">
                <div className="rounded-lg w-full bg-white p-5 flex flex-col justify-between items-stretch h-full">
                  <div className="flex gap-4 flex-col">
                    <StarRating rating={review.rating} />
                    <h2 className="text-md font-bold">{review.title}</h2>
                    <p>{review.review}</p>
                  </div>
                  <div className="flex flex-col gap-1 mt-3">
                    <h3>{review.author}</h3>
                    <div className="flex items-center gap-2">
                      <VerificationBadge verified={review.verified} />
                      <p className="text-sm">Verified Review on {review.source}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:flex hidden left-[-17px]" />
          <CarouselNext className="md:flex hidden right-[-17px]" />
        </Carousel>
      </div>
    </section>
  );
}

export default CustomerReview;