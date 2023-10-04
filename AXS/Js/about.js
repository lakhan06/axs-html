
const threeContainer = document.getElementById('three-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({

      alpha: true,
  }
  );
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  threeContainer.appendChild(renderer.domElement);


  const particleMaterial = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.05,
      transparent: true,
      alphaTest: 0.5,
      map: new THREE.TextureLoader().load('images/PngItem_1484999.png'),
      
  });

  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = [];
  const numParticles = 1000;

  for (let i = 0; i < numParticles; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);
      const x = Math.sin(theta) * Math.cos(phi) * 4;
      const y = Math.sin(theta) * Math.sin(phi) * 4;
      const z = Math.cos(theta) * 4;

      particlePositions.push(x, y, z);
  }

  particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

  const uvs = new Float32Array(numParticles * 2);
  for (let i = 0; i < numParticles; i++) {
      const u = i / (numParticles - 1);
      const v = 0.5; // Center of the texture (latitude)
      uvs[i * 2] = u;
      uvs[i * 2 + 1] = v;
  }

  particleGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  camera.position.z = 10;

  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  document.addEventListener('mouseenter', () => {
      isDragging = true;
  });

  document.addEventListener('mouseleave', () => {
      isDragging = false;
  });

  document.addEventListener('mousemove', (event) => {
      if (isDragging) {
        
          const deltaX = event.clientX - previousMousePosition.x;
          const deltaY = event.clientY - previousMousePosition.y;

          particleSystem.rotation.x += deltaY * 0.001;
          particleSystem.rotation.y += deltaX * 0.001;

          previousMousePosition = { x: event.clientX, y: event.clientY };
      }
  });

  const animate = () => {
      requestAnimationFrame(animate);

      particleSystem.rotation.x += 0.004;
      particleSystem.rotation.y += 0.004;

      renderer.render(scene, camera);
  };

  animate();
  
