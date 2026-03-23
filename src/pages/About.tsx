import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, ArrowRight, Users, BookOpen, Droplets, Stethoscope } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import teamImg from "@/assets/about-team.jpg";
import aboutHero from "@/assets/about-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";

const values = [
  { icon: Heart, title: "Seva (Service)", desc: "Selfless service to the most marginalised communities is at the heart of everything we do.", color: "bg-red-50 text-red-600" },
  { icon: Target, title: "Sashaktikaran (Empowerment)", desc: "We don't give handouts — we build capacity so communities can sustain their own growth.", color: "bg-amber-50 text-amber-600" },
  { icon: Eye, title: "Paardarshita (Transparency)", desc: "Every rupee is accounted for. Our annual audits and impact reports are publicly available.", color: "bg-sky-50 text-sky-600" },
  { icon: Award, title: "Samanta (Equality)", desc: "Regardless of caste, creed, or gender — we serve every Indian with equal dignity.", color: "bg-emerald-50 text-emerald-600" },
];

const milestones = [
  { year: "2003", text: "Founded in a small office in Lajpat Nagar, New Delhi by Padma Shri awardee Dr. Kavita Sharma.", icon: BookOpen },
  { year: "2007", text: "Launched 'Shiksha for All' — first learning centres in Bundelkhand, Uttar Pradesh.", icon: BookOpen },
  { year: "2012", text: "Expanded to 8 states. Received FCRA certification for international funding.", icon: Users },
  { year: "2016", text: "Jal Jeevan initiative brings clean water to 120 villages in Rajasthan and Madhya Pradesh.", icon: Droplets },
  { year: "2020", text: "COVID relief — distributed 50,000 ration kits across Bihar, Jharkhand, and Odisha.", icon: Stethoscope },
  { year: "2024", text: "Active in 18 states. Crossed 1,50,000 beneficiaries. Recognised by NITI Aayog.", icon: Award },
];

const team = [
  { name: "Dr. Kavita Sharma", role: "Founder & Chairperson", img: testimonial1 },
  { name: "Rajendra Patel", role: "CEO & Director", img: gallery2 },
  { name: "Anjali Gupta", role: "Head of Programs", img: gallery1 },
  { name: "Vikram Sinha", role: "Finance Director", img: teamImg },
];

const About = () => (
  <main className="pt-20">
    {/* ── Hero with image ── */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img src={aboutHero} alt="Indian rural landscape" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20_15%_8%/0.8)] via-[hsl(20_15%_8%/0.6)] to-transparent" />
      <div className="container relative z-10">
        <ScrollReveal className="max-w-3xl">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 text-primary-foreground">Two Decades of Grassroots Impact</h1>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-xl">
            Asha Foundation began with a simple conviction — that every village in India holds untapped potential waiting to be unlocked through education, health, and opportunity.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* ── Story + Image ── */}
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <ScrollReveal>
            <div className="relative">
              <img src={teamImg} alt="Asha Foundation volunteers" className="rounded-xl shadow-lg w-full" />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-5 shadow-lg hidden md:block">
                <p className="font-display text-3xl font-bold">21+</p>
                <p className="text-sm font-medium">Years of Service</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-5 leading-[1.15]">From ₹50,000 to 18 States</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Kavita Sharma left a successful career in public health to return to her ancestral village in Uttar Pradesh. What she witnessed — children walking 8 km to the nearest school, families drinking contaminated water — ignited a lifelong mission.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Starting with just ₹50,000 and five volunteers, she established the first Asha learning centre in 2003. Today, the Foundation has grown into a network of 340+ villages, powered by 2,000+ volunteers and the generosity of donors across India and abroad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We remain rooted in the belief that real development starts from the ground up — through panchayats, self-help groups, and community ownership.
            </p>
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore our programs <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* ── Values ── */}
    <section className="section-green py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">What Guides Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Core Values</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 80}>
              <div className="bg-background rounded-xl p-7 shadow-sm h-full hover:shadow-md transition-shadow group">
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Timeline ── */}
    <section className="py-24">
      <div className="container max-w-3xl">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Milestones</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our Journey</h2>
        </ScrollReveal>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 60}>
                <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <span className="font-display text-xl font-bold text-primary">{m.year}</span>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">{m.text}</p>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-sm z-10" />
                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Leadership ── */}
    <section className="section-warm py-24">
      <div className="container">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Our People</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Leadership Team</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <div className="text-center group">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 shadow-sm">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-base font-semibold">{t.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Recognition ── */}
    <section className="py-24">
      <div className="container max-w-4xl">
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "NITI Aayog", desc: "Recognised as a 'Best Practice NGO' for rural development, 2023" },
            { title: "National CSR Award", desc: "Government of India award for excellence in community service, 2021" },
            { title: "UNICEF Partnership", desc: "Strategic partner for child nutrition and education in 5 states" },
          ].map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 80}>
              <div className="bg-card rounded-xl p-7 border shadow-sm h-full text-center">
                <Award className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-display text-base font-semibold mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="section-green py-20">
      <div className="container text-center">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Want to Be Part of Our Story?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Join 2,000+ volunteers and donors who are transforming rural India every day.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.97]">
              Get Involved <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-sm hover:shadow-md transition-all active:scale-[0.97]">
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
