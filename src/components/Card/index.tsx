import Link from "next/link"
import { SlPlus } from "react-icons/sl"
import { useContext } from "react"
import MyContext from "../../context/myContext"
import { MenuItems, PlaceProps, CardProps } from "../../types/types"

const Card = ({ place }: CardProps) => {
  const { placesData } = useContext(MyContext)
  console.log("places ", placesData)

  return (
    <div className="flex">
      <Link
        href={{
          pathname: "/details",
          query: { data: JSON.stringify(place.name) },
        }}
        className="bg-gray mb-4 p-6 rounded-md w-[80%]"
      >
        <h2 className="text-white text-base font-bold mb-2 font-poppins">
          {place.name}
        </h2>
        <p className="text-white font-nunito">
          {place.menuItems.length} pratos
        </p>
      </Link>
      <Link
        href={{
          pathname: "/form",
          query: { data: JSON.stringify(place.name) },
        }}
        className="w-[20%] flex justify-end md:justify-center items-center mb-4"
      >
        <SlPlus className="fill-white h-12 w-12" />
      </Link>
    </div>
  )
}

export default Card
