import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function Loading({ onComplete }) {
  const canvasRef = useRef(null);

  const renderer = useRef();
  const scene = useRef();
  const camera = useRef();
  const animationId = useRef();
  const objects = useRef([]);

  const conf = {
    color: 0xffffff,
    objectWidth: 12,
    objectThickness: 3,
    ambientColor: 0x808080,
    perspective: 75,
    cameraZ: 75,
  };

  let width, height, wWidth, wHeight;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    init();
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId.current);
      disposeScene();
      renderer.current?.dispose();
    };
  }, []);

  function init() {
    renderer.current = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    // ✅ ADD THESE LINES
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.outputColorSpace = THREE.SRGBColorSpace;
    renderer.current.toneMapping = THREE.NoToneMapping;

    renderer.current.setSize(window.innerWidth, window.innerHeight);

    camera.current = new THREE.PerspectiveCamera(
      conf.perspective,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.current.position.z = conf.cameraZ;

    scene.current = new THREE.Scene();

    initScene();
    animate();
  }


  function initScene() {
    onResize();
    disposeScene();
    scene.current = new THREE.Scene();
    initLights();
    initObjects();
  }

  function disposeScene() {
    if (!scene.current) return;

    scene.current.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });

    objects.current = [];
  }

  function initLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.current.add(ambient);

    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(0, 0, 100);
    scene.current.add(light);
  }



  function initObjects() {
    const geometry = new THREE.BoxGeometry(
      conf.objectWidth,
      conf.objectWidth,
      conf.objectThickness
    );

    const nx = Math.round(wWidth / conf.objectWidth) + 1;
    const ny = Math.round(wHeight / conf.objectWidth) + 1;

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 1,
        });


        const mesh = new THREE.Mesh(geometry, material);

        const x = -wWidth / 2 + i * conf.objectWidth;
        const y = -wHeight / 2 + j * conf.objectWidth;

        mesh.position.set(x, y, 0);

        objects.current.push(mesh);
        scene.current.add(mesh);
      }
    }

    document.body.classList.add("loaded");
    startAnim();
  }

  function startAnim() {
    document.body.classList.remove("revealed");

    objects.current.forEach((mesh) => {
      mesh.rotation.set(0, 0, 0);
      mesh.material.opacity = 1;
      mesh.position.z = 0;

      const delay = THREE.MathUtils.randFloat(1, 2);
      const rx = THREE.MathUtils.randFloatSpread(2 * Math.PI);
      const ry = THREE.MathUtils.randFloatSpread(2 * Math.PI);
      const rz = THREE.MathUtils.randFloatSpread(2 * Math.PI);

      gsap.to(mesh.rotation, {
        duration: 2,
        x: rx,
        y: ry,
        z: rz,
        delay,
      });

      gsap.to(mesh.position, {
        duration: 2,
        z: 80,
        delay: delay + 0.5,
        ease: "power1.out",
      });

      gsap.to(mesh.material, {
        duration: 2,
        opacity: 0,
        delay: delay + 0.5,
      });
    });

    setTimeout(() => {
      document.body.classList.add("revealed");
      if (onComplete) onComplete();
    }, 4500);
  }

  function animate() {
    animationId.current = requestAnimationFrame(animate);
    renderer.current.render(scene.current, camera.current);
  }

  function onResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    camera.current.aspect = width / height;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(width, height);

    const size = getRendererSize();
    wWidth = size[0];
    wHeight = size[1];
  }

  function getRendererSize() {
    const cam = new THREE.PerspectiveCamera(
      conf.perspective,
      camera.current.aspect
    );

    const vFOV = (cam.fov * Math.PI) / 180;
    const height =
      2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
    const width = height * cam.aspect;

    return [width, height];
  }

  return (
    <>
      {/* <div id="page">
        <div className="cover-container">
          <h1>Simple 3D Reveal Effect</h1>
          <button onClick={initScene}>Trigger</button>
        </div>
      </div> */}

      <canvas ref={canvasRef} id="reveal-effect" />
    </>
  );
}