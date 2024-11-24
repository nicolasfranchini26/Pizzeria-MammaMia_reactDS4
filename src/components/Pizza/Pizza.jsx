import { useEffect, useState } from "react"
import CardPizza from "../CardPizza/CardPizza"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect (() => {
   const pizzaId = async () => {
    const url = "http://localhost:5000/api/pizzas/p001"
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
   }

   pizzaId ()
  }, [])

  if (!pizza) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <div className="pizza d-flex justify-content-center mb-4">
        <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
        />
      </div>
    </>
  )
}

export default Pizza
