import setting from '@/setting.json'
import styles from './style/index.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface MenuItem {
  label: string
  key?: string
  children?: MenuItem[]
}

const menuList: MenuItem[] = [
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
const Menu = ({ menu }: { menu: MenuItem[] }) => {
  console.log(menu)

  return (
    <div className="">
      {menu.map((i) => (
        <div>{i.label}</div>
      ))}
    </div>
  )
}

export default function NavBar() {
  const navHeight = setting.navHeight
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    if (theme === 'dark') setTheme('light')
    const html = document.querySelector('html')
    html && (html.className = theme)
  }

  return (
    <>
      <div className={styles.nav + ' fixed z-10 top-0 left-0 w-full'}>
        <nav style={{ height: navHeight }} className="max-w-[1024px] mx-auto flex-center">
          <Menu menu={menuList} />
          <button onClick={toggleTheme}>{theme}</button>
        </nav>
      </div>
    </>
  )
}
