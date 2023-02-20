import Image from "next/image"
import image from "../../../public/assets/share-eat.png"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import Link from "next/link"
import { useContext } from "react"
import MyContext from "../../context/myContext"

const Header = ({ backButton = false }) => {
  const teste = useContext(MyContext)

  return (
    <div className="flex justify-center">
      <Link href="/">
        <MdOutlineArrowBackIosNew
          className={`h-10 w-10 mt-2 ${!backButton && "invisible"} fill-white`}
        />
      </Link>

      <Image src={image} priority alt="" className="my-4 m-auto" />
    </div>
  )
}

export default Header
