import { useEffect, useRef, useState } from 'react'

// Wraps any section in a scroll-triggered fade/slide reveal
function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`}>
      {children}
    </div>
  )
}

const PROJECTS = [
  {
    method: 'GET',
    name: 'Laravel Blog',
    route: '/my-app',
    description:
      'Full CRUD blog application built with Inertia.js, including queue jobs and image upload handling.',
    tech: ['Laravel', 'Vue.js', 'Inertia'],
    url: 'https://github.com/MaryamAbdelraheem/my-app',
  },
  {
    method: 'POST',
    name: 'Forever',
    route: '/Forever',
    description: 'E-commerce website built with React, covering product browsing and a full shopping flow.',
    tech: ['React', 'JavaScript'],
    url: 'https://github.com/MaryamAbdelraheem/Forever',
  },
  {
    method: 'GET',
    name: 'backend_OPHIUC',
    route: '/backend_OPHIUC',
    description: 'Backend server for project OPHIUC — handling core application logic and data flow.',
    tech: ['JavaScript', 'Node.js'],
    url: 'https://github.com/MaryamAbdelraheem/backend_OPHIUC',
  },
  {
    method: 'PUT',
    name: 'Library Project',
    route: '/Library-Project',
    description: 'A simple library management application for tracking books, members, and borrowing records.',
    tech: ['Django', 'Python'],
    url: 'https://github.com/MaryamAbdelraheem/Library-Project',
  },
  {
    method: 'GET',
    name: 'Python Blog',
    route: '/Python-Blog',
    description: 'A blog covering Python topics and articles, built as part of ongoing backend practice.',
    tech: ['Python', 'JavaScript'],
    url: 'https://github.com/MaryamAbdelraheem/Python-Blog',
  },
  {
    method: 'POST',
    name: 'User System',
    route: '/user_system',
    description: 'A CRUD application for managing student records, built with PHP.',
    tech: ['PHP'],
    url: 'https://github.com/MaryamAbdelraheem/user_system',
  },
]

const methodClass = { GET: 'm-get', POST: 'm-post', PUT: 'm-put' }

export default function App() {
  return (
    <>
      <header className="site">
        <nav className="wrap">
          <div className="brand">
            <span className="dot"></span> maryam.dev
          </div>
          <ul className="navlinks">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">AVAILABLE FOR JUNIOR BACKEND ROLES</div>
            <h1 className="title">
              Maryam Abdelraheem
              <br />
              builds <span>backend systems</span> that hold up.
            </h1>
            <p className="lede">
              Backend developer working across Node.js, Python/Django, and Laravel — focused on clean APIs,
              secure systems, and code that's easy for the next person to read. Currently sharpening these
              skills through the ITI Open Source Track.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View projects</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
          </div>

          <Reveal className="response-card">
            <div className="bar">
              <span className="b-dot"></span>
              <span className="b-dot"></span>
              <span className="b-dot"></span>
              <div className="path">profile.api</div>
            </div>
            <div className="body">
              <div className="req">GET /maryam-abdelraheem HTTP/1.1</div>
              <div className="status">200 OK</div>
              <pre>{'{'}
{'\n  '}<span className="k">"name"</span>: <span className="s">"Maryam Abdelraheem"</span>,
{'\n  '}<span className="k">"role"</span>: <span className="s">"Junior Backend Developer"</span>,
{'\n  '}<span className="k">"stack"</span>: [<span className="s">"Node.js"</span>, <span className="s">"Django"</span>, <span className="s">"Laravel"</span>, <span className="s">"PHP"</span>],
{'\n  '}<span className="k">"currently_learning"</span>: [<span className="s">"Inertia.js"</span>, <span className="s">"Vue.js"</span>],
{'\n  '}<span className="k">"training"</span>: <span className="s">"ITI Open Source Track"</span>,
{'\n  '}<span className="k">"status"</span>: <span className="b">"open_to_work"</span>
{'\n}'}</pre>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="section-tag">01 · About</div>
            <h2 className="section-title">A backend engineer in training, building in the open</h2>
          </Reveal>
          <div className="about-body">
            <Reveal className="about-text">
              <p>
                I'm a <strong>Back-End Developer</strong> focused on building robust, scalable web
                applications. My work spans <strong>RESTful APIs</strong>, database-driven systems, and
                secure backend architecture, primarily using <strong>Node.js</strong> and{' '}
                <strong>Python/Django</strong>, with hands-on experience in <strong>PHP/Laravel</strong> as
                well.
              </p>
              <p>
                I'm currently advancing my skills through the <strong>ITI Open Source Track</strong>, and
                expanding into <strong>Laravel with Inertia.js and Vue.js</strong> to build fuller-stack
                applications. I care about clean code, performance optimization, and writing systems that
                are easy to maintain and extend.
              </p>
              <p>
                I'm looking for a <strong>Junior Backend Engineer</strong> role where I can contribute to
                real systems, keep learning from a strong team, and grow as an engineer.
              </p>
            </Reveal>
            <Reveal className="focus-list">
              <div className="label">Currently</div>
              <ul>
                <li>Training in the ITI Open Source Track</li>
                <li>Learning Laravel, Inertia.js &amp; Vue.js</li>
                <li>Building CRUD systems &amp; RESTful APIs</li>
                <li>Open to Junior Backend Engineer roles</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="section-tag">02 · Skills</div>
            <h2 className="section-title">Stack &amp; tools</h2>
          </Reveal>
          <div className="skill-groups">
            <Reveal className="skill-group">
              <span className="method m-get">GET</span>
              <h3>/languages</h3>
              <div className="pill-row">
                <span className="pill">JavaScript</span>
                <span className="pill">Python</span>
                <span className="pill">PHP</span>
              </div>
            </Reveal>
            <Reveal className="skill-group">
              <span className="method m-post">POST</span>
              <h3>/frameworks</h3>
              <div className="pill-row">
                <span className="pill">Node.js</span>
                <span className="pill">Django</span>
                <span className="pill">Laravel</span>
                <span className="pill">Vue.js</span>
              </div>
            </Reveal>
            <Reveal className="skill-group">
              <span className="method m-put">PUT</span>
              <h3>/currently-learning</h3>
              <div className="pill-row">
                <span className="pill">Inertia.js</span>
                <span className="pill">Vue.js</span>
                <span className="pill">Open Source (ITI)</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="section-tag">03 · Projects</div>
            <h2 className="section-title">Selected work</h2>
          </Reveal>
          <div className="projects">
            {PROJECTS.map((p) => (
              <Reveal className="project-card" key={p.name}>
                <span className={`method ${methodClass[p.method]}`}>{p.method}</span>
                <div className="project-main">
                  <h3>{p.name}</h3>
                  <div className="route">{p.route}</div>
                  <p>{p.description}</p>
                  <div className="tech-row">
                    {p.tech.map((t) => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                  View repo ↗
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <Reveal className="contact-card">
            <div>
              <div className="eyebrow">04 · Contact</div>
              <h2>Let's build something reliable together.</h2>
              <p>Open to Junior Backend Engineer roles — reach out directly or check out more work on GitHub.</p>
            </div>
            <div className="contact-links">
              <a className="contact-row" href="mailto:your-email@example.com">
                <span>Email</span><span className="arrow">→</span>
              </a>
              <a className="contact-row" href="https://github.com/MaryamAbdelraheem" target="_blank" rel="noopener noreferrer">
                <span>GitHub · MaryamAbdelraheem</span><span className="arrow">→</span>
              </a>
              <a className="contact-row" href="https://linkedin.com/in/maryam-abdelraheem" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn · maryam-abdelraheem</span><span className="arrow">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        <div className="wrap">© 2026 Maryam Abdelraheem — built with care, one endpoint at a time.</div>
      </footer>
    </>
  )
}
