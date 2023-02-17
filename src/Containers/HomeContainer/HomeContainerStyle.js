import { createGlobalStyle } from "styled-components";

const HomeStyleWrapper = createGlobalStyle`
  nav{

    img{
      width: 180px;
    }

    form {
      position: relative;

      input{
        width: 100%;
        height: 100%;
      }
      .icon {
        position: absolute;
        right: 3%;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
      }
    }

    .login {
      cursor: pointer;
      .login-icon {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #444;

        .icon {
          width: 100%;
          height: 100%;
          object-fit: cover;
          color: #888;
        }
      }
    }

  }
  section {
    height: 90vh;
    width: 100%;
    background-color: #FFEC00;
    position: relative;

    .image{
      position: absolute;
      width: 70%;
      height: 100%;
      left: 50%; bottom: 0%;
      transform: translate(-50%, 0%);
      z-index: 10;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 41.7%;
      width: 50%;
      background-color: #ffdc03;
    }
    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      height: 42%;
      width: 50%;
      background-color: #ffc904;
      border: 1px solid #ffdc03;
      border-radius: 12px 0px 0px 0px;
    }
    .logo {
      position: absolute;
      bottom: 10%;
      left: 7%;
      width: 350px;
      filter: blur(2px);
      z-index: 10;
    }
  }
  main {
    .container {
      .menu-item-container {
        flex-wrap: wrap;

        .menu-item {
          padding: 8px 16px;
          background-color: #f0f0f0;
          border-radius: .3rem;
          font-weight: 500;
          cursor: pointer;
    
          &:hover {
            opacity: 0.9;
          }
        }
      }
      
    }
    .wrapper {
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 15px;
      .card-item {
        width: 32%;

        .card-image{
          width: 100%;
          height: 12rem;
          overflow: hidden;
          position: relative;
          
          .btn {
            position: absolute;
            bottom: 3%; right: 2%;
            transform: translateY(130%);
            transition: .4s ease-in;
            z-index: 10;
          }

          &:before {
            content: '';
            position: absolute;
            left: 0; bottom: 0;
            width: 100%;
            height: 25%;
            transform: translateY(100%);
            background-color: rgba(0,0,0,0.5);
            transition: .4s ease-in;
            z-index: 10;
          }
          &:hover {
            &:before{
              transform: translateY(0%);
            }
            .btn {
              transform: translateY(0%);
            }
            img{
              filter: brightness(80%);
            }
          }

          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: .4s ease-in;
          }
        }
      }
    }
  }
  footer {
    background-color: #2c2c2c;
    width: 100%;
    height: 15rem;
    color: white;

    a{
      text-decoration: none !important;
      color: #fff;
      transition: .4s ease-in;

      &:hover {
        color: #ffc904;
      }
    }
    .icon {
      font-size: 1.3rem;
      margin: 0 25px 0 0;
      color: #fff;
      cursor: pointer;
      transition: .4s ease-in;

      &:hover {
        color: #ffc904;
      }
    }
  }
`;
export default HomeStyleWrapper;
