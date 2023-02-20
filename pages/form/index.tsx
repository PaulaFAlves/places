import Header from "../../src/components/Header"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import MyContext from "../../src/context/myContext"

type FormProps = {
  data: string
}

type MenuProps = {
  name: string
  description: string
  price: number
}

type PlaceProps = {
  name: string
  menuItems: MenuProps[]
}

const Form = ({ data }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MenuProps>()
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
          <input
            {...register("name", {
              required: { value: true, message: "Campo Obrigatório" },
            })}
            className="p-2 rounded-md"
          />
          {errors.name && (
            <span className="text-red">{errors.name.message}</span>
          )}
          <label htmlFor="price" className="my-2">
            Valor
          </label>
          <input
            {...register("price", {
              required: { value: true, message: "Campo Obrigatório" },
              pattern: {
                value: /^[0-9]+\,[0-9]{2}$/,
                message: "Digite um valor válido, ex. R$24,00",
              },
            })}
            className="p-2 rounded-md w-24"
            placeholder="R$ 99,00"
          />
          {errors.price && (
            <span className="text-red">{errors.price.message}</span>
          )}
          <label htmlFor="description" className="my-2">
            Descrição
          </label>
          <input
            {...register("description", {
              required: { value: true, message: "Campo Obrigatório" },
              maxLength: {
                value: 200,
                message: "A descrição deve conter até 200 caracteres.",
              },
            })}
            className="h-32 rounded-md"
            placeholder="Insira uma descrição"
          />
          {errors.description && (
            <span className="text-red">{errors.description.message}</span>
          )}
          <button
            type="submit"
            className="bg-yellow w-[100%] h-full rounded-md text-black font-poppins py-4 my-8"
          >
            Salvar
          </button>
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
