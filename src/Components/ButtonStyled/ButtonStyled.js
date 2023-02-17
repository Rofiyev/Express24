import styled from 'styled-components';

const StyledButtons = styled.button`
  border: 0 !important;
  background: #FFEC00;
  border-radius: 10px;
  padding: 0 !important;
  width: 120px;
  height: 35px;

  &:hover,
  &.active {
    background: #ffec00;
  }

  ${props => {
    switch (props.type) {
      case 'bgTransparent':
        return `
        background: transparent;
        shadow: none !important;
      `;
    }
  }}
`;


export default StyledButtons;