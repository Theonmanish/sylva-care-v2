import Image from "next/image";
import Link from "next/link";
import type { CareGuideContent } from "@/content/care-guide";

type CareGuideProps = { content: CareGuideContent };

const eyebrowClass = "font-sans text-xs font-semibold uppercase leading-none tracking-[0.18em] text-muted-gold";

export function CareGuide({ content }: CareGuideProps) {
  const isKokedama = content.slug === "kokedama";

  return (
    <div className="w-full bg-black">
      <section
        className="relative isolate h-[clamp(590px,78vw,760px)] min-h-[min(760px,calc(100svh-82px))] max-h-[840px] w-full overflow-hidden bg-black max-md:h-[min(690px,calc(100svh-76px))] max-md:min-h-[540px] max-md:max-h-[690px]"
        aria-labelledby="hero-title"
      >
        <Image
          className={`absolute z-[-2] object-cover ${isKokedama ? "object-[center_54%] max-md:!w-[158%] max-md:!right-[-2%] max-md:object-[70%_53%]" : "object-[center_53%] max-md:!w-[150%] max-md:!right-0 max-md:object-[70%_53%]"} max-md:!left-auto max-md:!h-full`}
          src={`/images/${content.slug === "terrariums" ? "terrarium" : "kokedama"}.png`}
          alt={isKokedama ? "A moss-wrapped Kokedama with a fern" : "A planted terrarium within a glass vessel"}
          fill
          priority
          sizes="100vw"
          quality={88}
        />
        <div className="absolute left-[clamp(24px,7.2vw,112px)] top-1/2 w-[min(570px,48vw)] -translate-y-[48%] max-md:left-6 max-md:top-[49%] max-md:w-[min(44vw,330px)] max-md:-translate-y-1/2 max-[380px]:left-5">
          <p className={`${eyebrowClass} mb-6 max-md:mb-[18px] max-md:text-[9px] max-md:tracking-[0.19em]`}>
            Care Guide <span className="px-2 text-muted-grey" aria-hidden="true">/</span> {content.name}
          </p>
          <h1 id="hero-title" className="m-0 max-w-[590px] font-serif text-[4.5rem] font-light leading-[1.08] tracking-[-0.02em] text-ivory max-md:max-w-[360px] max-md:text-[2.75rem] max-md:leading-[1.15] max-md:tracking-[-0.01em] max-[380px]:text-[2.625rem]">
            {content.heroTitle}
          </h1>
          <p className="mb-0 mt-[26px] max-w-[420px] text-lg leading-[1.65] tracking-[0.01em] text-ivory/85 max-md:mt-[19px] max-md:max-w-[310px] max-md:text-sm max-md:leading-[1.5] max-[380px]:max-w-[275px]">
            {content.heroDescription}
          </p>
        </div>
        <span
          className="pointer-events-none absolute inset-0 z-[-1] bg-[linear-gradient(90deg,rgba(0,0,0,.38),transparent_66%)] max-md:bg-[linear-gradient(90deg,rgba(0,0,0,.56),rgba(0,0,0,.12)_67%,transparent)]"
          aria-hidden="true"
        />
      </section>

      <nav
        className="flex min-h-[112px] items-center justify-between gap-6 bg-black px-[calc(clamp(24px,7.2vw,112px)+clamp(8px,2vw,24px))] py-7 max-md:min-h-[100px] max-md:flex-col max-md:items-end max-md:justify-center max-md:gap-[9px] max-md:py-6 max-md:pl-6 max-md:pr-8"
        aria-label="Choose a care guide"
      >
        <span className="font-sans text-[0.8125rem] font-medium leading-[1.2] tracking-[0.12em] text-muted-grey">
          Explore care guides
        </span>
        <div className="flex items-center gap-8 text-[#77766f] max-md:gap-[18px]">
          <Link
            className="relative py-3 font-serif text-xl font-medium leading-[1.4] tracking-[0.02em] text-muted-grey transition-colors duration-300 hover:text-ivory aria-[current=page]:text-ivory focus-visible:outline focus-visible:outline-1 focus-visible:outline-muted-gold focus-visible:outline-offset-[5px]"
            href="/terrariums"
            aria-current={!isKokedama ? "page" : undefined}
          >
            Terrariums
            {!isKokedama && <span className="absolute bottom-px left-0 h-px w-full bg-muted-gold" aria-hidden="true" />}
          </Link>
          <span aria-hidden="true" className="text-sm text-muted-grey">/</span>
          <Link
            className="relative py-3 font-serif text-xl font-medium leading-[1.4] tracking-[0.02em] text-muted-grey transition-colors duration-300 hover:text-ivory aria-[current=page]:text-ivory focus-visible:outline focus-visible:outline-1 focus-visible:outline-muted-gold focus-visible:outline-offset-[5px]"
            href="/kokedama"
            aria-current={isKokedama ? "page" : undefined}
          >
            Kokedama
            {isKokedama && <span className="absolute bottom-px left-0 h-px w-full bg-muted-gold" aria-hidden="true" />}
          </Link>
        </div>
      </nav>

      <div className="w-full bg-black">
        <section
          id="about"
          className="grid w-full grid-cols-[minmax(240px,.83fr)_minmax(0,1.17fr)] items-start gap-x-[clamp(48px,10vw,150px)] px-[clamp(24px,7.2vw,112px)] py-[clamp(96px,12vw,172px)] scroll-mt-[98px] max-md:grid-cols-1 max-md:gap-y-[34px] max-md:px-6 max-md:py-[88px] max-md:scroll-mt-[92px]"
        >
          <div className="max-w-[490px]">
            <p className={`${eyebrowClass} mb-[23px] max-md:mb-4`}>The essence</p>
            <h2 className="m-0 font-serif text-5xl font-light leading-[1.15] tracking-[-0.015em] text-ivory max-md:max-w-[500px] max-md:text-[2rem] max-md:leading-[1.25] max-md:tracking-normal">
              {content.aboutTitle}
            </h2>
          </div>
          <div className="max-w-[700px] pt-1 max-md:pt-0">
            {content.about.map((paragraph) => (
              <p className="mb-5 text-base leading-[1.6] tracking-[0.005em] text-muted-grey last:mb-0 max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="grid w-full grid-cols-[minmax(240px,.83fr)_minmax(0,1.17fr)] items-start gap-x-[clamp(48px,10vw,150px)] px-[clamp(24px,7.2vw,112px)] py-[clamp(96px,12vw,172px)] scroll-mt-[98px] max-md:grid-cols-1 max-md:gap-y-[34px] max-md:px-6 max-md:py-[88px] max-md:scroll-mt-[92px]"
        >
          <div className="max-w-[490px]">
            <p className={`${eyebrowClass} mb-[23px] max-md:mb-4`}>The craft</p>
            <h2 className="m-0 font-serif text-5xl font-light leading-[1.15] tracking-[-0.015em] text-ivory max-md:max-w-[500px] max-md:text-[2rem] max-md:leading-[1.25] max-md:tracking-normal">
              {content.processTitle}
            </h2>
          </div>
          <div className="max-w-[700px] pt-1 max-md:pt-0">
            <p className="mb-[38px] text-lg leading-[1.65] tracking-[0.01em] text-ivory/85 max-md:mb-7 max-md:text-base max-md:leading-[1.6]">
              {content.processIntro}
            </p>
            <ol className="mt-[45px] list-none p-0 max-md:mt-7">
              {content.process.map((stage) => (
                <li className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 py-[22px] pb-6 max-md:grid-cols-[34px_minmax(0,1fr)] max-md:gap-3 max-md:py-[19px]" key={stage.number}>
                  <span className="text-[10px] tracking-[0.12em] text-muted-gold">{stage.number}</span>
                  <div>
                    <h3 className="mb-2 mt-[-5px] font-serif text-[2.25rem] font-normal leading-[1.25] tracking-[-0.01em] text-ivory max-md:text-[1.75rem] max-md:leading-[1.3] max-md:tracking-normal">
                      {stage.title}
                    </h3>
                    <p className="mb-0 max-w-[560px] text-base leading-[1.6] tracking-[0.005em] text-muted-grey max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]">
                      {stage.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="care"
          className="grid w-full grid-cols-[minmax(240px,.83fr)_minmax(0,1.17fr)] items-start gap-x-[clamp(48px,10vw,150px)] px-[clamp(24px,7.2vw,112px)] py-[clamp(96px,12vw,172px)] scroll-mt-[98px] max-md:grid-cols-1 max-md:gap-y-[34px] max-md:px-6 max-md:py-[88px] max-md:scroll-mt-[92px]"
        >
          <div className="max-w-[490px]">
            <p className={`${eyebrowClass} mb-[23px] max-md:mb-4`}>Everyday care</p>
            <h2 className="m-0 font-serif text-5xl font-light leading-[1.15] tracking-[-0.015em] text-ivory max-md:max-w-[500px] max-md:text-[2rem] max-md:leading-[1.25] max-md:tracking-normal">
              {content.careTitle}
            </h2>
          </div>
          <div className="max-w-[700px] pt-1 max-md:pt-0">
            <p className="mb-[38px] text-lg leading-[1.65] tracking-[0.01em] text-ivory/85 max-md:mb-7 max-md:text-base max-md:leading-[1.6]">
              {content.careIntro}
            </p>
            <div className="mt-[6px]">
              {content.care.map((topic, index) => (
                <article className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 py-[27px] pb-[29px] [&+article]:mt-[17px] max-md:grid-cols-[34px_minmax(0,1fr)] max-md:gap-3" key={topic.title}>
                  <span className="text-[10px] tracking-[0.12em] text-muted-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 mt-[-5px] font-serif text-[2.25rem] font-normal leading-[1.25] tracking-[-0.01em] text-ivory max-md:text-[1.75rem] max-md:leading-[1.3] max-md:tracking-normal">
                      {topic.title}
                    </h3>
                    {topic.paragraphs?.map((paragraph) => (
                      <p className="mb-5 max-w-[590px] text-base leading-[1.6] tracking-[0.005em] text-muted-grey last:mb-0 max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                    {topic.points?.map((point) => (
                      <p className="mb-5 max-w-[590px] text-base leading-[1.6] tracking-[0.005em] text-muted-grey last:mb-0 max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]" key={point.label}>
                        <strong className="mr-2 font-medium text-ivory/90">{point.label}</strong>{point.text}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(24px,7.2vw,112px)] pb-[clamp(96px,12vw,172px)] pt-6 max-md:px-6 max-md:pb-[88px] max-md:pt-1" aria-labelledby="precautions-title">
          <div className="mx-auto w-full max-w-[1120px] text-center">
            <p className={`${eyebrowClass} mb-4`}>Things to avoid</p>
            <h2 id="precautions-title" className="m-0 font-serif text-5xl font-light leading-[1.15] tracking-[-0.015em] text-ivory max-md:text-[2rem] max-md:leading-[1.25] max-md:tracking-normal">
              Things to avoid.
            </h2>
            <p className="mx-auto mb-11 mt-5 max-w-[590px] text-base leading-[1.6] tracking-[0.005em] text-muted-grey max-md:mb-[34px] max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]">
              A few simple precautions will help keep your {isKokedama ? "Kokedama" : "terrarium"} healthy over time.
            </p>
            <ul className="m-0 grid list-none grid-cols-3 gap-x-8 gap-y-10 p-0 text-left max-md:grid-cols-2 max-md:gap-x-6 max-md:gap-y-[34px] max-[480px]:grid-cols-1 max-[480px]:gap-y-[27px]">
              {content.precautions.map((item, index) => (
                <li className="grid grid-cols-[28px_minmax(0,1fr)] gap-[14px] max-md:grid-cols-[24px_minmax(0,1fr)] max-md:gap-[10px]" key={item.title}>
                  <span className="pt-[3px] text-[10px] tracking-[0.12em] text-muted-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-[9px] mt-0 font-serif text-[1.75rem] font-normal leading-[1.3] text-ivory/90 max-md:text-2xl max-md:leading-[1.25]">
                      {item.title}
                    </h3>
                    <p className="m-0 text-base leading-[1.6] tracking-[0.005em] text-muted-grey max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="faq"
          className="grid w-full grid-cols-[minmax(240px,.83fr)_minmax(0,1.17fr)] items-start gap-x-[clamp(48px,10vw,150px)] px-[clamp(24px,7.2vw,112px)] py-[clamp(96px,12vw,172px)] scroll-mt-[98px] max-md:grid-cols-1 max-md:gap-y-[34px] max-md:px-6 max-md:py-[88px] max-md:scroll-mt-[92px]"
        >
          <div className="max-w-[490px]">
            <p className={`${eyebrowClass} mb-[23px] max-md:mb-4`}>Common questions</p>
            <h2 className="m-0 font-serif text-5xl font-light leading-[1.15] tracking-[-0.015em] text-ivory max-md:max-w-[500px] max-md:text-[2rem] max-md:leading-[1.25] max-md:tracking-normal">
              Frequently asked questions.
            </h2>
          </div>
          <div className="max-w-[700px] pt-1 max-md:pt-0">
            <p className="mb-[38px] text-lg leading-[1.65] tracking-[0.01em] text-ivory/85 max-md:mb-7 max-md:text-base max-md:leading-[1.6]">
              Answers to common questions about caring for your Sylva Auris {isKokedama ? "Kokedama" : "terrarium"}.
            </p>
            <div className="mt-1">
              {content.faqs.map((faq, index) => (
                <details className="group pb-[22px] [&+details]:pt-[22px]" key={faq.question} open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-[22px] font-serif text-[2.25rem] font-normal leading-[1.25] tracking-[-0.01em] text-ivory focus-visible:outline focus-visible:outline-1 focus-visible:outline-muted-gold focus-visible:outline-offset-[5px] [&::-webkit-details-marker]:hidden max-md:text-[1.75rem] max-md:leading-[1.3] max-md:tracking-normal">
                    <span>{faq.question}</span>
                    <span className="relative h-[14px] w-[14px] shrink-0 before:absolute before:left-px before:top-[6px] before:h-px before:w-3 before:bg-muted-gold after:absolute after:left-px after:top-[6px] after:h-px after:w-3 after:rotate-90 after:bg-muted-gold after:transition-transform group-open:after:rotate-0" aria-hidden="true" />
                  </summary>
                  <p className="mb-0 mr-[34px] mt-[17px] max-w-[620px] text-base leading-[1.6] tracking-[0.005em] text-muted-grey max-md:text-sm max-md:leading-[1.5] max-md:tracking-[0.01em]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
