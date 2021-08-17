import React from 'react';
import {NavBar} from './Components/NavBar';
import { Menu } from './Components/menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModelItem';
import { Order } from './Components/Order'
import { useOpenItem } from './Components/hooks/useOpenItem'
import { useOrders } from './Components/hooks/useOrders'

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();


  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Order {...orders}/>
    <Menu {...openItem}/>
    {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
