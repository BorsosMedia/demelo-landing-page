import { useState } from "react";
import logoImg from "@/imports/image-4.png";
import mapImg from "@/imports/image-6.png";
import drainCameraImg from "@/imports/photos/drain-camera.png";
import sumpPumpImg from "@/imports/photos/sump-pump.png";
import techVanImg from "@/imports/photos/tech-van.png";
import drainFountainImg from "@/imports/photos/drain-fountain.jpg";
import {
  Phone, ArrowRight, Shield, Clock, Home, Star,
  CheckCircle, ChevronDown, Droplets, Camera,
  Wrench, Waves, Filter, Flame, Zap, Timer,
  MapPin, TrendingUp, Users, Award,
} from "lucide-react";

/* ── Logo ───────────────────────────────────────────────────────────── */
function Logo({ size = "md", invert = true }: { size?: "sm" | "md" | "lg"; invert?: boolean }) {
  const h = size === "lg" ? 56 : size === "sm" ? 36 : 44;
  return (
    <img
      src={logoImg}
      alt="DeMelo Plumbing & Electrical"
      height={h}
      style={{ height: h, width: "auto", objectFit: "contain", filter: invert ? "brightness(0) saturate(100%)" : "brightness(0) invert(1)" }}
    />
  );
}

/* ── Stars ───────────────────────────────────────────────────────────── */
const Stars = ({ n = 5, s = "sm" }: { n?: number; s?: "sm" | "md" }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} className={`${s === "md" ? "w-5 h-5" : "w-3.5 h-3.5"} fill-yellow-400 text-yellow-400`} />
    ))}
  </div>
);

/* ── Data ────────────────────────────────────────────────────────────── */
const PLUMBING = [
  { Icon: Filter,   l: "Drain Cleaning" },
  { Icon: Camera,   l: "Camera Inspection" },
  { Icon: Wrench,   l: "Fixture Repairs" },
  { Icon: Waves,    l: "Sump Pumps" },
  { Icon: Flame,    l: "Water Heaters" },
  { Icon: Droplets, l: "Water Softeners" },
  { Icon: Droplets, l: "Reverse Osmosis" },
  { Icon: Droplets, l: "Water Filtration" },
  { Icon: Home,     l: "Appliance Install" },
  { Icon: Wrench,   l: "Fixture Sales" },
];

const ELECTRICAL = [
  { Icon: Zap, l: "Panel Upgrades" },
  { Icon: Zap, l: "Wiring & Rewiring" },
  { Icon: Zap, l: "Outlet Installation" },
  { Icon: Zap, l: "Lighting Fixtures" },
  { Icon: Zap, l: "Electrical Inspection" },
  { Icon: Zap, l: "Generator Install" },
  { Icon: Zap, l: "EV Charger Install" },
  { Icon: Zap, l: "Circuit Breakers" },
];

const CASES = [
  {
    tag: "Emergency", tagColor: "#E63946",
    title: "Emergency Plumbing Repair | Brantford",
    problem: "Homeowner woke to water pouring through the kitchen ceiling from a ruptured supply line. Damage spreading fast.",
    stats: [
      { Icon: Timer,       val: "52 min",   lbl: "On-Site" },
      { Icon: Clock,       val: "5:47am",   lbl: "Completed" },
      { Icon: CheckCircle, val: "Full fix",  lbl: "Outcome" },
    ],
    quote: "Nelson arrived before I expected anyone to be awake. Fixed and the ceiling assessed before sunrise.",
    by: "David R., Brantford",
    img: drainCameraImg,
    alt: "DeMelo Plumbing technician using a drain camera to inspect a toilet",
  },
  {
    tag: "Sump Pump", tagColor: "#18C8E0",
    title: "Sump Pump Repair | Hamilton",
    problem: "Sump pump failed at the height of a rainstorm. Water entering the basement at a dangerous rate.",
    stats: [
      { Icon: Timer,      val: "68 min",   lbl: "On-Site" },
      { Icon: TrendingUp, val: "$12,000+", lbl: "Damage Saved" },
      { Icon: CheckCircle,val: "Same day", lbl: "Resolved" },
    ],
    quote: "Sump pump installed and running before the storm even let up. These guys saved my basement.",
    by: "Mike R., Hamilton",
    img: sumpPumpImg,
    alt: "DeMelo Plumbing technician repairing a sump pump in a Hamilton basement",
  },
  {
    tag: "Same-Day", tagColor: "#F5A623",
    title: "Same-Day Water Heater Replacement | Cambridge",
    problem: "Tank water heater failed overnight. Family of four, no hot water, school morning ahead.",
    stats: [
      { Icon: Clock,       val: "7:15am",   lbl: "Called" },
      { Icon: CheckCircle, val: "2:00pm",   lbl: "Hot Water" },
      { Icon: Timer,       val: "Same day", lbl: "Total" },
    ],
    quote: "Called at 7am, new A.O. Smith running by 2pm. Couldn't believe it. Will never use anyone else.",
    by: "Priya N., Cambridge",
    img: techVanImg,
    alt: "DeMelo Plumbing technician arriving on-site with service van for same-day repair",
  },
];

const REVIEWS = [
  { i: "I", name: "Isabel Gomes",  loc: "Brantford", text: "Over the last 20 years Nelson and DeMelo Plumbing and Electrical has provided excellent services to my interior design clients and my real estate clients. He is experienced, informative and punctual." },
  { i: "B", name: "Blake VanBerlo",loc: "Simcoe",    text: "My wife and I had Nelson come and help us with our bathroom renovation. He was very informative, explained everything to me, and got the job done quickly! Thanks again." },
  { i: "A", name: "Ann Huynh",     loc: "Cambridge", text: "Amazing service and fair rates. DeMelo fixed our basement flooding issue by installing a sump pump. Fast, professional, left everything tidy, clean and dry." },
];

const FAQS = [
  { q: "Where can I find a plumber near me?", a: "DeMelo Plumbing & Electrical serves Brantford, Cambridge, Hamilton, Simcoe, Woodstock, Guelph, Burlington, London and surrounding SW Ontario. Call (226) 387-2017 — a real person answers 24/7." },
  { q: "Do you offer same-day plumbing repair?", a: "Yes. We provide same-day plumbing repair across Southwestern Ontario, 24 hours a day, 7 days a week. Most emergency calls are on-site within 60–90 minutes." },
  { q: "Do you provide emergency plumbing repair?", a: "Absolutely. Emergency plumbing repair is our specialty — burst pipes, flooding, sewer backups, and more. We dispatch immediately, day or night, 365 days a year." },
  { q: "Are you a residential plumbing repair company?", a: "Yes — DeMelo is a licensed residential plumbing repair company serving homeowners across Brant County and SW Ontario since 1984. All work is performed by our certified team — no sub-contractors." },
  { q: "How quickly can a local plumber arrive?", a: "Our local plumbers typically arrive within 60–90 minutes of your call across Brantford, Hamilton, Cambridge and nearby areas. Response times vary slightly by location — see our coverage map." },
  { q: "Do you replace water heaters same-day?", a: "Yes. Water heater replacement is available same-day in most areas we serve. We carry A.O. Smith units and can have your hot water restored the same day you call." },
];

const SCHEMA = { "@context": "https://schema.org", "@graph": [{ "@type": "LocalBusiness", "name": "DeMelo Plumbing & Electrical", "telephone": "+12263872017", "url": "https://www.demeloplumbingelectrical.ca", "openingHours": "Mo-Su 00:00-24:00", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "20" }, "address": { "@type": "PostalAddress", "streetAddress": "272 German School Rd", "addressLocality": "Brant", "addressRegion": "ON", "postalCode": "N3L 3E1", "addressCountry": "CA" } }, { "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }] };

export default function App() {
  const [tab, setTab]   = useState<"plumbing" | "electrical">("plumbing");
  const [faq, setFaq]   = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* Amber top accent bar */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #F5A623 0%, #18C8E0 100%)" }} />

      <div className="font-sans overflow-x-hidden" style={{ background: "#F5F6F8", color: "#080C17" }}>

        {/* ── NAV ─────────────────────────────────────────────────── */}
        <header className="fixed top-0 inset-x-0 z-50"
          style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(8,12,23,0.07)", boxShadow: "0 2px 20px rgba(8,12,23,0.06)" }}>
          <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
            <Logo size="sm" invert={true} />
            <div className="flex items-center gap-3">
              <span className="hidden md:flex items-center gap-1.5 text-xs font-semibold" style={{ color: "rgba(8,12,23,0.45)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Open 24/7
              </span>
              <a href="tel:+12263872017"
                className="flex items-center gap-2 font-black px-4 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
                style={{ background: "#F5A623", color: "#080C17" }}>
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">(226) 387-2017</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════════════════════
            HERO — sheared white panel left · photo + form right
        ══════════════════════════════════════════════════════════ */}
        <section id="quote-form" className="relative overflow-hidden lg:min-h-[calc(100vh-67px)]" style={{ paddingTop: 67 }}>

          {/* Full-bleed photo — desktop only */}
          <img
            src="https://images.unsplash.com/photo-1690695912818-46c006846226?w=2400&h=1600&fit=crop&crop=center&auto=format&q=95"
            alt="Water gushing from a burst pipe — DeMelo Plumbing emergency response"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
            style={{ filter: "brightness(0.84) contrast(1.12) saturate(0.88)" }}
          />

          {/* Solid white content panel — in-flow on mobile, sheared absolute on desktop */}
          <div className="relative z-10 w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-[52%] flex flex-col justify-center bg-white lg:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)]">
            {/* Amber left rail */}
            <div className="absolute left-0 inset-y-0 w-1.5" style={{ background: "#F5A623" }} />

            <div className="px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-1152px)/2+2rem))] lg:pr-[18%] py-10 lg:py-12 relative z-10">

              {/* Emergency badge */}
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-lg font-bold text-xs uppercase tracking-widest"
                style={{ background: "#E63946", color: "#FFFFFF" }}>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Emergency Line Open 24/7
              </div>

              <p className="font-bold uppercase tracking-[0.2em] mb-2" style={{ fontSize: "0.76rem", color: "rgba(8,12,23,0.38)" }}>
                Pipe burst? Flooding? Drain clogged?
              </p>

              <h1 className="font-display font-black tracking-tight mb-7"
                style={{ fontSize: "clamp(2.6rem,5.5vw,4.8rem)", color: "#080C17", lineHeight: 0.9 }}>
                We Fix Your<br />
                Plumbing<br />
                <span style={{ color: "#F5A623" }}>Emergency</span><br />
                Fast.
              </h1>

              {/* Bullet props */}
              <div className="flex flex-col gap-2 mb-8">
                {[
                  { label: "Same-Day Plumbing Repair", sub: "24/7" },
                  { label: "Licensed Local Plumbers",  sub: "Since 1984" },
                  { label: "Upfront Pricing",          sub: "No hidden fees" },
                ].map((vp, i) => (
                  <div key={vp.label} className="flex items-center gap-3">
                    <span className="font-black text-sm tabular-nums w-5 text-center flex-shrink-0" style={{ color: "#F5A623" }}>0{i + 1}</span>
                    <span className="text-sm font-bold" style={{ color: "#080C17" }}>{vp.label}</span>
                    <span className="text-xs ml-auto" style={{ color: "rgba(8,12,23,0.4)" }}>{vp.sub}</span>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <a href="tel:+12263872017" className="group flex items-center gap-3" aria-label="Call DeMelo Plumbing 24/7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#080C17" }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(8,12,23,0.38)" }}>Free Estimate · No Obligation</p>
                  <p className="font-display font-black leading-none group-hover:opacity-75 transition-opacity"
                    style={{ fontSize: "clamp(1.4rem,2.6vw,2rem)", color: "#080C17" }}>(226) 387-2017</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form — full-bleed on mobile, floating over photo on desktop */}
          <div className="relative z-10 flex items-center justify-center px-0 py-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%] lg:px-6 lg:py-0 lg:pr-[max(2rem,calc((100vw-1152px)/2+2rem))] lg:pl-6">
            <div
              className="w-full max-w-full lg:max-w-sm rounded-none lg:rounded-2xl p-6 lg:border-2 lg:shadow-[0_32px_64px_rgba(8,12,23,0.45)]"
              style={{ background: "rgba(255,255,255,0.97)", borderColor: "#F5A623" }}
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <p className="font-display font-black text-[1.35rem] leading-tight" style={{ color: "#080C17" }}>Get a Free Estimate</p>
                <span className="flex-shrink-0 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mt-0.5"
                  style={{ background: "rgba(245,166,35,0.14)", color: "#C47E0A" }}>No Obligation</span>
              </div>
              <p className="text-sm mb-6" style={{ color: "rgba(8,12,23,0.45)" }}>A real person calls back within 15 minutes.</p>

              {sent ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "rgba(24,200,224,0.10)" }}>
                    <CheckCircle className="w-6 h-6" style={{ color: "#18C8E0" }} />
                  </div>
                  <p className="font-display font-black text-lg" style={{ color: "#080C17" }}>Request Received!</p>
                  <p className="text-sm mt-1 mb-4" style={{ color: "rgba(8,12,23,0.45)" }}>We'll call you within 15 minutes.</p>
                  <a href="tel:+12263872017" className="inline-flex items-center gap-2 font-black px-5 py-3 rounded-2xl"
                    style={{ background: "#F5A623", color: "#080C17" }}>
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  {[
                    { id: "hfn", label: "Your Name",    type: "text", ph: "John Smith",      key: "name",  auto: "name" },
                    { id: "hfp", label: "Phone Number", type: "tel",  ph: "(226) 555-0100", key: "phone", auto: "tel" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                        style={{ color: "rgba(8,12,23,0.42)" }}>{f.label} *</label>
                      <input id={f.id} type={f.type} required placeholder={f.ph}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        autoComplete={f.auto}
                        className="w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]/35 placeholder:text-[rgba(8,12,23,0.35)]"
                        style={{ background: "#FFFFFF", border: "1.5px solid rgba(8,12,23,0.12)", color: "#080C17" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="hfs" className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(8,12,23,0.42)" }}>Service Needed</label>
                    <select id="hfs" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]/35 appearance-none"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1.5px solid rgba(8,12,23,0.12)",
                        color: form.service ? "#080C17" : "rgba(8,12,23,0.35)",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999999' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "2.75rem",
                      }}>
                      <option value="">Select a service...</option>
                      {["Emergency Plumbing Repair","Drain Cleaning","Water Heater Replacement","Electrical Panel Upgrade","Sump Pump Repair","Kitchen / Bathroom Renovation","Other"].map(o => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit"
                    className="w-full font-black text-sm tracking-wide py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-1"
                    style={{ background: "#F5A623", color: "#080C17", boxShadow: "0 8px 20px rgba(245,166,35,0.35)" }}>
                    GET FREE ESTIMATE <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs pt-0.5" style={{ color: "rgba(8,12,23,0.32)" }}>No spam. No obligation. Ever.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            TRUST STRIP — amber with dark text
        ══════════════════════════════════════════════════════════ */}
        <div style={{ background: "#F5A623" }}>
          <div className="max-w-6xl mx-auto px-5 py-8 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderColor: "rgba(8,12,23,0.12)" }}>
            {[
              { Icon: Award,   val: "40+",    lbl: "Years Serving SW Ontario" },
              { Icon: Users,   val: "2,000+", lbl: "Homes Repaired" },
              { Icon: Timer,   val: "90 min", lbl: "Average Response Time" },
              { Icon: Shield,  val: "5.0 ★",  lbl: "Google Rating · 20+ Reviews" },
            ].map(({ Icon, val, lbl }) => (
              <div key={lbl} className="flex flex-col items-center justify-center gap-1.5 py-5 px-4 text-center">
                <Icon className="w-5 h-5 mb-1" style={{ color: "rgba(8,12,23,0.5)" }} />
                <p className="font-display font-black leading-none" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", color: "#080C17" }}>{val}</p>
                <p className="text-xs font-semibold" style={{ color: "rgba(8,12,23,0.58)" }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            WHAT TO EXPECT — horizontal timeline
        ══════════════════════════════════════════════════════════ */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(8,12,23,0.07)" }}>
          <div className="max-w-5xl mx-auto px-5 py-14">

            {/* Header */}
            <p className="text-xs font-bold uppercase tracking-widest text-center mb-10"
              style={{ color: "rgba(8,12,23,0.38)" }}>
              What to Expect When You Call DeMelo
            </p>

            {/* Timeline track */}
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden lg:block absolute top-[38px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)]"
                style={{ height: 2, background: "linear-gradient(90deg, #F5A623 0%, #18C8E0 50%, #080C17 100%)" }} />

              <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">

                {/* Step 1 */}
                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-[76px] h-[76px] rounded-2xl flex items-center justify-center relative z-10"
                      style={{ background: "#FFF8EC", border: "2px solid #F5A623" }}>
                      <Phone className="w-7 h-7" style={{ color: "#F5A623" }} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs text-white z-20"
                      style={{ background: "#F5A623" }}>1</span>
                  </div>
                  <div className="lg:mt-5">
                    <p className="font-black text-base mb-1.5" style={{ color: "#080C17" }}>Emergency Plumbing Repair</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(8,12,23,0.52)" }}>
                      Call us any hour — a real person answers immediately. We dispatch the nearest certified tech. On-site in 60–90 minutes, 24/7, 365 days a year.
                    </p>
                    <span className="inline-block mt-3 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(245,166,35,0.1)", color: "#C47E0A" }}>Step 1 · You call, we come</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-[76px] h-[76px] rounded-2xl flex items-center justify-center relative z-10"
                      style={{ background: "#EDF9FB", border: "2px solid #18C8E0" }}>
                      <Shield className="w-7 h-7" style={{ color: "#18C8E0" }} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs text-white z-20"
                      style={{ background: "#18C8E0" }}>2</span>
                  </div>
                  <div className="lg:mt-5">
                    <p className="font-black text-base mb-1.5" style={{ color: "#080C17" }}>You See the Price First</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(8,12,23,0.52)" }}>
                      Before we touch a single pipe, you receive a written quote. No surprises, no hidden fees. You approve the price — then we get to work.
                    </p>
                    <span className="inline-block mt-3 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(24,200,224,0.1)", color: "#0A9DB3" }}>Step 2 · Quote before we start</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  <div className="relative flex-shrink-0">
                    <div className="w-[76px] h-[76px] rounded-2xl flex items-center justify-center relative z-10"
                      style={{ background: "#F0F1F5", border: "2px solid #080C17" }}>
                      <Wrench className="w-7 h-7" style={{ color: "#080C17" }} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-black text-xs text-white z-20"
                      style={{ background: "#080C17" }}>3</span>
                  </div>
                  <div className="lg:mt-5">
                    <p className="font-black text-base mb-1.5" style={{ color: "#080C17" }}>Nelson's Team Only</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(8,12,23,0.52)" }}>
                      Zero sub-contractors — ever. Every job is done by our own certified master plumbers. 40+ years of family-owned service, clean work, and pride in every repair.
                    </p>
                    <span className="inline-block mt-3 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(8,12,23,0.06)", color: "rgba(8,12,23,0.6)" }}>Step 3 · Problem solved</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SOCIAL PROOF — dark navy (matches dispatch map section)
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#080C17" }}>
          <div className="max-w-5xl mx-auto px-5 py-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" role="img">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <Stars n={5} s="sm" />
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.38)" }}>5.0 — 20+ verified Google reviews</span>
            </div>
            <p className="text-center font-display font-black text-2xl mb-10 text-white">
              Don't Take Our Word For It
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {REVIEWS.map(r => (
                <article key={r.name} className="rounded-2xl p-5"
                  style={{ background: "#0E1428", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <Stars n={5} s="sm" />
                  <p className="text-sm leading-relaxed mt-3 mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-2.5 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0"
                      style={{ background: "#F5A623", color: "#080C17" }}>{r.i}</div>
                    <div>
                      <p className="font-black text-xs text-white">{r.name}</p>
                      <p className="text-xs flex items-center gap-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                        <MapPin className="w-2.5 h-2.5" />{r.loc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FEATURE ROW 1 — amber-tinted bg (warm accent section)
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#FFFBF2", borderBottom: "1px solid rgba(245,166,35,0.15)" }}>
          <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{ color: "#C47E0A", background: "rgba(245,166,35,0.14)", border: "1px solid rgba(245,166,35,0.3)" }}>
                24/7 Emergency Plumbing
              </span>
              <h2 className="font-display font-black leading-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#080C17" }}>
                Same-Day Plumbing Repair
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: "rgba(8,12,23,0.58)" }}>
                Need to <strong style={{ color: "#080C17" }}>find a plumber</strong> today? Our licensed team provides <strong style={{ color: "#080C17" }}>same-day plumbing repair</strong>, burst pipe repairs, clogged drain service, and emergency plumbing throughout Brantford, Cambridge, Hamilton, Simcoe, and surrounding Southwestern Ontario communities.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Live person — not a bot — answers every call",
                  "Technician on-site in 60–90 minutes, guaranteed",
                  "Written quote before any work starts",
                  "Master plumbers only — zero sub-contractors",
                ].map(t => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: "rgba(245,166,35,0.15)" }}>
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: "#F5A623" }} />
                    </span>
                    <span className="text-sm" style={{ color: "rgba(8,12,23,0.62)" }}>{t}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+12263872017"
                className="inline-flex items-center gap-2 font-black px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#080C17", color: "#FFFFFF" }}>
                <Phone className="w-4 h-4" /> Call (226) 387-2017
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=800&h=600&fit=crop&auto=format&q=85"
                alt="DeMelo Plumbing licensed technician repairing emergency pipe burst in Brantford residential home"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Response time badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.97)", border: "1px solid rgba(8,12,23,0.08)", boxShadow: "0 8px 24px rgba(8,12,23,0.12)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(230,57,70,0.1)" }}>
                  <Timer className="w-4 h-4" style={{ color: "#E63946" }} />
                </div>
                <div>
                  <p className="font-black text-sm" style={{ color: "#080C17" }}>Avg. response time: under 90 min</p>
                  <p className="text-xs" style={{ color: "rgba(8,12,23,0.45)" }}>Brantford · Hamilton · Cambridge & beyond</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SERVICE AREA MAP — dark navy dispatch board
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#080C17" }}>
          <div className="max-w-6xl mx-auto px-5 py-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full"
                  style={{ color: "#E63946", border: "1px solid rgba(230,57,70,0.3)", background: "rgba(230,57,70,0.08)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
                  Live Coverage Zone
                </span>
                <h2 className="font-display font-black leading-tight text-white" style={{ fontSize: "clamp(1.8rem,4vw,2.75rem)" }}>
                  Local Plumber Near You.<br />
                  <span style={{ color: "#18C8E0" }}>Ready to Roll.</span>
                </h2>
              </div>
              <p className="text-sm max-w-xs leading-relaxed sm:text-right" style={{ color: "rgba(255,255,255,0.38)" }}>
                Crews staged across SW Ontario. The moment you call, dispatch routes the nearest certified tech to your door.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.07)", background: "#0E1428" }}>
              {/* Map */}
              <div className="lg:col-span-3 relative min-h-[280px] lg:min-h-0">
                <img
                  src={mapImg}
                  alt="DeMelo Plumbing & Electrical service area map covering Brantford, Hamilton, Cambridge, Guelph, London, Woodstock, Simcoe and surrounding SW Ontario"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 280, filter: "brightness(0.92) saturate(1.1)" }}
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to right, transparent 60%, #0E1428 100%)" }} />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, #0E1428 0%, transparent 25%)" }} />
              </div>

              {/* Dispatch board */}
              <div className="lg:col-span-2 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#18C8E0] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.38)" }}>Dispatch Active — All Areas</span>
                  </div>
                  <div className="space-y-1">
                    {[
                      { city: "Brantford",   time: "~30 min", primary: true },
                      { city: "Simcoe",      time: "~40 min", primary: false },
                      { city: "Cambridge",   time: "~45 min", primary: false },
                      { city: "Woodstock",   time: "~50 min", primary: false },
                      { city: "Hamilton",    time: "~50 min", primary: false },
                      { city: "Tillsonburg",time: "~55 min", primary: false },
                      { city: "Burlington",  time: "~55 min", primary: false },
                      { city: "Guelph",      time: "~60 min", primary: false },
                      { city: "London",      time: "~75 min", primary: false },
                    ].map(({ city, time, primary }) => (
                      <div key={city}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                        style={{
                          background: primary ? "rgba(24,200,224,0.1)" : "rgba(255,255,255,0.03)",
                          border: primary ? "1px solid rgba(24,200,224,0.25)" : "1px solid transparent",
                        }}>
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: primary ? "#18C8E0" : "rgba(255,255,255,0.2)" }} />
                          <span className="font-semibold text-sm text-white">{city}</span>
                          {primary && (
                            <span className="text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded"
                              style={{ background: "rgba(24,200,224,0.15)", color: "#18C8E0" }}>HQ</span>
                          )}
                        </div>
                        <span className="font-black text-sm tabular-nums" style={{ color: primary ? "#18C8E0" : "#F5A623" }}>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Not sure if we reach you? Just call.</p>
                  <a href="tel:+12263872017"
                    className="flex items-center justify-center gap-2 w-full font-black text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                    style={{ background: "#F5A623", color: "#080C17" }}>
                    <Phone className="w-4 h-4" /> (226) 387-2017
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FEATURE ROW 2 — cyan-tinted bg
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#F0FBFD", borderBottom: "1px solid rgba(24,200,224,0.15)" }}>
          <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1 shadow-xl">
              <img
                src={drainFountainImg}
                alt="Water flowing from a metal spout into a stone drain"
                className="w-full aspect-[4/3] object-cover"
                style={{ filter: "brightness(0.92) contrast(1.05)" }}
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-black text-xs uppercase tracking-widest"
                style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(24,200,224,0.4)", color: "#18C8E0" }}>
                Drain &amp; Sewer
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
                style={{ color: "#0A9DB3", background: "rgba(24,200,224,0.1)", border: "1px solid rgba(24,200,224,0.25)" }}>
                Drain Cleaning
              </span>
              <h2 className="font-display font-black leading-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#080C17" }}>
                Drain Cleaning Near You<br />
                <span style={{ color: "#18C8E0" }}>Slow Drain? We Clear It Today.</span>
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: "rgba(8,12,23,0.58)" }}>
                Gurgling pipes and sewage smells don't fix themselves. DeMelo uses camera inspection to find the root cause — then hydro-jetting to clear it completely. You'll see the footage yourself.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { v: "Hydro-Jetting",     s: "Clears any blockage" },
                  { v: "Camera Inspection", s: "See inside your pipes" },
                  { v: "Root Removal",      s: "Tree root infiltration" },
                  { v: "Sewer Line Repair", s: "Full line restoration" },
                ].map(({ v, s }) => (
                  <div key={v} className="rounded-xl p-4 bg-white"
                    style={{ border: "1px solid rgba(24,200,224,0.18)", boxShadow: "0 1px 6px rgba(8,12,23,0.04)" }}>
                    <p className="font-bold text-sm" style={{ color: "#080C17" }}>{v}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(8,12,23,0.48)" }}>{s}</p>
                  </div>
                ))}
              </div>
              <a href="#quote-form"
                className="inline-flex items-center gap-2 font-black px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
                style={{ background: "#080C17", color: "#FFFFFF" }}>
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CASE STUDIES — mid-gray section
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#F5F6F8", borderBottom: "1px solid rgba(8,12,23,0.07)" }}>
          <div className="max-w-6xl mx-auto px-5 py-24">
            <div className="text-center mb-14">
              <span className="inline-block border text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                style={{ borderColor: "rgba(8,12,23,0.12)", color: "rgba(8,12,23,0.42)" }}>
                Emergency Cases Solved
              </span>
              <h2 className="font-display font-black leading-tight" style={{ fontSize: "clamp(2rem,5vw,3.25rem)", color: "#080C17" }}>
                Real Emergencies.<br />
                <span style={{ color: "#18C8E0" }}>Real Results.</span>
              </h2>
              <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "rgba(8,12,23,0.48)" }}>
                Every call is someone's crisis. Here's how DeMelo showed up.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {CASES.map(c => (
                <article key={c.title} className="flex flex-col rounded-2xl overflow-hidden bg-white"
                  style={{ border: "1px solid rgba(8,12,23,0.07)", boxShadow: "0 4px 20px rgba(8,12,23,0.07)" }}>
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={c.img} alt={c.alt} className="w-full h-full object-cover"
                      style={{ filter: "brightness(0.9) saturate(0.92)" }} loading="lazy" />
                    <div className="absolute top-3 left-3 font-black text-white text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ background: c.tagColor }}>{c.tag}</div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display font-black text-xl mb-2 leading-tight" style={{ color: "#080C17" }}>{c.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(8,12,23,0.52)" }}>{c.problem}</p>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {c.stats.map(({ Icon, val, lbl }) => (
                        <div key={lbl} className="rounded-xl p-3 text-center"
                          style={{ background: "#F5F6F8", border: "1px solid rgba(8,12,23,0.07)" }}>
                          <Icon className="w-4 h-4 mx-auto mb-1" style={{ color: c.tagColor }} />
                          <p className="font-black text-sm leading-none" style={{ color: "#080C17" }}>{val}</p>
                          <p className="text-[10px] mt-1 uppercase tracking-wide leading-tight" style={{ color: "rgba(8,12,23,0.4)" }}>{lbl}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t" style={{ borderColor: "rgba(8,12,23,0.07)" }}>
                      <p className="text-sm italic leading-relaxed mb-2" style={{ color: "rgba(8,12,23,0.55)" }}>&ldquo;{c.quote}&rdquo;</p>
                      <p className="text-xs font-semibold" style={{ color: "rgba(8,12,23,0.35)" }}>— {c.by}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            KEYWORD ANCHOR + SERVICES — white
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#FFFFFF" }}>
          <div className="max-w-3xl mx-auto px-5 pt-16 pb-12 text-center">
            <h2 className="font-display font-black mb-4" style={{ fontSize: "clamp(1.8rem,4vw,2.75rem)", color: "#080C17" }}>
              Residential Plumbing Repair Company
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(8,12,23,0.55)" }}>
              From <strong style={{ color: "#080C17" }}>emergency plumbing repair</strong> and <strong style={{ color: "#080C17" }}>drain cleaning</strong> to <strong style={{ color: "#080C17" }}>water heater replacement</strong> and leak repairs, DeMelo is the trusted local plumbing company homeowners call when they need a plumber today. Licensed, insured, and serving SW Ontario since 1984.
            </p>
          </div>
        </section>

        {/* Services Tabs */}
        <section style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(8,12,23,0.07)" }}>
          <div className="max-w-6xl mx-auto px-5 pb-16">
            <div className="flex justify-center mb-8">
              <div className="inline-flex border rounded-xl p-1"
                style={{ background: "#F5F6F8", borderColor: "rgba(8,12,23,0.09)" }}>
                {(["plumbing","electrical"] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm capitalize transition-all"
                    style={tab === t
                      ? { background: t === "plumbing" ? "#18C8E0" : "#F5A623", color: "#080C17", boxShadow: "0 2px 8px rgba(8,12,23,0.1)" }
                      : { color: "rgba(8,12,23,0.45)" }}>
                    {t === "plumbing" ? <Droplets className="w-4 h-4" /> : <Zap className="w-4 h-4" />}
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {(tab === "plumbing" ? PLUMBING : ELECTRICAL).map(({ Icon, l }) => (
                <div key={l} className="flex items-center gap-3 rounded-xl px-4 py-4 transition-colors bg-white"
                  style={{ border: "1px solid rgba(8,12,23,0.08)", boxShadow: "0 1px 4px rgba(8,12,23,0.04)" }}>
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: tab === "plumbing" ? "#18C8E0" : "#F5A623" }} />
                  <span className="font-semibold text-sm" style={{ color: "rgba(8,12,23,0.7)" }}>{l}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl p-4 flex flex-wrap justify-center gap-2"
              style={{ background: "#F5F6F8", border: "1px solid rgba(8,12,23,0.07)" }}>
              {["Brantford","Simcoe","Cambridge","Hamilton","Woodstock","Tillsonburg","London","Port Rowan","Guelph","Burlington"].map(c => (
                <span key={c} className="border text-xs font-semibold px-3 py-1.5 rounded-full bg-white"
                  style={{ borderColor: "rgba(8,12,23,0.09)", color: "rgba(8,12,23,0.55)" }}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FAQ — warm off-white
        ══════════════════════════════════════════════════════════ */}
        <section style={{ background: "#FDFCF9" }}>
          <div className="max-w-3xl mx-auto px-5 py-20">
            <h2 className="font-display font-black text-center mb-3" style={{ fontSize: "clamp(1.8rem,4vw,2.75rem)", color: "#080C17" }}>
              Plumbing Repair FAQs
            </h2>
            <p className="text-sm text-center mb-10" style={{ color: "rgba(8,12,23,0.42)" }}>
              Emergency plumber near you · Same-day plumbing repair · Local plumbers SW Ontario
            </p>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <div key={i} className="rounded-2xl overflow-hidden transition-all bg-white"
                  style={{
                    border: faq === i ? "1.5px solid #18C8E0" : "1.5px solid rgba(8,12,23,0.08)",
                    boxShadow: faq === i ? "0 4px 20px rgba(24,200,224,0.12)" : "0 1px 4px rgba(8,12,23,0.04)",
                  }}>
                  <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>
                    <span className="font-bold text-base leading-snug" style={{ color: faq === i ? "#18C8E0" : "#080C17" }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: faq === i ? "rgba(24,200,224,0.12)" : "rgba(8,12,23,0.05)" }}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300"
                        style={{ color: "#18C8E0", transform: faq === i ? "rotate(180deg)" : "none" }} />
                    </span>
                  </button>
                  {faq === i && (
                    <div className="px-6 pb-5 text-sm leading-relaxed border-t pt-4"
                      style={{ color: "rgba(8,12,23,0.6)", borderColor: "rgba(24,200,224,0.12)" }}>
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER — dark navy ──────────────────────────────────── */}
        <footer
          className="pb-[calc(8rem+env(safe-area-inset-bottom))] sm:pb-0"
          style={{ background: "#080C17", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col items-center gap-4 text-center">
            <Logo size="md" invert={false} />
            <p className="text-sm max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              Residential plumbing repair company serving Brantford, Cambridge, Hamilton, Simcoe, Woodstock and surrounding Ontario communities. Emergency plumbing repair, same-day plumbers, drain cleaning and water heater replacement available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
              {["Brantford","Simcoe","Cambridge","Hamilton","Woodstock","London","Guelph","Burlington"].map((c, i, a) => (
                <span key={c}>{c}{i < a.length - 1 && " ·"}</span>
              ))}
            </div>
            <a href="tel:+12263872017" className="font-black text-sm" style={{ color: "#F5A623" }}>(226) 387-2017</a>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>© 2026 DEMELO PLUMBING &amp; ELECTRICAL. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

        {/* ── MOBILE CALL PILL ────────────────────────────────────── */}
        <a href="tel:+12263872017"
          className="fixed bottom-5 right-5 z-50 sm:hidden flex items-center gap-2 font-black px-5 py-4 rounded-full min-h-[56px]"
          style={{ background: "#E63946", color: "white", boxShadow: "0 8px 24px rgba(230,57,70,0.45)" }}
          aria-label="Call DeMelo 24/7 emergency">
          <Phone className="w-5 h-5" /> Emergency Call
        </a>
        <a href="#quote-form"
          className="fixed bottom-5 right-5 z-50 hidden sm:flex items-center gap-2 font-bold px-5 py-3 rounded-full text-sm"
          style={{ background: "#F5A623", color: "#080C17", boxShadow: "0 8px 20px rgba(245,166,35,0.4)" }}>
          <ArrowRight className="w-4 h-4" /> Free Estimate
        </a>
      </div>
    </>
  );
}
