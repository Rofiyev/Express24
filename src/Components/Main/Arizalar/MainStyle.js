import { createGlobalStyle } from 'styled-components';

const MainStylePage = createGlobalStyle`
  #main {
    padding: 24px 0 0 14px !important;

    .text {
      font-size: 14px;
      color: #5E6366;
    }
      table {

        th {
          color: #919699;
          font-weight: 500;
          cursor: pointer;

          &.num {
            color: rgba(0, 0, 0, 0.87);
          }
        }

        td {
          color: rgba(0, 0, 0, 0.87);
          font-weight: 500;
        }
      }
    }
`;

export default MainStylePage;