import styled from 'styled-components';

const UsersPageWrapper = styled.section`
  padding: 24px 0 0 12px;
  
  .text_2 {
    color: #F3AA18 !important;
    font-size: 12px;
    letter-spacing: 0.5px;
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

    .icon {
      font-size: 1.3rem;
      cursor: pointer;

      &.bgRed {
        color: crimson;
        font-size: 1.2rem !important;
      }
    }
  }
`;

export default UsersPageWrapper;