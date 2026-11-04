import Image from "next/image";
import Button from "@/components/ui/Button";
import { AVATARS, BACKGROUND_IMAGE_HERO, PLAYERS_STAT, SHOWCASE_IMAGE_HERO, WINNER_STATS } from "@/constants/data";
import { RocketIcon } from "@/components/icons/RocketIcon";

function PlayersCard() {
  return (
    <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
      <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-sky text-navy-dark sm:h-44 sm:w-44">
        <RocketIcon className="mb-1 h-10 w-10" />
        <span className="text-3xl font-bold">{PLAYERS_STAT.value}</span>
        <span className="text-xs">{PLAYERS_STAT.label}</span>
      </div>

      <p className="max-w-xs text-[13px] sm:text-[16px] font-normal leading-[28px] capitalize tracking-[0px] text-white">
        Join Competitive Stock Market Challenges, Build Your Strategy With Real
        Market Data, And Compete For Real Cash Prizes.
      </p>

      <AvatarStack />
    </div>
  );
}

function AvatarStack() {
  return (
    <div
      className="flex items-center"
      role="img"
      aria-label="25 plus active players"
    >
      {AVATARS.map(({ id, initials, color }) => (
        <span
          key={id}
          className={`-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-dark text-xs font-semibold text-white first:ml-0 ${color}`}
          aria-hidden="true"
        >
          {initials}
        </span>
      ))}
      <span
        className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-dark bg-yellow text-[10px] font-bold text-navy-dark"
        aria-hidden="true"
      >
        25+
      </span>
    </div>
  );
}

function HeroBadge() {
  return (
    <p className="inline-flex flex-col sm:flex-row items-center gap-2 text-xs font-medium text-yellow sm:text-base">
      <span className="bg-yellow px-2 py-1 text-navy-dark">Compete,</span>
      Strategize, And Win With Real Market Data.
    </p>
  );
}

function HeroHeading() {
  return (
    <h1 className="mt-4 text-center text-2xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-7xl">
      Enter The Market.
      <br />
      <span className="text-sky">Outplay</span> The Competition.
    </h1>
  );
}

function StatItem({ value, label }) {
  return (
    <div className="px-6 first:pl-0">
      <p className="text-3xl font-semibold text-sky">{value} <span className="text-yellow">+</span></p>
      <p className="mt-1 text-xs text-white">{label}</p>
    </div>
  );
}

function WelcomeCard() {
  return (
    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
      <p className="max-w-sm text-[13px] sm:text-[16px] font-normal leading-[28px] capitalize tracking-[0px] text-white">
        Welcome To Investing Wars, Where Real Market Data Meets Competitive
        Gameplay And Every Challenge Is A Chance To Test Your Strategy And Climb
        The Leaderboard.
      </p>
      <Button href="#" variant="secondary" >Join Challenges</Button>
      <div className="flex divide-x divide-sky/60">
        {WINNER_STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <Image
        src={BACKGROUND_IMAGE_HERO}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="flex flex-col items-center">
          <HeroBadge />
          <HeroHeading />
        </div>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-3">
          <PlayersCard />

          <div className="relative mx-auto aspect-[3/2] w-full max-w-md lg:order-none">
            <Image
              src={SHOWCASE_IMAGE_HERO}
              alt="Excited player holding a golden trophy"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-contain"
            />
          </div>

          <WelcomeCard />
        </div>
      </div>
    </section>
  );
}