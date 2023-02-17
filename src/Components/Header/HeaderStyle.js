import { createGlobalStyle } from 'styled-components';

const HeaderStyleWrapper = createGlobalStyle`
  #header {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
    .icons {
      .icon {
        font-size: 1.2rem;
        cursor: pointer;
      }
    }

    .login {
      cursor: pointer;
      
      .icon {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1.5px solid #333;
        overflow: hidden;
        display: grid;
        place-items: center;


        .icon {
          border: none !important;
          font-size: 0.7rem !important;
        }
      }
    }
  }
`;

export default HeaderStyleWrapper;