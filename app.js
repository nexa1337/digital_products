// Product Data
const productsData = {
  ebooks: [
    {
      id: 1,
      title: "Web Development Mastery",
      author: "John Smith",
      price: "$29.99",
      image: "/web-development-book.jpg",
      tags: ["Popular", "New"],
      description: "Complete guide to modern web development with HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      author: "Sarah Johnson",
      price: "$24.99",
      image: "/javascript-book.jpg",
      tags: ["Trending"],
      description: "Master advanced JavaScript concepts and patterns.",
    },
    {
      id: 3,
      title: "React Complete Guide",
      author: "Mike Davis",
      price: "$34.99",
      image: "/react-book.jpg",
      tags: ["Popular"],
      description: "Learn React from basics to advanced level.",
    },
    {
      id: 4,
      title: "CSS Mastery",
      author: "Emma Wilson",
      price: "$19.99",
      image: "/css-book.jpg",
      tags: ["New"],
      description: "Advanced CSS techniques and best practices.",
    },
    {
      id: 5,
      title: "Node.js Backend",
      author: "Alex Brown",
      price: "$27.99",
      image: "/nodejs-book.jpg",
      tags: ["Trending"],
      description: "Build scalable backend applications with Node.js.",
    },
    {
      id: 6,
      title: "TypeScript Guide",
      author: "Lisa Anderson",
      price: "$22.99",
      image: "/typescript-book.jpg",
      tags: ["Popular"],
      description: "Complete TypeScript guide for developers.",
    },
    {
      id: 7,
      title: "Database Design",
      author: "Tom Harris",
      price: "$31.99",
      image: "/database-book.jpg",
      tags: ["New"],
      description: "Master database design and optimization.",
    },
    {
      id: 8,
      title: "API Development",
      author: "Rachel Green",
      price: "$26.99",
      image: "/api-book.jpg",
      tags: ["Trending"],
      description: "Build robust REST and GraphQL APIs.",
    },
    {
      id: 9,
      title: "Performance Optimization",
      author: "Chris Martin",
      price: "$28.99",
      image: "/performance-book.jpg",
      tags: ["Popular"],
      description: "Optimize web application performance.",
    },
    {
      id: 10,
      title: "Testing Best Practices",
      author: "Diana Lee",
      price: "$23.99",
      image: "/testing-book.jpg",
      tags: ["New"],
      description: "Comprehensive guide to testing strategies.",
    },
  ],
  templates: [
    {
      id: 1,
      title: "SaaS Landing Page",
      author: "Design Studio",
      price: "$49.99",
      image: "/saas-template.jpg",
      tags: ["Popular"],
      description: "Modern SaaS landing page template.",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      author: "Web Creators",
      price: "$59.99",
      image: "/ecommerce-template.jpg",
      tags: ["Trending"],
      description: "Complete e-commerce store template.",
    },
    {
      id: 3,
      title: "Portfolio Website",
      author: "Creative Team",
      price: "$39.99",
      image: "/portfolio-template.jpg",
      tags: ["New"],
      description: "Professional portfolio template.",
    },
    {
      id: 4,
      title: "Blog Platform",
      author: "Content Hub",
      price: "$44.99",
      image: "/modern-blog-template.png",
      tags: ["Popular"],
      description: "Feature-rich blog platform template.",
    },
    {
      id: 5,
      title: "Agency Website",
      author: "Agency Pro",
      price: "$54.99",
      image: "/agency-template.jpg",
      tags: ["Trending"],
      description: "Professional agency website template.",
    },
    {
      id: 6,
      title: "Startup Kit",
      author: "Startup Hub",
      price: "$69.99",
      image: "/startup-template.jpg",
      tags: ["New"],
      description: "Complete startup website kit.",
    },
    {
      id: 7,
      title: "Restaurant Site",
      author: "Food Design",
      price: "$34.99",
      image: "/restaurant-template.jpg",
      tags: ["Popular"],
      description: "Restaurant website template.",
    },
    {
      id: 8,
      title: "Fitness App",
      author: "Fitness Tech",
      price: "$44.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "Fitness app landing page template.",
    },
    {
      id: 9,
      title: "Real Estate Portal",
      author: "Property Pro",
      price: "$54.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "Real estate listing portal template.",
    },
    {
      id: 10,
      title: "Education Platform",
      author: "EduTech",
      price: "$64.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Online learning platform template.",
    },
  ],
  themes: [
    {
      id: 1,
      title: "Dark Minimal",
      author: "Theme Studio",
      price: "$19.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Minimalist dark theme for modern apps.",
    },
    {
      id: 2,
      title: "Neon Glow",
      author: "Design Lab",
      price: "$24.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "Vibrant neon glow theme.",
    },
    {
      id: 3,
      title: "Soft Pastel",
      author: "Color Studio",
      price: "$17.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "Soft pastel color theme.",
    },
    {
      id: 4,
      title: "Corporate Blue",
      author: "Business Design",
      price: "$21.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Professional corporate blue theme.",
    },
    {
      id: 5,
      title: "Nature Green",
      author: "Eco Design",
      price: "$18.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "Nature-inspired green theme.",
    },
    {
      id: 6,
      title: "Sunset Orange",
      author: "Creative Hub",
      price: "$19.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "Warm sunset orange theme.",
    },
    {
      id: 7,
      title: "Ocean Blue",
      author: "Web Themes",
      price: "$20.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Cool ocean blue theme.",
    },
    {
      id: 8,
      title: "Purple Dream",
      author: "Dream Design",
      price: "$22.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "Dreamy purple theme.",
    },
  ],
  scripts: [
    {
      id: 1,
      title: "Form Validator",
      author: "Code Masters",
      price: "$14.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Advanced form validation script.",
    },
    {
      id: 2,
      title: "Image Gallery",
      author: "Script Hub",
      price: "$12.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "Responsive image gallery script.",
    },
    {
      id: 3,
      title: "Chat Widget",
      author: "Chat Solutions",
      price: "$19.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "Real-time chat widget script.",
    },
    {
      id: 4,
      title: "Analytics Tracker",
      author: "Analytics Pro",
      price: "$16.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Website analytics tracking script.",
    },
    {
      id: 5,
      title: "Notification System",
      author: "Notify Hub",
      price: "$11.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "Push notification system.",
    },
    {
      id: 6,
      title: "Payment Gateway",
      author: "Payment Pro",
      price: "$24.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "Secure payment gateway integration.",
    },
    {
      id: 7,
      title: "Email Sender",
      author: "Email Tools",
      price: "$13.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "Email sending automation script.",
    },
    {
      id: 8,
      title: "SEO Optimizer",
      author: "SEO Masters",
      price: "$17.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "SEO optimization script.",
    },
  ],
  tools: [
    {
      id: 1,
      title: "AI Content Writer",
      author: "AI Labs",
      price: "$29.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "AI-powered content writing tool.",
    },
    {
      id: 2,
      title: "Image Generator",
      author: "AI Studio",
      price: "$34.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "AI image generation tool.",
    },
    {
      id: 3,
      title: "Code Assistant",
      author: "Dev AI",
      price: "$24.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "AI code completion assistant.",
    },
    {
      id: 4,
      title: "SEO Analyzer",
      author: "SEO AI",
      price: "$19.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "AI-powered SEO analysis tool.",
    },
    {
      id: 5,
      title: "Video Editor",
      author: "Video AI",
      price: "$39.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "AI video editing tool.",
    },
    {
      id: 6,
      title: "Chatbot Builder",
      author: "Chat AI",
      price: "$27.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["New"],
      description: "No-code chatbot builder.",
    },
    {
      id: 7,
      title: "Design Assistant",
      author: "Design AI",
      price: "$31.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Popular"],
      description: "AI design suggestion tool.",
    },
    {
      id: 8,
      title: "Translation Tool",
      author: "Language AI",
      price: "$22.99",
      image: "/placeholder.svg?height=280&width=200",
      tags: ["Trending"],
      description: "AI translation tool.",
    },
  ],
}

const currentPage = {}
const currentFilter = {}
let searchQuery = ""
let isDarkMode = localStorage.getItem("darkMode") === "true"
const ITEMS_PER_PAGE = 6

let visitorCount = Number.parseInt(localStorage.getItem("visitors") || "1250")
let visitorUpdateInterval
const debugMode = document.body.getAttribute("data-debug-visitors") || "normal"

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeDarkMode()
  initializePopup()
  initializeDateTime()
  initializeVisitorCounter()
  initializeSearch()
  initializeProducts()
  initializeScrollToTop()
  initializeHamburger()
  initializeNavbarScroll()
  initializeSnow()
  handleHashNavigation()
  window.addEventListener("hashchange", handleHashNavigation)
})

// Snow animation
function initializeSnow() {
  const snowContainer = document.getElementById("snow-container")
  const snowflakeCount = 50

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("div")
    snowflake.classList.add("snowflake")
    snowflake.textContent = "❄"

    // Random horizontal position
    const randomLeft = Math.random() * 100
    snowflake.style.left = randomLeft + "%"

    // Random animation duration (8-15 seconds)
    const duration = Math.random() * 7 + 8
    snowflake.style.animationDuration = duration + "s"

    // Random animation delay
    const delay = Math.random() * 5
    snowflake.style.animationDelay = delay + "s"

    // Random opacity (0.5-1)
    snowflake.style.opacity = Math.random() * 0.5 + 0.5

    // Random font size (0.8em - 1.5em)
    snowflake.style.fontSize = Math.random() * 0.7 + 0.8 + "em"

    snowContainer.appendChild(snowflake)
  }
}

// Dark Mode
function initializeDarkMode() {
  if (isDarkMode) {
    document.body.classList.add("dark-mode")
    updateThemeIcon()
  }

  document.getElementById("theme-toggle").addEventListener("click", () => {
    isDarkMode = !isDarkMode
    document.body.classList.toggle("dark-mode")
    localStorage.setItem("darkMode", isDarkMode)
    updateThemeIcon()
  })
}

function updateThemeIcon() {
  const icon = document.querySelector(".theme-icon")
  icon.textContent = isDarkMode ? "☀️" : "🌙"
}

// Popup Modal
function initializePopup() {
  const popupModal = document.getElementById("popup-modal")
  const popupClose = document.querySelector(".popup-close")
  const popupDontShow = document.getElementById("popup-dont-show")
  const popupLinks = document.querySelectorAll(".popup-link")
  const popupContent = document.querySelector(".popup-content")

  const popupDismissed = localStorage.getItem("nexa_popup_dismissed")

  if (!popupDismissed) {
    // Show popup after 2.5 seconds on first visit
    setTimeout(() => {
      showPopup()
    }, 2500)

    // Also show on exit intent (mouse leaves viewport)
    document.addEventListener("mouseleave", (e) => {
      if (e.clientY <= 0 && !localStorage.getItem("nexa_popup_dismissed")) {
        showPopup()
      }
    })
  }

  function showPopup() {
    popupModal.classList.remove("hidden")
    document.body.classList.add("popup-open")
    popupClose.focus()
    setupFocusTrap(popupContent)
  }

  function closePopup() {
    popupModal.classList.add("hidden")
    document.body.classList.remove("popup-open")

    if (popupDontShow.checked) {
      localStorage.setItem("nexa_popup_dismissed", "1")
    }
  }

  // Close button
  popupClose.addEventListener("click", closePopup)

  // Overlay click
  document.querySelector(".popup-overlay").addEventListener("click", closePopup)

  // ESC key to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !popupModal.classList.contains("hidden")) {
      closePopup()
    }
  })

  // Links close popup if they're internal
  popupLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        closePopup()
      }
    })
  })
}

// Focus trap for modal
function setupFocusTrap(element) {
  const focusableElements = element.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  element.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  })
}

// Date and Time
function initializeDateTime() {
  function updateDateTime() {
    const now = new Date()
    const dateStr = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })

    document.getElementById("current-date").textContent = dateStr
    document.getElementById("current-time").textContent = timeStr
  }

  updateDateTime()
  setInterval(updateDateTime, 1000)
}

function initializeVisitorCounter() {
  updateVisitorDisplay()
  startVisitorUpdates()
}

function updateVisitorDisplay() {
  const countElement = document.getElementById("visitor-count")
  const dot = document.getElementById("visitor-dot")

  countElement.textContent = visitorCount

  // Update dot color based on visitor count
  if (visitorCount < 50) {
    dot.classList.add("low-activity")
    dot.classList.remove("decreasing")
  } else {
    dot.classList.remove("low-activity")
  }
}

function startVisitorUpdates() {
  visitorUpdateInterval = setInterval(
    () => {
      const oldCount = visitorCount

      // Weighted probability for spike simulation
      let targetCount
      const rand = Math.random()

      if (debugMode === "spike") {
        // Force spike mode for QA
        targetCount = Math.floor(Math.random() * 10000) + 15000
      } else if (rand < 0.9) {
        // 90% normal range (300-3000)
        targetCount = Math.floor(Math.random() * 2700) + 300
      } else if (rand < 0.98) {
        // 8% medium spike (10k-20k)
        targetCount = Math.floor(Math.random() * 10000) + 10000
      } else {
        // 2% large spike (25k-35k)
        targetCount = Math.floor(Math.random() * 10000) + 25000
      }

      // Smooth transition to target
      const delta = Math.sign(targetCount - visitorCount) * Math.ceil(Math.abs(targetCount - visitorCount) / 5)
      visitorCount = Math.max(1, visitorCount + delta)

      // Animate the number change
      animateCounter(oldCount, visitorCount)

      // Update dot animation based on increase/decrease
      const dot = document.getElementById("visitor-dot")
      if (visitorCount > oldCount) {
        dot.classList.remove("decreasing")
        dot.style.animation = "none"
        setTimeout(() => {
          dot.style.animation = "pulse 2s infinite"
        }, 10)
      } else if (visitorCount < oldCount) {
        dot.classList.add("decreasing")
        dot.style.animation = "none"
        setTimeout(() => {
          dot.style.animation = "pulse-dim 2s infinite"
        }, 10)
      }

      localStorage.setItem("visitors", visitorCount)
    },
    Math.random() * 4000 + 3000,
  ) // 3-7 seconds
}

function animateCounter(start, end) {
  const countElement = document.getElementById("visitor-count")
  const duration = 600 // 600ms animation
  const startTime = Date.now()

  function update() {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.floor(start + (end - start) * progress)
    countElement.textContent = current

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  update()
}

// Search Functionality
function initializeSearch() {
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.querySelector(".search-btn")

  function performSearch() {
    searchQuery = searchInput.value.toLowerCase()
    Object.keys(productsData).forEach((category) => {
      currentPage[category] = 1
    })
    renderAllProducts()
  }

  searchInput.addEventListener("input", performSearch)
  searchBtn.addEventListener("click", performSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch()
  })
}

function initializeProducts() {
  Object.keys(productsData).forEach((category) => {
    currentPage[category] = 1
    currentFilter[category] = "all"
    renderProducts(category)
  })

  // Tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const section = e.target.closest(".products-section")
      const category = section.id
      const filter = e.target.dataset.filter

      section.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"))
      e.target.classList.add("active")

      currentFilter[category] = filter
      currentPage[category] = 1
      renderProducts(category)
    })
  })
}

function handleHashNavigation() {
  const hash = window.location.hash.slice(1)
  if (!hash) return

  const match = hash.match(/^(\w+)-page-(\d+)$/)
  if (match) {
    const [, category, page] = match
    if (productsData[category]) {
      currentPage[category] = Number.parseInt(page)
      renderProducts(category)
      setTimeout(() => {
        document.getElementById(category).scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }
}

function renderProducts(category) {
  const grid = document.getElementById(`${category}-grid`)
  const pagination = document.getElementById(`${category}-pagination`)

  let products = productsData[category]

  // Apply search filter
  if (searchQuery) {
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery) ||
        p.author.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery),
    )
  }

  // Apply category filter
  if (currentFilter[category] !== "all") {
    products = products.filter((p) => p.tags.includes(currentFilter[category]))
  }

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)
  const startIdx = (currentPage[category] - 1) * ITEMS_PER_PAGE
  const paginatedProducts = products.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  // Show loading shimmer
  grid.classList.add("loading")

  setTimeout(() => {
    // Render grid
    grid.innerHTML = paginatedProducts
      .map(
        (product) => `
          <div class="product-card">
              <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
              <div class="product-info">
                  <h3 class="product-title">${product.title}</h3>
                  <p class="product-author">by ${product.author}</p>
                  <div class="product-tags">
                      ${product.tags.map((tag) => `<span class="product-tag">${tag}</span>`).join("")}
                  </div>
                  <div class="product-footer">
                      <span class="product-price">${product.price}</span>
                      <button class="quick-view-btn" onclick="openQuickView(${product.id}, '${category}')" aria-label="Quick view ${product.title}">Quick View</button>
                  </div>
              </div>
          </div>
      `,
      )
      .join("")

    grid.classList.remove("loading")

    // Render pagination
    pagination.innerHTML = ""
    if (totalPages > 1) {
      // Prev button
      if (currentPage[category] > 1) {
        const prevBtn = document.createElement("button")
        prevBtn.className = "pagination-btn"
        prevBtn.textContent = "Prev"
        prevBtn.addEventListener("click", () => {
          currentPage[category]--
          window.location.hash = `${category}-page-${currentPage[category]}`
        })
        pagination.appendChild(prevBtn)
      }

      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button")
        btn.className = `pagination-btn ${i === currentPage[category] ? "active" : ""}`
        btn.textContent = i
        btn.setAttribute("aria-label", `Go to page ${i}`)
        btn.addEventListener("click", () => {
          window.location.hash = `${category}-page-${i}`
        })
        pagination.appendChild(btn)
      }

      // Next button
      if (currentPage[category] < totalPages) {
        const nextBtn = document.createElement("button")
        nextBtn.className = "pagination-btn"
        nextBtn.textContent = "Next"
        nextBtn.addEventListener("click", () => {
          currentPage[category]++
          window.location.hash = `${category}-page-${currentPage[category]}`
        })
        pagination.appendChild(nextBtn)
      }
    }
  }, 250) // 250ms loading shimmer
}

function renderAllProducts() {
  Object.keys(productsData).forEach((category) => {
    renderProducts(category)
  })
}

// Quick View Modal
function openQuickView(productId, category) {
  const product = productsData[category].find((p) => p.id === productId)
  if (!product) return

  document.getElementById("qv-image").src = product.image
  document.getElementById("qv-title").textContent = product.title
  document.getElementById("qv-author").textContent = `by ${product.author}`
  document.getElementById("qv-description").textContent = product.description
  document.getElementById("qv-price").textContent = product.price
  document.getElementById("qv-tags").innerHTML = product.tags
    .map((tag) => `<span class="qv-tag">${tag}</span>`)
    .join("")
  document.getElementById("qv-buy-btn").href = `https://gumroad.com/search?search=${encodeURIComponent(product.title)}`

  document.getElementById("quick-view-modal").classList.add("active")
  document.body.classList.add("popup-open")
}

document.querySelector(".quick-view-close").addEventListener("click", () => {
  document.getElementById("quick-view-modal").classList.remove("active")
  document.body.classList.remove("popup-open")
})

document.querySelector(".quick-view-overlay").addEventListener("click", () => {
  document.getElementById("quick-view-modal").classList.remove("active")
  document.body.classList.remove("popup-open")
})

// Scroll to Top
function initializeScrollToTop() {
  const scrollBtn = document.getElementById("scroll-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible")
    } else {
      scrollBtn.classList.remove("visible")
    }
  })

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// Hamburger Menu
function initializeHamburger() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navbar-menu")

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })
}

// Navbar Scroll
function initializeNavbarScroll() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}
