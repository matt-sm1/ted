import EyebrowText from "@/components/ui/EyebrowText";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import {  BACKGROUND_IMAGE_TESTIMONIAL, TESTIMONIALS } from "@/constants/data";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import SectionLayout from "@/components/layout/SectionLayout";


function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <EyebrowText text="What Our Players Say" />  
      <SectionTitle>
        Real Players Real Market <span className="text-sky">Competition.</span>
      </SectionTitle>   
      <Paragraph>
           See How Investing Wars Players Are Putting Their Market Knowledge To The
        Test, Building Strategies, And Competing Through Real-Market Challenges.
      </Paragraph>
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionLayout backgroundImage={BACKGROUND_IMAGE_TESTIMONIAL}>
      <SectionHeader />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </SectionLayout>
  );
}