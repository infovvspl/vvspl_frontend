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

  const [progress, setProgress] = React.useState(0);
  const loadFinished = useRef(false);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      loadFinished.current = true;
    };

    if (document.readyState === "complete") {
      loadFinished.current = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    init();
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", handleLoad);
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
    startProgressSimulation();
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

  function startProgressSimulation() {
    let current = 0;

    const interval = setInterval(() => {
      if (!loadFinished.current) {
        // Smooth fake increase until 90%
        current += Math.random() * 5;
        current = Math.min(current, 90);
      } else {
        // Once page fully loaded → go to 100%
        current += 5;
      }

      setProgress(Math.min(current, 100));

      if (current >= 100) {
        clearInterval(interval);
        startAnim(); // trigger 3D explosion only after 100%
      }
    }, 100);
  }

  return (
    <>
      {/* <div id="page">
        <div className="cover-container">
          <h1>Simple 3D Reveal Effect</h1>
          <button onClick={initScene}>Trigger</button>
        </div>
      </div> */}

      return (
      <>
        <canvas
          ref={canvasRef}
          id="reveal-effect"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        {progress < 100 && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontFamily: "sans-serif",
              pointerEvents: "none",
              transition: "opacity 0.5s ease",
            }}
          >
            {/* Bold Progress Bar */}
            <div
              style={{
                width: "320px",
                height: "10px",
                background: "rgba(255,255,255,0.15)",
                borderRadius: "6px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "black",
                  transition: "width 0.25s ease",
                }}
              />
            </div>

            {/* Large Percentage */}
            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              {Math.floor(progress)}%
            </div>
          </div>
        )}
      </>
      );




    </>
  );
}