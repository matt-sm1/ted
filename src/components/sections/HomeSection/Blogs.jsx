"use client";

import { useState } from "react";
import EyebrowText from "@/components/ui/EyebrowText";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import { BACKGROUND_IMAGE_BLOG, POSTS, VISIBLE_COUNT } from "@/constants/data";
import { PostCard } from "@/components/ui/PostCard";
import SectionLayout from "@/components/layout/SectionLayout";


const SLOT_CLASSES = ["block", "hidden sm:block", "hidden lg:block"];

function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <EyebrowText text="Latest Market Insights" />
      <SectionTitle>
        Smarter ways to play the <span className="text-sky">market</span>
      </SectionTitle>
      <Paragraph>
        Explore Practical Market Insights, Strategy Ideas, And Investing Wars
        Updates Designed To Help Players Understand The Competition And Sharpen
        Their Approach.
      </Paragraph>
    </div>
  );
}

function CarouselDots({ count, activeIndex, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-2" aria-label="Choose a blog slide">
  {Array.from({ length: count }, (_, index) => {
    const isActive = index === activeIndex;

    return (
      <button
        key={index}
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        aria-current={isActive ? "true" : undefined}
        onClick={() => onSelect(index)}
        className={`cursor-pointer h-1.5 rounded-full transition-all ${
          isActive ? "w-6 bg-sky" : "w-1.5 bg-white/30 hover:bg-white/50"
        }`}
      />
    );
  })}
</div>
  );
}

export default function Blogs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visiblePosts = Array.from({ length: VISIBLE_COUNT }, (_, offset) => {
    return POSTS[(activeIndex + offset) % POSTS.length];
  });

  return (
    <SectionLayout backgroundImage={BACKGROUND_IMAGE_BLOG}>
       <SectionHeader />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post, slot) => (
            <PostCard key={post.id} {...post} className={SLOT_CLASSES[slot]} />
          ))}
        </div>

        <div className="mt-12">
          <CarouselDots
            count={POSTS.length}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
    </SectionLayout>
    
  );
}