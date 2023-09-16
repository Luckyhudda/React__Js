import { useState } from 'react';
import {styled} from 'styled-components'
const CounterAndStyled = () => {

    const [count,setCount] = useState(0)
  return (
    <WrapperBox>
      <CounterDiv>{count}</CounterDiv>
      <ButtonBox>
        <MainButton onClick={() => setCount(count + 1)}>Increment</MainButton>
        <ResetButton onClick={() => setCount(0)}>Reset</ResetButton>
        <MainButton decrement="decrement" onClick={() => setCount(count -1)}>
          decrement
        </MainButton>
      </ButtonBox>
    </WrapperBox>
  );
}

export default CounterAndStyled;

const WrapperBox = styled.div`
    height: 120px;
    width: 250px;
    border: 1px solid gray;
`
const CounterDiv = styled.div`
    text-align: center;
    margin: 1rem auto;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
`


const ButtonBox = styled.div`
    display: flex;
    background-color: aliceblue;
    justify-content: center;
`

const MainButton = styled.button`
    background-color: ${props => props.decrement ? 'red' : 'green'};
    color: ${props => props.decrement ? '#fff' : '#FFF'};
    padding: 6px;
    border: none;
    border-radius: .4rem;
    margin: 1rem 5px;
    cursor: pointer;
`

const ResetButton = styled(MainButton)`
    color: black;
    background-color: yellow;
`