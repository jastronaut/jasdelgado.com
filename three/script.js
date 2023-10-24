import * as THREE from 'three';
import { DragControls } from 'three/addons/controls/DragControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
const textureLoader = new THREE.TextureLoader();

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

console.log('hi');

function createHeart() {
	const shape = new THREE.Shape();
	const x = 1.5;
	const y = 1;
	shape.moveTo(x + 1.25, y + 1.25);
	shape.bezierCurveTo(x + 1.25, y + 1.25, x + 1, y, x, y);
	shape.bezierCurveTo(x - 1.5, y, x - 1.5, y + 1.75, x - 1.5, y + 1.75);
	shape.bezierCurveTo(
		x - 1.5,
		y + 2.75,
		x - 0.75,
		y + 3.85,
		x + 1.25,
		y + 4.75
	);
	shape.bezierCurveTo(x + 3, y + 3.85, x + 4, y + 2.25, x + 4, y + 1.75);
	shape.bezierCurveTo(x + 4, y + 1.75, x + 4, y, x + 2.5, y);
	shape.bezierCurveTo(x + 1.75, y, x + 1.25, y + 1.25, x + 1.25, y + 1.25);

	const extrudeSettings = {
		steps: 2,
		depth: 1,
		bevelEnabled: true,
		bevelThickness: 0.1,
		bevelSize: 0.39,
		bevelSegments: 3,
	};

	const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
	const material = new THREE.MeshBasicMaterial({ color: 0x88aaaa });

	const mesh = new THREE.Mesh(geometry, material);

	mesh.castShadow = true;
	mesh.receiveShadow = false;
	mesh.position.x = 0;
	mesh.position.y = 0;
	mesh.position.z = -3.75;
	// mesh.position.y = -3;
	// mesh.position.z = -3;
	mesh.rotation.z = (3 * Math.PI) / 4;
	return mesh;
}

// create perspective camera

// === FRUSTUM ===

// 75 degrees in vertical dimension
const fov = 90;
// display aspect of canvas - default is 300px by 150px = 2
const aspect = 1; // the canvas default
const near = 0.05;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const bgTexture = textureLoader.load('./three/bg.png');

bgTexture.wrapS = THREE.RepeatWrapping;
bgTexture.wrapT = THREE.RepeatWrapping;
bgTexture.repeat.set(4, 4);
const scene = new THREE.Scene();
scene.background = bgTexture;
scene.background.repeat.set(1, 1);

const models = {};

function loadModel(name, path, cb) {
	const gltfLoader = new GLTFLoader();
	const url = path;

	gltfLoader.load(url, gltf => {
		const root = gltf.scene;

		root.castShadow = true;
		root.receiveShadow = false;
		const updated = cb(root);
		models[name] = updated;
		scene.add(updated);
		new DragControls([root], camera, renderer.domElement);
	});
}

function createCubeGeometry(x, y, z) {
	return new THREE.BoxGeometry(x, y, z);
}

// the box

const texture = textureLoader.load('./three/guysbelike.png');

const geometry1 = createCubeGeometry(1, 1, 1);

const material1 = new THREE.MeshBasicMaterial({ map: texture }); // greenish blue

// mesh is geometry + material
const cube1 = new THREE.Mesh(geometry1, material1);

cube1.castShadow = true; //default
cube1.receiveShadow = false; //default
// add to scene
scene.add(cube1);

function createPlane() {
	// create a plane
	const planeTexture = textureLoader.load('./three/schizo.jpeg');
	const planeGeometry = new THREE.PlaneGeometry(7, 4, 1);
	const planeMaterial = new THREE.MeshStandardMaterial({
		color: 0xffff00,
		// side: THREE.DoubleSide,
		map: planeTexture,
	});
	const plane = new THREE.Mesh(planeGeometry, planeMaterial);
	// plane.rotation.y = 0.3;
	// plane.rotation.z = -0.6;
	plane.rotation.x = -0.3;

	plane.position.y = 0;
	plane.position.z = -1;
	plane.receiveShadow = true;

	scene.add(plane);
}

const h = createHeart();

scene.add(h);

loadModel(
	'pizza',
	'./three/models/low_poly_slice_of_cheese_pizza/scene.gltf',
	model => {
		model.rotation.z = 3;
		return model;
	}
);

loadModel('burger', './three/models/mcdonalds_big_mac/scene.gltf', model => {
	model.position.z = 1;

	return model;
});

const objects = [h];
const dragControls = new DragControls(objects, camera, renderer.domElement);

/// ====== lights

// const light = new THREE.SpotLight(0xffffff);
// light.castShadow = true; // default false
// light.position.set(-1, 2, 4);

// //Set up shadow properties for the light
// light.shadow.mapSize.width = 512; // default
// light.shadow.mapSize.height = 512; // default
// light.shadow.camera.near = 0.5; // default
// light.shadow.camera.far = 500; // default
// light.shadow.focus = 1; // default

// scene.add(light);

{
	const color = 0xffffff;
	const intensity = 3;
	const light = new THREE.DirectionalLight(color, intensity);
	light.position.set(-1, 2, 4);
	scene.add(light);
}

// first need to change material

// events

/*

// Initialize raycaster and mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedObject = null;

// Update the mouse vector on mouse move
window.addEventListener('mousemove', event => {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	if (selectedObject) {
		// Update the position of the selected object based on raycaster
		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObject(selectedObject);
		if (intersects.length > 0) {
			selectedObject.position.copy(intersects[0].point);
		}
	}
});

// Select or deselect object on mouse down
window.addEventListener('mousedown', () => {
	console.log('hi2');
	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObjects([h]);

	if (intersects.length > 0) {
		selectedObject = intersects[0].object;
	} else {
		selectedObject = null;
	}
});

window.addEventListener('mouseup', () => {
	selectedObject = null;
});

*/
renderer.render(scene, camera);

/// ===== animation
function render(time) {
	time *= 0.001; // convert time to seconds

	// make this responsive
	const canvas = renderer.domElement;
	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	camera.updateProjectionMatrix();

	// cube movement

	cube1.position.x = -1 * 3 * Math.sin(time);
	// cube1.position.y = 0.5 * Math.sin(time);
	cube1.position.y = -1 * 0.05 * Math.cos(time);

	cube1.rotation.x = time / 2;

	h.rotation.x = time / 2;

	if (models['pizza']) {
		models['pizza'].rotation.y = time / 2;
		models['pizza'].rotation.z = time / 2;
	}

	renderer.render(scene, camera);

	requestAnimationFrame(render);
}
requestAnimationFrame(render);
