import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
  }

  &:hover {
    color: #666;
  }

  svg {
    margin-right: 0.25rem;
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 1.125rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;
    }

    h3 {
      font-size: 2.25rem;
      color: #3d3d4d;
    }

    p {
      font-size: 1.125;
      color: #737380;
      margin-top: 0.25rem;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.25rem;

    li {
      & + li {
        margin-left: 5rem;
      }

      strong {
        display: block;
        font-size: 2.25rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 0.25rem;
        color: #6c6c80;
      }
    }
  }
`
export const Issues = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 10rem;

  a {
    & + a {
      margin-top: 1rem;
    }
    transition: 0.6s;

    :hover {
      transform: translateX(20px);
    }

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
    background-color: #fff;
    width: 100%;
    padding: 1rem;
    border-radius: 0.3rem;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.055);

    div {
      width: 90%;
      margin-left: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      h3 {
        color: #333;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        width: 100%;
      }

      p {
        color: #999;
        font-size: 0.8rem;
        text-align: justify;
      }
    }
    svg {
      margin-left: 0.7rem;
      color: #777;
    }
  }
`
