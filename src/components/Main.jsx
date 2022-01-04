import React, { useState } from 'react';
import styled from 'styled-components';
import Products from './Products';

const Container = styled.div`
    grid-area: Main;
`;
const Content = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

const MyMain = styled.div`
    flex:3 66rem;
`;

const Sidebar = styled.div`
    flex:1 21rem;
`;

const Main = () => {
    const [products, setProducts] = useState([])
    return (
        <Container>
            <Content>
            <MyMain>
                {/* <Products products={this.state.products}/> */}
                <Products products={this.state.products}/>
            </MyMain>
            <Sidebar>کارت</Sidebar>
            </Content>
        </Container>
    )
}

export default Main
