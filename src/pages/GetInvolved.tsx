import { useState } from "react";
import { Heart, Users, Megaphone, IndianRupee, ArrowRight, CheckCircle2, Shield, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import testimonial2 from "@/assets/testimonial-2.jpg";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const donationImpact: Record<number, string> = {
  500: "Provides textbooks for 2 children for a full year",
  1000: "Funds one child's education for a month",
  2500: "Covers a family's clean water access for 6 months",
  5000: "Sponsors a mobile health camp visit to one village",
  10000: "Trains a rural woman in vocational skills for 3 months",
};

const ways = [
  { icon: Users, title: "Volunteer", desc: "Join our network of 2,000+ volunteers. Teach at learning centres, assist at health camps, or help with fundraising from your city.", cta: "Apply to Volunteer" },
  { icon: Megaphone, title: "Spread the Word", desc: "Follow us on social media, share our stories, and help us reach more supporters. Awareness is the first step to change.", cta: "Share Our Story" },
  { icon: Heart, title: "Corporate Partnership", desc: "We partner with companies for CSR initiatives. From employee volunteering to project sponsorship — let's create impact together.", cta: "Become a Partner" },
  { icon: Gift, title: "Monthly Giving", desc: "Become an Asha Mitra — a monthly supporter. Predictable funding helps us plan and scale our programs more effectively.", cta: "Start Monthly Giving" },
];

const faqs = [
  { q: "Is my donation tax-deductible?", a: "Yes. All donations are eligible for tax exemption under Section 80G of the Income Tax Act. You'll receive an 80G receipt via email within 48 hours." },
  { q: "How is my money used?", a: "72% goes directly to program delivery, 12% to capacity building, 10% to administration, and 6% to fundraising. We publish audited financials annually." },
  { q: "Can I donate from outside India?", a: "Yes. We hold FCRA registration (No. 231660785) that allows us to accept international donations. Payments can be made via wire transfer or our online portal." },
  { q: "How can I volunteer remotely?", a: "We welcome remote volunteers for content writing, social media, graphic design, fundraising, and mentoring. Fill out the volunteer form and our coordinator will reach out." },
];

const GetInvolved = () => {
  const [selected, setSelected] = useState(2500);
  const [custom, setCustom] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeAmount = custom ? parseInt(custom) || 0 : selected;

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={testimonial2} alt="Village community" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20_15%_8%/0.8)] via-[hsl(20_15%_8%/0.6)] to-transparent" />
        <div className="container relative z-10">
          <ScrollReveal className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Get Involved</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mb-6 text-primary-foreground">Every Contribution Matters</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-xl">
              Whether it's ₹500 or 5 hours of your time — your support transforms lives in rural India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Donation ── */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-5 gap-8">
            <ScrollReveal className="md:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border">
                <h2 className="font-display text-2xl font-bold mb-2">Make a Donation</h2>
                <p className="text-muted-foreground text-sm mb-6">All donations are tax-deductible under Section 80G.</p>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
                  {donationAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelected(amt); setCustom(""); }}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.96] ${
                        selected === amt && !custom
                          ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Or enter a custom amount (₹)</label>
                  <input
                    type="number"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                    placeholder="e.g. 15000"
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Impact line */}
                {activeAmount > 0 && donationImpact[activeAmount] && (
                  <div className="bg-primary/5 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground"><strong>Your impact:</strong> {donationImpact[activeAmount]}</p>
                  </div>
                )}

                <button className="w-full rounded-xl bg-secondary px-6 py-3.5 font-semibold text-secondary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-[0.97]">
                  Donate ₹{(activeAmount || 0).toLocaleString("en-IN")}
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Secure payment via Razorpay. 80G receipt sent via email.</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Side info */}
            <ScrollReveal delay={100} className="md:col-span-2">
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-7 border shadow-sm">
                  <h3 className="font-display text-base font-semibold mb-4">Where Your Money Goes</h3>
                  {[
                    { label: "Program delivery", pct: 72, color: "bg-primary" },
                    { label: "Capacity building", pct: 12, color: "bg-secondary" },
                    { label: "Administration", pct: 10, color: "bg-muted-foreground/40" },
                    { label: "Fundraising", pct: 6, color: "bg-muted-foreground/20" },
                  ].map((item) => (
                    <div key={item.label} className="mb-3 last:mb-0">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold">{item.pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${item.color} transition-all duration-700`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 rounded-2xl p-7 border border-primary/10">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong className="text-primary">100% Transparent.</strong> Our audited financials, annual reports, and impact data are published on our website every year.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Ways to help ── */}
      <section className="section-green py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Beyond Donations</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Other Ways to Help</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ways.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 80}>
                <div className="bg-background rounded-xl p-7 shadow-sm h-full flex flex-col hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <w.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{w.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{w.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
                    {w.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <ScrollReveal className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left bg-card rounded-xl border p-5 transition-all hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-sm">{f.q}</h3>
                    <span className={`text-primary transition-transform shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3 pr-8">{f.a}</p>
                  )}
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
