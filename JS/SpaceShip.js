let container;
let camera;
let renderer;
let scene;
let legoShipSpace;
let controls;
let textMesh2;
let star;

function init() {
    container = document.querySelector(".Scene");

    //Create scene
    scene = new THREE.Scene();
    //scene.background = new THREE.Color(0X000000)

    // Background
    // const spaceTexture = new THREE.TextureLoader().load('./Gallary/juso.jpg');
    // scene.background = spaceTexture;

    //Camera setup
    camera = new THREE.PerspectiveCamera(95, container.clientWidth / container.clientHeight, 0.01, 1000);
    camera.position.set(5, 40, 99);
    camera.rotation.y = 45 / 180 * Math.PI;

    //light
    const ambient = new THREE.AmbientLight(0x04040, 0);
    scene.add(ambient);
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(50, 150, 100);
    light.castShadow = true;
    scene.add(light);

    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    //OrbitControl
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);


    //add stars to the scene
    function addStar() {
        const geometry = new THREE.SphereGeometry(0.3, 10, 15);
        const material = new THREE.MeshStandardMaterial({ color: 0x040526 });
        star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3)
            .fill()
            .map(() => THREE.MathUtils.randFloatSpread(200));

        star.position.set(x, y, z);
        scene.add(star);
    }
    Array(300).fill().forEach(addStar);


    //Text
    const txtLoader = new THREE.FontLoader();
    const Bio = "Education & Career : \n" +
        "MCSD, Microsoft Certified Developer 2000. \n" +
        "Computer Science, B.Sc, 2005. \n" +
        "Masters in Business Administration, MBA, 2011. \n" +
        "Supply Chain Management, 2010 - 2020. \n" +
        "FullStack Development, Tsofn, 2020. \n" +
        "React Native && JavaScript Ninja, 2020 - 2022. \n\n" +
        "Recreational : \n" +
        "PADI Master Diver and IANT Technical Diving. \n" +
        "Mix Martial Arts Instructor, Wingate, 2018 \n"
    
    txtLoader.load('../fonts/optimer_bold.json', function(font) {
        const geometry = new THREE.TextGeometry(Bio, {
            font: font,
            size: 10,
            height: 1,
            curveSegments: 5,
            bevelEnabled: false,
            bevelOffset: 5,
            bevelSegments: 5,
            bevelSize: 5,
            bevelThickness: 5
        });
        const materials = [
            new THREE.MeshPhongMaterial({ color: 0x040526 }), // front
            new THREE.MeshPhongMaterial({ color: 0x660e88 }), // side

        ];
        textMesh2 = new THREE.Mesh(geometry, materials);
        //textMesh2.castShadow = true
        textMesh2.position.y = -90
        textMesh2.position.x = -50
        textMesh2.position.z = -90
        textMesh2.rotation.set(-.1, -.2, 0)
        scene.add(textMesh2)
        animate()
    });

    // Moon
    const moonTexture = new THREE.TextureLoader().load('./Gallary/moon.jpg');
    const normalTexture = new THREE.TextureLoader().load('./Gallary/normal.jpg');
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(10, 27, 30),
        new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: normalTexture,
        })
    );
    scene.add(moon);
    moon.position.z = 20;
    moon.position.setX(-35);
    moon.position.setY(-15);

    // Avatar
    const miTexture = new THREE.TextureLoader().load('./Gallary/me.jpeg');
    const khaled = new THREE.Mesh(new THREE.BoxGeometry(7, 7, 7), new THREE.MeshBasicMaterial({ map: miTexture }));
    scene.add(khaled);
    khaled.position.set(10, 5, 25)

    //Load spaceship into scene
    let loader = new THREE.GLTFLoader();
    loader.load("./3D/Space/lego_space/scene.gltf", function(gltf) {
        legoShipSpace = gltf.scene.children[0]
        legoShipSpace.scale.set(1, 1, 1)
        scene.add(gltf.scene);
        animate()
    });

}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    if (textMesh2.position.y < 0) {
        textMesh2.position.x -= .025;
        textMesh2.position.y += .05;
    }

}
init();

function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}


window.addEventListener("resize", onWindowResize);
