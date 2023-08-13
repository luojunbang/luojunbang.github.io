export declare interface Routes {
  name: string
  key: string
  children?: Routes[]
}

export const routes: Routes[] = [
  {
    name: 'menu.utils',
    key: 'utils',
    children: [
      {
        name: 'menu.utils.colors',
        key: 'utils/colors',
      },
    ],
  },
  {
    name: 'menu.map',
    key: 'map',
    children: [
      {
        name: 'menu.map.l7',
        key: 'map/l7',
      },
    ],
  },
  {
    name: 'menu.three',
    key: 'three',
    children: [
      {
        name: 'menu.three.demo',
        key: 'three/demo',
      },
    ],
  },
  {
    name: 'menu.brower',
    key: 'brower',
    children: [
      {
        name: 'menu.brower.webrtc',
        key: 'brower/webrtc',
      },
    ],
  },
]
