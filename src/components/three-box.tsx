"use client";

import { useEffect, useRef } from "react";

import * as THREE from "three";

export default function ThreeScene() {
  const boxRef = useRef<HTMLDivElement>(null);
  const fpsRef = useRef<HTMLDivElement>(null);

  let animationDelta = 0;
  let fpsDelta = 0;
  let framesCount = 0;
  const targetFPS = 60;
  const fpsInterval = 1000 / targetFPS;
  let lastTime = 0;

  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;

  let geometry: THREE.BoxGeometry;
  let material: THREE.MeshBasicMaterial;
  let cube: THREE.Mesh;

  let edges: THREE.EdgesGeometry;
  let line: THREE.LineSegments;

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    if (
      typeof window !== "undefined" &&
      boxRef.current?.children.length === 0 &&
      document
    ) {
      camera = new THREE.PerspectiveCamera(75);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      scene = new THREE.Scene();

      geometry = new THREE.BoxGeometry(1, 1, 1);
      material = new THREE.MeshBasicMaterial({ color: 0x999999 });
      cube = new THREE.Mesh(geometry, material);

      edges = new THREE.EdgesGeometry(geometry);
      line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: 0x000000 })
      );

      boxRef.current?.appendChild(renderer.domElement);

      scene.add(cube);
      scene.add(line);

      camera.aspect = (boxRef.current!.clientWidth * 2) / window.innerHeight;
      camera.updateProjectionMatrix();

      camera.position.z = 2;
      renderer.setSize(boxRef.current!.clientWidth, window.innerHeight / 2);

      requestAnimationFrame((t) => {
        lastTime = t;
        animate(t);
      });
    }

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  function animate(timestamp: number) {
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    animationDelta += delta;
    fpsDelta += delta;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    if (animationDelta >= fpsInterval) {
      framesCount++;

      renderer.render(scene, camera);
      animationDelta = animationDelta % fpsInterval;
    } else {
    }

    if (fpsDelta > 1000) {
      if (fpsRef.current !== null) {
        fpsRef.current.innerHTML = `${framesCount} FPS &#47; ${targetFPS} TARGET FPS`;
      }
      framesCount = 0;
      fpsDelta = fpsDelta % 1000;
    }

    requestAnimationFrame((t) => animate(t));
  }

  function onWindowResize() {
    camera.aspect = (boxRef.current!.clientWidth * 2) / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(boxRef.current!.clientWidth, window.innerHeight / 2);
  }

  return (
    <div className="flex flex-col items-start">
      <div className="mx-auto w-full" ref={boxRef}></div>
      <div
        className="origin-left -rotate-90 text-xs text-gray-700"
        ref={fpsRef}
      ></div>
    </div>
  );
}
