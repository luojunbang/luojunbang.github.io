import setting from '@/setting.json'
import styles from './style/index.module.scss'
import { useState } from 'react'
const menu = [
  {
    label: 'react',
    key: '',
    children: [
      { label: 'three', children: [{ label: 'demo', key: 'three/demo' }] },
      {
        label: 'map',
        children: [
          { label: 'l7', key: 'map/l7' },
          { label: 'l8', key: 'map/l8' },
        ],
      },
      { label: 'utils', children: [{ label: 'colors', key: 'utils/colors' }] },
    ],
  },
  {
    label: 'vue',
    key: 'vue',
    children: [
      {
        label: 'common',

        children: [{ label: 'setting', key: 'vue/setting' }],
      },
      {
        label: 'example',
        children: [
          { label: 'charts', key: 'example/charts' },
          { label: 'image', key: 'example/image' },
          { label: 'monitor', key: 'example/monitor' },
        ],
      },
    ],
  },
]

// /1024px

export default function NavBar() {
  const navHeight = setting.navHeight
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
    const html = document.querySelector('html')
    html && (html.className = theme)
  }
  const Menu = () => (
    <div className="flex-1 flex ">
      {menu.map((i) => {
        return (
          <a key={i.key} href={`/${i.key}`} className="flex-center px-2 no-underline">
            <span>{i.label}</span>
          </a>
        )
      })}
    </div>
  )
  return (
    <>
      <div className={styles.nav + ' fixed z-10 top-0 left-0 w-full'}>
        <nav style={{ height: navHeight }} className="max-w-[1024px] mx-auto flex-center">
          <Menu />
          <button onClick={toggleTheme}>{theme}</button>
        </nav>
      </div>
    </>
  )
}
