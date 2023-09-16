import { styled, keyframes } from "styled-components";



const StyledComponents = () => {
  return (
    <>
    <Rotate>☯</Rotate>
      <MainButton>Main Button</MainButton>
      <div>
        <br />
      </div>
      <MainButton varient="outline">Outline Button</MainButton>
      <div>
        <br />
      </div>
      <LinkButton as='a' href='www.google.com'>as a Link Button</LinkButton>
    </>
  );
}

export default StyledComponents;



const rotate = keyframes`
 from {
  transform: rotate(0deg);
 }
 to {
  transform: rotate(360deg);
 }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 4s linear infinite;
  padding: 2.2rem 1rem;
  font-size: 2.9rem;


`








const MainButton = styled.button`
  background-color: ${(props) => (props.varient ? "white" : "black")};
  color: ${(props) => (props.varient ? "black" : "#fff")};
  border: ${(props) => (props.varient ? " 1px solid black" : "none")};
  height: 45px;
  width: 125px;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.6s;

  &:hover {
    background-color: ${(props) => (props.varient ? "black" : "#fff")};
    color: ${(props) => (props.varient ? "#fff" : "#000")};
    border: ${(props) =>
      props.varient ? " 1px solid black" : "1px solid black"};
  }
`;

const LinkButton = styled(MainButton)`
   color: crimson;
   border: 1px solid crimson;
   background-color: antiquewhite;
   transition: all .4s;
   text-decoration: none;
   padding: 5px 12px;

   &:hover{
    color: #fff;
    background-color: crimson;
    border: none;
   }
`