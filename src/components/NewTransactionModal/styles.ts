import styled from "styled-components";

export const Container = styled.form`
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      outline: none;
      border: 3px solid var(--green);
      filter: brightness(0.8);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #ffffff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    position: relative;
    z-index: 1;

    &:hover {
      filter: brightness(0.9);
    }

    &::before {
      --gap: 6px;

      content: "";
      display: block;
      position: absolute;
      border-radius: 0.5rem;
      left: calc(var(--gap) * -1);
      right: calc(var(--gap) * -1);
      top: calc(var(--gap) * -1);
      bottom: calc(var(--gap) * -1);
      border: 0 solid var(--green);
      z-index: -1;
    }

    &:focus {
      outline: none;
    }

    &:focus::before, &:hover::before {
      border-width: 3px;
    }
  }
`;

export const Title = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
