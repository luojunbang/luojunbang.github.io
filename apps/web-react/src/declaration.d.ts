declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*/setting.json' {
  const values: {
    navBar: boolean | number
    menu: boolean
    menuWidth: number
  }

  export default values
}
