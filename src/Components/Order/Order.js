import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Styled/buttonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';


const OrderStyled = styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderWrapper = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const OrderTotal = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;



export const Order = ({ orders, setOrders, setOpenItem }) => {
    
    const deleteItem = index => {
        const newOrders = [...orders];
        setOrders(newOrders);
    }

    const total = orders.reduce((result, order) =>
        totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) =>
        order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderWrapper>

                {orders.length ?
                <OrderList>
                    {orders.map((order, index) => <OrderListItem
                     ket={index}
                     order={order}
                     deleteItem={deleteItem}
                     index={index}
                     setOpenItem={setOpenItem}
                     />)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>}

            </OrderWrapper>
            <OrderTotal>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </OrderTotal>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}