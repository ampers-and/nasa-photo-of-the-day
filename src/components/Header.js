import React from 'react';
import styled from 'styled-components';

const Header = () => {
    // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 2rem;
text-align: center;
color: deepskyblue;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 2rem;
background: dimgray;
`;
// Use Title and Wrapper like any other React component – except they're styled!
    return(
    <Wrapper>
    <Title>
        Astronomy Picture of the Day
    </Title>
    </Wrapper>
    );
    // return(
    //     <div>
    //         <header>
    //             <h1 class="ui blue inverted top attached header">Astronomy Picture of the Day</h1>
    //         </header>
    //     </div>
    // )
}

export default Header;