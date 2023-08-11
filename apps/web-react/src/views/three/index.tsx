import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function Three() {
  useEffect(() => {
    function animate() {
      requestAnimationFrame(animate)

      cube.position.x += 0.01
      cube.position.y += 0.01

      renderer.render(scene, camera)
    }
    const WIDTH = 1000,
      HEIGHT = 700
    const container = document.querySelector('#three-container')
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(WIDTH, HEIGHT)
    container?.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry(100, 60, 20)
    const material = new THREE.MeshLambertMaterial({
      opacity: 0.5, //设置透明度
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    const pointLight = new THREE.PointLight(0xffffff, 1.0)
    pointLight.position.set(-100, 50, 100)
    scene.add(pointLight) //点光源添加到场景中
    const axesHelper = new THREE.AxesHelper(150)
    scene.add(axesHelper)
    const controls = new OrbitControls(camera, renderer.domElement)
    camera.position.set(-200, 200, 200)
    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
    controls.addEventListener('change', function () {
      renderer.render(scene, camera) //执行渲染操作
    }) //监听鼠标、键盘事件
    // animate()
    return () => {
      container?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  })
  return <div className="h-[700px] w-[1000px] mx-auto mt-[50px] border" id="three-container"></div>
}
