export interface VersionItem extends Record<string, any> {
  label: string
  href: string
}

export interface LinkItem extends Record<string, any> {
  label: string
  href?: string
  icon: string
  versions?: VersionItem[]
}
