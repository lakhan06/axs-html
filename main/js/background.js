// // // Three JS Template


// // var renderer = new THREE.WebGLRenderer({antialias:true , alpha:true});
// // renderer.setSize( window.innerWidth, window.innerHeight );
// // renderer.shadowMap.enabled = false;
// // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// // renderer.shadowMap.needsUpdate = true;


// // document.body.appendChild( renderer.domElement );
// // window.addEventListener('resize', onWindowResize, false);
// // function onWindowResize() {
// //   camera.aspect = window.innerWidth / window.innerHeight;
// //   camera.updateProjectionMatrix();
// //   renderer.setSize( window.innerWidth, window.innerHeight );
// // }
// // var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 500 );
// // var scene = new THREE.Scene();
// // var cameraRange = 3;

// // var setcolor = 0x000000;

// // scene.background = new THREE.Color(setcolor)
// // scene.fog = new THREE.Fog(setcolor, 2.5, 3.5);

// // //-------------------------------------------------------------- SCENE

// // var sceneGruop = new THREE.Object3D();
// // var particularGruop = new THREE.Object3D();
// // var modularGruop = new THREE.Object3D();

// // function generateParticle(num, amp = 2) {
// //   var gmaterial = new THREE.MeshPhysicalMaterial({color:0xFFFFFF, side:THREE.DoubleSide});

// //   var gparticular = new THREE.CircleGeometry(0.2,5);

// //   for (var i = 1; i < num; i++) {
// //     var pscale = 0.001+Math.abs(mathRandom(0.03));
// //     var particular = new THREE.Mesh(gparticular, gmaterial);
// //     particular.position.set(mathRandom(amp),mathRandom(amp),mathRandom(amp));
// //     particular.rotation.set(mathRandom(),mathRandom(),mathRandom());
// //     particular.scale.set(pscale,pscale,pscale);
// //     particular.speedValue = mathRandom(1);

// //     particularGruop.add(particular);
// //   }
// // }
// // generateParticle(200, 2);

// // sceneGruop.add(particularGruop);
// // scene.add(modularGruop);
// // scene.add(sceneGruop);

// // function mathRandom(num = 1) {
// //   var setNumber = - Math.random() * num + Math.random() * num;
// //   return setNumber;
// // }

// // //------------------------------------------------------------- INIT
// // function init() {
// //   for (var i = 0; i<30; i++) {
// //     var geometry = new THREE.IcosahedronGeometry(1);
// //     var material = new THREE.MeshStandardMaterial({shading:THREE.FlatShading, color:0x111111, transparent:false, opacity:1, wireframe:false});
// //     var cube = new THREE.Mesh(geometry, material);
// //     cube.speedRotation = Math.random() * 0.1;
// //     cube.positionX = mathRandom();
// //     cube.positionY = mathRandom();
// //     cube.positionZ = mathRandom();
// //     cube.castShadow = true;
// //     cube.receiveShadow = true;
    
// //     var newScaleValue = mathRandom(0.3);
    
// //     cube.scale.set(newScaleValue,newScaleValue,newScaleValue);
// //     //---
// //     cube.rotation.x = mathRandom(180 * Math.PI / 180);
// //     cube.rotation.y = mathRandom(180 * Math.PI / 180);
// //     cube.rotation.z = mathRandom(180 * Math.PI / 180);
// //     //
// //     cube.position.set(cube.positionX, cube.positionY, cube.positionZ);
// //     modularGruop.add(cube);
// //   }
// // }

// // //------------------------------------------------------------- CAMERA
// // camera.position.set(0, 0, cameraRange);
// // var cameraValue = false;
// // function cameraSet() {
// //   if (!cameraValue) {
// //     TweenMax.to(camera.position, 1, {z:cameraRange,ease:Power4.easeInOut});
// //     cameraValue = true;
// //   } else {
// //     TweenMax.to(camera.position, 1, {z:cameraRange,  x:0, y:0, ease:Power4.easeInOut});
// //     INTERSECTED = null;
// //     cameraValue = false;
// //   }
// // }

// // //------------------------------------------------------------- SCENE
// // var ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1);
// // //scene.add(ambientLight);

// // var light = new THREE.SpotLight(0xFFFFFF, 3);
// // light.position.set(5, 5, 2);
// // light.castShadow = true;
// // light.shadow.mapSize.width = 10000;
// // light.shadow.mapSize.height = light.shadow.mapSize.width;
// // light.penumbra = 0.5;

// // var lightBack = new THREE.PointLight(0x0FFFFF, 1);
// // lightBack.position.set(0, -3, -1);

// // scene.add(sceneGruop);
// // scene.add(light);
// // scene.add(lightBack);

// // var rectSize = 2;
// // var intensity = 100;
// // var rectLight = new THREE.RectAreaLight( 0x0FFFFF, intensity,  rectSize, rectSize );
// // rectLight.position.set( 0, 0, 1 );
// // rectLight.lookAt( 0, 0, 0 );
// // scene.add( rectLight )

// // //  rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
// // // scene.add( rectLightHelper );

// // //------------------------------------------------------------- RAYCASTER
// // var raycaster = new THREE.Raycaster();
// // var mouse = new THREE.Vector2(), INTERSECTED;
// // var intersected;

// // function onMouseMove(event) {
// //   event.preventDefault();
// //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
// //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// // }
// // function onMouseDown(event) {
// //   event.preventDefault();
// //   onMouseMove(event);
// //   raycaster.setFromCamera(mouse, camera);
// //   var intersected = raycaster.intersectObjects(modularGruop.children);
// //   if (intersected.length > 0) {
// //     cameraValue = false;
// //     if (INTERSECTED != intersected[0].object) {
// //       if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
      
// //       INTERSECTED = intersected[0].object;
// //       INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
// //       INTERSECTED.material.emissive.setHex(0xFFFF00);
// //       //INTERSECTED.material.map = null;
// //       //lightBack.position.set(INTERSECTED.position.x,INTERSECTED.position.y,INTERSECTED.position.z);
      
// //       TweenMax.to(camera.position, 1, {
// //         x:INTERSECTED.position.x,
// //         y:INTERSECTED.position.y,
// //         z:INTERSECTED.position.z+3,
// //         ease:Power2.easeInOut
// //       });
      
// //     } else {
// //       if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
// //       INTERSECTED = null;
      
// //     }
// //   }
// //   console.log(intersected.length);
// // }
// // function onMouseUp(event) {
  
// // }

// // window.addEventListener('mousedown', onMouseDown, false);
// // window.addEventListener('mouseup', onMouseUp, false);
// // window.addEventListener('mousemove', onMouseMove, false);

// // //------------------------------------------------------------- RENDER
// // var uSpeed = 0.1;
// // function animate() {
// //   var time = performance.now() * 0.0003;
// //   requestAnimationFrame(animate);
// //   //---
// //   for (var i = 0, l = particularGruop.children.length; i<l; i++) {
// //     var newObject = particularGruop.children[i];
// //     newObject.rotation.x += newObject.speedValue/10;
// //     newObject.rotation.y += newObject.speedValue/10;
// //     newObject.rotation.z += newObject.speedValue/10;
// //     //---
// //     //newObject.position.y = Math.sin(time) * 3;
// //   };
  
// //   for (var i = 0, l = modularGruop.children.length; i<l; i++) {
// //     var newCubes = modularGruop.children[i];
// //     newCubes.rotation.x += 0.01;
// //     newCubes.rotation.y += 0.01;
// //     newCubes.rotation.z += 0.01;
// //     //---
// //     newCubes.position.x = Math.sin(time * newCubes.positionZ) * newCubes.positionY;
// //     newCubes.position.y = Math.cos(time * newCubes.positionX) * newCubes.positionZ;
// //     newCubes.position.z = Math.sin(time * newCubes.positionY) * newCubes.positionX;
// //   }
// //   //---
// //   particularGruop.rotation.y += 0.01;
// //   //---
// //   modularGruop.rotation.y -= ((mouse.x * 4) + modularGruop.rotation.y) * uSpeed;
// //   modularGruop.rotation.x -= ((-mouse.y * 4) + modularGruop.rotation.x) * uSpeed;
// //   camera.lookAt(scene.position);
// //   renderer.render( scene, camera );  
// // }

// // animate();
// // init();

// // // Three JS Template
// // window.addEventListener('load', init, false);
// // function init() {
// //   createWorld();
// //   createLights();
// //   //createGrid();
// //   createPrimitive();
// //   //---
// //   createParticleWord();
// //   animation();
// // }
// // //--------------------------------------------------------------------
// // var scene, camera, renderer, container;
// // var world = new THREE.Object3D();
// // var _width, _height;
// // function createWorld() {
// //   _width = window.innerWidth;
// //   _height= window.innerHeight;
// //   //---
// //   scene = new THREE.Scene();
// //   scene.fog = new THREE.Fog(0x000000, 4, 12);
// //   //scene.background = new THREE.Color(0xF00000);
// //   //---
// //   camera = new THREE.PerspectiveCamera(35, _width/_height, 1, 1000);
// //   camera.position.set(0,0,8);
// //   //---
// //   renderer = new THREE.WebGLRenderer({antialias:true, alpha:false});
// //   renderer.setSize(_width, _height);
// //   renderer.shadowMap.enabled = true;
// //   //---
// //   document.body.appendChild(renderer.domElement);
// //   //---
// //   window.addEventListener('resize', onWindowResize, false);
// // }
// // function onWindowResize() {
// //   _width = window.innerWidth;
// //   _height = window.innerHeight;
// //   renderer.setSize(_width, _height);
// //   camera.aspect = _width / _height;
// //   camera.updateProjectionMatrix();
// //   console.log('- resize -');
// // }
// // //--------------------------------------------------------------------
// // var _ambientLights, _lights;
// // function createLights() {
// //   //_ambientLights = new THREE.AmbientLight(0xFFFFFF, 1);
// //   _ambientLights = new THREE.HemisphereLight(0x111111, 0x000000, 5);
// //   _lights = new THREE.PointLight(0xF00555, 0.5);
// //   _lights.position.set(0, 0, 3);
// //   _lights.castShadow = true;
// //   scene.add(_ambientLights);
// //   scene.add(_lights);
// // }
// // //--------------------------------------------------------------------
// // var createParticleWord = function() {
// //   var geometry = new THREE.IcosahedronGeometry(0.7, 3);
// //   var circle_start = 10;
  
// //   for (var i = 0; i<120; i++) {
// //     var material = new THREE.MeshBasicMaterial( {
// //       color: 0xFFFFFF,
// //       //color: 0xF00000,
// //       //wireframe:false
// //     } );
// //     var circle = new THREE.Mesh( geometry, material );
// //     circle.castShadow  = true;
// //     circle.receivedShadow = true;
    
// //     circle.position.x = -Math.random()* circle_start + Math.random()* circle_start;
// //     circle.position.z = -Math.random()* circle_start + Math.random()* circle_start;
// //     circle.position.y = -Math.random()* circle_start + Math.random()* circle_start;
// //     var circle_scale = Math.random()* 1;
// //     var circle_random = Math.random() * 1;
// //     circle.scale.set(circle_scale, circle_scale, circle_scale);
// //     //TweenMax.to(circle.scale, 1+circle_random, {x:0, y:0, z:0, yoyo:true, repeat:-1, delay:0.04*i, ease:Elastic.easeIn});
// //   //---
// //     var object_pos = world.children[ 0 ];
// //     var object_pos_range = 0;
// //     setInterval(function(){  
// //       object_pos.position.x = -Math.random() * object_pos_range + Math.random() * object_pos_range;
// //       object_pos.position.y = -Math.random() * object_pos_range + Math.random() * object_pos_range;
// //       object_pos.position.z = -Math.random() * object_pos_range + Math.random() * object_pos_range;
// //     }, 1000);
// //     world.add( circle );
// //   }
// //   scene.add(world);
// // }
// // //--------------------------------------------------------------------
// // var primitiveElement = function() {
// //   this.mesh = new THREE.Object3D();
// //   var geo = new THREE.IcosahedronGeometry();
// //   var mat = new THREE.MeshBasicMaterial({color:0x500000, flatShading:false});
// //   var mesh = new THREE.Mesh(geo, mat);
// //   //---
// //   //this.mesh.add(mesh);
// //   //---
// // }
// // var _primitive;
// // function createPrimitive() {
// //   _primitive = new primitiveElement();
// //   _primitive.mesh.scale.set(1,1,1);
// //   scene.add(_primitive.mesh);
// // }
// // function createGrid() {
// //   var gridHelper = new THREE.GridHelper(20, 20);
// //   gridHelper.position.y = -1;
// //   scene.add(gridHelper);
// // }
// // //--------------------------------------------------------------------
// // var distx, momentumx, momentumy, momentumz;
// // function animation() {
// //   var time = Date.now() * 0.003;
// //   _primitive.mesh.rotation.y += 0.003;
// //   world.rotation.y = Math.sin(time) * Math.PI / 180;
// //   world.rotation.z = Math.cos(time) * Math.PI / 180;
// //   var object_place = world.children[ 0 ];
// //   object_place.visible = false;
// //   //---
// //   for ( let i = 0, l = world.children.length; i < l; i ++ ) {
// //     var object = world.children[ i ];
// //     var object_left = world.children[ i-1 ];
// //     if (i>1) {
// //       //---
// //       //object.position.x += Math.sin(time + object_left.position.x) - object.position.x * 0.8;
// //       //object.position.y += Math.cos(time + object_left.position.y) - object.position.y * 0.8;
// //       TweenMax.to(object.position, 2, {
// //         x:Math.cos(object_left.position.x * Math.PI) * 1,
// //         y:Math.sin(object_left.position.y * Math.PI) * 1,
// //         z:Math.cos(object_left.position.z * Math.PI) * 1,
// //         //elay:0.001*i,
// //         //ease:Expo.easeOut
// //       });
// //       //---
// //     }
// //   }
// //   //---
// //   var object_speed = 0.6;
// //   var object_guide = world.children[ 1 ];
// //   object_guide.position.x += Math.sin(object_place.position.x) - object_guide.position.x * object_speed;
// //   object_guide.position.y += Math.cos(object_place.position.y) - object_guide.position.y * object_speed;
// //   object_guide.position.z += object_place.position.z - object_guide.position.z * object_speed;
// //   //---
// //   camera.lookAt(scene.position);
// //   //---
// //   requestAnimationFrame(animation);
// //   renderer.render(scene, camera);
// // }

// var renderer, scene, camera, composer, circle, skelet, particle;

// window.onload = function() {
//   init();
//   animate();
// }

// function init() {
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.autoClear = false;
//   renderer.setClearColor(0x000000, 0.0);
//   document.getElementById('canvas').appendChild(renderer.domElement);

//   scene = new THREE.Scene();

//   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
//   camera.position.z = 400;
//   scene.add(camera);

//   circle = new THREE.Object3D();
//   skelet = new THREE.Object3D();
//   particle = new THREE.Object3D();

//   scene.add(circle);
//   scene.add(skelet);
//   // scene.add(particle);

//   var geometry = new THREE.TetrahedronGeometry(2, 0);
//   var geom = new THREE.IcosahedronGeometry(7, 1);
//   var geom2 = new THREE.IcosahedronGeometry(15, 1);

//   var material = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     shading: THREE.FlatShading
//   });

//   for (var i = 0; i < 1000; i++) {
//     var mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
//     mesh.position.multiplyScalar(90 + (Math.random() * 700));
//     mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
//     particle.add(mesh);
//   }

//   var mat = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     shading: THREE.FlatShading
//   });

//   var mat2 = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//     wireframe: true,
//     side: THREE.DoubleSide

//   });

//   var planet = new THREE.Mesh(geom, mat);
//   planet.scale.x = planet.scale.y = planet.scale.z = 16;
//   circle.add(planet);

//   var planet2 = new THREE.Mesh(geom2, mat2);
//   planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
//   skelet.add(planet2);

//   var ambientLight = new THREE.AmbientLight(0x999999 );
//   scene.add(ambientLight);
  
//   var lights = [];
// lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
// lights[0].position.set( 1, 0, 0 );
// lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
// lights[1].position.set( 0.75, 1, 0.5 );
// lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
// lights[2].position.set( -0.75, -1, 0.5 );
// scene.add( lights[0] );
// scene.add( lights[1] );
// scene.add( lights[2] );
  

//   window.addEventListener('resize', onWindowResize, false);

// };

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate() {
//   requestAnimationFrame(animate);

//   particle.rotation.x += 0.0000;
//   particle.rotation.y -= 0.0040;
//   circle.rotation.x -= 0.0020;
//   circle.rotation.y -= 0.0030;
//   skelet.rotation.x -= 0.0010;
//   skelet.rotation.y += 0.0020;
//   renderer.clear();

//   renderer.render( scene, camera )
// };
