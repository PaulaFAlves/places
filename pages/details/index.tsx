import Header from "../../src/components/Header"
import { MenuItems, PlaceProps } from "../types"
import { useContext } from "react"
import MyContext from "../../src/context/myContext"
import Link from "next/link"
import { BsPlusCircleFill } from "react-icons/bs"

type DetailProps = {
  data: string
}

const Details = ({ data }: DetailProps) => {
  const name = JSON.parse(data)
  const { placesData } = useContext(MyContext)

  const place = placesData.find((place: PlaceProps) => place.name === name)

  return (
    <div className="bg-background h-screen bg-no-repeat bg-top">
      <div className="w-[90%] md:w-1/2 mx-auto">
        <Header backButton={true} />
        <h1 className="text-yellow text-4xl font-bold my-4 font-poppins">
          {place.name}
        </h1>
        <p className="text-white my-4 font-nunito">
          {place.menuItems.length} pratos
        </p>
        {place.menuItems.map((place: MenuItems, index: string) => (
          <div
            className="bg-gray mb-4 p-6 rounded-md"
            key={`${place}-${index}`}
          >
            <div className="flex justify-between items-end">
              <div className="text-white font-bold">{place.name}</div>
              <div className="text-white font-bold">R$ {place.price}</div>
            </div>
            <p className="text-white">{place.description}</p>
          </div>
        ))}
        <Link
          href={{
            pathname: "/form",
            query: { data: JSON.stringify(place.name) },
          }}
          className="fixed bottom-12 right-12 "
        >
          <BsPlusCircleFill className="h-16 w-16 fill-yellow" />
        </Link>
      </div>
    </div>
  )
}

Details.getInitialProps = async (context: any) => {
  return {
    data: context.query.data,
  }
}

export default Details
