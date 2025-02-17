window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = 960;
  const height = 540;

 //const width = window.innerWidth;
 //const height = window.innerHeight;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

 //renderer.setPixelRatio(window.devicePixelRatio);
 //renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, +1000)

  // 箱を作成
  const geometry = new THREE.SphereGeometry(120, 500);
  const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);




  // 平行光源
  const light_1 = new TREE.DirectionalLight(0xFFFFFF,2);
  light_1.position.set(1,1, 1);
  
  // シーンに追加
  scene.add(light_1);
  
  // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);
  }
}