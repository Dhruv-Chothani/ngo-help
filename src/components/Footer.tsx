import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    {/* Newsletter strip */}
    <div className="border-b border-primary-foreground/10">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-lg font-semibold mb-1">Stay Connected</h3>
          <p className="text-sm opacity-60">Get monthly updates on our impact, stories from the field, and ways to help.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary w-full md:w-64"
          />
          <button className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shrink-0 hover:shadow-md transition-all active:scale-[0.97]">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <Heart className="w-6 h-6 text-secondary fill-secondary" />
            <span className="font-display text-lg font-bold">Asha Foundation</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed mb-6">
            Empowering rural India through education, healthcare, and sustainable development since 2003.
          </p>
          <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:shadow-md transition-all active:scale-[0.97]">
            Donate Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-5">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[{ to: "/about", l: "About Us" }, { to: "/programs", l: "Programs" }, { to: "/get-involved", l: "Get Involved" }, { to: "/contact", l: "Contact" }].map((item) => (
              <Link key={item.to} to={item.to} className="text-sm opacity-60 hover:opacity-100 hover:text-secondary transition-all">
                {item.l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-5">Programs</h4>
          <div className="flex flex-col gap-3">
            {["Shiksha for All", "Swasthya Seva", "Jal Jeevan", "Kaushal Vikas"].map((p) => (
              <Link key={p} to="/programs" className="text-sm opacity-60 hover:opacity-100 hover:text-secondary transition-all">{p}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-5">Reach Us</h4>
          <div className="flex flex-col gap-4 text-sm opacity-60">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>42, Mahatma Gandhi Road, Connaught Place, New Delhi – 110001</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 11 2345 6789</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@ashafoundation.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-40">
        <p>© 2025 Asha Foundation. All rights reserved. Registered under the Societies Registration Act, 1860.</p>
        <p>FCRA Registration: 231660785 | 80G & 12A Certified</p>
      </div>
    </div>
  </footer>
);

export default Footer;
