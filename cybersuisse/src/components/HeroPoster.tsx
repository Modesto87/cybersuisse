// Static SVG fallback for the 3D OSINT hero. Used for SSR/prerender,
// reduced-motion users, and browsers without WebGL.
// Pure presentational — no JS interactions, decorative only.

const DOTS: { cx: number; cy: number; r: number; fill: string; opacity: number }[] = [
  // Constellation clustered in the right ~45% of the viewBox.
  { cx: 1120, cy: 250, r: 4, fill: '#F6B53C', opacity: 0.9 },
  { cx: 1260, cy: 200, r: 3, fill: '#D97706', opacity: 0.85 },
  { cx: 980,  cy: 320, r: 3, fill: '#D97706', opacity: 0.75 },
  { cx: 1380, cy: 360, r: 5, fill: '#F6B53C', opacity: 0.95 },
  { cx: 1180, cy: 470, r: 3, fill: '#D97706', opacity: 0.8 },
  { cx: 1040, cy: 540, r: 4, fill: '#F6B53C', opacity: 0.85 },
  { cx: 1300, cy: 590, r: 3, fill: '#D97706', opacity: 0.7 },
  { cx: 1460, cy: 480, r: 3, fill: '#D97706', opacity: 0.75 },
  { cx: 1420, cy: 670, r: 4, fill: '#F6B53C', opacity: 0.85 },
  { cx: 940,  cy: 700, r: 3, fill: '#D97706', opacity: 0.7 },
  { cx: 1500, cy: 280, r: 2, fill: '#D97706', opacity: 0.6 },
  { cx: 900,  cy: 460, r: 2, fill: '#D97706', opacity: 0.6 },
  { cx: 1240, cy: 720, r: 3, fill: '#F6B53C', opacity: 0.8 },
  { cx: 1100, cy: 620, r: 2, fill: '#D97706', opacity: 0.55 },
  { cx: 1340, cy: 130, r: 3, fill: '#F6B53C', opacity: 0.75 },
  { cx: 1530, cy: 580, r: 2, fill: '#D97706', opacity: 0.55 },
  { cx: 870,  cy: 600, r: 2, fill: '#D97706', opacity: 0.5 },
  { cx: 1180, cy: 100, r: 2, fill: '#D97706', opacity: 0.6 },
];

// Lines (target at ~1200,460 connects to several dots)
const TARGET_X = 1200;
const TARGET_Y = 460;
const LINES: { x2: number; y2: number; opacity: number }[] = [
  { x2: 1120, y2: 250, opacity: 0.35 },
  { x2: 1380, y2: 360, opacity: 0.4 },
  { x2: 1040, y2: 540, opacity: 0.3 },
  { x2: 1300, y2: 590, opacity: 0.35 },
  { x2: 1180, y2: 470, opacity: 0.25 },
  { x2: 1460, y2: 480, opacity: 0.3 },
  { x2: 1240, y2: 720, opacity: 0.25 },
  { x2: 980,  y2: 320, opacity: 0.3 },
];

export default function HeroPoster() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full z-0 hero-poster-svg"
    >
      <style>{`
        .hero-poster-target { animation: heroPosterPulse 2.4s ease-in-out infinite; transform-origin: ${TARGET_X}px ${TARGET_Y}px; }
        @keyframes heroPosterPulse { 0%,100% { opacity: 0.7; } 50% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .hero-poster-target { animation: none; opacity: 0.9; } }
      `}</style>
      <rect width="1600" height="900" fill="#0F172A" />

      {/* Faint silhouette behind the target */}
      <circle cx={TARGET_X} cy={TARGET_Y} r="170" fill="#1B2A4A" opacity="0.55" />
      <circle cx={TARGET_X} cy={TARGET_Y - 40} r="60" fill="#243558" opacity="0.7" />

      {/* Connection lines */}
      <g stroke="#D97706" strokeWidth="1">
        {LINES.map((l, i) => (
          <line key={i} x1={TARGET_X} y1={TARGET_Y} x2={l.x2} y2={l.y2} opacity={l.opacity} />
        ))}
      </g>

      {/* Constellation dots */}
      <g>
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} opacity={d.opacity} />
        ))}
      </g>

      {/* Central target — amber brackets + crosshair */}
      <g className="hero-poster-target" stroke="#D97706" strokeWidth="2.5" fill="none">
        {/* corner brackets */}
        <polyline points={`${TARGET_X - 110},${TARGET_Y - 60} ${TARGET_X - 110},${TARGET_Y - 110} ${TARGET_X - 60},${TARGET_Y - 110}`} />
        <polyline points={`${TARGET_X + 60},${TARGET_Y - 110} ${TARGET_X + 110},${TARGET_Y - 110} ${TARGET_X + 110},${TARGET_Y - 60}`} />
        <polyline points={`${TARGET_X - 110},${TARGET_Y + 60} ${TARGET_X - 110},${TARGET_Y + 110} ${TARGET_X - 60},${TARGET_Y + 110}`} />
        <polyline points={`${TARGET_X + 60},${TARGET_Y + 110} ${TARGET_X + 110},${TARGET_Y + 110} ${TARGET_X + 110},${TARGET_Y + 60}`} />
        {/* crosshair */}
        <circle cx={TARGET_X} cy={TARGET_Y} r="55" opacity="0.7" />
        <line x1={TARGET_X - 80} y1={TARGET_Y} x2={TARGET_X + 80} y2={TARGET_Y} strokeDasharray="4 4" opacity="0.6" />
        <line x1={TARGET_X} y1={TARGET_Y - 80} x2={TARGET_X} y2={TARGET_Y + 80} strokeDasharray="4 4" opacity="0.6" />
      </g>

      {/* center dot */}
      <circle cx={TARGET_X} cy={TARGET_Y} r="3" fill="#F6B53C" />
    </svg>
  );
}
