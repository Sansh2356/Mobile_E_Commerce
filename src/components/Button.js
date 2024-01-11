import styled from 'styled-components'
export const ButtonContainer = styled.button`

text-transform:capitalize;
font-weight:bolder;
background:transparent;
border:0.25rem solid green;
border-color:${props => (props.cart ? "var(--mainYellow)" : "")};
border-radius:20px;
color:green;
cursor:pointer; 
transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:white;
}

`