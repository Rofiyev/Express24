import { createGlobalStyle } from "styled-components";

const SidebarStyleWrapper = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
  }

 .sidebar {
  min-width: 24% !important;
  max-width: 300px !important;
  height: 100vh;
  background-color: #FFFCED;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  img {
    width: 200px;
    object-fit: cover;
  }

  ul {
    padding: 0;
    gap: 0 !important;

    .item {
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
      transition: all .3s ease;
      text-decoration: none !important;

      &.active {
        background: rgba(255, 220, 3, 0.65);

        .icon {
          color: #367BF5;
        }
      }

      .icon {
        font-size: 1rem;
        color: #78909C;
        margin-right: 5px;
      }
      .title {

        h6 {
          color: rgba(0, 0, 0, 0.87);
          margin-bottom: 2px;
          text-decoration: none !important;
        }
        p {
          font-size: 10px;
          white-space: nowrap;
          font-weight: 400;
          color: #5E6366;
          letter-spacing: 0.4px;
          margin: 0;
          text-decoration: none !important;
        }
      }
    }
  }
 }
`;

export default SidebarStyleWrapper;