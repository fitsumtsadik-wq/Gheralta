import { useMemo, useState } from 'react'

const destinations = [
  {
    name: 'Lalibela',
    subtitle: 'Churches carved from stone',
    description: 'Walk through sacred history, dramatic landscapes, and a spiritual journey that feels timeless.',
    tag: 'Heritage',
  },
  {
    name: 'Simien Mountains',
    subtitle: 'Epic trails and dramatic peaks',
    description: 'A thrilling escape into rugged terrain, steep ravines, and unforgettable sunrise views.',
    tag: 'Adventure',
  },
  {
    name: 'Omo Valley',
    subtitle: 'Culture, rituals, and raw landscapes',
    description: 'Meet living traditions and experience one of Africa’s most culturally rich regions.',
    tag: 'Culture',
  },
]

const experienceHighlights = [
  'Curated local guides and immersive storytelling',
  'Flexible private tours and small-group journeys',
  'Authentic lodges, scenic routes, and cultural dinners',
  'Easy planning tools for your next Ethiopian escape',
]

const tripThemes = [
  {
    label: 'Cultural Discovery',
    copy: 'Old churches, festivals, artisan villages, and soul-stirring heritage walks.',
  },
  {
    label: 'Adventure Trails',
    copy: 'Mountain hikes, dramatic viewpoints, and nature-rich routes built for explorers.',
  },
  {
    label: 'Slow Travel',
    copy: 'Thoughtful itineraries that help you stay, connect, and absorb every moment.',
  },
]

const instagramHighlights = [
  {
    title: 'Lalibela Sunrise',
    tag: 'Heritage',
    note: 'Morning light, sacred sites, and a calm beginning to your journey.',
  },
  {
    title: 'Simien Views',
    tag: 'Adventure',
    note: 'Highland trails, dramatic terrain, and unforgettable panoramas.',
  },
  {
    title: 'Local Encounters',
    tag: 'Culture',
    note: 'Real moments with communities, rituals, and everyday traditions.',
  },
]

const testimonials = [
  {
    quote: 'Visit Gheralta made our Ethiopian trip feel personal, well organized, and deeply meaningful. We loved the balance of culture, scenery, and local insight.',
    name: 'Amina & Daniel',
  },
  {
    quote: 'The experience was beyond what we expected. Every day felt immersive, thoughtful, and full of stories that stayed with us long after the trip.',
    name: 'Sarah M.',
  },
  {
    quote: 'The team understood exactly what we wanted—adventure, culture, and a genuine feel for Ethiopia. Everything was smooth from planning to arrival.',
    name: 'Tewodros K.',
  },
]

const initialForm = {
  name: '',
  email: '',
  destination: 'Lalibela',
  travelers: '2',
  tripStyle: 'Cultural Discovery',
  dates: '',
  message: '',
}

function App() {
  const [activeDestination, setActiveDestination] = useState(destinations[0].name)
  const [inquiry, setInquiry] = useState(initialForm)
  const [status, setStatus] = useState('')

  const currentDestination = useMemo(
    () => destinations.find((item) => item.name === activeDestination) ?? destinations[0],
    [activeDestination],
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    setInquiry((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Visit Gheralta inquiry - ${inquiry.destination}`
    const body = [
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Destination: ${inquiry.destination}`,
      `Travelers: ${inquiry.travelers}`,
      `Trip style: ${inquiry.tripStyle}`,
      `Dates: ${inquiry.dates || 'Flexible'}`,
      '',
      `Message: ${inquiry.message || 'No extra notes provided.'}`,
    ].join('%0D%0A')

    window.location.href = `mailto:hello@visitgheralta.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Your email draft is ready. Please send it to confirm your inquiry.')
  }

  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div>
            <p className="brand-mark">Visit Gheralta</p>
            <p className="brand-note">Adventure • Culture • Authentic Journey</p>
          </div>
          <div className="nav-actions">
            <a href="#tours">Tours</a>
            <a href="#experience">Experience</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Curated Ethiopia travel experiences</p>
            <h1>Explore Ethiopia with Visit Gheralta — where adventure meets culture.</h1>
            <p className="hero-text">
              A vibrant, interactive travel experience designed for explorers who want immersive heritage, scenic routes, and a seamless planning journey.
            </p>
            <div className="hero-actions">
              <a href="#tours" className="btn btn-primary">Explore tours</a>
              <a href="#contact" className="btn btn-secondary">Plan my trip</a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>12+</strong>
                <span>signature routes</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>local experience design</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>trip support</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>Featured route</span>
              <span>Best for first-time visitors</span>
            </div>
            <h2>{currentDestination.name}</h2>
            <p>{currentDestination.subtitle}</p>
            <p>{currentDestination.description}</p>
            <div className="pill-row">
              <span className="pill">{currentDestination.tag}</span>
            </div>
            <div className="mini-map">
              {destinations.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={item.name === currentDestination.name ? 'marker active' : 'marker'}
                  onClick={() => setActiveDestination(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="tours" className="section">
          <div className="section-heading">
            <p className="eyebrow">Popular experiences</p>
            <h2>Choose the journey that matches your spirit</h2>
          </div>
          <div className="tour-grid">
            {tripThemes.map((theme) => (
              <article key={theme.label} className="tour-card">
                <p className="tour-label">{theme.label}</p>
                <p>{theme.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section split-section">
          <div>
            <p className="eyebrow">Why travelers love us</p>
            <h2>Every trip is shaped for connection, comfort, and discovery.</h2>
            <p className="section-copy">
              We blend local insight with modern planning, helping you explore Ethiopia through immersive routes, memorable stays, and guided storytelling.
            </p>
          </div>
          <div className="feature-list">
            {experienceHighlights.map((item) => (
              <div key={item} className="feature-item">
                <span>✦</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="stories" className="section">
          <div className="section-heading">
            <p className="eyebrow">Instagram highlights</p>
            <h2>See the energy of Ethiopia through our latest travel moments</h2>
          </div>
          <div className="instagram-grid">
            {instagramHighlights.map((item) => (
              <article key={item.title} className="instagram-card">
                <span className="instagram-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <div className="social-cta">
            <p>Follow the latest stories, routes, and travel inspiration on Instagram.</p>
            <a href="https://www.instagram.com/gheralta_tours/" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Follow on Instagram
            </a>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Traveler stories</p>
            <h2>Social proof that helps travelers trust the journey</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p>“{item.quote}”</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section callout">
          <div>
            <p className="eyebrow">Ready to travel?</p>
            <h2>Tell us what kind of journey you want — culture, adventure, or a mix of both.</h2>
          </div>
          <a href="#contact" className="btn btn-primary">Start planning</a>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <p className="eyebrow">Booking inquiry</p>
            <h2>Request a custom itinerary or ask about a tour</h2>
          </div>
          <div className="booking-panel">
            <div>
              <p className="section-copy">
                Share your destination, travel dates, and preferred style. We will open your email draft so you can send the inquiry directly to Visit Gheralta.
              </p>
              <ul className="contact-points">
                <li>Best for private trips, group travel, and custom planning</li>
                <li>Perfect for first-time visitors and travelers seeking a richer experience</li>
                <li>Easy to use on mobile and desktop</li>
              </ul>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input name="name" value={inquiry.name} onChange={handleChange} placeholder="Your full name" required />
                </label>

                <label className="form-field">
                  <span>Email</span>
                  <input type="email" name="email" value={inquiry.email} onChange={handleChange} placeholder="you@example.com" required />
                </label>

                <label className="form-field">
                  <span>Destination</span>
                  <select name="destination" value={inquiry.destination} onChange={handleChange}>
                    <option>Lalibela</option>
                    <option>Simien Mountains</option>
                    <option>Omo Valley</option>
                    <option>Gondar</option>
                    <option>Harar</option>
                    <option>Addis Ababa</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Travelers</span>
                  <input name="travelers" value={inquiry.travelers} onChange={handleChange} placeholder="2" required />
                </label>

                <label className="form-field">
                  <span>Trip style</span>
                  <select name="tripStyle" value={inquiry.tripStyle} onChange={handleChange}>
                    <option>Cultural Discovery</option>
                    <option>Adventure Trails</option>
                    <option>Slow Travel</option>
                    <option>Custom Itinerary</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Preferred dates</span>
                  <input type="text" name="dates" value={inquiry.dates} onChange={handleChange} placeholder="Anytime or exact dates" />
                </label>
              </div>

              <label className="form-field full-width">
                <span>Tell us what you want</span>
                <textarea
                  name="message"
                  value={inquiry.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel style, budget, duration, and what you want to experience."
                  rows="5"
                />
              </label>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send inquiry</button>
                <p className="status-note">{status || 'You will be redirected to your email app with a prefilled message.'}</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="brand-mark">Visit Gheralta</p>
          <p>Let’s shape your next Ethiopian adventure together.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/profile.php?id=100069015475990" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/gheralta_tours/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:hello@visitgheralta.com">hello@visitgheralta.com</a>
        </div>
      </footer>
    </div>
  )
}

export default App
