import { GraduationCap, Droplets, HeartPulse, Sprout, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import educationImg from "@/assets/programs-education.jpg";
import waterImg from "@/assets/programs-water.jpg";
import healthImg from "@/assets/programs-health.jpg";
import teamImg from "@/assets/about-team.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const programs = [
  {
    icon: GraduationCap,
    title: "Shiksha for All",
    tagline: "Education & Literacy",
    img: educationImg,
    desc: "Our flagship programme operates 85 community learning centres across Uttar Pradesh, Bihar, Jharkhand, and Madhya Pradesh. We provide free primary education, adult literacy classes, and scholarships for meritorious students from marginalised families.",
    highlights: ["Free textbooks & uniforms for 28,000 students", "Adult literacy classes for women", "Digital learning labs in 20 centres", "Scholarship programme for Class 10–12 toppers"],
    stats: [
      { v: "28,000+", l: "Students enrolled" },
      { v: "85", l: "Learning centres" },
      { v: "1,200+", l: "Scholarships given" },
    ],
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Droplets,
    title: "Jal Jeevan",
    tagline: "Clean Water & Sanitation",
    img: waterImg,
    desc: "In partnership with state governments and CSR partners, Jal Jeevan has installed 450+ borewells and 120 rainwater harvesting systems across water-scarce regions of Rajasthan, Gujarat, and Maharashtra. We also run sanitation awareness drives through Swachh Gaon campaigns.",
    highlights: ["Solar-powered borewell pumps", "Water quality testing every 3 months", "School toilet construction programme", "Community-led total sanitation drives"],
    stats: [
      { v: "450+", l: "Borewells installed" },
      { v: "1,20,000", l: "People with clean water" },
      { v: "120", l: "Rainwater systems" },
    ],
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: HeartPulse,
    title: "Swasthya Seva",
    tagline: "Healthcare & Nutrition",
    img: healthImg,
    desc: "Our mobile health units and primary care centres bring medical services to the doorstep of remote villages. We conduct regular health camps for maternal care, immunisation drives, and malnutrition screening — with a special focus on tribal communities in Odisha and Chhattisgarh.",
    highlights: ["Free medicines and diagnostics", "Maternal and child health programme", "Malnutrition screening for 15,000 children", "Telemedicine pilots in 8 districts"],
    stats: [
      { v: "65,000+", l: "Patients treated" },
      { v: "12", l: "Mobile health units" },
      { v: "340+", l: "Health camps held" },
    ],
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Sprout,
    title: "Kaushal Vikas",
    tagline: "Skill Development & Livelihoods",
    img: gallery1,
    highlights: ["Tailoring and handloom training", "Organic farming certification", "Digital literacy for rural youth", "Market linkages for self-help groups"],
    desc: "Through vocational training centres, we equip rural youth and women with skills in tailoring, handicrafts, organic farming, and digital literacy. Over 80% of our trainees find sustainable livelihoods within 6 months of completing the programme.",
    stats: [
      { v: "8,500+", l: "Youth trained" },
      { v: "80%", l: "Placement rate" },
      { v: "15", l: "Training centres" },
    ],
    color: "bg-emerald-50 text-emerald-600",
  },
];

const Programs = () => (
  <main className="pt-20">
    <section className="section-warm py-20 md:py-28">
      <div className="container">
        <ScrollReveal className="max-w-3xl">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Our Programs</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mb-6">Creating Lasting Change</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each of our programs is designed to address a critical need in rural India, working hand-in-hand with local communities to build sustainable solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {programs.map((p, i) => (
      <section key={p.title} className={`py-24 ${i % 2 === 1 ? "section-green" : ""}`}>
        <div className="container">
          <div className={`grid md:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <ScrollReveal className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                {/* Stats overlay card */}
                <div className="absolute -bottom-6 left-4 right-4 md:left-6 md:right-6 bg-background rounded-xl shadow-lg p-5 grid grid-cols-3 gap-4 border">
                  {p.stats.map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="font-display text-lg md:text-xl font-bold text-primary">{s.v}</p>
                      <p className="text-[11px] text-muted-foreground leading-tight">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
              <div className="pt-8 md:pt-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${p.color} flex items-center justify-center`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{p.tagline}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-[1.15]">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="space-y-2.5 mb-6">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    ))}

    {/* ── CTA ── */}
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="bg-primary rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">Support Our Work</h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Your contribution directly funds these programs and helps us reach more villages across India.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-[0.97]">
                  Donate Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all active:scale-[0.97]">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Programs;
