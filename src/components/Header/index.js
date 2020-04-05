import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket, MdPerson } from 'react-icons/md';

import { Container, Cart, Perfil } from './styles';

import logo from '../../assets/images/logo.jpeg'

function Header({ cartSize }) {
    //    console.log(cart);
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="RocketShoes" width="150"/>
            </Link>
            <Perfil to="/desktops">
                <div>
                    <strong>Computadores</strong>
                    {/* <span>{cartSize} itens</span> */}
                </div>
            </Perfil>
            <Perfil to="/cart">
                <div>
                    <strong>Hardware</strong>
                    {/* <span>{cartSize} itens</span> */}
                </div>
            </Perfil>


            <Perfil to="/cart">
                <div>
                    <strong>Acessórios</strong>
                    {/* <span>{cartSize} itens</span> */}
                </div>
            </Perfil>
            <Perfil to="/cart">
                <div>
                    <strong>Meu Perfil</strong>
                    {/* <span>{cartSize} itens</span> */}
                </div>
                <MdPerson size={26} color="#fff" />
            </Perfil>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={26} color="#fff" />
            </Cart>

        </Container>
    );
}

export default connect((state) => ({
    cartSize: state.cart.length,
}))(Header);
