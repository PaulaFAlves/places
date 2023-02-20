import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import initialValues from "./api/data.json"
import MyContext from "../src/context/myContext"

function MyApp({ Component, pageProps }: AppProps) {
  const [placesData, setPlacesData] = useState(initialValues)

  return (
    <MyContext.Provider
      value={{
        placesData: placesData,
        setPlacesData: setPlacesData,
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  )
}
export default MyApp
