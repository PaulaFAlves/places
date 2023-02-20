import type { NextPage } from "next"
import Header from "../src/components/Header"
import Card from "../src/components/Card"
import { useContext } from "react"
import MyContext from "../src/context/myContext"
import { PlaceProps } from "./types"

const Home: NextPage = () => {
  const { placesData } = useContext(MyContext)

  return (
    <div className="bg-background h-screen bg-no-repeat bg-top">
      <div className="w-[90%] md:w-1/2 mx-auto">
        <Header />
        <h1 className="text-yellow text-4xl font-bold my-4 font-poppins">
          Lugares
        </h1>
        <p className="text-white my-4 font-nunito">
          {placesData.length} lugares cadastrados
        </p>
        {placesData &&
          placesData?.map((place: PlaceProps, index: number) => (
            <Card place={place} index={index} key={`${place}-${index}`} />
          ))}
      </div>
    </div>
  )
}

export default Home
