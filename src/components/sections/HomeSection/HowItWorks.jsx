import Link from "next/link";
import EyebrowText from "@/components/ui/EyebrowText";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import { BACKGROUND_IMAGE_HOWITWORKS, STEPS } from "@/constants/data";
import SectionLayout from "@/components/layout/SectionLayout";


const REGISTER_HREF = "#";


function SectionHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <EyebrowText text="Step By Step Process"/>
      <SectionTitle>
         How <span className="text-sky">Investing Wars</span> Works
      </SectionTitle>
      <Paragraph>
         Choose Your Challenge, Build Your $10 Million Virtual Portfolio Using
        Real Market Data, And Compete Against Other Players For Real Cash
        Prizes.
      </Paragraph>
    </div>
  );
}

function StepConnector() {
  return (
    <span
      className="pointer-events-none absolute left-[calc(50%+2.75rem)] top-2.5 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-yellow/20 to-yellow md:block"
      aria-hidden="true"
    >
      <span className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-yellow" />
    </span>
  );
}

function StepItem({ id, title, description, showConnector }) {
  return (
    <li className="relative flex flex-col items-center text-center">
      <p className="h-5 text-base font-medium leading-5 text-white">
        Step<span className="text-yellow">_{id}</span>
      </p>
      {showConnector && <StepConnector />}

      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 max-w-[16rem] text-xs leading-relaxed text-white">
        {description}
      </p>
    </li>
  );
}
function CallToAction() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-5 rounded-lg border border-white/10 bg-navy-light/60 px-8 py-6 sm:flex-row">
      <p className="text-center text-sm font-medium text-yellow sm:text-left">
        Ready To Put Your Market Strategy To The Test?
      </p>
      <Link
        href={REGISTER_HREF}
        className="shrink-0 rounded-full bg-yellow px-7 py-2.5 text-sm font-semibold text-navy-dark transition-opacity hover:opacity-90"
      >
        Register Here
      </Link>
    </div>
  );
}



export default function HowItWorks() {
  return (
    <SectionLayout
      backgroundImage={BACKGROUND_IMAGE_HOWITWORKS}
      className="sm:py-[150px]"
      containerClassName="max-w-5xl"
    >
      <SectionHeader />

      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, index) => (
          <StepItem
            key={step.id}
            {...step}
            showConnector={index < STEPS.length - 1}
          />
        ))}
      </ol>

      <div className="mt-16">
        <CallToAction />
      </div>
    </SectionLayout>
  );
}