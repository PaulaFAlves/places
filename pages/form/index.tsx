import Header from "../../src/components/Header"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import MyContext from "../../src/context/myContext"

type FormProps = {
  data: string
}

type PlaceProps = {
  name: string
  menuItems: [
    {
      name: string
      description: string
      price: number
    }
  ]
}

const Form = ({ data }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const name = JSON.parse(data)
  const { placesData, setPlacesData } = useContext(MyContext)
  const onSubmit = (data: any) => {
    const place = placesData.find((place: PlaceProps) => place.name === name)

    place.menuItems.push(data)
    setPlacesData([...placesData])
    reset()
    window.history.back()
  }

  return (
    <div className="bg-background h-screen bg-no-repeat bg-top flex">
      <div className="w-[90%] md:w-1/2 mx-auto">
        <Header backButton={true} />
        <h1 className="text-yellow text-4xl font-bold my-4 font-poppins">
          {name}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label htmlFor="name" className="my-2">
            Nome do prato
          </label>
          <input {...register("name")} className="p-2 rounded-md" />
          <label htmlFor="price" className="my-2">
            Valor
          </label>
          <input {...register("price")} className="p-2 rounded-md w-24" />
          <label htmlFor="description" className="my-2">
            Descrição
          </label>
          <input
            {...register("description")}
            className="h-32 rounded-md"
            placeholder="Insira uma descrição"
          />
          <p className="my-2">*A descrição deve conter até 200 caracteres.</p>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  )
}

Form.getInitialProps = async (context: any) => {
  return {
    data: context.query.data,
  }
}

export default Form
