import { useState } from "react";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const BurgerClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Burger isOpen={isOpen} />
      <Header onClick={BurgerClick} />
    </>
  );
}