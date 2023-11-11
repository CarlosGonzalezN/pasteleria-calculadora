import { FC } from "react";

const NavBar: FC = () => {
  return (
    <nav className="bg-[#E2B9FE] py-4">
      <div className="container mx-auto flex w-4/6 justify-between">
        <button className="text-white text-xl font-bold">Recetas</button>
        <button className="text-white text-xl font-bold">Ingredientes</button>
      </div>
    </nav>
  );
};

export default NavBar;
