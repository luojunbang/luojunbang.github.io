import type { LinkItem } from '../components/friendlyLink'

export default [
  {
    label: 'Typescript',
    icon: 'https://www.typescriptlang.org/icons/icon-144x144.png',
    href: 'https://www.typescriptlang.org/docs/',
  },
  {
    label: 'React',
    href: 'https://zh-hans.reactjs.org/docs/getting-started.html',
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  },
  {
    label: 'Vue',
    icon: 'https://cn.vuejs.org/logo.svg',
    versions: [
      {
        label: 'Vue3',
        href: 'https://cn.vuejs.org/',
      },
      {
        label: 'Vue2',
        href: 'https://v2.cn.vuejs.org/index.html',
      },
    ],
  },
  {
    label: 'ElementUI',
    icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
    versions: [
      {
        label: 'ElementPlus',
        href: 'https://element-plus.org/zh-CN/component/button.html',
      },
      {
        label: 'ElementUI',
        href: 'https://element.eleme.cn/#/zh-CN/component/installation',
      },
    ],
  },
  {
    label: 'Tailwind CSS',
    icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg',
    href: 'https://tailwindcss.com/docs/installation',
  },
  {
    label: 'Echarts',
    icon: 'https://avatars.githubusercontent.com/u/47359?s=200&v=4',
    href: 'https://echarts.apache.org/zh/option.html',
  },

  {
    label: 'Rollup',
    icon: 'https://rollupjs.org/logo.svg',
    href: 'https://rollupjs.org/guide/en/',
  },
  {
    label: 'Webpack',
    icon: 'https://webpack.docschina.org/icon-square-small-slack.9281492bb267314634b4.png',
    href: 'https://webpack.docschina.org/concepts/',
  },
] as LinkItem[]
