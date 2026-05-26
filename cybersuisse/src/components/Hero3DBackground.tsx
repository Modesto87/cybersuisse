import { useEffect, useRef, type RefObject } from 'react';
import { useReducedMotion } from 'framer-motion';
import HeroPoster from './HeroPoster';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface PanelData {
  cat: string;
  val: string;
  sev: 'critical' | 'leaked' | 'verified' | 'info' | 'dark';
  tag: string;
  isPhoto?: boolean;
  near?: boolean;
  size?: number;
}

interface HudRefs {
  sync: RefObject<HTMLSpanElement | null>;
  pivots: RefObject<HTMLSpanElement | null>;
  data: RefObject<HTMLSpanElement | null>;
  fps: RefObject<HTMLSpanElement | null>;
  last: RefObject<HTMLSpanElement | null>;
}

interface Hero3DBackgroundProps {
  sectionRef: RefObject<HTMLElement | null>;
}

// ---------------------------------------------------------------------------
// Severity → amber-mapped color palette (NO red anywhere)
// ---------------------------------------------------------------------------
const SEV = {
  critical: { tex: '#D97706', three: 0xb45309 },
  leaked:   { tex: '#F6B53C', three: 0xd97706 },
  verified: { tex: '#7FCFA3', three: 0x5bae85 },
  info:     { tex: '#8FAEDD', three: 0x5a7bc4 },
  dark:     { tex: '#7A8BA5', three: 0x7a8ba5 },
} as const;

const ACCENT_HEX = '#D97706';
const ACCENT_LIFT_HEX = '#F6B53C';
const ACCENT_INT = 0xd97706;

// ---------------------------------------------------------------------------
// Panel data — ethically edited (no real-looking personal handles)
// ---------------------------------------------------------------------------
const PANELS: PanelData[] = [
  { cat: 'EMAIL',    val: 'a***@protonmail.com',       sev: 'leaked',   tag: 'HIBP · 3 breaches' },
  { cat: 'EMAIL',    val: 'j.dupont.****@gmail.com',   sev: 'leaked',   tag: 'Collection #1' },
  { cat: 'IP',       val: '185.220.101.42',            sev: 'critical', tag: 'Tor exit · DE' },
  { cat: 'IP',       val: '78.46.xxx.xxx',             sev: 'info',     tag: 'Hetzner · DE' },
  { cat: 'GPS',      val: '47.1368° N · 7.2467° E',    sev: 'info',     tag: 'Bienne · CH' },
  { cat: 'GPS',      val: '46.9480° N · 7.4474° E',    sev: 'verified', tag: 'last seen · Bern' },
  { cat: 'LEAK',     val: 'Adobe · 2013',              sev: 'leaked',   tag: 'pwned' },
  { cat: 'LEAK',     val: 'LinkedIn · 2021',           sev: 'leaked',   tag: 'pwned' },
  { cat: 'HANDLE',   val: '@dev_anon_42',              sev: 'verified', tag: 'github · 4y' },
  { cat: 'HANDLE',   val: 'tg: @anon_user_87',         sev: 'info',     tag: 'telegram' },
  { cat: 'PASS',     val: '**********',                sev: 'critical', tag: 'weak · plaintext leak' },
  { cat: 'PHOTO',    val: '[REDACTED]',                sev: 'leaked',   tag: 'phash · ab12cd34', isPhoto: true },
  { cat: 'CARD',     val: '**** **** **** 4257',       sev: 'critical', tag: 'BIN · CH · Visa' },
  { cat: 'DOMAIN',   val: 'pme-suisse.example',        sev: 'verified', tag: 'registered 2024' },
  { cat: 'DOMAIN',   val: 'pme-acme.example',          sev: 'info',     tag: 'expired SSL · -23d' },
  { cat: 'CVE',      val: 'CVE-2024-21412',            sev: 'critical', tag: 'CVSS 9.8 · RCE' },
  { cat: 'CVE',      val: 'CVE-2023-34362',            sev: 'critical', tag: 'MOVEit · KEV' },
  { cat: 'SHA256',   val: 'a3f2c8d1…b9e74',            sev: 'critical', tag: 'YARA · malware' },
  { cat: 'BTC',      val: 'bc1q…xv7m',                 sev: 'leaked',   tag: 'mixer · 0.42 BTC' },
  { cat: 'PHONE',    val: '+41 7* *** ** 02',          sev: 'info',     tag: 'CH · postpaid' },
  { cat: 'PORT',     val: ':22 · open',                sev: 'info',     tag: 'SSH-2.0 · OpenSSH 8.9' },
  { cat: 'PORT',     val: ':3389 · open',              sev: 'critical', tag: 'RDP · NLA off' },
  { cat: 'ASN',      val: 'AS29447',                   sev: 'info',     tag: 'Init7 · CH' },
  { cat: 'BROWSER',  val: 'Chrome 122 · macOS',        sev: 'info',     tag: 'fingerprint match' },
  { cat: 'TIMEZONE', val: 'Europe/Zurich',             sev: 'verified', tag: 'consistent' },
  { cat: 'LANG',     val: 'fr-CH · pt-PT',             sev: 'info',     tag: 'profile · accent' },
  { cat: 'TG',       val: '@dump_eu_2024',             sev: 'leaked',   tag: 'darknet leak · 4.2M rows' },
  { cat: 'ONION',    val: 'auntm…7x9.onion',           sev: 'leaked',   tag: 'forum thread · 2024-03' },
  { cat: 'SOCIAL',   val: 'fb.com/j.****',             sev: 'info',     tag: 'last post · 4d ago' },
  { cat: 'DEVICE',   val: 'iPhone 14 · iOS 17.3',      sev: 'verified', tag: 'UA · last 7d' },
  { cat: 'SSL',      val: 'expired · 2024-04-12',      sev: 'critical', tag: 'mail.acme.ch' },
  { cat: 'WIFI',     val: 'Swisscom_FON · -67dBm',     sev: 'info',     tag: 'last beacon · 03:14' },
];

PANELS.forEach((p, i) => {
  p.near = i < 16;
  p.size = p.near ? 1.05 + Math.random() * 0.25 : 0.78 + Math.random() * 0.15;
});

// ---------------------------------------------------------------------------
// Lateral pivot pairs (node-to-node connections)
// ---------------------------------------------------------------------------
const LATERAL_PAIRS: Array<[number, number]> = [
  [0, 1], [2, 21], [3, 22], [6, 7], [8, 9],
  [15, 16], [11, 1], [17, 2], [10, 6], [19, 21],
];

// ---------------------------------------------------------------------------
// Anchor X based on viewport width
// ---------------------------------------------------------------------------
function getAnchor(w: number): { x: number; y: number } {
  if (w >= 1280) return { x: 2.2, y: 0 };
  if (w >= 1100) return { x: 1.6, y: 0 };
  if (w >= 900)  return { x: 1.0, y: 0 };
  return { x: 0, y: -0.6 };
}

// ---------------------------------------------------------------------------
// Scene initializer (returns a cleanup function)
// ---------------------------------------------------------------------------
interface InitOptions {
  canvas: HTMLCanvasElement;
  hudRefs: HudRefs;
  isMobile: boolean;
}

async function initOsintScene({ canvas, hudRefs, isMobile }: InitOptions): Promise<() => void> {
  const THREE = await import('three');

  // ---- Renderer / scene / camera ----
  const scene = new THREE.Scene();
  scene.background = null;
  scene.fog = new THREE.FogExp2(0x0b1224, isMobile ? 0.04 : 0.055);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80);
  camera.position.set(0, 0.4, 5.6);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    const a = getAnchor(window.innerWidth);
    constellation.position.set(a.x, a.y, 0);
  }

  // ---- Constellation root ----
  const constellation = new THREE.Group();
  const initialAnchor = getAnchor(window.innerWidth);
  constellation.position.set(initialAnchor.x, initialAnchor.y, 0);
  scene.add(constellation);

  // ---- Panel texture factory ----
  function makePanelTexture(p: PanelData): THREE.CanvasTexture {
    const W = 512, H = 256;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const ctx = c.getContext('2d')!;

    ctx.fillStyle = 'rgba(11, 18, 36, 0.94)';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(122, 139, 165, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, W - 2, H - 2);

    const sevColor = SEV[p.sev].tex;
    ctx.fillStyle = sevColor;
    ctx.fillRect(0, 0, W, 6);
    ctx.beginPath();
    ctx.arc(W - 28, 30, 6, 0, Math.PI * 2);
    ctx.fillStyle = sevColor;
    ctx.fill();

    ctx.fillStyle = sevColor;
    ctx.font = '500 22px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    ctx.textAlign = 'left';
    ctx.fillText(p.cat, 26, 50);
    ctx.fillStyle = 'rgba(160, 170, 185, 0.18)';
    ctx.fillRect(26, 60, W - 52, 1);

    ctx.fillStyle = '#F1F5F9';
    let measureSize = 38;
    let valFont = `600 ${measureSize}px ui-monospace, Menlo, Consolas, monospace`;
    if (p.val === '[REDACTED]' || p.val === '**********') {
      valFont = '700 44px Montserrat, system-ui, sans-serif';
    }
    ctx.font = valFont;
    while (measureSize > 18 && ctx.measureText(p.val).width > W - 60) {
      measureSize -= 2;
      ctx.font = `600 ${measureSize}px ui-monospace, Menlo, Consolas, monospace`;
    }
    ctx.fillText(p.val, 26, 125);

    if (p.isPhoto) {
      ctx.fillStyle = 'rgba(40, 42, 48, 1)';
      ctx.fillRect(W - 130, 24, 100, 100);
      ctx.strokeStyle = 'rgba(80, 84, 92, 0.6)';
      ctx.lineWidth = 1;
      for (let x = -100; x < 100; x += 8) {
        ctx.beginPath();
        ctx.moveTo(W - 130 + x, 24);
        ctx.lineTo(W - 130 + x + 100, 124);
        ctx.stroke();
      }
      ctx.fillStyle = ACCENT_HEX;
      ctx.font = '700 16px ui-monospace, Menlo, Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.fillText('REDACTED', W - 80, 80);
      ctx.textAlign = 'left';
    }

    ctx.fillStyle = '#8A8F99';
    ctx.font = '500 17px ui-monospace, Menlo, Consolas, monospace';
    ctx.fillText(p.tag, 26, 178);

    ctx.fillStyle = sevColor;
    ctx.font = '600 14px ui-monospace, Menlo, Consolas, monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`· ${p.sev.toUpperCase()}`, W - 26, 178);
    ctx.textAlign = 'left';

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.18)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      const x = 26 + i * 30;
      ctx.beginPath();
      ctx.moveTo(x, 210);
      ctx.lineTo(x + 18 + Math.random() * 8, 210);
      ctx.stroke();
    }

    ctx.fillStyle = '#5A606B';
    ctx.font = '500 13px ui-monospace, Menlo, Consolas, monospace';
    ctx.fillText(`CASE · CS-OS-2024-1247 · ${(Math.random() * 9999 | 0).toString().padStart(4, '0')}`, 26, 232);

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return tex;
  }

  // ---- Center "target" texture (amber, not red) ----
  function makeTargetTexture(): THREE.CanvasTexture {
    const W = 640, H = 640;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const ctx = c.getContext('2d')!;
    ctx.fillStyle = 'rgba(11, 18, 36, 0.97)';
    ctx.fillRect(0, 0, W, H);

    // amber corner brackets with subtle glow
    ctx.shadowColor = 'rgba(255,255,255,0.35)';
    ctx.shadowBlur = 8;
    ctx.strokeStyle = ACCENT_HEX;
    ctx.lineWidth = 3;
    const m = 30, L = 60;
    ctx.beginPath(); ctx.moveTo(m, m + L); ctx.lineTo(m, m); ctx.lineTo(m + L, m); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W - m - L, m); ctx.lineTo(W - m, m); ctx.lineTo(W - m, m + L); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(m, H - m - L); ctx.lineTo(m, H - m); ctx.lineTo(m + L, H - m); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W - m - L, H - m); ctx.lineTo(W - m, H - m); ctx.lineTo(W - m, H - m - L); ctx.stroke();
    ctx.shadowBlur = 0;

    // silhouette
    ctx.fillStyle = 'rgba(60, 65, 75, 0.95)';
    ctx.beginPath();
    ctx.arc(W / 2, H / 2 - 30, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(W / 2 - 160, H / 2 + 220);
    ctx.quadraticCurveTo(W / 2, H / 2 + 30, W / 2 + 160, H / 2 + 220);
    ctx.lineTo(W / 2 + 160, H);
    ctx.lineTo(W / 2 - 160, H);
    ctx.closePath();
    ctx.fill();

    // amber crosshair
    ctx.strokeStyle = ACCENT_HEX;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(W / 2, H / 2 - 30, 110, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(W / 2 - 140, H / 2 - 30); ctx.lineTo(W / 2 + 140, H / 2 - 30);
    ctx.moveTo(W / 2, H / 2 - 30 - 130); ctx.lineTo(W / 2, H / 2 - 30 + 130);
    ctx.stroke();
    ctx.setLineDash([]);

    // header
    ctx.fillStyle = ACCENT_HEX;
    ctx.font = '500 24px ui-monospace, Menlo, Consolas, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SUBJECT', W / 2, 100);
    ctx.fillStyle = '#F1F5F9';
    ctx.font = '900 64px Montserrat, system-ui, sans-serif';
    ctx.fillText('REDACTED', W / 2, 170);

    // footer
    ctx.fillStyle = '#8A8F99';
    ctx.font = '500 18px ui-monospace, Menlo, Consolas, monospace';
    ctx.fillText('case · CS-OS-2024-1247', W / 2, H - 90);
    ctx.fillStyle = '#5BAE85';
    ctx.font = '500 15px ui-monospace, Menlo, Consolas, monospace';
    ctx.fillText('▶ ACTIVE INVESTIGATION', W / 2, H - 60);

    // amber status dot
    ctx.fillStyle = ACCENT_LIFT_HEX;
    ctx.beginPath(); ctx.arc(W - 60, 60, 8, 0, Math.PI * 2); ctx.fill();

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return tex;
  }

  // ---- Panel placement ----
  type PanelMesh = THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial> & {
    userData: {
      basePos: THREE.Vector3;
      sev: PanelData['sev'];
      drift: THREE.Vector3;
      appearTime: number;
      data: PanelData;
    };
  };

  function placePanel(i: number, total: number): THREE.Vector3 {
    const golden = Math.PI * (3 - Math.sqrt(5));
    const y = 0.85 - (i / (total - 1)) * 1.7;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    const x = Math.cos(theta) * radius;
    let z = Math.sin(theta) * radius;
    z = Math.abs(z) * 0.65 + 0.15;
    const near = i < 16;
    const dist = near ? 1.4 + Math.random() * 0.4 : 2.2 + Math.random() * 0.9;
    return new THREE.Vector3(x * dist, y * dist * 0.65, z * dist - 0.3);
  }

  const panelGroup = new THREE.Group();
  constellation.add(panelGroup);

  const panels3D: PanelMesh[] = [];
  const TARGET_POS = new THREE.Vector3(0, 0, 0);

  PANELS.forEach((p, i) => {
    const tex = makePanelTexture(p);
    const aspect = 2;
    const h = (p.size ?? 1) * 0.45;
    const w = h * aspect;
    const mat = new THREE.MeshBasicMaterial({
      map: tex, transparent: true, opacity: 0,
      depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat) as PanelMesh;
    const pos = placePanel(i, PANELS.length);
    mesh.position.copy(pos);
    mesh.userData = {
      basePos: pos.clone(),
      sev: p.sev,
      drift: new THREE.Vector3(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2),
      appearTime: 0.2 + i * 0.10,
      data: p,
    };
    panelGroup.add(mesh);
    panels3D.push(mesh);
  });

  // ---- Target plane + ring ----
  const targetTex = makeTargetTexture();
  const targetMat = new THREE.MeshBasicMaterial({ map: targetTex, transparent: true, opacity: 0.95, depthWrite: false, toneMapped: false });
  const targetMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), targetMat);
  targetMesh.position.copy(TARGET_POS);
  constellation.add(targetMesh);

  const ringGeom = new THREE.RingGeometry(0.62, 0.66, 64);
  const ringMat = new THREE.MeshBasicMaterial({ color: ACCENT_INT, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  const targetRing = new THREE.Mesh(ringGeom, ringMat);
  targetRing.position.copy(TARGET_POS);
  constellation.add(targetRing);

  // ---- Connections (target → panel) ----
  interface Connection {
    idx: number;
    line: THREE.Line;
    mat: THREE.LineBasicMaterial;
    geom: THREE.BufferGeometry;
    spark: THREE.Mesh;
    sparkMat: THREE.MeshBasicMaterial;
    sparkGeom: THREE.SphereGeometry;
    delay: number;
    born: number;
    growDur: number;
    established: boolean;
  }
  const connections: Connection[] = [];

  PANELS.forEach((_, i) => {
    const sevColor = SEV[PANELS[i].sev].three;
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const mat = new THREE.LineBasicMaterial({
      color: sevColor, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const line = new THREE.Line(geom, mat);
    panelGroup.add(line);

    const sparkGeom = new THREE.SphereGeometry(0.018, 8, 8);
    const sparkMat = new THREE.MeshBasicMaterial({ color: sevColor, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    const spark = new THREE.Mesh(sparkGeom, sparkMat);
    panelGroup.add(spark);

    connections.push({
      idx: i, line, mat, geom, spark, sparkMat, sparkGeom,
      delay: 0.6 + i * 0.18,
      born: performance.now() / 1000,
      growDur: 1.0,
      established: false,
    });
  });

  // ---- Lateral pivots ----
  interface Lateral {
    a: number;
    b: number;
    line: THREE.Line;
    mat: THREE.LineBasicMaterial;
    geom: THREE.BufferGeometry;
    delay: number;
    born: number;
    growDur: number;
  }
  const laterals: Lateral[] = [];
  LATERAL_PAIRS.forEach(([a, b], i) => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const mat = new THREE.LineBasicMaterial({ color: ACCENT_INT, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    const line = new THREE.Line(geom, mat);
    panelGroup.add(line);
    laterals.push({ a, b, line, mat, geom, delay: 6 + i * 1.1, born: performance.now() / 1000, growDur: 0.9 });
  });

  // ---- Particles (mixed amber/royal/white, no red) ----
  const PARTICLE_COUNT = isMobile ? 600 : 1800;
  function makeParticleSprite(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = 64; c.height = 64;
    const ctx = c.getContext('2d')!;
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.4, 'rgba(255,255,255,0.45)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grd; ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }
  const particleTex = makeParticleSprite();
  const pPos = new Float32Array(PARTICLE_COUNT * 3);
  const pCol = new Float32Array(PARTICLE_COUNT * 3);
  const pSiz = new Float32Array(PARTICLE_COUNT);
  // Tints: 60% amber, 25% royal, 15% white
  const tints = [
    new THREE.Color(0xd97706), new THREE.Color(0xd97706), new THREE.Color(0xd97706),
    new THREE.Color(0xd97706), new THREE.Color(0xd97706), new THREE.Color(0xd97706),
    new THREE.Color(0x5a7bc4), new THREE.Color(0x5a7bc4), new THREE.Color(0x5a7bc4),
    new THREE.Color(0xf8fafc), new THREE.Color(0xf8fafc),
  ];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pPos[3 * i + 0] = (Math.random() - 0.5) * 28;
    pPos[3 * i + 1] = (Math.random() - 0.5) * 12;
    pPos[3 * i + 2] = (Math.random() - 0.5) * 22 - 2;
    const c = tints[Math.floor(Math.random() * tints.length)];
    pCol[3 * i + 0] = c.r; pCol[3 * i + 1] = c.g; pCol[3 * i + 2] = c.b;
    pSiz[i] = 0.4 + Math.random() * 1.0;
  }
  const pGeom = new THREE.BufferGeometry();
  pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeom.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  pGeom.setAttribute('size', new THREE.BufferAttribute(pSiz, 1));
  const pMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTex: { value: particleTex }, uTime: { value: 0 }, uPx: { value: renderer.getPixelRatio() } },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      varying float vDepth;
      uniform float uTime;
      uniform float uPx;
      void main(){
        vColor = color;
        vec3 p = position;
        p.x += sin(uTime*0.18 + position.y*0.4)*0.3;
        p.y += sin(uTime*0.22 + position.x*0.3)*0.2 + uTime*0.04;
        p.z += sin(uTime*0.13 + position.x*0.2)*0.25;
        p.y = mod(p.y + 6.0, 12.0) - 6.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * uPx * (200.0 / -mv.z);
      }`,
    fragmentShader: `
      uniform sampler2D uTex;
      varying vec3 vColor;
      varying float vDepth;
      void main(){
        vec4 t = texture2D(uTex, gl_PointCoord);
        float d = smoothstep(20.0, 4.0, vDepth);
        gl_FragColor = vec4(vColor, t.a * d * 0.30);
      }`,
    vertexColors: true,
  });
  const particles = new THREE.Points(pGeom, pMat);
  scene.add(particles);

  // ---- Mouse parallax ----
  let tMX = 0, tMY = 0, mX = 0, mY = 0;
  let mouseQueued = false;
  function onMouse(e: MouseEvent) {
    if (mouseQueued) return;
    mouseQueued = true;
    requestAnimationFrame(() => {
      tMX = (e.clientX / window.innerWidth - 0.5) * 2;
      tMY = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseQueued = false;
    });
  }
  window.addEventListener('mousemove', onMouse, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  resize();

  // ---- HUD counters ----
  let dataPoints = 247;
  let pivotsCount = 18;
  const sources = ['HIBP', 'Shodan', 'Censys', 'IntelX', 'GreyNoise', 'Pastebin'];
  function lastPivotLabel() {
    const p = PANELS[Math.floor(Math.random() * PANELS.length)];
    return `${p.cat} → ${p.val.length > 18 ? p.val.slice(0, 16) + '…' : p.val}`;
  }
  const hudInterval = window.setInterval(() => {
    dataPoints += Math.floor(Math.random() * 7) + 1;
    pivotsCount += Math.random() < 0.55 ? 1 : 0;
    if (hudRefs.data.current) hudRefs.data.current.textContent = String(dataPoints);
    if (hudRefs.pivots.current) hudRefs.pivots.current.textContent = String(pivotsCount);
    if (hudRefs.last.current) hudRefs.last.current.textContent = lastPivotLabel();
    if (hudRefs.sync.current) hudRefs.sync.current.textContent = `${sources[pivotsCount % sources.length]} · sync`;
  }, 1800);

  try {
  // ---- Animation loop ----
  let lastFrame = performance.now();
  let frames = 0, fpsAccum = 0, fpsTimer = 0;
  let rafId = 0;
  let running = true;
  let firstFrameShown = false;

  const targetWorld = new THREE.Vector3();
  const panelWorld = new THREE.Vector3();
  const tip = new THREE.Vector3();
  const A = new THREE.Vector3();
  const B = new THREE.Vector3();

  function animate(now: number) {
    if (!running) return;
    rafId = requestAnimationFrame(animate);
    const dt = Math.min(0.05, (now - lastFrame) / 1000);
    lastFrame = now;
    const t = now / 1000;

    mX += (tMX - mX) * 0.045;
    mY += (tMY - mY) * 0.045;

    frames++; fpsAccum += dt; fpsTimer += dt;
    if (fpsTimer > 0.5) {
      const fps = Math.round(frames / fpsAccum);
      if (hudRefs.fps.current) hudRefs.fps.current.textContent = String(fps);
      frames = 0; fpsAccum = 0; fpsTimer = 0;
    }

    for (let i = 0; i < panels3D.length; i++) {
      const m = panels3D[i];
      const ud = m.userData;
      if (m.material.opacity < 1.0 && t > ud.appearTime) {
        m.material.opacity = Math.min(1.0, m.material.opacity + dt * 0.6);
      }
      ud.drift.x += dt * 0.5;
      ud.drift.y += dt * 0.4;
      ud.drift.z += dt * 0.6;
      m.position.set(
        ud.basePos.x + Math.sin(ud.drift.x) * 0.05,
        ud.basePos.y + Math.sin(ud.drift.y) * 0.05,
        ud.basePos.z + Math.sin(ud.drift.z) * 0.05,
      );
      m.lookAt(camera.position);
    }

    targetMesh.lookAt(camera.position);
    targetRing.lookAt(camera.position);
    targetRing.scale.setScalar(1.0 + Math.sin(t * 1.8) * 0.06);
    targetRing.material.opacity = 0.45 + Math.sin(t * 1.8) * 0.18;

    for (let i = 0; i < connections.length; i++) {
      const con = connections[i];
      const age = t - con.born;
      if (age < con.delay) continue;
      const p = Math.min(1, (age - con.delay) / con.growDur);
      targetMesh.getWorldPosition(targetWorld);
      const panel = panels3D[con.idx];
      panel.getWorldPosition(panelWorld);
      tip.lerpVectors(targetWorld, panelWorld, p);
      const arr = con.geom.attributes.position.array as Float32Array;
      arr[0] = targetWorld.x; arr[1] = targetWorld.y; arr[2] = targetWorld.z;
      arr[3] = tip.x; arr[4] = tip.y; arr[5] = tip.z;
      con.geom.attributes.position.needsUpdate = true;

      con.mat.opacity = p < 1 ? 0.55 : 0.20 + Math.sin(t * 1.2 + con.idx) * 0.08;

      if (p < 1) {
        con.spark.position.copy(tip);
        con.sparkMat.opacity = 1;
      } else if (!con.established) {
        con.established = true;
        con.sparkMat.opacity = 0;
        con.spark.visible = false;
      }
    }

    for (let i = 0; i < laterals.length; i++) {
      const con = laterals[i];
      const age = t - con.born;
      if (age < con.delay) continue;
      const p = Math.min(1, (age - con.delay) / con.growDur);
      panels3D[con.a].getWorldPosition(A);
      panels3D[con.b].getWorldPosition(B);
      tip.lerpVectors(A, B, p);
      const arr = con.geom.attributes.position.array as Float32Array;
      arr[0] = A.x; arr[1] = A.y; arr[2] = A.z;
      arr[3] = tip.x; arr[4] = tip.y; arr[5] = tip.z;
      con.geom.attributes.position.needsUpdate = true;
      con.mat.opacity = p < 1 ? 0.7 : 0.15 + Math.sin(t * 0.9 + con.a) * 0.06;
    }

    constellation.rotation.y = Math.sin(t * 0.06) * 0.12 + mX * 0.20;
    constellation.rotation.x = Math.sin(t * 0.04) * 0.04 - mY * 0.08;
    const anchor = getAnchor(window.innerWidth);
    constellation.position.x = anchor.x;
    constellation.position.y = anchor.y + Math.sin(t * 0.3) * 0.04;

    camera.position.x = 0.0 + mX * 0.4;
    camera.position.y = 0.4 + mY * 0.25;
    camera.position.z = 5.6 + Math.sin(t * 0.10) * 0.25;
    camera.lookAt(constellation.position.x - 0.6, constellation.position.y, 0);

    pMat.uniforms.uTime.value = t;

    renderer.render(scene, camera);

    if (!firstFrameShown) {
      firstFrameShown = true;
      canvas.style.opacity = '1';
    }
  }

  function start() {
    if (running && rafId) return;
    if (!running) running = true;
    lastFrame = performance.now();
    rafId = requestAnimationFrame(animate);
  }
  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  start();

  // ---- Visibility / intersection pause ----
  function onVisibility() {
    if (document.hidden) stop();
    else start();
  }
  document.addEventListener('visibilitychange', onVisibility);

  let io: IntersectionObserver | null = null;
  const section = canvas.closest('section');
  if (section && 'IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.intersectionRatio < 0.1) stop();
        else start();
      }
    }, { threshold: [0, 0.1, 0.5, 1] });
    io.observe(section);
  }

  // ---- Cleanup ----
  return () => {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener('mousemove', onMouse);
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', onVisibility);
    if (io) io.disconnect();
    window.clearInterval(hudInterval);

    // Dispose everything
    panels3D.forEach((m) => {
      m.geometry.dispose();
      const map = m.material.map;
      if (map) map.dispose();
      m.material.dispose();
    });
    connections.forEach((c) => {
      c.geom.dispose();
      c.mat.dispose();
      c.sparkGeom.dispose();
      c.sparkMat.dispose();
    });
    laterals.forEach((l) => {
      l.geom.dispose();
      l.mat.dispose();
    });
    targetMesh.geometry.dispose();
    if (targetMat.map) targetMat.map.dispose();
    targetMat.dispose();
    ringGeom.dispose();
    ringMat.dispose();
    pGeom.dispose();
    pMat.dispose();
    particleTex.dispose();

    scene.clear();
    renderer.dispose();
    renderer.forceContextLoss();
  };
  } catch (e) {
    window.clearInterval(hudInterval);
    throw e;
  }
}

// ---------------------------------------------------------------------------
// React component
// ---------------------------------------------------------------------------
export default function Hero3DBackground({ sectionRef }: Hero3DBackgroundProps) {
  void sectionRef; // observer attaches via canvas.closest('section')
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hudSyncRef = useRef<HTMLSpanElement>(null);
  const hudPivotsRef = useRef<HTMLSpanElement>(null);
  const hudDataRef = useRef<HTMLSpanElement>(null);
  const hudFpsRef = useRef<HTMLSpanElement>(null);
  const hudLastRef = useRef<HTMLSpanElement>(null);

  const reduceMotion = useReducedMotion();

  // Decide whether to render the 3D scene at all
  const isBrowser = typeof window !== 'undefined';
  const isPrerender = isBrowser && (
    (navigator as Navigator & { webdriver?: boolean }).webdriver === true ||
    window.location.search.includes('prerender=1')
  );

  const shouldUse3D = isBrowser && !reduceMotion && !isPrerender;

  useEffect(() => {
    if (!shouldUse3D) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // WebGL feature test — done on a throwaway canvas so we never bind a
    // context (with wrong attributes) to the live canvas that Three will use.
    {
      const probe = document.createElement('canvas');
      const probeGl = probe.getContext('webgl2') || probe.getContext('webgl');
      if (!probeGl) return;
      const loseExt = (probeGl as WebGLRenderingContext).getExtension('WEBGL_lose_context');
      if (loseExt) loseExt.loseContext();
    }

    let cleanup: (() => void) | null = null;
    let cancelled = false;

    const isMobile = window.innerWidth < 768;

    (async () => {
      try {
        const dispose = await initOsintScene({
          canvas,
          hudRefs: {
            sync: hudSyncRef,
            pivots: hudPivotsRef,
            data: hudDataRef,
            fps: hudFpsRef,
            last: hudLastRef,
          },
          isMobile,
        });
        if (cancelled) {
          dispose();
        } else {
          cleanup = dispose;
        }
      } catch (err) {
        // Fail silently — poster will remain visible underneath
        console.warn('[Hero3D] init failed', err);
      }
    })();

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
    };
  }, [shouldUse3D]);

  // SSR / prerender / reduced-motion fallback
  if (!shouldUse3D) {
    return <HeroPoster />;
  }

  // WebGL probe — done on render too for early bail (no useState, just a quick check)
  if (isBrowser) {
    // We only know for sure inside useEffect; rendering canvas + poster underneath
    // gives a graceful fallback if WebGL init fails silently.
  }

  return (
    <>
      {/* Poster sits behind canvas as graceful fallback if WebGL fails */}
      <HeroPoster />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full z-0 hero-3d-canvas"
        style={{ opacity: 0, transition: 'opacity 600ms ease-out' }}
      />

      {/* HUD clusters (decorative) */}
      <div
        aria-hidden="true"
        className="hidden xl:flex absolute z-6 flex-col gap-1 font-mono uppercase pointer-events-none"
        style={{ top: 88, right: 32, fontSize: '10.5px', letterSpacing: '0.10em', color: 'rgba(241,245,249,0.55)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: ACCENT_LIFT_HEX, boxShadow: `0 0 8px ${ACCENT_LIFT_HEX}` }}
          />
          <span style={{ color: ACCENT_LIFT_HEX }}>OSINT · Active investigation</span>
        </div>
        <div>Case · <span style={{ color: 'rgba(241,245,249,0.85)' }}>CS-OS-2024-1247</span></div>
        <div>Pivots · <span ref={hudPivotsRef} style={{ color: 'rgba(241,245,249,0.85)' }}>18</span></div>
      </div>

      <div
        aria-hidden="true"
        className="hidden xl:flex absolute z-6 flex-col gap-1 font-mono uppercase pointer-events-none"
        style={{ bottom: 28, left: 32, fontSize: '10.5px', letterSpacing: '0.10em', color: 'rgba(241,245,249,0.55)' }}
      >
        <div>Surveillance · <span ref={hudDataRef} style={{ color: 'rgba(241,245,249,0.85)' }}>247</span> data points</div>
        <div>Sources · <span ref={hudSyncRef} style={{ color: 'rgba(241,245,249,0.85)' }}>HIBP · sync</span></div>
        <div style={{ opacity: 0.55 }}>HIBP · Shodan · Censys · IntelX</div>
      </div>

      <div
        aria-hidden="true"
        className="hidden lg:flex absolute z-6 flex-col gap-1 font-mono uppercase pointer-events-none"
        style={{ bottom: 28, right: 32, fontSize: '10.5px', letterSpacing: '0.10em', color: 'rgba(241,245,249,0.55)' }}
      >
        <div>FPS · <span ref={hudFpsRef} style={{ color: 'rgba(241,245,249,0.85)' }}>60</span></div>
        <div>Last pivot · <span ref={hudLastRef} style={{ color: 'rgba(241,245,249,0.85)' }}>EMAIL → a***@protonmail.com</span></div>
      </div>
    </>
  );
}
