  // Typing Effect
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Typing effect script loaded');
    const typingText = document.getElementById('typing-text');
    console.log('Typing text element:', typingText);
    const text = 'Web Developer';
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
      }
    }

    typeWriter();
  });

  // Scroll Progress Bar
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
  });

  // Scroll-triggered Animations
  document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe sections and cards
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });

    document.querySelectorAll('.experience-card, .skill-card, .certificate-card, .project-card').forEach(card => {
      card.classList.add('slide-in-left');
      observer.observe(card);
    });

    document.querySelectorAll('.contact-form').forEach(form => {
      form.classList.add('slide-in-right');
      observer.observe(form);
    });
  });

  // Particle Background
  document.addEventListener('DOMContentLoaded', function() {
    const particleContainer = document.querySelector('.particle-background');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.width = Math.random() * 10 + 5 + 'px';
      particle.style.height = particle.style.width;
      particleContainer.appendChild(particle);
    }
  });

  // Certificate Modal functionality
  document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById("certificateModal");

    // Get all view certificate buttons
    const viewButtons = document.querySelectorAll(".view-certificate");

    // Get the modal elements
    const modalImg = document.getElementById("modalCertificateImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalIssuer = document.getElementById("modalIssuer");
    const modalDate = document.getElementById("modalDate");
    const closeBtn = document.querySelector(".close");

    // When user clicks a view certificate button
    viewButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.getAttribute('data-image');
        modalImg.alt = this.getAttribute('data-title') + ' Certificate';
        modalTitle.textContent = this.getAttribute('data-title');
        modalIssuer.textContent = this.getAttribute('data-issuer');
        modalDate.textContent = this.getAttribute('data-date');
      });
    });

    // When user clicks on (x), close the modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }

    // When user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
      }
    });
  });
