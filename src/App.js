import React from 'react';
import {NavBar} from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order'
import { useOpenItem } from './Components/hooks/useOpenItem'
import { useOrders } from './Components/hooks/useOrders'

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();


  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Order {...orders} {...openItem}/>
    <Menu {...openItem}/>
    {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
