import Image from "next/image";
import { Concierge } from "@/components/concierge";
import { ServiceEnquiryLink } from "@/components/service-enquiry-link";
import { LazyAutoplayVideo } from "@/components/lazy-autoplay-video";

const services = [
  {
    number: "01",
    id: "podcasts",
    path: "podcasts",
    title: "Podcast & Interview Production",
    promise: "Take the conversation out of the boardroom and record it where the story feels most natural.",
    text: "Mob Hub provides a flexible recording setup for podcasts, interviews, profiles and story-led conversations with artists, entrepreneurs, engineers, creatives and cultural voices.",
    image: "/media/pic4.webp",
    alt: "Guests seated for a recorded interview production",
    tag: "Podcasts & interviews",
    includes: ["Mobile recording setup", "Interview production support", "On-location camera coverage"],
    bestFor: "Podcasts, profiles, founder stories and expert conversations",
  },
  {
    number: "02",
    id: "film-support",
    path: "film",
    title: "Film & Production Support",
    promise: "Practical local support that helps a production team keep moving.",
    text: "For filmmakers and content teams working in Uganda, Mob Hub can support production with film props, creative materials and practical on-location coordination around the needs of the shoot.",
    image: "/media/pic3.webp",
    alt: "Professional camera equipment set up for an interview shoot",
    tag: "Film support",
    includes: ["Film props and materials", "On-location production support", "Practical shoot coordination"],
    bestFor: "Film crews, documentaries, branded content and independent productions",
  },
  {
    number: "03",
    id: "voice-over",
    path: "voice",
    title: "Voice-Over Recording",
    promise: "A clear, professional voice track without being tied to a traditional studio workflow.",
    text: "Record narration and voice content for films, documentaries, adverts, animation, social media and other audiovisual work with a setup built around the project.",
    image: "/media/pic2.jpeg",
    alt: "An indoor Mob Hub production setup with recording equipment",
    tag: "Voice-over",
    includes: ["Voice recording setup", "Narration and spoken-word capture", "Project-led recording sessions"],
    bestFor: "Documentaries, adverts, narration, animation and digital content",
  },
  {
    number: "04",
    id: "photo-video",
    path: "visual",
    title: "Photography & Videography",
    promise: "Capture the people, performance and atmosphere - not just the event.",
    text: "Mob Hub documents artists, performers, events, cultural experiences and commercial projects with photography and video shaped around the story the client wants to tell.",
    image: "/media/pic1.webp",
    alt: "Professional production monitor and camera equipment",
    tag: "Photo & video",
    includes: ["Photography coverage", "Videography coverage", "People and place-led documentation"],
    bestFor: "Events, artists, performances, campaigns and commercial storytelling",
  },
  {
    number: "05",
    id: "travel-documentation",
    path: "travel",
    title: "Tourism & Travel Documentation",
    promise: "Come away with more than phone pictures - come away with the story of the journey.",
    text: "For visitors exploring Kampala and Uganda, Mob Hub creates personal visual documentation around the places, people and experiences that make the trip memorable.",
    image: "/media/pic23.webp",
    alt: "A green Ugandan landscape and waterfall during a travel experience",
    tag: "Travel stories",
    includes: ["Travel photography", "Journey video documentation", "Culture and location storytelling"],
    bestFor: "Visitors, private groups, cultural trips and experience-led travel",
  },
];

const gallery = [
  { src: "/media/pic3.webp", alt: "Camera rig filming an interview production" },
  { src: "/media/pic18.webp", alt: "Musicians performing traditional instruments outdoors" },
  { src: "/media/pic23.webp", alt: "Waterfall and green Ugandan landscape" },
  { src: "/media/pic4.webp", alt: "Interview guests seated during a production" },
  { src: "/media/pic25.webp", alt: "Visitor enjoying a documented nature experience" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mob Hub home">
          <Image
            src="/brand/mob-hub-logo.webp"
            alt=""
            width={1280}
            height={427}
            priority
            className="brand-logo-image"
          />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </nav>
        <a className="header-cta" href="#concierge">
          Find a service <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <Image
          src="/media/pic2.jpeg"
          alt="A mobile creative production setup in Uganda"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Mobile creative hub · Uganda</p>
          <h1>
            Creative production.
            <br />
            <em>Wherever the story takes you.</em>
          </h1>
          <p className="hero-intro">
            Podcasts, film support, voice-over recording, photography,
            videography and travel documentation - built to work wherever the
            client or project is.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">
              Explore services <Arrow />
            </a>
            <a className="text-link light-link" href="#about">
              Why Mob Hub <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="hero-note">Mobile · Available anywhere in Uganda</p>
      </section>

      <section className="manifesto section-pad" id="about">
        <p className="eyebrow">About Mob Hub</p>
        <div className="manifesto-grid">
          <h2>
            Your location can become <em>the studio.</em>
          </h2>
          <div>
            <p>
              Mob Hub is a mobile creative hub bringing together podcasts,
              media production, creative arts, technology and storytelling.
            </p>
            <p>
              We are intentionally not tied to one physical location. The
              production moves with the project, giving clients a flexible way
              to create in studios, offices, homes, events, cultural spaces and
              locations across Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="experiences section-pad" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Core services</p>
            <h2>Book the capability you need.</h2>
          </div>
          <p>
            Mob Hub combines a mobile production model with practical local
            knowledge, so the creative setup can follow the client, subject or
            location instead of forcing every project into the same studio.
          </p>
        </div>

        <div className="service-principles" aria-label="Mob Hub service advantages">
          <div>
            <span>01</span>
            <strong>Mobile by design</strong>
            <p>The setup moves to the project when the location matters.</p>
          </div>
          <div>
            <span>02</span>
            <strong>One creative partner</strong>
            <p>Recording, production support and visual documentation under one roof.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Built around Uganda</strong>
            <p>Useful for local clients, visiting teams and location-led work.</p>
          </div>
        </div>

        <div className="experience-list">
          {services.map((service) => (
            <article className="experience-card" id={service.id} key={service.number}>
              <div className="experience-image">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 42vw"
                />
                <span>{service.tag}</span>
              </div>
              <div className="experience-copy">
                <span className="number">{service.number}</span>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p className="service-promise">{service.promise}</p>
                  <p className="service-description">{service.text}</p>

                  <div className="service-details">
                    <div>
                      <span className="detail-label">What you can book</span>
                      <ul>
                        {service.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="best-for">
                      <span className="detail-label">Best for</span>
                      <p>{service.bestFor}</p>
                    </div>
                  </div>

                  <ServiceEnquiryLink service={service.path} title={service.title} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="film-break" aria-label="Mob Hub mobile production">
        <LazyAutoplayVideo src="/media/pic5.mp4" poster="/media/pic2.jpeg" />
        <div className="film-overlay" />
        <div className="film-copy">
          <p className="eyebrow light">Built to move</p>
          <h2>
            The project sets
            <br />
            <em>the location.</em>
          </h2>
          <p>
            Mob Hub brings the creative setup to the story - from interviews
            and shoots to events, visitor experiences and on-location work.
          </p>
        </div>
      </section>

      <section className="gallery section-pad" id="work">
        <div className="section-heading gallery-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Production. Culture. Place.</h2>
          </div>
          <p>
            A working portfolio of real production environments, people,
            performances and locations in Uganda.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={`${image.src}-${index}`} className={`gallery-item item-${index + 1}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 720px) 100vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="concierge-section section-pad" id="concierge">
        <div className="concierge-intro">
          <p className="eyebrow light">Find the right starting point</p>
          <h2>
            What do you
            <br />
            want to create?
          </h2>
          <p>
            Choose a service, tell us where and when the project is happening,
            then send Mob Hub a structured WhatsApp enquiry without retyping the
            details.
          </p>
        </div>
        <Concierge />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Mob Hub home">
          <Image
            src="/brand/mob-hub-logo.webp"
            alt=""
            width={1280}
            height={427}
            className="brand-logo-image"
          />
        </a>
        <p>Podcasts · Film · Voice-over · Photography · Video</p>
        <a href="#top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Mob Hub. All rights reserved.</small>
      </footer>
    </main>
  );
}
