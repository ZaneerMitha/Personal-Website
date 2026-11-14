export function HeroDoodles() {
  return (
    <svg
      className="hero-doodles"
      viewBox="0 0 400 500"
      aria-hidden="true"
      focusable="false"
    >
      <g className="hero-doodle hero-doodle-arrow">
        <path className="doodle-arrow-line" pathLength="1" d="M 18 132 C 34 92, 72 68, 108 89" />
        <path className="doodle-arrow-head" pathLength="1" d="M 96 80 Q 101 85 108 89 Q 106 80 105 76" />
        <path className="doodle-arrow-head" pathLength="1" d="M 98 98 Q 102 93 108 89" />
      </g>
      <path
        className="hero-doodle hero-doodle-star"
        pathLength="1"
        d="M 356 45 C 359 52 362 55 370 58 C 363 61 360 64 357 72 C 354 64 351 61 344 58 C 351 55 354 52 356 45 Z"
      />
      <path
        className="hero-doodle hero-doodle-mini-star"
        pathLength="1"
        d="M 34 230 Q 37 237 44 240 Q 37 243 34 250 Q 31 243 24 240 Q 31 237 34 230 Z"
      />
      <g className="hero-doodle hero-doodle-extra-accents">
        <path pathLength="1" d="M 378 96 Q 384 93 388 87" />
        <path pathLength="1" d="M 384 104 Q 390 101 395 95" />
        <path pathLength="1" d="M 18 414 Q 31 409 43 411 Q 48 412 52 409" />
      </g>
      <g className="hero-doodle hero-doodle-accents">
        <path pathLength="1" d="M 380 404 Q 388 399 395 391" />
        <path pathLength="1" d="M 380 422 Q 390 417 397 409" />
        <path pathLength="1" d="M 378 440 Q 388 435 396 428" />
      </g>
    </svg>
  );
}
