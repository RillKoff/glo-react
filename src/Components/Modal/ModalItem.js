import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/buttonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../hooks/useCount';
import { totalPriceItems } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../hooks/useTopping';
import { useChoices } from '../hooks/useChoices';
import { Choices } from './Choices';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const ModalBanner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
    padding: 30px;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Pacifico', cursive
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;



export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const  closeModal = e => {
        if (e.target.id === 'overlay'){
            setOpenItem(null)
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
    }

    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null);
    };


    return (
    <Overlay id="overlay" onClick={closeModal}>

        <Modal>
            <ModalBanner img={openItem.img}/>
            <Content>
                <HeaderContent>
                    <div>{openItem.name}</div>
                    <div>{formatCurrency(openItem.price)}</div>
                </HeaderContent>
                <CountItem {...counter}/>
                {openItem.toppings && <Toppings {...toppings} />}
                {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                <TotalPriceItem>
                    <span>????????:</span>
                    <span>{ formatCurrency(totalPriceItems(order)) }</span>
                </TotalPriceItem>
                <ButtonCheckout 
                    onClick={isEdit ? editOrder : addToOrder}
                    disabled={order.choices && !order.choice}
                    >????????????????</ButtonCheckout>
            </Content>
        </Modal>
    </Overlay>
    );
    
};