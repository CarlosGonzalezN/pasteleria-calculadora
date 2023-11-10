import { FC, ReactNode } from "react";
import NavBar from "../../components/Navbar";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: "url('./../../../public/background.png')" }}
    >
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
