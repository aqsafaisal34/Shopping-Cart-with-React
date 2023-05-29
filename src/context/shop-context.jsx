import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  const [cartItems, setCatItems] = useState();
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>

}

export default ShopContextProvider;
