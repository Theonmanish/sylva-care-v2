import Image from "next/image";
import Link from "next/link";
import type { CareGuideContent } from "@/content/care-guide";

type CareGuideProps = { content: CareGuideContent };

export function CareGuide({ content }: CareGuideProps) {
  const isKokedama = content.slug === "kokedama";

  return (
    <div className={`care-page care-page--${content.slug}`}>
      <section className="care-hero" aria-labelledby="hero-title">
        <Image
          className="care-hero__image"
          src={`/images/${content.slug === "terrariums" ? "terrarium" : "kokedama"}.png`}
          alt={isKokedama ? "A moss-wrapped Kokedama with a fern" : "A planted terrarium within a glass vessel"}
          fill
          priority
          sizes="100vw"
          quality={88}
        />
        <div className="care-hero__content">
          <p className="eyebrow">Care Guide <span aria-hidden="true">/</span> {content.name}</p>
          <h1 id="hero-title">{content.heroTitle}</h1>
          <p className="care-hero__description">{content.heroDescription}</p>
        </div>
        <span className="care-hero__index" aria-hidden="true">01 / 02</span>
      </section>

      <nav className="product-switch" aria-label="Choose a care guide">
        <span className="product-switch__label">Explore care guides</span>
        <div className="product-switch__links">
          <Link href="/terrariums" aria-current={!isKokedama ? "page" : undefined}>Terrariums</Link>
          <span aria-hidden="true">·</span>
          <Link href="/kokedama" aria-current={isKokedama ? "page" : undefined}>Kokedama</Link>
        </div>
      </nav>

      <div className="care-main">
        <section id="about" className="editorial-section about-section">
          <div className="section-heading">
            <p className="eyebrow">The essence</p>
            <h2>{content.aboutTitle}</h2>
          </div>
          <div className="section-copy">
            {content.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section id="process" className="editorial-section process-section">
          <div className="section-heading">
            <p className="eyebrow">The craft</p>
            <h2>{content.processTitle}</h2>
          </div>
          <div className="section-copy">
            <p className="section-intro">{content.processIntro}</p>
            <ol className={`process-list ${isKokedama ? "process-list--six" : ""}`}>
              {content.process.map((stage) => (
                <li key={stage.number}>
                  <span className="process-list__number">{stage.number}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="care" className="editorial-section care-section">
          <div className="section-heading">
            <p className="eyebrow">Everyday care</p>
            <h2>{content.careTitle}</h2>
          </div>
          <div className="section-copy">
            <p className="section-intro">{content.careIntro}</p>
            <div className="care-topics">
              {content.care.map((topic, index) => (
                <article className="care-topic" key={topic.title}>
                  <span className="care-topic__index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{topic.title}</h3>
                    {topic.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {topic.points?.map((point) => (
                      <p className="care-point" key={point.label}><strong>{point.label}</strong>{point.text}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="precautions">
              <p className="eyebrow">Things to avoid</p>
              <h3 className="precautions__heading">A few points to keep in mind.</h3>
              <ul>
                {content.precautions.map((item) => (
                  <li key={item.title}><strong>{item.title}</strong><span>{item.text}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="editorial-section faq-section">
          <div className="section-heading">
            <p className="eyebrow">Common questions</p>
            <h2>Frequently asked questions.</h2>
          </div>
          <div className="section-copy">
            <p className="section-intro">Answers to common questions about caring for your Sylva Auris {isKokedama ? "Kokedama" : "terrarium"}.</p>
            <div className="faq-list">
              {content.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><span className="faq-list__icon" aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
