import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap, Droplets, HeartPulse, Quote, ChevronRight, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-image.jpg";
import educationImg from "@/assets/programs-education.jpg";
import waterImg from "@/assets/programs-water.jpg";
import healthImg from "@/assets/programs-health.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import { useEffect, useRef, useState } from "react";

/* ── Animated Counter ────────────────────────── */
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800;
          const step = Math.ceil(target / (dur / 16));
          let cur = 0;
          const id = setInterval(() => {
            cur = Math.min(cur + step, target);
            setVal(cur);
            if (cur >= target) clearInterval(id);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
};

const stats = [
  { value: 150000, suffix: "+", label: "Lives Touched" },
  { value: 340, suffix: "+", label: "Villages Reached" },
  { value: 18, suffix: "", label: "States Active" },
  { value: 21, suffix: "", label: "Years of Service" },
];

const programs = [
  { icon: GraduationCap, title: "Shiksha for All", desc: "Bridging the education gap in rural Bharat with community learning centres and scholarships.", img: educationImg },
  { icon: Droplets, title: "Jal Jeevan", desc: "Bringing clean drinking water to underserved villages through borewells and rainwater harvesting.", img: waterImg },
  { icon: HeartPulse, title: "Swasthya Seva", desc: "Mobile health camps and primary care centres reaching the last mile in remote districts.", img: healthImg },
];

const testimonials = [
  {
    quote: "Because of Asha Foundation's learning centre, my daughter Priya is the first girl in our village to pass Class 10. We never imagined this was possible.",
    name: "Sunita Devi",
    role: "Mother, Banda, Uttar Pradesh",
    img: testimonial1,
  },
  {
    quote: "The borewell changed everything. Our women no longer walk 3 km for water. The children are healthier, and we have time to earn a livelihood now.",
    name: "Ramesh Meena",
    role: "Sarpanch, Tonk, Rajasthan",
    img: testimonial2,
  },
];

const impactGallery = [
  { img: gallery1, caption: "Women's self-help group crafting handloom products in Bihar" },
  { img: gallery2, caption: "Mobile health camp treating children in rural Odisha" },
  { img: educationImg, caption: "Community learning centre in Jharkhand" },
  { img: waterImg, caption: "Rainwater harvesting system in Rajasthan" },
];

const partners = ["NITI Aayog", "UNICEF India", "Tata Trusts", "SBI Foundation", "HDFC CSR", "Reliance Foundation"];

const Index = () => (
  <main>
    {/* ── Hero ── */}
    <section className="relative min-h-[94vh] flex items-center overflow-hidden">
      <img src={heroImage} alt="Sunset over an Indian village" className="absolute inset-0 w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20_15%_8%/0.75)] via-[hsl(20_15%_8%/0.55)] to-transparent" />
      <div className="container relative z-10 py-32">
        <div className="max-w-2xl">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-5 animate-reveal" style={{ animationDelay: "100ms" }}>
            Serving Rural India Since 2003
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-primary-foreground leading-[1.08] mb-6 animate-reveal" style={{ animationDelay: "250ms" }}>
            Building Hope,<br />One Village at a Time
          </h1>
          <p className="text-primary-foreground/85 text-lg max-w-lg mb-10 leading-relaxed animate-reveal" style={{ animationDelay: "400ms" }}>
            Asha Foundation works across 18 states to empower communities through education, healthcare, and clean water initiatives.
          </p>
          <div className="flex flex-wrap gap-4 animate-reveal" style={{ animationDelay: "550ms" }}>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.97]"
            >
              Donate Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all active:scale-[0.97]"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="section-warm py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary tabular-nums">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Mission ── */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Our Mission</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-[1.15]">Empowering Communities Across Bharat</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            From the tribal hamlets of Jharkhand to the remote villages of Rajasthan, we believe every Indian deserves access to quality education, clean water, and basic healthcare. Our grassroots approach partners with local panchayats and self-help groups to create lasting, community-driven change.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* ── Programs preview ── */}
    <section className="section-green py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Key Programs</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <Link to="/programs" className="block bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-12">
          <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg">
            View All Programs <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* ── Testimonials ── */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Voices from the Field</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Stories of Change</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <div className="bg-card rounded-xl p-8 shadow-sm border h-full flex flex-col">
                <Quote className="w-8 h-8 text-secondary/40 mb-4 shrink-0" />
                <p className="text-foreground leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Impact Gallery ── */}
    <section className="section-warm py-24 md:py-32">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Impact in Action</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">From the Ground</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactGallery.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="relative group rounded-xl overflow-hidden aspect-square cursor-pointer">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(20_15%_8%/0.7)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground text-xs leading-snug">{item.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Partners ── */}
    <section className="py-20">
      <div className="container">
        <ScrollReveal className="text-center mb-10">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Trusted By Leading Organisations</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="text-muted-foreground/60 font-display text-lg font-semibold hover:text-primary transition-colors cursor-default">{p}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-24 md:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="bg-primary rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <Handshake className="w-12 h-12 text-secondary mx-auto mb-5" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5 leading-[1.15]">Join the Movement</h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                Whether you volunteer your time, donate monthly, or spread the word — every action creates ripples of change across rural India.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.97]">
                  Get Involved <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all active:scale-[0.97]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Index;
