"use client";

import { useEffect, useRef, useState } from "react";

import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  );
  const material = new THREE.MeshBasicMaterial({ color: 0x999999 });
  const edges = new THREE.EdgesGeometry(geometry);
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x000000 })
  );
  const cube = new THREE.Mesh(geometry, material);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const scene = new THREE.Scene();
  camera.position.z = 2;
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

  useEffect(() => {
    if (typeof window !== "undefined") {
      scene.add(cube);
      scene.add(line);

      animate();

      containerRef.current?.appendChild(renderer.domElement);
    }
  }, []);

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    renderer.render(scene, camera);

    requestAnimationFrame(() => animate());
  }

  return <div ref={containerRef}></div>;
}
