import Image from "next/image";
import profilePic from "../../public/profile.png";
import { Mail, Sparkles, ArrowUpRight, Smartphone, CodeXml, Terminal, BriefcaseBusiness, Trophy, Download } from "lucide-react";

const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Home() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <a className="nav-logo" href="#top">Sulistyo Wahyu S</a>
          <nav className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </nav>
          <div className="nav-socials">
            <a aria-label="Email" href="mailto:sulistyo.wahyu27@gmail.com"><Mail size={16} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/sulistyows" target="_blank" rel="noreferrer"><LinkedinIcon size={16} /></a>
            <a aria-label="Github" href="https://github.com/sulistyow" target="_blank" rel="noreferrer"><GithubIcon size={16} /></a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section" id="top" style={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="badge" style={{ marginBottom: '1.5rem' }}>
                <Sparkles size={15} style={{ marginRight: '0.5rem' }} />
                Mobile apps with clean architecture
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--zinc-50)', lineHeight: '1.1' }}>
                Sulistyo Wahyu Sasongko
              </h1>
              <p style={{ marginTop: '1.5rem', fontSize: '1.5rem', fontWeight: 500, color: 'var(--green-300)' }}>
                Android Developer
              </p>
              <p style={{ marginTop: '1.5rem', maxWidth: '42rem', fontSize: '1.125rem', color: 'var(--zinc-400)', lineHeight: '1.75' }}>
                I build Android and cross-platform mobile products that are maintainable, performant, and practical for real product teams with 5+ years of experience across fintech, enterprise, and live-streaming industries.
              </p>
              
              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a className="btn-primary" href="mailto:sulistyo.wahyu27@gmail.com">
                  <Mail size={17} /> Contact Me
                </a>
                <a className="btn-secondary" href="https://drive.google.com/drive/folders/18XddO9IF_zOdjiBbiI00zYxpUiSH581j?usp=sharing" target="_blank" rel="noreferrer">
                  <Download size={17} /> Download CV
                </a>
                <a className="btn-secondary" href="#projects">
                  View projects <ArrowUpRight size={17} />
                </a>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge-outline">5+ years</span>
                <span className="badge badge-outline">Android / Kotlin</span>
                <span className="badge badge-outline">MVVM / Clean Code</span>
                <span className="badge badge-outline">Jakarta</span>
              </div>
            </div>

            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
              <div style={{ position: 'absolute', inset: '1.5rem', borderRadius: '50%', border: '1px solid rgba(0, 230, 118,0.1)', background: 'rgba(0, 230, 118,0.03)', filter: 'blur(24px)' }}></div>
              <div style={{ position: 'absolute', height: '18rem', width: '18rem', borderRadius: '50%', border: '1px dashed rgba(110, 231, 183,0.2)' }}></div>
              <div style={{ position: 'absolute', height: '14rem', width: '14rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}></div>
              
              <div style={{ position: 'absolute', left: '0', top: '3.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(9,9,11,0.75)', padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'var(--zinc-300)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', backdropFilter: 'blur(24px)' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--green-300)' }}>Focus</span>
                Android + Kotlin
              </div>
              
              <div style={{ position: 'absolute', right: '0', top: '4rem', zIndex: 20, borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(9,9,11,0.8)', padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'var(--zinc-300)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', backdropFilter: 'blur(24px)' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--green-300)' }}>Based in</span>
                Jakarta, Indonesia
              </div>

              <div style={{ position: 'relative', borderRadius: '50%', border: '1px solid rgba(110, 231, 183,0.2)', background: 'rgba(9,9,11,0.8)', padding: '0.75rem', boxShadow: '0 32px 100px -32px rgba(0, 230, 118,0.6)' }}>
                <div style={{ position: 'absolute', inset: '-0.75rem', borderRadius: '50%', background: 'linear-gradient(to bottom right, rgba(110, 231, 183,0.3), transparent, rgba(4, 120, 87,0.2))', filter: 'blur(24px)' }}></div>
                <div style={{ position: 'relative', height: '14rem', width: '14rem', overflow: 'hidden', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'var(--zinc-900)', boxShadow: '0 0 0 8px var(--zinc-950)' }}>
                  <Image alt="Sulistyo Wahyu Sasongko" fill style={{ objectFit: 'cover' }} src={profilePic} priority unoptimized />
                </div>
              </div>
              
              <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: 'min(100%, 22rem)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(9,9,11,0.8)', padding: '1rem', textAlign: 'center', backdropFilter: 'blur(24px)' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--zinc-100)' }}>Android Developer</p>
                <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--zinc-400)' }}>Building reliable mobile experiences with product-minded engineering.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <div className="container">
            <div style={{ marginBottom: '2rem', maxWidth: '42rem' }}>
              <p className="section-label">Capability</p>
              <h2 className="section-title">Skill sets shaped by real product delivery.</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <article className="card-bento">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'grid', placeItems: 'center', height: '2.75rem', width: '2.75rem', borderRadius: '1rem', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', color: 'var(--green-300)' }}>
                      <Smartphone size={21} />
                    </div>
                    <h3 style={{ marginTop: '1.25rem', fontSize: '1.25rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Mobile</h3>
                  </div>
                  <span style={{ borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-400)' }}>5 tools</span>
                </div>
                <p style={{ marginTop: '0.75rem', minHeight: '4rem', fontSize: '0.875rem', color: 'var(--zinc-400)' }}>Native Android, cross-platform delivery, and production app architecture.</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge badge-outline">Kotlin</span>
                  <span className="badge badge-outline">Java</span>
                  <span className="badge badge-outline">Dart / Flutter</span>
                  <span className="badge badge-outline">MVVM</span>
                </div>
              </article>

              <article className="card-bento">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'grid', placeItems: 'center', height: '2.75rem', width: '2.75rem', borderRadius: '1rem', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', color: 'var(--green-300)' }}>
                      <CodeXml size={21} />
                    </div>
                    <h3 style={{ marginTop: '1.25rem', fontSize: '1.25rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Backend & Web</h3>
                  </div>
                  <span style={{ borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-400)' }}>6 tools</span>
                </div>
                <p style={{ marginTop: '0.75rem', minHeight: '4rem', fontSize: '0.875rem', color: 'var(--zinc-400)' }}>Supporting API systems, databases, and internal web admin tools.</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge badge-outline">Vercel</span>
                  <span className="badge badge-outline">NextJs</span>
                  <span className="badge badge-outline">Supabase</span>
                  <span className="badge badge-outline">Cloudflare</span>
                  <span className="badge badge-outline">Firebase Console</span>
                  <span className="badge badge-outline">PHP / Laravel</span>
                  <span className="badge badge-outline">CodeIgniter</span>
                  <span className="badge badge-outline">RoomDB / SQLite</span>
                  <span className="badge badge-outline">PostgreSQL</span>
                  <span className="badge badge-outline">Firebase Realtime</span>
                  <span className="badge badge-outline">GraphQL</span>
                </div>
              </article>

              <article className="card-bento">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'grid', placeItems: 'center', height: '2.75rem', width: '2.75rem', borderRadius: '1rem', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', color: 'var(--green-300)' }}>
                      <Terminal size={21} />
                    </div>
                    <h3 style={{ marginTop: '1.25rem', fontSize: '1.25rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Practices & Tools</h3>
                  </div>
                  <span style={{ borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-400)' }}>5 tools</span>
                </div>
                <p style={{ marginTop: '0.75rem', minHeight: '4rem', fontSize: '0.875rem', color: 'var(--zinc-400)' }}>Delivery habits for stable releases, debugging, automation, and quality.</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="badge badge-outline">Clean Code</span>
                  <span className="badge badge-outline">Agile</span>
                  <span className="badge badge-outline">Git</span>
                  <span className="badge badge-outline">Jira</span>
                  <span className="badge badge-outline">Google Play Console</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <div className="container">
            <div style={{ marginBottom: '2rem', maxWidth: '42rem' }}>
              <p className="section-label">Selected Work</p>
              <h2 className="section-title">Mobile products with scale, ownership, and polish.</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <article className="card-project group">
                <div>
                  <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ borderRadius: '9999px', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--green-300)' }}>Featured</span>
                    <ArrowUpRight size={20} style={{ color: 'var(--zinc-600)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--zinc-50)' }}>SWIPE APP</h3>
                  <p style={{ marginTop: '1rem', fontSize: '0.875rem', lineHeight: '1.75', color: 'var(--zinc-400)' }}>Live Streaming & Video Communication Application. Implemented Google Play Billing, integrated real-time video via Tencent TRTC SDK, and utilized Face Recognition SDK for security.</p>
                </div>
                <div className="project-line"></div>
              </article>

              <article className="card-project group">
                <div>
                  <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ borderRadius: '9999px', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--green-300)' }}>Featured</span>
                    <ArrowUpRight size={20} style={{ color: 'var(--zinc-600)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--zinc-50)' }}>LINE Bank</h3>
                  <p style={{ marginTop: '1rem', fontSize: '0.875rem', lineHeight: '1.75', color: 'var(--zinc-400)' }}>Maintained and enhanced the LINE Bank Android app. Delivered new product features, contributed to Liveness Detection POC, and addressed Android 16KB page-size compliance.</p>
                </div>
                <div className="project-line"></div>
              </article>

              <article className="card-project group">
                <div>
                  <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ borderRadius: '9999px', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: 'var(--green-300)' }}>Featured</span>
                    <ArrowUpRight size={20} style={{ color: 'var(--zinc-600)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Independent Publishing</h3>
                  <p style={{ marginTop: '1rem', fontSize: '0.875rem', lineHeight: '1.75', color: 'var(--zinc-400)' }}>Independently designed, developed, and published multiple Android apps achieving 10,000+ downloads. Implemented AdMob strategies and RESTful APIs.</p>
                </div>
                <div className="project-line"></div>
              </article>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience">
          <div className="container">
            <div style={{ marginBottom: '2rem', maxWidth: '42rem' }}>
              <p className="section-label">Experience</p>
              <h2 className="section-title">A compact view of the roles behind the work.</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <article style={{ position: 'relative', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--green-300)' }}>Android Developer (LINE Bank)</p>
                      <h3 style={{ marginTop: '0.25rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--zinc-50)' }}>PT Nusantara Duta Solusindo</h3>
                    </div>
                    <span style={{ borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-400)' }}>Jul 2023 - Present</span>
                  </div>
                  <ul style={{ marginTop: '1.25rem', display: 'grid', gap: '0.5rem', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--zinc-400)' }}>
                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ marginTop: '0.5rem', height: '0.375rem', width: '0.375rem', flex: 'none', borderRadius: '50%', background: 'var(--green-400)' }}></span><span>Maintained and enhanced the LINE Bank Android application, ensuring high performance, stability, and reliability in a production environment.</span></li>
                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ marginTop: '0.5rem', height: '0.375rem', width: '0.375rem', flex: 'none', borderRadius: '50%', background: 'var(--green-400)' }}></span><span>Contributed to the Proof of Concept (POC) and technical validation of a Liveness Detection feature to strengthen digital user verification processes.</span></li>
                  </ul>
                </div>
              </article>

              <article style={{ position: 'relative', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--green-300)' }}>Android Developer</p>
                      <h3 style={{ marginTop: '0.25rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--zinc-50)' }}>PT Rapid Teknologi Indonesia</h3>
                    </div>
                    <span style={{ borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-400)' }}>Apr 2022 - Feb 2023</span>
                  </div>
                  <ul style={{ marginTop: '1.25rem', display: 'grid', gap: '0.5rem', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--zinc-400)' }}>
                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ marginTop: '0.5rem', height: '0.375rem', width: '0.375rem', flex: 'none', borderRadius: '50%', background: 'var(--green-400)' }}></span><span>Developed and delivered business-critical features across three Android applications within the Astra International HSO ecosystem.</span></li>
                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ marginTop: '0.5rem', height: '0.375rem', width: '0.375rem', flex: 'none', borderRadius: '50%', background: 'var(--green-400)' }}></span><span>Improved code maintainability and scalability by implementing the MVVM pattern and Clean Code principles.</span></li>
                  </ul>
                </div>
              </article>

              <article style={{ position: 'relative', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--green-300)' }}>Android Developer</p>
                      <h3 style={{ marginTop: '0.25rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--zinc-50)' }}>PT Lumut Karya Sejahtera</h3>
                    </div>
                    <span style={{ borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-400)' }}>Sep 2020 - Oct 2021</span>
                  </div>
                  <ul style={{ marginTop: '1.25rem', display: 'grid', gap: '0.5rem', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--zinc-400)' }}>
                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ marginTop: '0.5rem', height: '0.375rem', width: '0.375rem', flex: 'none', borderRadius: '50%', background: 'var(--green-400)' }}></span><span>Developed and maintained multiple Android applications using Java, supporting business operations across various client projects.</span></li>
                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ marginTop: '0.5rem', height: '0.375rem', width: '0.375rem', flex: 'none', borderRadius: '50%', background: 'var(--green-400)' }}></span><span>Designed and implemented a core tracking feature utilizing Google Maps SDK, improving real-time location monitoring capabilities.</span></li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section" id="education">
          <div className="container" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            
            <div style={{ borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', padding: '1.5rem' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'grid', placeItems: 'center', height: '2.5rem', width: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.1)', color: 'var(--green-300)' }}>
                  <BriefcaseBusiness size={20} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Education</h2>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontWeight: 600, color: 'var(--zinc-100)' }}>Universitas Duta Bangsa Surakarta</h3>
                    <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--zinc-500)' }}>Grad: Sept 2020</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--zinc-400)' }}>Bachelor&apos;s Degree in Informatics (GPA 3.7)</p>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: '1.5rem', border: '1px solid rgba(0, 230, 118,0.2)', background: 'rgba(0, 230, 118,0.06)', padding: '1.5rem' }}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'grid', placeItems: 'center', height: '2.5rem', width: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(0, 230, 118,0.3)', background: 'rgba(0, 230, 118,0.1)', color: 'var(--green-200)' }}>
                  <Trophy size={20} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Certifications</h2>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Flutter Intermediate</h3>
                  <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--zinc-300)' }}>Dicoding Academy, Dec 2024</p>
                </li>
                <li>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Complete Multi-Modular Architecture for Android</h3>
                  <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--zinc-300)' }}>Udemy, July 2024</p>
                </li>
                <li>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--zinc-50)' }}>Menjadi Android Developer Expert</h3>
                  <p style={{ marginTop: '0.25rem', fontSize: '0.875rem', color: 'var(--zinc-300)' }}>Dicoding Academy, Nov 2022</p>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', fontSize: '0.875rem', color: 'var(--zinc-500)' }}>
        <div className="container footer-container">
          <p>&copy; {new Date().getFullYear()} Sulistyo Wahyu Sasongko. All rights reserved.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a style={{ fontWeight: 500, color: 'var(--zinc-400)', transition: 'color 0.2s' }} href="mailto:sulistyo.wahyu27@gmail.com">sulistyo.wahyu27@gmail.com</a>
            <a style={{ fontWeight: 500, color: 'var(--zinc-400)', transition: 'color 0.2s' }} href="https://linkedin.com/in/sulistyows" target="_blank" rel="noreferrer">LinkedIn</a>
            <a style={{ fontWeight: 500, color: 'var(--zinc-400)', transition: 'color 0.2s' }} href="https://github.com/sulistyow" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </footer>
    </>
  );
}
