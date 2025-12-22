"use client";

import { useEffect, useState } from "react";

type Review = {
  reviewId?: string;
  reviewer?: {
    displayName?: string;
  };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime: string;
};

const ratingMap: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = (data.reviews || []).sort(
          (a: Review, b: Review) =>
            new Date(b.createTime).getTime() -
            new Date(a.createTime).getTime()
        );
        setReviews(sorted);
      })
      .catch((err) => console.error("Failed to load reviews", err));
  }, []);

  if (!reviews.length) {
    return <p className="text-sm text-gray-500">No reviews available.</p>;
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Testimonials
        </h2>

        {/* HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={`${review.reviewId || "review"}-${index}`}
              className="min-w-[280px] max-w-[280px] snap-start border rounded-lg p-5 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-sm">
                  {review.reviewer?.displayName || "Anonymous"}
                </p>
                <span className="text-yellow-500 text-sm">
                  {"★".repeat(ratingMap[review.starRating])}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-3 line-clamp-4">
                {review.comment || "No written review provided."}
              </p>

              <p className="text-xs text-gray-400">
                {new Date(review.createTime).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-gray-400 mt-6">
          Reviews originally collected from Google Business Profile
        </p>
      </div>
    </section>
  );
}
