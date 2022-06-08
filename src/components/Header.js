import React from 'react';
import styled from 'styled-components';
function Header(){
    return (
        <Container>
            <div>hi</div>
            <a>
                <img src="/images/logo.png" alt="" />
            </a>
        </Container>
        
    );
}
export default Header;
const Container = styled.div`
width: 1px;
height: 1px;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;
top: 0;
left: 0;
right 0;`;


