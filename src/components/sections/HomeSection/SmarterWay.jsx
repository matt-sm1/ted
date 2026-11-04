import Image from "next/image";
import EyebrowText from "@/components/ui/EyebrowText";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import { StarIcon } from "@/components/ui/StarIcon";
import { BACKGROUND_IMAGE_SMARTERWAY, FEATURES, SHOWCASE_IMAGE_SMARTERWAY, STAR_COUNT, STATS } from "@/constants/data";
import SectionLayout from "@/components/layout/SectionLayout";
import { ShowCaseImage } from "@/components/ui/ShowCaseImage";

function SectionHeading() {
    return (
        <div className="flex flex-col gap-4">
            <EyebrowText text="Built for real market competition" />
            <SectionTitle>
                A smarter way to test your <span className="text-sky">market skills</span>
            </SectionTitle>
            <Paragraph>
                Investing Wars Combines Real-Time Market Data With Competitive Gameplay,
                Giving Players A Practical And Engaging Way To Test Strategies, Build
                Portfolios, And Compete Against Others.
            </Paragraph>
        </div>
    );
}

function CapitalCard() {
    return (
        <div className="flex items-center gap-6 rounded-lg   bg-light-black px-5 py-4">
            <p className="text-lg sm:text-3xl md:text-5xl font-semibold text-white">
                $10<span className="text-yellow">M</span>
            </p>
            <div>
                <p className="text-xs sm:text-base text-white">Virtual Capital In Every Game</p>
                <div
                    className="mt-2 flex gap-1"
                    role="img"
                    aria-label="5 out of 5 stars"
                >
                    {Array.from({ length: STAR_COUNT }, (_, index) => (
                        <StarIcon key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FeatureList() {
    return (
        <ul className="grid max-w-md grid-cols-2 gap-x-8 gap-y-4 text-[13px] sm:text-base text-white">
            {FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
            ))}
        </ul>
    );
}

function StatCard({ value, label, icon }) {
    return (
        <div className="flex flex-col items-center gap-8 rounded-lg bg-light-black py-10 px-6 text-center">
            <span className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full bg-sky">
                {icon && (
                    <Image
                        src={icon}
                        alt="Stat Icon"
                        aria-hidden="true"
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                    />
                )}
            </span>
            <div>
                <p className="text-2xl font-semibold text-white sm:text-4xl">{value}</p>
                <p className="mt-1 text-base text-white">{label}</p>
            </div>
        </div>
    );
}

export default function SmarterWay() {
    return (
        <SectionLayout
            backgroundImage={BACKGROUND_IMAGE_SMARTERWAY}
            className="z-10 overflow-visible pb-20 pt-16"
            container={false}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-5 grid items-center gap-12 md:mb-[150px] lg:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <SectionHeading />
                        <CapitalCard />
                        <FeatureList />

                        <Button variant="primary" className="w-fit" href="#">
                            Explore Investing Wars
                        </Button>
                    </div>

                    <ShowCaseImage image={SHOWCASE_IMAGE_SMARTERWAY} alt="Investing Wars app with portfolio, leaderboard and coins" />
                </div>
            </div>

            <div className="relative left-1/2 grid w-full max-w-7xl -translate-x-1/2 grid-cols-1 gap-4 px-4 sm:absolute sm:bottom-[-100px] sm:px-6 lg:grid-cols-4 lg:px-8">
                {STATS.map((stat) => (
                    <StatCard key={stat.id} {...stat} />
                ))}
            </div>
        </SectionLayout>
    );
}