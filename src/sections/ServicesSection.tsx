import FadeIn from '../components/FadeIn';

const services = [
  {
    name: '3D Modeling',
    desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    name: 'Rendering',
    desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    name: 'Motion Design',
    desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    name: 'Branding',
    desc: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    name: 'Web Design',
    desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="relative rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="mb-16 text-center font-black uppercase sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {services.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.1}>
            <div
              className="flex items-start gap-4 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                color: '#0C0C0C',
              }}
            >
              <span
                className="font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', color: '#0C0C0C' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-3">
                <h3
                  className="font-medium uppercase"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
