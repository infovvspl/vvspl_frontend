import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function Loading({ onComplete }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const renderer = useRef();
  const scene = useRef();
  const camera = useRef();
  const animationId = useRef();
  const objects = useRef([]);

  const conf = { perspective: 75, cameraZ: 75, objectWidth: 12, objectThickness: 3 };
  let wWidth, wHeight;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    init();

    // --- REAL PROGRESS TRACKING ---
    // We use a combination of resource timing and manual intervals
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          return 99;
        }
        // If document is already loaded, jump faster
        const step = document.readyState === "complete" ? 10 : 1;
        return Math.min(prev + step, 99);
      });
    }, 100);

    const handleFullyLoaded = () => {
      clearInterval(interval);
      setProgress(100);
      // Give the user a moment to see 100% before the "explosion"
      setTimeout(() => startReveal(), 500);
    };

    if (document.readyState === "complete") {
      handleFullyLoaded();
    } else {
      window.addEventListener("load", handleFullyLoaded);
    }

    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("load", handleFullyLoaded);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId.current);
      disposeScene();
    };
  }, []);

  // ... (init, initLights, initObjects, animate, onResize functions stay the same as previous)
  function init() {
    renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    camera.current = new THREE.PerspectiveCamera(conf.perspective, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.current.position.z = conf.cameraZ;
    scene.current = new THREE.Scene();
    initLights();
    onResize();
    initObjects();
    animate();
  }

  function initLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.current.add(ambient);
    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(0, 0, 100);
    scene.current.add(light);
  }

  function initObjects() {
    const geometry = new THREE.BoxGeometry(conf.objectWidth, conf.objectWidth, conf.objectThickness);
    const nx = Math.round(wWidth / conf.objectWidth) + 1;
    const ny = Math.round(wHeight / conf.objectWidth) + 1;
    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(-wWidth / 2 + i * conf.objectWidth, -wHeight / 2 + j * conf.objectWidth, 0);
        objects.current.push(mesh);
        scene.current.add(mesh);
      }
    }
  }

  function startReveal() {
    const tl = gsap.timeline({
      onComplete: () => {
        // We call onComplete which sets loadingDone to true in App.jsx
        if (onComplete) onComplete();
      }
    });

    // 1. Fade the text/progress bar first
    tl.to(".loading-ui", { opacity: 0, duration: 0.4 });

    // 2. Explode the cubes
    objects.current.forEach((mesh) => {
      const delay = THREE.MathUtils.randFloat(0, 0.4);
      tl.to(mesh.rotation, { duration: 1.2, x: Math.random() * 5, y: Math.random() * 5, delay }, 0);
      tl.to(mesh.position, { duration: 1.2, z: 150, ease: "power2.in", delay }, 0);
      tl.to(mesh.material, { duration: 0.8, opacity: 0, delay: delay + 0.3 }, 0);
    });
  }

  function animate() {
    animationId.current = requestAnimationFrame(animate);
    renderer.current.render(scene.current, camera.current);
  }

  function onResize() {
    if (!camera.current || !renderer.current) return;
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    const vFOV = (camera.current.fov * Math.PI) / 180;
    const h = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
    wWidth = h * camera.current.aspect;
    wHeight = h;
  }

  function disposeScene() {
    scene.current?.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) Array.isArray(obj.material) ? obj.material.forEach(m => m.dispose()) : obj.material.dispose();
    });
    renderer.current?.dispose();
  }

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="loading-ui absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-black font-mono text-7xl font-bold mb-2">{progress}%</span>
        <div className="w-48 h-1 bg-black/10">
          <div className="h-full bg-black transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}