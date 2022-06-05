import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartModalHandler = () => {
    setCartVisible(true);
  };

  const hideCartModalHandle = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onClose={hideCartModalHandle} />}
      <Header onCart={showCartModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
