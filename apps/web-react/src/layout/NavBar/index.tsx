import setting from '@/setting.json'
import styles from './style/index.module.scss'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { kl } from '@/utils'
interface MenuItem {
  label?: string
  key?: string
  children?: MenuItem[]
}

const menuList: MenuItem[] = [
  {
    label: 'react',
    key: 'react',
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
        children: [
          {
            label: 'common1',
            children: [{ label: 'setting', key: 'vue/setting' }],
          },
          {
            label: 'common2',
            children: [{ label: 'setting', key: 'vue/setting' }],
          },
        ],
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

const SubMenu = ({ menu }: { menu: MenuItem }) => {
  return (
    <div>
      <div>{menu.label}</div>
      {menu.children?.map((i) => <div key={i.label}>{i.label}</div>)}
    </div>
  )
}

// /1024px
const Menu = ({ menu }: { menu: MenuItem[] }) => {
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <div>
      {menu.map((i) => (
        <div key={i.key}>
          <div className="relative z-10">
            <Link to={`/${i.key}`}>
              <div style={{ height: setting.navHeight }} className="flex-center px-4">
                {i.label}
              </div>
            </Link>
          </div>

          <div>
            <div>
              {i.key}
              <div>
                {i.children?.map((sub, i) => (
                  <div className="w-[200px]" key={i}>
                    {sub.label ? <SubMenu menu={sub} /> : sub.children?.map((_sub) => <SubMenu key={_sub.label} menu={_sub} />)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
      <div className={styles.nav}>
        <nav style={{ height: navHeight }} className={styles['nav-container']}>
          <Logo fill={theme === 'dark' ? '#f5f5f7' : '#1d1d1f'} />
          <Menu menu={menuList} />
          <button onClick={toggleTheme}>{theme}</button>
        </nav>
      </div>
    </>
  )
}
