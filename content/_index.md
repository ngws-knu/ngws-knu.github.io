---
title: "Home"
---

<section class="lab-hero">
  <h1 class="lab-title">
    <span>Next-<span class="lab-initial lab-initial-g">G</span>eneration <span class="lab-initial lab-initial-w">W</span>eb Security Lab</span>
  </h1>
  <div class="lab-hero-copy">
    <p>
      We study the future internet where AI and humans interact, collaborate, and make decisions together. We are
      especially interested in the new security problems that emerge when AI agents become a new class of web users.
    </p>
    <p class="lab-motto">Motto: Build systems worth trusting, and share work worth building on.</p>
  </div>
  <figure class="lab-photo">
    <div class="swiper lab-photo-swiper" aria-label="NGWS lab photo carousel">
      <div class="swiper-wrapper">
        <div class="swiper-slide is-active">
          <img src="/images/lab-photo-t.png" alt="NGWS lab overview slide">
        </div>
        <div class="swiper-slide">
          <img src="/images/lab-photo-openlab.jpg" alt="NGWS open lab group photo">
        </div>
        <div class="swiper-slide">
          <img src="/images/lab-photo-baseball.jpg" alt="NGWS members at a baseball game">
        </div>
        <div class="swiper-slide">
          <img src="/images/lab-photo-teachers-day.jpg" alt="NGWS Teacher's Day gathering">
        </div>
        <div class="swiper-slide">
          <img src="/images/lab-photo-year-end.jpg" alt="NGWS year-end dinner">
        </div>
      </div>
      <div class="swiper-pagination" aria-label="Lab photo pagination"></div>
    </div>
  </figure>
</section>

<script>
  (() => {
    const carousel = document.querySelector(".lab-photo-swiper");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll(".swiper-slide"));
    const pagination = carousel.querySelector(".swiper-pagination");
    let current = 0;
    let timer;
    let dragStartX = 0;
    let dragStartY = 0;
    let activePointerId = null;
    let didDrag = false;

    const dots = slides.map((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "swiper-pagination-bullet";
      dot.setAttribute("aria-label", `Show lab photo ${index + 1}`);
      dot.addEventListener("click", () => show(index));
      pagination.appendChild(dot);
      return dot;
    });

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === current);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === current);
        dot.setAttribute("aria-current", dotIndex === current ? "true" : "false");
      });
      window.clearInterval(timer);
      timer = window.setInterval(() => show(current + 1), 8500);
    };

    const handlePointerDown = (event) => {
      if (slides.length < 2 || event.target.closest(".swiper-pagination")) return;
      activePointerId = event.pointerId;
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      didDrag = false;
      carousel.classList.add("is-dragging");
      window.clearInterval(timer);
      carousel.setPointerCapture?.(event.pointerId);
    };

    const handlePointerMove = (event) => {
      if (event.pointerId !== activePointerId) return;
      const deltaX = event.clientX - dragStartX;
      const deltaY = event.clientY - dragStartY;
      if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY)) {
        didDrag = true;
        event.preventDefault();
      }
    };

    const handlePointerUp = (event) => {
      if (event.pointerId !== activePointerId) return;
      const deltaX = event.clientX - dragStartX;
      const threshold = Math.min(90, Math.max(42, carousel.clientWidth * 0.16));

      carousel.classList.remove("is-dragging");
      carousel.releasePointerCapture?.(event.pointerId);
      activePointerId = null;

      if (didDrag && Math.abs(deltaX) >= threshold) {
        show(deltaX < 0 ? current + 1 : current - 1);
        return;
      }

      show(current);
    };

    const cancelPointer = (event) => {
      if (event.pointerId !== activePointerId) return;
      carousel.classList.remove("is-dragging");
      activePointerId = null;
      show(current);
    };

    carousel.addEventListener("pointerdown", handlePointerDown);
    carousel.addEventListener("pointermove", handlePointerMove);
    carousel.addEventListener("pointerup", handlePointerUp);
    carousel.addEventListener("pointercancel", cancelPointer);
    carousel.addEventListener("lostpointercapture", cancelPointer);
    carousel.addEventListener("dragstart", (event) => event.preventDefault());

    show(0);
  })();
</script>

<section class="lab-section">
  <h2>Research at a Glance</h2>
  <div class="topic-grid">
    <a class="topic-card" href="/research/#browser-as-os-security">
      <h3>Browser-as-OS Security</h3>
      <p>Securing next-generation web platforms.</p>
    </a>
    <a class="topic-card" href="/research/#ai-agent-security">
      <h3>AI Agent Security</h3>
      <p>Securing autonomous AI agents and AI-powered ecosystems.</p>
    </a>
    <a class="topic-card" href="/research/#digital-identity-trust">
      <h3>Digital Identity &amp; Trust</h3>
      <p>Establishing trustworthy digital interactions among humans, AI agents, and online services.</p>
    </a>
  </div>
</section>
