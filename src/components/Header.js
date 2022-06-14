import React from 'react';
import styled from 'styled-components';
function Header(){
    return (
        <header>
        <Container>
            <section className='top'>
        <a href="/ko_kr/impact" class="tds-link">Tesla 2021 영향보고서 읽기</a>
        </section>
        </Container>
            <Logo>
                <nav>
                    <ol>
                    <li><a href='d'>Model S</a></li>
                    <li><a href='d'>Model 3</a></li>
                    <li><a href='d'>Model X</a></li>
                    <li><a href='d'>Model Y</a></li>
                    </ol>
                </nav>
            </Logo>
            </header>
            
            
        
        
    );
}
export default Header;
const Container = styled.div`
width:100%;
background-color:white;
height:50px;
text-align: center;
line-height: 50px;
position: fixed;
a{
    color:black;
}

`;
const Logo = styled.div`
ol{
    list-styled:none;
    align-items: center;
    display: flex;
    font-size:10px;
    line-height: 50px;
}
a{
    text-decoration:none;
    outline:none;
}
width:100;
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
`;
