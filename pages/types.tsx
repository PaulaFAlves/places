export type MenuItems = {
  name: string
  description: string
  price: number
}

export type PlaceProps = {
  name: string
  menuItems: MenuItems[]
}

export type CardProps = {
  place: PlaceProps
  index: number
}
