import Image from "next/image";
import EyebrowText from "@/components/ui/EyebrowText";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import { BACKGROUND_IMAGE_WHYCHOOSEUS, FEATURES_WHYCHOOSEUS, SHOWCASE_IMAGE__WHYCHOOSEUS } from "@/constants/data";
import SectionLayout from "@/components/layout/SectionLayout";
import { ShowCaseImage } from "../../ui/ShowCaseImage";





function SectionHeading() {
  return (
    <div className="flex flex-col gap-4">
      <EyebrowText text="Why Choose Us!" />
      <SectionTitle >
        Built for <span className="text-sky">smarter market</span> competition
      </SectionTitle>
      <Paragraph>
        Investing Wars Combines Real Market Data, Simulated Capital, And
        Competitive Gameplay To Give Players An Exciting Way To Test Their
        Strategies And Challenge Themselves Against Others.
      </Paragraph>
    </div>
  );
}

function FeatureItem({ title, description }) {
  return (
    <li className="flex items-start gap-5">
      <span
        className="mt-1 h-12 w-12 shrink-0 rounded-full bg-sky"
        aria-hidden="true"
      />
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-white">
          {description}
        </p>
      </div>
    </li>
  );
}


export default function WhyChooseUs() {
  return (
    <SectionLayout
      backgroundImage={BACKGROUND_IMAGE_WHYCHOOSEUS}
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ShowCaseImage image={SHOWCASE_IMAGE__WHYCHOOSEUS} alt="Player trading with charts, coins and a trophy" />

        <div className="flex flex-col gap-8">
          <SectionHeading />

          <ul className="flex flex-col gap-7">
            {FEATURES_WHYCHOOSEUS.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </ul>

          <Button variant="primary" className="w-fit" href="#">
            Read More
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
}