import React from 'react';
import {NavBar} from './Components/NavBar';
import { Menu } from './Components/menu';
import { GlobalStyle } from './Components/GlobalStyle';
import { ModalItem } from './Components/ModelItem';


function App() {

  const [openItem, setOpenItem] = React.useState(null);


  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Menu setOpenItem={setOpenItem}/>
    <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
