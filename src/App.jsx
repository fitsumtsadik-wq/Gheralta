import { useEffect, useMemo, useRef, useState } from 'react'

const destinations = [
  {
    name: 'Abune Yemata Guh',
    subtitle: 'The famous sky church climb',
    description: 'A thrilling sacred climb to one of Tigray’s most unforgettable rock-hewn churches, with sweeping highland views from the Gheralta cliffs.',
    tag: 'From $185',
  },
  {
    name: 'Gheralta Churches',
    subtitle: 'Two days of mountain churches',
    description: 'A compact circuit through the churches in the sky, ancient monastic art, sandstone towers, and the legendary beauty of the Gheralta Massif.',
    tag: 'From $249',
  },
  {
    name: 'Axum & Tigray',
    subtitle: 'Ancient history and highland adventure',
    description: 'Meet living traditions and experience one of Africa’s most culturally rich regions.',
    tag: 'From $349',
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
    label: 'Abune Yemata Guh Day Trip',
    copy: 'The famous sky church climb, a high-adrenaline pilgrimage into the sandstone heart of Gheralta.',
    price: '$185',
  },
  {
    label: '2-Day Gheralta Churches Tour',
    copy: 'A short, powerful circuit through Abune Yemata, Maryam Korkor, mountain views, and ancient church art.',
    price: '$249',
  },
  {
    label: 'Al-Nejashi Mosque Day Trip',
    copy: 'A sacred interfaith journey to Africa’s first mosque, Sahaba tombs, and nearby Wukro Cherkos.',
    price: '$99',
  },
  {
    label: '3-Day Tigray & Axum Highlights',
    copy: 'A compact expedition linking Axum’s ancient monuments with Gheralta’s iconic highland climbs.',
    price: '$349',
  },
]

const mangoDeals = [
  'Abune Yemata Guh Day Trip - $185',
  '2-Day Gheralta Churches Tour - $249',
  'Al-Nejashi Mosque Day Trip - $99',
  '3-Day Tigray & Axum Highlights - $349',
]

const tripadvisorReviews = [
  { text: '"Breathtaking climb — one of the best experiences of my life!"', name: 'Sarah M.', source: 'Gheralta Tours' },
  { text: '"The Danakil is otherworldly. Colors you won\'t believe are real."', name: 'Elena V.', source: 'Danakil Depression' },
  { text: '"Best organized tour in all of Ethiopia. Deeply authentic."', name: 'James K.', source: 'Gheralta Tours' },
  { text: '"A spectacle unlike anything on Earth. Absolutely life-changing!"', name: 'Priya N.', source: 'Danakil Depression' },
  { text: '"Immersive, thoughtful, and full of stories that stayed with us."', name: 'Tobias H.', source: 'Gheralta Tours' },
  { text: '"Top class service from start to finish. We\'ll be back!"', name: 'Marco L.', source: 'Danakil Depression' },
]

const instagramHighlights = [
  {
    title: 'Lalibela Sunrise',
    type: 'post',
    url: 'https://www.instagram.com/p/C1Sz0ucCBQV/',
  },
  {
    title: 'Simien Views',
    type: 'post',
    url: 'https://www.instagram.com/p/DU8eJ1-CGR9/',
  },
  {
    title: 'Gheralta Moment',
    type: 'post',
    url: 'https://www.instagram.com/p/DXtu1cXjVn8/',
  },
]

const TA_TOURS_URL = 'https://www.tripadvisor.com/Attraction_Review-g1392610-d1788766-Reviews-Gheralta_Tours-Mek_ele_Tigray_Region.html'
const TA_DANAKIL_URL = 'https://www.tripadvisor.com/Attraction_Review-g2193229-d2389833-Reviews-Danakil_Depression-Afar_Region.html'

const taReviews = [
  {
    quote: 'Absolutely breathtaking. The climb to Abune Yemata Guh is challenging but the payoff is unlike anything I have seen in years of traveling. Our guide was knowledgeable, patient, and full of wonderful stories.',
    name: 'Sarah M.',
    location: 'United Kingdom',
    source: 'Gheralta Tours',
    url: TA_TOURS_URL,
    date: 'March 2025',
  },
  {
    quote: 'The Danakil Depression is unlike any place on Earth. The colors, the heat, the alien landscape — it genuinely felt like standing on another planet. Every detail was organized flawlessly.',
    name: 'Elena V.',
    location: 'Italy',
    source: 'Danakil Depression',
    url: TA_DANAKIL_URL,
    date: 'January 2025',
  },
  {
    quote: 'Best organized tour I have taken in all of Africa. Deeply authentic, culturally immersive, and genuinely moving. The ancient churches of Gheralta are a wonder more people need to discover.',
    name: 'James K.',
    location: 'United States',
    source: 'Gheralta Tours',
    url: TA_TOURS_URL,
    date: 'February 2025',
  },
  {
    quote: 'We saw sulfur springs, salt flats, and a lava lake all in one trip. Visit Gheralta made it safe, comfortable, and absolutely unforgettable. A spectacle unlike anything on Earth.',
    name: 'Priya N.',
    location: 'India',
    source: 'Danakil Depression',
    url: TA_DANAKIL_URL,
    date: 'November 2024',
  },
  {
    quote: 'The Gheralta massif is breathtaking and the church art inside these ancient buildings is simply extraordinary. Immersive, thoughtful, and full of stories that stayed with us.',
    name: 'Tobias H.',
    location: 'Germany',
    source: 'Gheralta Tours',
    url: TA_TOURS_URL,
    date: 'December 2024',
  },
  {
    quote: 'Professional guides, excellent logistics, and a genuine passion for sharing Ethiopia with visitors. Top class service from start to finish. We will absolutely be back.',
    name: 'Marco L.',
    location: 'France',
    source: 'Danakil Depression',
    url: TA_DANAKIL_URL,
    date: 'October 2024',
  },
]

const initialForm = {
  name: '',
  email: '',
  destination: 'Abune Yemata Guh Day Trip',
  travelers: '2',
  tripStyle: 'Adventure',
  dates: '',
  message: '',
}

const mangoSuggestions = [
  'Best time to visit?',
  'How many days?',
  'What should I pack?',
  'Is it good for families?',
]

const initialMangoMessages = [
  {
    from: 'mango',
    text: 'Selam! I am Mango. Ask me about Gheralta tours, prices, routes, packing, history, or which adventure fits your vibe. 🥭',
  },
]

const whatsappUrl = 'https://wa.me/251930694177'

const getMangoReply = (question) => {
  const message = question.toLowerCase()

  if (message.includes('time') || message.includes('season') || message.includes('weather')) {
    return 'Great question 🌤️. October to March is usually the sweet spot: clearer skies, cooler highland air, and better light for those "wait, is this real?" Gheralta views.'
  }

  if (message.includes('day') || message.includes('long') || message.includes('itinerary')) {
    return 'If time is tight, pick the $185 Abune Yemata day trip or the $249 two-day Gheralta churches tour. If you want history plus adventure, the 3-day Tigray & Axum highlights route is $349 and has more "wow, I need a minute" moments. 😄'
  }

  if (message.includes('pack') || message.includes('bring') || message.includes('wear')) {
    return 'Pack comfy hiking shoes, sun protection, light layers, a modest church outfit, water, and a cool-evening jacket. Also bring courage for Abune Yemata. Mango brings moral support, but sadly no climbing shoes. 🥭'
  }

  if (message.includes('family') || message.includes('kid') || message.includes('children')) {
    return 'Yes, with the right pacing 👨‍👩‍👧. Families may prefer Al-Nejashi Mosque at $99 or gentler church routes. Abune Yemata is spectacular, but it is not the "casual Sunday stroll" of the group.'
  }

  if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('deal')) {
    return `Here are the current featured deals I know: ${mangoDeals.join(', ')}. Prices can still depend on dates, group size, and logistics, so use the inquiry form for a final quote.`
  }

  if (message.includes('safe') || message.includes('security')) {
    return 'Smart traveler question ✅. Travel conditions can change, so confirm the route, guide availability, and current local advice before booking. Mango likes adventure, not surprises.'
  }

  if (message.includes('abune') || message.includes('yemata') || message.includes('sky church')) {
    return 'Abune Yemata Guh is the legendary sky church: part hike, part pilgrimage, part "who put a church up there?!" The day trip is listed from $185 and rewards brave legs with unreal cliffside beauty.'
  }

  if (message.includes('gheralta') || message.includes('church')) {
    return 'Gheralta is sandstone drama, ancient silence, and churches tucked into the mountains like history is playing hide and seek. The 2-day churches tour is listed from $249.'
  }

  if (message.includes('axum') || message.includes('aksum')) {
    return 'Axum is where ancient Ethiopia feels enormous: stelae, royal history, and deep heritage. The 3-day Tigray & Axum highlights tour is listed from $349 and pairs history with Gheralta adventure.'
  }

  if (message.includes('nejashi') || message.includes('mosque') || message.includes('islam')) {
    return 'Al-Nejashi Mosque is a beautiful interfaith stop tied to the First Hijra and early Islamic history in Africa. The day trip is listed from $99 and also includes nearby Wukro Cherkos.'
  }

  if (message.includes('joke') || message.includes('funny')) {
    return 'Travel joke? Why did the hiker bring a ladder to Gheralta? Because the churches already had the best upstairs seating. 😄'
  }

  return { text: '😊 That is outside my travel training for now, but the real Mango can help you directly on WhatsApp: +251930694177.', whatsapp: true }
}

function App() {
  const [activeDestination, setActiveDestination] = useState(destinations[0].name)
  const [inquiry, setInquiry] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [isMangoOpen, setIsMangoOpen] = useState(false)
  const [mangoInput, setMangoInput] = useState('')
  const [mangoMessages, setMangoMessages] = useState(initialMangoMessages)
  const mangoMessagesEndRef = useRef(null)
  const heroRef = useRef(null)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process()
      return
    }

    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
    if (existingScript) {
      existingScript.addEventListener('load', () => window.instgrm?.Embeds?.process(), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => window.instgrm?.Embeds?.process()
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    if (!isMangoOpen) {
      return
    }

    mangoMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [isMangoOpen, mangoMessages])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.08 },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('[data-instagram-card]'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            return
          }

          entry.target.querySelectorAll('iframe').forEach((frame) => {
            frame.contentWindow?.postMessage('{"method":"pause"}', '*')
          })
        })
      },
      { rootMargin: '0px', threshold: 0.05 },
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

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

    const lines = [
      `*Visit Gheralta — Tour Inquiry*`,
      ``,
      `*Name:* ${inquiry.name}`,
      `*Email:* ${inquiry.email}`,
      `*Destination:* ${inquiry.destination}`,
      `*Travelers:* ${inquiry.travelers}`,
      `*Trip Style:* ${inquiry.tripStyle}`,
      `*Preferred Dates:* ${inquiry.dates || 'Flexible'}`,
      inquiry.message ? `\n*Message:*\n${inquiry.message}` : '',
    ].filter(Boolean).join('\n')

    window.open(`${whatsappUrl}?text=${encodeURIComponent(lines)}`, '_blank')
    setStatus('Opening WhatsApp with your inquiry summary...')
  }

  const handleBrandClick = (event) => {
    event.preventDefault()
    window.history.replaceState(null, '', window.location.pathname)

    const start = window.scrollY
    const duration = 800
    const startTime = performance.now()

    const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3)

    const animateScroll = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = easeOutCubic(progress)

      window.scrollTo(0, start * (1 - eased))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const askMango = (text) => {
    const question = text.trim()

    if (!question) {
      return
    }

    const mangoReply = getMangoReply(question)
    const replyMessage = typeof mangoReply === 'string'
      ? { from: 'mango', text: mangoReply }
      : { from: 'mango', ...mangoReply }

    setMangoMessages((previous) => [
      ...previous,
      { from: 'user', text: question },
      replyMessage,
    ])
    setMangoInput('')
    setIsMangoOpen(true)
  }

  const handleMangoSubmit = (event) => {
    event.preventDefault()
    askMango(mangoInput)
  }

  const isMangoShaking = !isHeroVisible && !isMangoOpen

  return (
    <div className="page-shell">
      <header className="hero" ref={heroRef}>
        <div className="hero-cinema" aria-hidden="true">
          <div className="hero-cinema-bg" />
          <div className="hero-cinema-depth" />
          <div className="hero-cinema-vignette" />
        </div>
        <nav className="topbar">
          <div>
            <a href="#top" className="brand-link animated-brand" onClick={handleBrandClick} aria-label="Visit Gheralta home">
              <span className="brand-camel" aria-hidden="true">🐪</span>
              <p className="brand-mark" aria-label="Visit Gheralta">
                {'Visit Gheralta'.split('').map((letter, index) => (
                  <span
                    key={`${letter}-${index}`}
                    className={letter === ' ' ? 'brand-letter brand-letter--space' : 'brand-letter'}
                    style={{ '--letter-index': index }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </p>
              <p className="brand-note">Adventure • Culture • Authentic Journey</p>
            </a>
          </div>
          <a href="#tripadvisor-reviews" className="ta-strip" aria-label="See TripAdvisor reviews">
            <div className="ta-track">
              {[...taReviews, ...taReviews].map((r, i) => (
                <span key={i} className="ta-review">
                  <span className="ta-stars">★★★★★</span>
                  {r.quote.replace(/^"|"$/g, '').slice(0, 60)}…
                  <span className="ta-name"> — {r.name}</span>
                  <span className="ta-sep" aria-hidden="true">·</span>
                </span>
              ))}
            </div>
          </a>
          <div className="nav-actions">
            <a href="#tours">Tours</a>
            <a href="#experience">Experience</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Curated Ethiopia travel experiences</p>
            <h1>Explore Northern Ethiopia with Visit Gheralta, where adventure meets culture</h1>
            <p className="hero-text">
              A vibrant, interactive travel experience designed for explorers who want immersive heritage, scenic routes, and a seamless planning journey.
            </p>
            <div className="hero-actions">
              <a href="#tours" className="btn btn-primary">Explore tours</a>
              <a href="#contact" className="btn btn-secondary">Plan my trip</a>
              <button type="button" className="btn btn-secondary" onClick={() => setIsMangoOpen(true)}>Ask Mango</button>
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
                <strong className="tour-price">{theme.price}</strong>
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
              <article key={item.title} className="instagram-embed-card" data-instagram-card={item.title}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={item.url}
                  data-instgrm-version="14"
                >
                  <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                </blockquote>
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

        <section id="tripadvisor-reviews" className="section">
          <div className="section-heading">
            <p className="eyebrow">TripAdvisor reviews</p>
            <h2>What travelers are saying about us</h2>
          </div>
          <div className="testimonial-grid">
            {taReviews.map((item) => (
              <a
                key={item.name + item.source}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="testimonial-card ta-review-card"
              >
                <div className="ta-card-stars">★★★★★</div>
                <p>"{item.quote}"</p>
                <div className="ta-card-footer">
                  <div>
                    <strong>{item.name}</strong>
                    <span className="ta-card-location">{item.location} · {item.date}</span>
                  </div>
                  <span className="ta-card-source">{item.source}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="ta-section-cta">
            <a href={TA_TOURS_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Gheralta Tours on TripAdvisor
            </a>
            <a href={TA_DANAKIL_URL} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Danakil Depression on TripAdvisor
            </a>
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
          <div className="mango-suggestion">
            <div>
              <p className="mango-suggestion-title">Have travel questions?</p>
              <p>Ask Mango for prices, deals, routes, and quick travel guidance before sending your inquiry.</p>
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => setIsMangoOpen(true)}>Ask Mango</button>
          </div>
          <div className="booking-panel">
            <div>
              <p className="section-copy">
                Share your destination, travel dates, and preferred style. Your inquiry will be summarized and sent directly via WhatsApp to Visit Gheralta.
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
                    <option>Abune Yemata Guh Day Trip</option>
                    <option>2-Day Gheralta Churches Tour</option>
                    <option>Al-Nejashi Mosque Day Trip</option>
                    <option>3-Day Tigray & Axum Highlights</option>
                  </select>
                </label>

                <label className="form-field">
                  <span>Travelers</span>
                  <input name="travelers" value={inquiry.travelers} onChange={handleChange} placeholder="2" required />
                </label>

                <label className="form-field">
                  <span>Trip style</span>
                  <select name="tripStyle" value={inquiry.tripStyle} onChange={handleChange}>
                    <option>Adventure</option>
                    <option>Heritage</option>
                    <option>Culture</option>
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
                <p className="status-note">{status || 'WhatsApp will open with your inquiry ready to send.'}</p>
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

      <div className={isMangoOpen ? 'mango-chat open' : 'mango-chat'}>
        <button
          type="button"
          className={isMangoShaking ? 'mango-launcher mango-launcher--shaking' : 'mango-launcher'}
          onClick={() => setIsMangoOpen((value) => !value)}
        >
          Ask Mango
        </button>
        {isMangoOpen && (
          <section className="mango-panel" aria-label="Mango travel chatbot">
            <div className="mango-panel-header">
              <div>
                <p className="mango-name">Mango</p>
                <p className="mango-status">Friendly travel assistant</p>
              </div>
              <button type="button" className="mango-close" onClick={() => setIsMangoOpen(false)} aria-label="Close Mango chat">
                x
              </button>
            </div>
            <div className="mango-messages">
              {mangoMessages.map((message, index) => (
                <div key={`${message.from}-${index}`} className={`mango-message mango-message--${message.from}`}>
                  <p>{message.text}</p>
                  {message.whatsapp && (
                    <a href={whatsappUrl} target="_blank" rel="noreferrer">Message the real Mango on WhatsApp</a>
                  )}
                </div>
              ))}
              <div ref={mangoMessagesEndRef} />
            </div>
            <div className="mango-quick-actions">
              {mangoSuggestions.map((suggestion) => (
                <button key={suggestion} type="button" onClick={() => askMango(suggestion)}>
                  {suggestion}
                </button>
              ))}
            </div>
            <form className="mango-form" onSubmit={handleMangoSubmit}>
              <input
                value={mangoInput}
                onChange={(event) => setMangoInput(event.target.value)}
                placeholder="Ask Mango about travel"
                aria-label="Ask Mango about travel"
              />
              <button type="submit">Send</button>
            </form>
          </section>
        )}
      </div>
    </div>
  )
}

export default App
