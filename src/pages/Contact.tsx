import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const offices = [
  { city: "New Delhi (Head Office)", address: "42, Mahatma Gandhi Road, Connaught Place – 110001" },
  { city: "Lucknow", address: "14, Hazratganj – 226001" },
  { city: "Ranchi", address: "Ashok Nagar – 834002" },
  { city: "Jaipur", address: "C-Scheme – 302001" },
  { city: "Bhubaneswar", address: "Saheed Nagar – 751007" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! We'll get back to you within 2 working days.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="section-warm py-20 md:py-28">
        <div className="container">
          <ScrollReveal className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mb-6">We'd Love to Hear From You</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a question, want to volunteer, or explore a partnership? Reach out and we'll respond within 2 working days.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quick contact cards ── */}
      <section className="py-12">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-4 -mt-16 relative z-10">
            {[
              { icon: Phone, label: "Call Us", value: "+91 11 2345 6789", sub: "Mon–Sat, 9:30 AM–6 PM" },
              { icon: Mail, label: "Email Us", value: "info@ashafoundation.org", sub: "We reply within 48 hours" },
              { icon: Clock, label: "Office Hours", value: "Mon – Sat", sub: "9:30 AM – 6:00 PM IST" },
            ].map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 80}>
                <div className="bg-background rounded-xl border shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{c.label}</h3>
                  <p className="text-foreground font-medium text-sm">{c.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal className="md:col-span-3">
              <div className="bg-card rounded-2xl p-8 md:p-10 border shadow-sm">
                <h2 className="font-display text-xl font-bold mb-1">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">We'll get back to you within 2 working days.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                      <input required className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Rajesh Kumar" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <input required type="email" className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="rajesh@example.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <input type="tel" className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Subject *</label>
                      <select required className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select a topic</option>
                        <option>General Enquiry</option>
                        <option>Volunteering</option>
                        <option>Donation / 80G Receipt</option>
                        <option>Corporate Partnership / CSR</option>
                        <option>Media & Press</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message *</label>
                    <textarea required rows={5} className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-[0.97] disabled:opacity-60 inline-flex items-center justify-center gap-2"
                  >
                    {sending ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Office info */}
            <ScrollReveal delay={100} className="md:col-span-2">
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-7 border shadow-sm">
                  <h3 className="font-display text-base font-semibold mb-5">Our Offices</h3>
                  <div className="space-y-5">
                    {offices.map((o, i) => (
                      <div key={o.city} className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{o.city}</p>
                          <p className="text-xs text-muted-foreground">{o.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary rounded-2xl p-7 text-primary-foreground">
                  <h3 className="font-display text-base font-semibold mb-2">Want to make a difference?</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                    Join 2,000+ volunteers who are transforming rural India.
                  </p>
                  <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:shadow-md transition-all active:scale-[0.97]">
                    Get Involved <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="pb-20">
        <div className="container">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border shadow-sm">
              <iframe
                title="Asha Foundation Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6743827044895!2d77.2167!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
