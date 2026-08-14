document.addEventListener("DOMContentLoaded", function () {
  // ─── Team member data ───
  const teamData = {
    "abdul-khaliq-founder": {
      name: "Abdul Khaliq Bhatti",
      role: "Founder & Senior Developer",
      img: "assets/images/abdul-khaliq-founder.webp",
      tags: ["PHP Developer", "Research Writer", "Researcher"],
      bio: "Leading development with deep expertise in PHP, web architecture, and academic research. Passionate about building scalable solutions and original research content.",
      email: "abdulkhaliqb338@gmail.com",
      phone: "+92 305 395 6628",
    },
    "abdul-qudoos-cofounder": {
      name: "Abdul Qudoos Mastoi",
      role: "Co-Founder & Senior Developer",
      img: "assets/images/abdul-qudoos-cofounder.webp",
      tags: ["Laravel Developer", "Researcher", "Research Writer"],
      bio: "Co-founder driving innovation in Laravel development and academic research. Expert in backend systems and delivering plagiarism-free research papers.",
      email: "abdulqudoosmastoi50@gmail.com",
      phone: "+92 305 395 6628",
    },
    "muhammad-mubashir-creative": {
      name: "Muhammad Mubashir",
      role: "Senior Video Editor & Social Media Expert",
      img: "assets/images/muhammad-mubashir-creative.webp",
      tags: ["Video Editing", "Social Media", "Content Strategy"],
      bio: "Creative force behind our visual content. Expert in video production, editing, and social media strategy to amplify your brand's digital presence.",
      email: "mubashir@kqsoftwaresolutions.com",
      phone: "+92 305 395 6628",
    },
    "muhammad-furqan-marketing": {
      name: "Muhammad Furqan",
      role: "Marketing Expert & Creative Team",
      img: "assets/images/muhammad-furqan-marketing.webp",
      tags: ["Marketing", "Content Strategy", "Branding"],
      bio: "Creative marketing strategist driving brand growth and digital presence with innovative campaigns.",
      email: "furqan@kqsoftwaresolutions.com",
      phone: "+92 305 395 6628",
    },
    "hasnain-raheem-fullstack": {
      name: "Hasnain Raheem",
      role: "Full-Stack Developer & Sales Expert",
      img: "assets/images/hasnain-raheem-fullstack.webp",
      tags: [
        "Web Development",
        "Front-End",
        "Back-End",
        "Data Analytics",
        "Sales",
      ],
      bio: "Recent IT graduate with hands-on experience in web application development and data analytics. Meta-certified Full-Stack developer with strong skills in web development, data-driven decision making, and problem-solving.",
      email: "hasnain@kqsoftwaresolutions.com",
      phone: "+92 305 395 6628",
    },
    "rao-shoab-ai-developer": {
      name: "Rao Shoab",
      role: "AI Developer & Agentic AI Expert",
      img: "assets/images/rao-shoab-ai-developer.webp",
      tags: ["AI Development", "Agentic AI", "Machine Learning", "Python"],
      bio: "Expert in AI development and agentic AI systems. Specializing in building intelligent autonomous agents, machine learning models, and AI-powered solutions for real-world applications across industries.",
      email: "raoshoab@kqsoftwaresolutions.com",
      phone: "+92 305 395 6628",
    },
  };

  // ─── Team Profile Modal ───
  const modal = document.getElementById("teamModal");
  const modalOverlay = document.getElementById("teamModalOverlay");
  const modalClose = document.getElementById("teamModalClose");
  const modalBody = document.getElementById("teamModalBody");

  function openProfile(key) {
    const member = teamData[key];
    if (!member) return;

    const tagsHTML = member.tags
      .map(function (t) {
        return (
          '<span class="team-role-tag" style="border-color:rgba(201,162,39,0.3);color:var(--gold);background:rgba(201,162,39,0.08)">' +
          t +
          "</span>"
        );
      })
      .join("");

    modalBody.innerHTML =
      '<div class="team-modal-profile">' +
      '<div class="team-modal-avatar"><img src="' +
      member.img +
      '" alt="' +
      member.name +
      '"></div>' +
      "<h2>" +
      member.name +
      "</h2>" +
      '<span class="team-modal-role">' +
      member.role +
      "</span>" +
      '<div class="team-modal-tags">' +
      tagsHTML +
      "</div>" +
      '<p class="team-modal-bio">' +
      member.bio +
      "</p>" +
      '<div class="team-modal-links">' +
      '<a href="mailto:' +
      member.email +
      '" class="btn btn-primary" style="padding:10px 22px;font-size:0.7rem"><i class="fas fa-envelope"></i> Email</a>' +
      '<a href="https://wa.me/923053956628" class="btn btn-gold" style="padding:10px 22px;font-size:0.7rem"><i class="fab fa-whatsapp"></i> WhatsApp</a>' +
      "</div>" +
      "</div>";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProfile() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modal && modalOverlay && modalClose) {
    modalOverlay.addEventListener("click", closeProfile);
    modalClose.addEventListener("click", closeProfile);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeProfile();
    });

    // Attach click to all team cards
    document.querySelectorAll(".team-card").forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (
          e.target.closest(".team-contacts") ||
          e.target.closest(".team-contact")
        )
          return;
        var img = this.querySelector(".team-avatar-img");
        if (img) {
          var src = img.getAttribute("src");
          var key = src
            .replace("assets/images/", "")
            .replace(/\.(webp|jpe?g|webp)$/i, "");
          openProfile(key);
        }
      });
    });
  }

  // ─── Mobile nav toggle ───
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // ─── Nav active state on scroll ───
  const sections = document.querySelectorAll("section[id], .stats-bar[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  function updateActiveNav() {
    let current = "hero";
    sections.forEach(function (section) {
      const top = section.offsetTop - 150;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute("id") || "hero";
      }
    });

    navAnchors.forEach(function (a) {
      a.classList.remove("active");
      if (
        a.getAttribute("href") === "#" + current ||
        a.getAttribute("href") === "#" + current + "/"
      ) {
        a.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // ─── Scroll Reveal ───
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale",
  );

  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // ─── Budget IP Fetching ───
  const budgetSelect = document.getElementById("budgetSelect");
  if (budgetSelect) {
    fetch('https://ipwho.is/')
      .then(function(res) { return res.json(); })
      .then(function(data) {
        const currency = (data && data.success && data.currency && data.currency.code) ? data.currency.code : "USD";
        budgetSelect.innerHTML = 
          '<option value="">Select your budget (' + currency + ')</option>' +
          '<option value="Less than 100">Less than 100 ' + currency + '</option>' +
          '<option value="100-500">100 - 500 ' + currency + '</option>' +
          '<option value="500-1000">500 - 1000 ' + currency + '</option>' +
          '<option value="1000+">1000+ ' + currency + '</option>';
      })
      .catch(function(err) {
        budgetSelect.innerHTML = 
          '<option value="">Select your budget (USD)</option>' +
          '<option value="Less than 100">Less than 100 USD</option>' +
          '<option value="100-500">100 - 500 USD</option>' +
          '<option value="500-1000">500 - 1000 USD</option>' +
          '<option value="1000+">1000+ USD</option>';
      });
  }

  // ─── Contact form ───
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecting to WhatsApp...';
      btn.disabled = true;

      // Extract form values
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const budget = budgetSelect ? budgetSelect.value : "N/A";
      const service = contactForm.querySelector('select:not(#budgetSelect)').value;
      const message = contactForm.querySelector('textarea').value;

      // Format WhatsApp message
      const waNumber = "923053956628";
      let waText = "Hello KQ Software Solutions, I would like to discuss a project with you.\n\n";
      waText += "*Name:* " + name + "\n";
      waText += "*Email:* " + email + "\n";
      waText += "*Budget:* " + budget + "\n";
      waText += "*Service:* " + service + "\n";
      waText += "*Message:* " + message;
      
      const waLink = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(waText);

      setTimeout(function () {
        window.open(waLink, '_blank');
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1000);
    });
  }
});
