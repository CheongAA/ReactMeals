import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartModalHandler = () => {
    setCartVisible(true);
  };

  const hideCartModalHandle = () => {
    setCartVisible(false);
  };

  return (
    <>
      {cartVisible && <Cart onClose={hideCartModalHandle} />}
      <Header onCart={showCartModalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
