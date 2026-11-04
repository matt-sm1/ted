import { ChallengeCard } from "@/components/ui/ChallengeCard";
import EyebrowText from "@/components/ui/EyebrowText";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import Button from "@/components/ui/Button";
import { BACKGROUND_IMAGE_CHALLENGES, CHALLENGES } from "@/constants/data";

function SectionHeader() {
    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
                <EyebrowText text="Explore The Challenges" />
                <SectionTitle>Choose Your <span className="text-sky">Market</span> Challenge</SectionTitle>
            </div>

            <div className="flex max-w-sm flex-col items-start gap-5">
                <Paragraph>
                    Different Strategies. Different Challenges. One Goal Build The
                    Strongest Portfolio And Climb The Leaderboard.
                </Paragraph>

                <Button variant="secondary" href="/">All Categories</Button>
            </div>
        </div>
    );
}

import SectionLayout from "@/components/layout/SectionLayout";

export default function Challenges() {
    return (
        <SectionLayout backgroundImage={BACKGROUND_IMAGE_CHALLENGES}>
            <SectionHeader />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {CHALLENGES.map((challenge) => (
                    <ChallengeCard
                        key={challenge.id}
                        {...challenge}
                    />
                ))}
            </div>
        </SectionLayout>
    );
}