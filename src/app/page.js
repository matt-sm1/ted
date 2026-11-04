import Blogs from "@/components/sections/HomeSection/Blogs";
import Challenges from "@/components/sections/HomeSection/Challenges";
import Hero from "@/components/sections/HomeSection/Hero";
import HowItWorks from "@/components/sections/HomeSection/HowItWorks";
import SmarterWay from "@/components/sections/HomeSection/SmarterWay";
import Testimonials from "@/components/sections/HomeSection/Testimonials";
import WhyChooseUs from "@/components/sections/HomeSection/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Challenges />
      <SmarterWay />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Blogs />
    </main>
  );
}