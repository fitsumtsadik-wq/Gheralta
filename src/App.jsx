import { useEffect, useMemo, useRef, useState } from 'react'

const destinations = [
  {
    name: 'Abune Yemata Guh',
    subtitle: 'The famous sky church climb',
    description: 'A thrilling sacred climb to one of Tigray\'s most unforgettable rock-hewn churches, with sweeping highland views from the Gheralta cliffs.',
    tag: 'From $185',
    metrics: { fitness: 'Moderate', vertigoRisk: 'Extreme, vertical cliff', ropesRequired: 'Yes' },
  },
  {
    name: 'Gheralta Churches',
    subtitle: 'Two days of mountain churches',
    description: 'A compact circuit through the churches in the sky, ancient monastic art, sandstone towers, and the legendary beauty of the Gheralta Massif.',
    tag: 'From $249',
    metrics: { fitness: 'High, long treks', vertigoRisk: 'Moderate', ropesRequired: 'No' },
  },
  {
    name: 'Axum & Tigray',
    subtitle: 'Ancient history and highland adventure',
    description: 'Meet living traditions and experience one of Africa\'s most culturally rich regions.',
    tag: 'From $349',
    metrics: { fitness: 'Easy, mostly flat sites', vertigoRisk: 'Low', ropesRequired: 'No' },
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
    climbProfile: {
      footwear: 'Barefoot on the sacred summit. Grippy shoes required for the approach trail.',
      exposure: 'High. Narrow ledge traversal and open cliff faces with 200m+ drops.',
      safety: 'Fixed ropes on key sections. Experienced local guide mandatory.',
      fitness: 'Moderate to high. 45-minute climb with scrambling. Suitable for active travelers.',
    },
  },
  {
    label: '2-Day Gheralta Churches Tour',
    copy: 'A short, powerful circuit through Abune Yemata, Maryam Korkor, mountain views, and ancient church art.',
    price: '$249',
  },
  {
    label: 'Al-Nejashi Mosque Day Trip',
    copy: "A sacred interfaith journey to Africa's first mosque, Sahaba tombs, and nearby Wukro Cherkos.",
    price: '$99',
  },
  {
    label: '3-Day Tigray & Axum Highlights',
    copy: "A compact expedition linking Axum's ancient monuments with Gheralta's iconic highland climbs.",
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

const heroSlides = [
  { src: '/gallery/705957039_2034385464628495_5470486760220239724_n.jpg', label: 'Abune Yemata Guh, Tigray',         position: 'center center' },
  { src: '/gallery/705967392_1656692118963333_5237077793216577576_n.jpg', label: 'Gheralta Massif at Dawn, Tigray',  position: 'center center' },
  { src: '/gallery/707113768_882825571524082_3787765429381064666_n.jpg',  label: 'Ancient Fresco, Tigray Highlands', position: 'center center' },
  { src: '/gallery/707414675_1468355464503263_1675354877231214955_n.jpg', label: 'The Rope Climb, Abune Yemata Guh', position: 'center 30%'   },
  { src: '/gallery/708500901_2510990452691609_6433628707500938507_n.jpg', label: 'Sacred Ceremony, Tigray',          position: 'center center' },
  { src: '/gallery/707172601_1694336728574098_8305413804925473176_n.jpg', label: 'Gheralta Rock Towers, Tigray',     position: 'center 40%'   },
]

const galleryImages = [
  { src: '/gallery/gheralta-tower.jpg', caption: 'The Gheralta tower — one of Africa\'s most dramatic rock formations' },
  { src: '/gallery/cave-hiker.jpg', caption: 'Through a cave window — the Gheralta cliff face at golden hour' },
  { src: '/gallery/priest-cliff-edge.jpg', caption: 'An elder priest rests at the cliff edge, Tigray highlands' },
  { src: '/gallery/priest-candles.jpg', caption: 'Orthodox priest with golden cross in a candlelit church interior' },
  { src: '/gallery/priest-mural.jpg', caption: 'A deacon welcomes visitors beside an ancient horse fresco' },
  { src: '/gallery/priest-summit.jpg', caption: 'On the summit trail of Abune Yemata Guh' },
  { src: '/gallery/fresco-saints.jpg', caption: 'Saints fresco inside Abune Yemata Guh, painted centuries ago' },
  { src: '/gallery/ceiling-fresco.jpg', caption: 'Celestial ceiling fresco, Maryam Korkor church' },
  { src: '/gallery/cave-murals.jpg', caption: 'Biblical cave murals preserved in the Gheralta highlands' },
  { src: '/gallery/rock-church.jpg', caption: 'Rock-hewn church at the base of the Gheralta massif' },
  { src: '/gallery/rock-climber.jpg', caption: 'Sport climbing on Gheralta\'s iconic sandstone walls' },
  { src: '/gallery/stone-steps.jpg', caption: 'Ancient stone path leading to a Tigray monastery' },
  { src: '/gallery/hyrax-cave.jpg', caption: 'Rock Hyrax — the unexpected resident of Gheralta\'s cliffs' },
  { src: '/gallery/hyrax-rocks.jpg', caption: 'Rock Hyrax — a surprise encounter on the mountain trail' },
  { src: '/gallery/sandgrouse.jpg', caption: 'Four-banded Sandgrouse — wildlife of the Tigray highlands' },
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
  heightComfort: '',
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

  if (message.includes('safe') || message.includes('security') || message.includes('war') || message.includes('conflict')) {
    return 'Your safety is our entire operational priority 🛡️. We track local logistics daily with local authorities and church priests. If a trail or road is ever compromised, we immediately pivot to a pre-mapped alternative route without a hitch. You are never left in the dark.'
  }

  if (message.includes('delay') || message.includes('flight') || message.includes('cancel')) {
    return 'Logistics happen! ✈️ If your domestic flight into Mekele is delayed, our drivers wait at the airport indefinitely. We adjust the itinerary dynamically so you do not miss your sunset or church climbs. Our 24/7 WhatsApp hotline is always live.'
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

function TravelAlertBanner({ onOpenMango }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="tab-wrapper">
      <button
        className="global-travel-alert"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⚠️ Travel Advisory {isOpen ? '(Click to Close)' : '(Click to View Updates)'}
      </button>
      <div className="top-social">
        <a href="https://www.facebook.com/profile.php?id=100069015475990" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/gheralta_tours/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://www.youtube.com/@gheraltaa" target="_blank" rel="noreferrer" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
            <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
          </svg>
        </a>
      </div>
      <a href="#contact" className="book-now-top">Book Now</a>
      {isOpen && (
        <div className="travel-alert-overlay">
          <p>
            🌐 <strong>Global Entry Status:</strong> Standard tourist entry via Addis Ababa International Airport (ADD) is fully operational for all international nationalities.
          </p>
          <p>
            🚖 <strong>Ground Logistics:</strong> Our local networks coordinate regional routes through the Gheralta corridor daily. E-Visas can be secured smoothly prior to departure via <em>evisa.gov.et</em>.
          </p>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <button
              type="button"
              onClick={onOpenMango}
              style={{
                background: 'none',
                border: 'none',
                color: '#856404',
                fontWeight: 'bold',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.85rem',
              }}
            >
              Chat with Mango for Real-Time Route Verification
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  const [activeDestination, setActiveDestination] = useState(destinations[0].name)
  const [heroSlide, setHeroSlide] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [inquiry, setInquiry] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [isMangoOpen, setIsMangoOpen] = useState(false)
  const [mangoInput, setMangoInput] = useState('')
  const [mangoMessages, setMangoMessages] = useState(initialMangoMessages)
  const mangoMessagesEndRef = useRef(null)
  const heroRef = useRef(null)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [galleryTouchX, setGalleryTouchX] = useState(null)
  const [camelPhase, setCamelPhase] = useState('idle')


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
      `*Preferred Dates:* ${inquiry.dates ? new Date(inquiry.dates + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Flexible'}`,
      inquiry.heightComfort ? `*Height Comfort:* ${inquiry.heightComfort}` : '',
      inquiry.message ? `\n*Message:*\n${inquiry.message}` : '',
    ].filter(Boolean).join('\n')

    window.open(`${whatsappUrl}?text=${encodeURIComponent(lines)}`, '_blank')
    setStatus('Opening WhatsApp with your inquiry summary...')
    setInquiry(initialForm)
    setTimeout(() => setStatus(''), 5000)
  }

  const handleBrandClick = (event) => {
    event.preventDefault()
    triggerCamel()
    window.history.replaceState(null, '', window.location.pathname)

    const start = window.scrollY
    const duration = 800
    const startTime = performance.now()

    const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3)

    document.documentElement.classList.add('js-scrolling')

    const animateScroll = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = easeOutCubic(progress)

      window.scrollTo(0, start * (1 - eased))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        document.documentElement.classList.remove('js-scrolling')
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const prevSlide = () => setHeroSlide(i => (i - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setHeroSlide(i => (i + 1) % heroSlides.length)

  useEffect(() => {
    const timer = setInterval(() => setHeroSlide(i => (i + 1) % heroSlides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setGalleryIndex(i => (i + 1) % galleryImages.length), 4500)
    return () => clearInterval(timer)
  }, [])

  const triggerCamel = () => {
    setCamelPhase('idle')
    requestAnimationFrame(() => requestAnimationFrame(() => setCamelPhase('walking')))
  }

  useEffect(() => {
    const t = setTimeout(() => setCamelPhase('walking'), 1000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (camelPhase === 'walking') {
      const t = setTimeout(() => setCamelPhase('sitting'), 3200)
      return () => clearTimeout(t)
    }
    if (camelPhase === 'sitting') {
      const t = setTimeout(() => setCamelPhase('drinking'), 1000)
      return () => clearTimeout(t)
    }
    if (camelPhase === 'drinking') {
      const t = setTimeout(() => setCamelPhase('done'), 3000)
      return () => clearTimeout(t)
    }
  }, [camelPhase])

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
    <>
      <TravelAlertBanner onOpenMango={() => setIsMangoOpen(true)} />
      <div className="page-shell">
      <header className="hero" ref={heroRef}>
        <div className="hero-cinema" aria-hidden="true">
          {heroSlides.map((slide, i) => (
            <div key={slide.src} className={`individual-slide${i === heroSlide ? ' individual-slide--active' : ''}`}>
              <div className="individual-slide-bg" style={{ backgroundImage: `url(${slide.src})`, backgroundPosition: slide.position }} />
              <img src={slide.src} alt="" className="individual-slide-img" />
            </div>
          ))}
          <div className="hero-cinema-depth" />
          <div className="hero-cinema-vignette" />
        </div>
        <button className="slider-arrow slider-arrow--left" onClick={prevSlide} aria-label="Previous slide">&#9664;</button>
        <button className="slider-arrow slider-arrow--right" onClick={nextSlide} aria-label="Next slide">&#9654;</button>
        <span className="hero-slide-label">📍 {heroSlides[heroSlide].label}</span>
        <div className="slider-dots" aria-label="Slide navigation">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`dot${i === heroSlide ? ' dot--active' : ''}`}
              onClick={() => setHeroSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <nav className="topbar">
          <div>
            <a href="#top" className="brand-link animated-brand" onClick={handleBrandClick} aria-label="Visit Gheralta home">
              <div className={`camel-stage camel-stage--${camelPhase}`} aria-hidden="true">
                <svg className="camel-svg" viewBox="0 0 110 70" xmlns="http://www.w3.org/2000/svg">
                  <ellipse className="camel-body" cx="55" cy="42" rx="28" ry="16" />
                  <ellipse className="camel-hump" cx="62" cy="28" rx="14" ry="10" />
                  <g className="camel-neck-head">
                    <rect className="camel-neck" x="28" y="22" width="8" height="20" rx="4" />
                    <ellipse className="camel-head" cx="24" cy="20" rx="10" ry="7" />
                    <circle className="camel-eye" cx="19" cy="18" r="1.5" />
                    <path className="camel-snout" d="M14 22 Q13 25 16 25 Q19 25 18 22" />
                    <path className="camel-ear" d="M25 14 L27 9 L30 13" />
                  </g>
                  <path className="camel-tail" d="M83 40 Q92 36 94 42 Q96 48 90 48" />
                  <g className="camel-legs-front">
                    <rect className="camel-leg" x="34" y="55" width="6" height="14" rx="3" />
                    <rect className="camel-leg" x="44" y="55" width="6" height="14" rx="3" />
                  </g>
                  <g className="camel-legs-back">
                    <rect className="camel-leg" x="62" y="55" width="6" height="14" rx="3" />
                    <rect className="camel-leg" x="72" y="55" width="6" height="14" rx="3" />
                  </g>
                </svg>
              </div>
              <p className="brand-mark" aria-label="Visit Gheralta">
                {'Visit Gheralta'.split('').map((letter, index) => (
                  <span
                    key={`${letter}-${index}`}
                    className={
                      letter === ' ' ? 'brand-letter brand-letter--space' :
                      (letter === 'V' && index === 0)
                        ? `brand-letter brand-letter--v${
                            camelPhase === 'drinking' ? ' brand-letter--v-drinking' :
                            camelPhase === 'done'     ? ' brand-letter--v-draining' : ''
                          }`
                        : 'brand-letter'
                    }
                    style={{ '--letter-index': index }}
                  >
                    {letter === ' ' ? ' ' : letter}
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
            {currentDestination.metrics && (
              <div className="hero-card-metrics">
                <span className="metric-tag">
                  🏃 Fitness: <strong>{currentDestination.metrics.fitness}</strong>
                </span>
                <span className="metric-tag">
                  🧗 Exposure: <strong>{currentDestination.metrics.vertigoRisk}</strong>
                </span>
                <span className="metric-tag">
                  🪢 Ropes: <strong>{currentDestination.metrics.ropesRequired}</strong>
                </span>
              </div>
            )}
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
                {theme.climbProfile && (
                  <div className="climb-profile">
                    <p className="climb-profile-title">Climb Profile</p>
                    <div className="climb-profile-rows">
                      <div className="climb-profile-row">
                        <span className="climb-profile-icon">👟</span>
                        <strong>Footwear</strong>
                        <span>{theme.climbProfile.footwear}</span>
                      </div>
                      <div className="climb-profile-row">
                        <span className="climb-profile-icon">⚡</span>
                        <strong>Exposure</strong>
                        <span>{theme.climbProfile.exposure}</span>
                      </div>
                      <div className="climb-profile-row">
                        <span className="climb-profile-icon">🪢</span>
                        <strong>Safety</strong>
                        <span>{theme.climbProfile.safety}</span>
                      </div>
                      <div className="climb-profile-row">
                        <span className="climb-profile-icon">💪</span>
                        <strong>Fitness</strong>
                        <span>{theme.climbProfile.fitness}</span>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="pricing-guarantee">
            <h4 className="pricing-guarantee-title">The Visit Gheralta Transparent Pricing Guarantee</h4>
            <p className="pricing-guarantee-sub">
              Our price covers everything. No cash negotiations on the mountain, no hidden extras at the gate.
            </p>
            <div className="pricing-guarantee-grid">
              <div>
                <p className="pricing-col-head pricing-col-head--included">What is included</p>
                <ul className="pricing-list">
                  <li>All church entrance permits and priest blessings</li>
                  <li>Local community scouts and dedicated hand-holders</li>
                  <li>English-speaking certified guide and driver</li>
                  <li>Round-trip transport from Hawzen / Mekele</li>
                </ul>
              </div>
              <div>
                <p className="pricing-col-head pricing-col-head--excluded">What to bring in pocket</p>
                <ul className="pricing-list">
                  <li>Souvenirs and personal artisan purchases</li>
                  <li>Gratuities for exceptional service (entirely optional)</li>
                  <li>Personal travel insurance</li>
                </ul>
              </div>
            </div>
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

        <section className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Photo gallery</p>
            <h2>See what awaits you with Visit Gheralta</h2>
          </div>
          <div
            className="gallery-frame"
            onTouchStart={(e) => setGalleryTouchX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (galleryTouchX === null) return
              const diff = galleryTouchX - e.changedTouches[0].clientX
              if (diff > 50) setGalleryIndex(i => (i + 1) % galleryImages.length)
              else if (diff < -50) setGalleryIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
              setGalleryTouchX(null)
            }}
          >
            <div
              className="gallery-img-bg"
              style={{ backgroundImage: `url(${galleryImages[galleryIndex].src})` }}
            />
            <img
              key={galleryIndex}
              src={galleryImages[galleryIndex].src}
              alt={galleryImages[galleryIndex].caption}
              className="gallery-img"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <button
              className="gallery-btn gallery-btn--prev"
              onClick={() => setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
              aria-label="Previous photo"
            >
              &#8249;
            </button>
            <button
              className="gallery-btn gallery-btn--next"
              onClick={() => setGalleryIndex((i) => (i + 1) % galleryImages.length)}
              aria-label="Next photo"
            >
              &#8250;
            </button>
            <p className="gallery-caption">{galleryImages[galleryIndex].caption}</p>
            <div className="gallery-dots" aria-hidden="true">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  className={i === galleryIndex ? 'gallery-dot gallery-dot--active' : 'gallery-dot'}
                  onClick={() => setGalleryIndex(i)}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>
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
            {taReviews.map((item, index) => (
              <a
                key={`${item.name}-${item.date}-${index}`}
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
            <h2>Tell us what you are looking for: culture, adventure, or something in between.</h2>
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
                  <input type="number" name="travelers" value={inquiry.travelers} onChange={handleChange} min="1" max="30" required />
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
                  <input type="date" name="dates" value={inquiry.dates} onChange={handleChange} min={new Date().toISOString().split('T')[0]} />
                </label>
              </div>

              {inquiry.destination === 'Abune Yemata Guh Day Trip' && (
                <div className="safety-block">
                  <p className="safety-block-title">Safety Screening</p>
                  <div className="safety-alert">
                    <span className="safety-alert-icon">⚠</span>
                    <p>
                      Abune Yemata Guh involves exposed ledge traversal and drops of 200m+. Please answer honestly so we can prepare your experience safely.
                    </p>
                  </div>
                  <p className="safety-block-title" style={{ marginTop: '0.25rem' }}>How comfortable are you with heights?</p>
                  <div className="safety-options">
                    {[
                      { value: 'comfortable', label: 'Comfortable with heights, no concerns' },
                      { value: 'moderate', label: 'Some discomfort with heights, but manageable' },
                      { value: 'anxious', label: 'I have height anxiety and may need extra support' },
                    ].map(({ value, label }) => (
                      <label key={value} className="safety-radio">
                        <input
                          type="radio"
                          name="heightComfort"
                          value={value}
                          checked={inquiry.heightComfort === value}
                          onChange={handleChange}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
              )}

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
          <p>Let's shape your next Ethiopian adventure together.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/profile.php?id=100069015475990" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
          <a href="https://www.instagram.com/gheralta_tours/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
          <a href="https://www.youtube.com/@gheraltaa" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
            </svg>
            YouTube
          </a>
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
    </>
  )
}

export default App
