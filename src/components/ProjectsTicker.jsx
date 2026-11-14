import { useEffect, useRef } from "react";
import { projects } from "../data/portfolio.js";

function ProjectNames({ duplicate = false }) {
  return (
    <ul className="project-ticker-list" aria-hidden={duplicate ? "true" : undefined}>
      {projects.map((project) => (
        <li key={project.name}>
          <span>{project.name}</span>
          <span className="project-ticker-mark" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function ProjectsTicker() {
  const viewportRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const mobileViewport = window.matchMedia("(max-width: 640px)");
    if (!viewport) return undefined;

    let frameId;
    let lastFrameTime = 0;
    let manualScrollUntil = 0;
    let resumeTimer;
    let touchStartX = 0;
    let touchStartY = 0;
    let horizontalTouch = false;
    let running = false;

    function animate(time) {
      const sequenceWidth = viewport.firstElementChild?.firstElementChild?.getBoundingClientRect().width ?? 0;
      if (sequenceWidth > 0) {
        if (viewport.scrollLeft >= sequenceWidth) viewport.scrollLeft -= sequenceWidth;
        else if (viewport.scrollLeft < 0) viewport.scrollLeft += sequenceWidth;

        if (time >= manualScrollUntil && lastFrameTime) {
          viewport.scrollLeft += (sequenceWidth / 44000) * (time - lastFrameTime);
        }
      }
      lastFrameTime = time;
      frameId = window.requestAnimationFrame(animate);
    }

    function letUserScroll() {
      manualScrollUntil = performance.now() + 1400;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        manualScrollUntil = 0;
      }, 1450);
    }

    function onWheel(event) {
      if (Math.abs(event.deltaX) > 0 || event.shiftKey) letUserScroll();
    }

    function onTouchStart(event) {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      horizontalTouch = false;
    }

    function onTouchMove(event) {
      const touch = event.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartX);
      const deltaY = Math.abs(touch.clientY - touchStartY);
      if (deltaX > 8 && deltaX > deltaY) {
        horizontalTouch = true;
        letUserScroll();
      }
    }

    function onTouchEnd() {
      if (horizontalTouch) letUserScroll();
    }

    function onKeyDown(event) {
      if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) letUserScroll();
    }

    function startTicker() {
      if (running) return;
      running = true;
      lastFrameTime = 0;
      viewport.addEventListener("wheel", onWheel, { passive: true });
      viewport.addEventListener("touchstart", onTouchStart, { passive: true });
      viewport.addEventListener("touchmove", onTouchMove, { passive: true });
      viewport.addEventListener("touchend", onTouchEnd, { passive: true });
      viewport.addEventListener("keydown", onKeyDown);
      frameId = window.requestAnimationFrame(animate);
    }

    function stopTicker() {
      if (!running) return;
      running = false;
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(resumeTimer);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchmove", onTouchMove);
      viewport.removeEventListener("touchend", onTouchEnd);
      viewport.removeEventListener("keydown", onKeyDown);
    }

    function syncTicker() {
      if (mobileViewport.matches) stopTicker();
      else startTicker();
    }

    mobileViewport.addEventListener("change", syncTicker);
    syncTicker();

    return () => {
      mobileViewport.removeEventListener("change", syncTicker);
      stopTicker();
    };
  }, []);

  return (
    <section className="project-ticker" aria-label="Selected projects">
      <div className="project-ticker-heading container">
        <p className="eyebrow">A few things I’ve built</p>
      </div>
      <div className="project-ticker-window" ref={viewportRef} tabIndex="0" role="region" aria-label="Scroll through selected projects">
        <div className="project-ticker-track">
          <ProjectNames />
          <ProjectNames duplicate />
        </div>
      </div>
    </section>
  );
}
