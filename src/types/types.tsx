type CardProps = {
  place: PlaceProps
  index: number
}

type MenuItems = {
  name: string
  description: string
  price: number
}

type PlaceProps = {
  name: string
  menuItems: MenuItems[]
}

export type { MenuItems, PlaceProps, CardProps }
