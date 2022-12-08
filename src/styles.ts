import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Carosel = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        height: 50vh;
        width: 60vw;
    }

    input[type='radio'] {
    display: none;
    }
`;