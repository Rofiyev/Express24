import styled from 'styled-components';

const HomeStyleWrapper = styled.section`
  width: 100%;
  display: flex;

 .content {
  height: 100vh;
  position: absolute;
  left: calc(100% - 76%);
  right: 0;
  min-width: 69%;
  top: 0;
  flex: 1;
  overflow-x: hidden !important;
 }

`;

export default HomeStyleWrapper;