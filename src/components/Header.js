import React from 'react';
import styled from 'styled-components';
function Header(){
    return (
        <Container>
            <section className='top'>
            <a href="/ko_kr/impact" class="tds-link">Tesla 2021 영향보고서 읽기</a>
            <style>.tds-linkposition : absolute;</style>
            </section>
            </Container>
            
        
        
    );
}
export default Header;
const Container = styled.div`
width:100%;
background-color:white;
height:50px;
position: fixed;

`;
