import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './buttonCheckout';
import { OrderListItem } from './OrderListItem';


const OrderStyled = styled.section`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
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

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>Ваш заказ</OrderTitle>
            <OrderWrapper>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>

            </OrderWrapper>
            <OrderTotal>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850р</TotalPrice>
            </OrderTotal>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    )
}