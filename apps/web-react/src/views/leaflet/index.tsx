import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngTuple } from 'leaflet'
import { useEffect } from 'react'
import MapImage from './map/logo.jpg'
import { Scene, ImageLayer, PointLayer, LineLayer, PolygonLayer, MouseLocation } from '@antv/l7'
import { Map } from '@antv/l7-maps'

import { ThreeLayer, ThreeRender } from '@antv/l7-three'
import * as THREE from 'three'
import { AnimationMixer } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Home() {
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null
    const clearTimer = () => {
      timer && clearInterval(timer)
    }
    const map = new Map({
      center: [900, 900],
      zoom: 2,
      version: 'SIMPLE',
      maxZoom: 5,
      minZoom: 0,
      mapSize: 1800,
      pitchEnabled: false,
      rotateEnabled: false,
    })
    // @ts-ignore
    const scene = new Scene({
      id: 'map',
      map: map,
      logoVisible: false,
    })
    console.log()
    const arr: [number, number][] = []
    console.log()

    scene.on('click', (e) => {
      console.log(e)
      // @ts-ignore
      arr.push(scene.getMapService().simpleMapCoord.project([e.lngLat.lng, e.lngLat.lat]))
      console.log(JSON.stringify(arr))
    })
    console.log(scene)
    scene.setBgColor('rgb(230, 230, 230)')
    const imagelayer = new ImageLayer({}).source(MapImage, {
      parser: {
        type: 'image',
        extent: [0, 0, 300, 300],
      },
    })
    scene.on('loaded', () => {
      const mouseLocation = new MouseLocation({
        transform: (position) => {
          return position
        },
      })
      scene.addControl(mouseLocation)
      scene.addLayer(imagelayer)
      const lineLayer = new LineLayer({ zIndex: 5 })
        .source(
          [
            // ...[
            //   {
            //     level: 0,
            //     path: [
            //       [0, 0],
            //       [0, 2048],
            //       [2048, 2048],
            //       [2048, 0],
            //       [0, 0],
            //     ],
            //   },
            // ],
            {
              level: 50,
              path: [
                [1200, 1200],
                [1400, 1200],
                [1400, 1400],
                [1200, 1400],
                [1200, 1200],
              ],
            },
          ],
          {
            parser: {
              type: 'json',
              coordinates: 'path',
            },
          },
        )
        .size('level', (level) => {
          return [1, level * 100000]
        })
        .shape('line')
        .color('red')
        .style({
          heightfixed: true,
          opacity: 1,
        })
        .animate({
          interval: 0.6,
          trailLength: 1.5,
          duration: 6,
        })
      scene.addLayer(lineLayer)

      // 几何体
      const data = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              floor: 50,
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [429, 317],
                  [480, 252],
                  [508, 269],
                  [527, 277],
                  [552, 278],
                  [578, 267],
                  [599, 254],
                  [649, 324],
                  [607, 345],
                  [598, 352],
                  [589, 364],
                  [582, 383],
                  [584, 403],
                  [583, 441],
                  [487, 438],
                  [486, 420],
                  [487, 381],
                  [481, 363],
                  [470, 351],
                  [446, 332],
                  [425, 317],
                ],
              ],
            },
          },
          {
            type: 'Feature',
            properties: {
              floor: 200,
            },
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [900, 900],
                  [600, 900],
                  [600, 600],
                  [900, 600],
                  [900, 900],
                ],
              ],
            },
          },
        ],
      }
      const layer = new PolygonLayer({
        zIndex: 3,
      })
        .source(data)
        .shape('extrude')
        .size('floor', (f) => f * 100000)
        .style({
          heightfixed: true,
          opacity: 1,
        })
      scene.addLayer(layer)
      let x = 0,
        y = 50
      const sourceOption = { parser: { type: 'json', x: 'x', y: 'y' } }
      const robot = new PointLayer({ zIndex: 10 }).source([{ x, y }], sourceOption).shape('circle').size(10).color('red').style({
        opacity: 0.3,
        strokeWidth: 2,
      })

      scene.addLayer(robot)
      // timer = setInterval(() => {
      //   if (x >= 2048 || y >= 2048) {
      //     clearTimer()
      //     return
      //   }
      //   x += 10
      //   y += 10
      //   robot.setData([{ x, y }], sourceOption)
      // }, 30)

      // scene.registerRenderService(ThreeRender)

      // const threeJSLayer = new ThreeLayer({
      //   enableMultiPassRenderer: false,
      //   // @ts-ignore
      //   onAddMeshes: (threeScene, layer) => {
      //     // @ts-ignore
      //     threeScene.add(new THREE.AmbientLight(0xffffff))
      //     const sunlight = new THREE.DirectionalLight(0xffffff, 0.25)
      //     sunlight.position.set(0, 80, 80)
      //     sunlight.matrixWorldNeedsUpdate = true
      //     // @ts-ignore
      //     threeScene.add(sunlight)

      //     const center = {
      //       lng: 50,
      //       lat: 50,
      //     }

      //     const cubeGeometry = new THREE.BoxGeometry(80, 80, 80)
      //     const cubeMaterial = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
      //     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      //     // @ts-ignore
      //     layer.setObjectLngLat(cube, [center.lng + 0.05, center.lat], 0)
      //     // @ts-ignore
      //     threeScene.add(cube)

      //     // 使用 Three.js glTFLoader 加载模型
      //     const loader = new GLTFLoader()
      //     loader.load('https://gw.alipayobjects.com/os/bmw-prod/3ca0a546-92d8-4ba0-a89c-017c218d5bea.gltf', (gltf) => {
      //       const gltfScene = gltf.scene
      //       setDouble(gltfScene)
      //       // @ts-ignore
      //       layer.adjustMeshToMap(gltfScene)
      //       // gltfScene.scale.set(1000, 1000, 1000)
      //       // @ts-ignore
      //       layer.setMeshScale(gltfScene, 1000, 1000, 1000)

      //       // @ts-ignore
      //       layer.setObjectLngLat(gltfScene, [center.lng, center.lat], 0)

      //       const animations = gltf.animations
      //       if (animations && animations.length) {
      //         const mixer = new THREE.AnimationMixer(gltfScene)

      //         const animation = animations[2]

      //         const action = mixer.clipAction(animation)

      //         action.play()
      //         // @ts-ignore
      //         layer.addAnimateMixer(mixer)
      //       }
      //       // layer.setObjectLngLat(gltfScene, [center.lng + 0.05, center.lat] as ILngLat, 0)
      //       let t = 0
      //       setInterval(() => {
      //         t += 0.01
      //         // @ts-ignore
      //         layer.setObjectLngLat(gltfScene, [center.lng, center.lat + Math.sin(t) * 0.1], 0)
      //       }, 16)

      //       // 向场景中添加模型
      //       // @ts-ignore
      //       threeScene.add(gltfScene)
      //       // 重绘图层
      //       layer.render()
      //     })
      //   },
      // }).animate(true)
      // scene.addLayer(threeJSLayer)
    })

    return () => {
      clearTimer()
    }
  })
  return (
    <div className="h-screen bg-slate-800 p-20 w-screen overflow-hidden relative">
      <div className="w-1 h-1 bg-red-600 absolute left-1/2 top-1/2 z-50 "></div>
      <div className="h-[600px] w-[600px] absolute mx-auto top-1/2 translate-y-[-300px] bg-white m-auto" id="map"></div>
    </div>
  )
}

// const polyline = L.polyline(path, { color: 'red' }).addTo(map)
// console.log(polyline)
// polyline.addEventListener('mouseover', (e) => {
//   e.target.setStyle({ color: 'green', weight: 5 })
// })
// polyline.addEventListener('mouseout', (e) => {
//   e.target.setStyle({ color: 'red', weight: 3 })
// })

function setDouble(object: any) {
  if (object.children && object.children.length && object.children.length > 0) {
    object.children.map((child: any) => setDouble(child))
  } else if (object.material) {
    object.material.side = THREE.DoubleSide
  }
}

const y = (lat: number) => 1 - (180 - (180 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))) / 360
