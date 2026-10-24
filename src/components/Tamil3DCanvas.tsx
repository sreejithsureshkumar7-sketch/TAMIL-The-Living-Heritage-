import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Tamil3DCanvasProps {
  reducedMotion?: boolean;
  lowPowerMode?: boolean;
}

const TAMIL_GLYPHS = [
  'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ',
  'க்', 'ங்', 'ச்', 'ஞ்', 'ட்', 'ண்', 'த்', 'ந்', 'ப்', 'ம்',
  'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன', 'ஃ',
  'தமிழ்', 'அறம்', 'செம்மொழி'
];

export const Tamil3DCanvas: React.FC<Tamil3DCanvasProps> = ({
  reducedMotion = false,
  lowPowerMode = false,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !lowPowerMode,
        powerPreference: lowPowerMode ? 'low-power' : 'high-performance',
      });
    } catch {
      // WebGL not supported, fallback cleanly
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPowerMode ? 1 : 1.5));
    renderer.setClearColor(0x090706, 0); // transparent background
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090706, 0.0035);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 85;

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5db, 0.9);
    scene.add(ambientLight);

    const goldLampLight = new THREE.PointLight(0xF6D889, 2.5, 200);
    goldLampLight.position.set(0, 10, 50);
    scene.add(goldLampLight);

    const maroonBackLight = new THREE.PointLight(0x781a20, 1.8, 180);
    maroonBackLight.position.set(0, -30, -20);
    scene.add(maroonBackLight);

    // Create textures for Tamil letters
    const createGlyphTexture = (char: string, isForeground: boolean) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      ctx.clearRect(0, 0, 256, 256);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Outer golden halo
      const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 120);
      grad.addColorStop(0, isForeground ? 'rgba(246, 216, 137, 0.95)' : 'rgba(201, 164, 92, 0.7)');
      grad.addColorStop(0.7, isForeground ? 'rgba(201, 164, 92, 0.4)' : 'rgba(119, 113, 106, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // Shadow / ambient glow
      ctx.shadowColor = '#F6D889';
      ctx.shadowBlur = isForeground ? 22 : 8;

      ctx.font = `600 ${char.length > 2 ? '68px' : '100px'} "Noto Serif Tamil", "Noto Sans Tamil", serif`;
      ctx.fillStyle = grad;
      ctx.fillText(char, 128, 128);

      // Inner bright metallic core highlight
      ctx.shadowBlur = 0;
      ctx.fillStyle = isForeground ? '#FFF3D4' : '#E8D6AD';
      ctx.font = `700 ${char.length > 2 ? '66px' : '98px'} "Noto Serif Tamil", "Noto Sans Tamil", serif`;
      ctx.fillText(char, 128, 128);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      return texture;
    };

    // Layer 1: Background letters (small, dim, soft)
    // Layer 2: Middle-ground letters
    // Layer 3: Foreground letters (larger, metallic edges, rotating)
    interface LetterObject {
      mesh: THREE.Mesh;
      baseX: number;
      baseY: number;
      baseZ: number;
      speedX: number;
      speedY: number;
      rotSpeed: number;
      phase: number;
      depthLayer: number;
    }

    const letters: LetterObject[] = [];
    const count = lowPowerMode ? 18 : 36;

    for (let i = 0; i < count; i++) {
      const char = TAMIL_GLYPHS[i % TAMIL_GLYPHS.length];
      const depthLayer = i % 3; // 0 = bg, 1 = mid, 2 = fg
      const isForeground = depthLayer === 2;

      const texture = createGlyphTexture(char, isForeground);
      if (!texture) continue;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: depthLayer === 0 ? 0.28 : depthLayer === 1 ? 0.55 : 0.88,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });

      const size = depthLayer === 0 ? 9 : depthLayer === 1 ? 14 : 20;
      const geometry = new THREE.PlaneGeometry(size, size);
      const mesh = new THREE.Mesh(geometry, material);

      const rangeX = 140;
      const rangeY = 90;
      const rangeZ = depthLayer === 0 ? -60 : depthLayer === 1 ? -15 : 25;

      const baseX = (Math.random() - 0.5) * rangeX;
      const baseY = (Math.random() - 0.5) * rangeY;
      const baseZ = rangeZ + (Math.random() - 0.5) * 20;

      mesh.position.set(baseX, baseY, baseZ);

      scene.add(mesh);
      letters.push({
        mesh,
        baseX,
        baseY,
        baseZ,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: 0.03 + Math.random() * 0.06,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        phase: Math.random() * Math.PI * 2,
        depthLayer,
      });
    }

    // Golden dust particles (Temple Sanctum Atmosphere)
    const particleCount = lowPowerMode ? 100 : 260;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      particleSpeeds[i] = 0.02 + Math.random() * 0.05;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 235, 170, 1)');
      grad.addColorStop(0.3, 'rgba(246, 216, 137, 0.7)');
      grad.addColorStop(1, 'rgba(201, 164, 92, 0)');
      pCtx.fillStyle = grad;
      pCtx.beginPath();
      pCtx.arc(16, 16, 16, 0, Math.PI * 2);
      pCtx.fill();
    }
    const particleTex = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 1.8,
      map: particleTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse / Touch Parallax listener
    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - halfW) * 0.025;
      mouseRef.current.targetY = -(e.clientY - halfH) * 0.02;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        mouseRef.current.targetX = (touch.clientX - halfW) * 0.015;
        mouseRef.current.targetY = -(touch.clientY - halfH) * 0.015;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      camera.position.x = mouseRef.current.x;
      camera.position.y = mouseRef.current.y;
      camera.lookAt(0, 0, 0);

      const motionScale = reducedMotion ? 0.1 : 1.0;

      // Animate floating Tamil letters
      letters.forEach((item) => {
        item.mesh.position.y += item.speedY * motionScale;
        item.mesh.position.x += Math.sin(time * 0.5 + item.phase) * item.speedX * motionScale;

        // Gentle 3D rotation for foreground and middle letters
        if (item.depthLayer >= 1) {
          item.mesh.rotation.z += item.rotSpeed * motionScale;
          item.mesh.rotation.y = Math.sin(time * 0.3 + item.phase) * 0.15;
        }

        // Loop back when drifting too high
        if (item.mesh.position.y > 60) {
          item.mesh.position.y = -60;
          item.mesh.position.x = item.baseX + (Math.random() - 0.5) * 20;
        }
      });

      // Animate golden dust particles
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += particleSpeeds[i] * motionScale;
        posArray[i * 3] += Math.sin(time * 0.8 + i) * 0.03 * motionScale;

        if (posArray[i * 3 + 1] > 70) {
          posArray[i * 3 + 1] = -70;
        }
      }
      posAttr.needsUpdate = true;

      // Gentle pulsating lamp light
      goldLampLight.intensity = 2.0 + Math.sin(time * 2.5) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js objects
      letters.forEach((l) => {
        l.mesh.geometry.dispose();
        if (Array.isArray(l.mesh.material)) {
          l.mesh.material.forEach((m) => m.dispose());
        } else {
          l.mesh.material.dispose();
        }
      });
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, lowPowerMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      data-testid="tamil-3d-background"
    />
  );
};
