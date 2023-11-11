import { FC, useState } from "react";

interface Ingredients {
  name: string;
  amount: number | undefined;
  unity: string;
  cost: number | undefined;
}
const IngredientsForm: FC = () => {
  const [ingredient, setIngredient] = useState<Ingredients>({
    name: "",
    amount: undefined,
    unity: "",
    cost: undefined,
  });
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setIngredient({ ...ingredient, [name]: value });
  };
  console.log(ingredient);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">Ingrediente</h1>
        <div>
          <input
            value={ingredient.name}
            name="name"
            type="text"
            placeholder="Nombre del ingredinte"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div>
          {" "}
          <input
            type="number"
            value={ingredient.amount}
            name="amount"
            placeholder="Cantidad"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onChange={handleChange}
          ></input>
        </div>

        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={ingredient.unity}
            name="unity"
            onChange={handleChange}
          >
            <option>Seleccione la unidad</option>
            <option>KG</option>
            <option>Litros</option>
            <option>Unidad</option>
          </select>
          <div>
            <input
              value={ingredient.cost}
              name="cost"
              type="number"
              placeholder="Costo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              required
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </form>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Guardar
      </button>
    </div>
  );
};

export default IngredientsForm;
