"use client";

import { useEffect, useRef, useState } from "react";

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

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x999999 });
  const cube = new THREE.Mesh(geometry, material);

  const edges = new THREE.EdgesGeometry(geometry);
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x000000 })
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      boxRef.current?.children.length === 0
    ) {
      scene.add(cube);
      scene.add(line);

      camera.position.z = 2;
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

      requestAnimationFrame((t) => {
        lastTime = t;
        animate(t);
      });

      boxRef.current?.appendChild(renderer.domElement);
    }
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

  return (
    <div className="flex flex-col items-start">
      <div className="mx-auto" ref={boxRef}></div>
      <div
        className="origin-left -rotate-90 text-xs text-gray-700"
        ref={fpsRef}
      ></div>
    </div>
  );
}
