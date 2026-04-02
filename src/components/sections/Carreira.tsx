import { careerTimeline } from "@/data/career";

export function Carreira() {
  return (
    <section
      id="carreira"
      className="landing-slide landing-slide--light"
      aria-labelledby="heading-carreira"
    >
      <h2 id="heading-carreira" className="landing-slide__mega">
        Carreira
      </h2>
      <div className="landing-slide__inner">
        <p className="bio bio--short">
          Linha do tempo da minha trajetória - de jogos em Lua ao full stack em
          produção.
        </p>
        <div className="career-timeline-wrap">
          <div className="career-timeline__axis" aria-hidden="true" />
          <ul
            className="career-timeline"
            aria-label="Linha do tempo de carreira"
          >
            {careerTimeline.map((item, index) => (
              <li
                key={`${item.period}-${item.title}`}
                className={`career-timeline__item ${index % 2 === 0 ? "career-timeline__item--left" : "career-timeline__item--right"}`}
              >
                <div className="career-timeline__rail" aria-hidden="true">
                  <span className="career-timeline__dot" />
                </div>
                <div className="career-timeline__body">
                  <p className="career-timeline__period">{item.period}</p>
                  <h3 className="career-timeline__title">{item.title}</h3>
                  <p className="career-timeline__desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
