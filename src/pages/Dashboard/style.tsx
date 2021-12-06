import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  margin: 2rem 0;
  font-size: 2rem;
  max-width: 22rem;
  color: #333;
`

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 43.75rem;

  input {
    font-size: 1rem;
    padding: 1.5rem;
    flex: 1;
    height: 4.375rem;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.055);
    border: 0.125rem solid #fff;
    border-right: none;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    padding: 1rem;
    width: 12rem;
    height: 4.375rem;
    background-color: #04d361;
    border: none;
    text-transform: uppercase;
    color: #fff;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`

export const Repositories = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 10rem;
  max-width: 43.75rem;

  a {
    & + a {
      margin-top: 1rem;
    }
    transition: 0.6s;

    &:hover {
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

    img {
      width: 4rem;
      border-radius: 50%;
    }

    div {
      width: 80%;
      margin-left: 1rem;

      h3 {
        color: #333;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
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
