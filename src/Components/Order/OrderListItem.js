import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../../functions/secondaryFunction';
import { formatCurrency } from '../../functions/secondaryFunction';

const TrashButton = styled.button`
    width: 24p;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (
    <OrderItemStyled onClick={() => setOpenItem({...order, index})}>
        <ItemName>{ order.name } {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{ formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton onClick={() => deleteItem(index)}/>
        {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemStyled>
)};