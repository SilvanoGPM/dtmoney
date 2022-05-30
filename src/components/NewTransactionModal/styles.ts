import styled from "styled-components";
import { darken, transparentize } from "polished";
import { ImSpinner8 } from "react-icons/im";

type ActiveColors = "green" | "red";

interface RadioButtonProps {
  isActive: boolean;
  activeColor: ActiveColors;
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

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

    @media (max-width: 480px) {
      height: 3rem;
    }

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
    display: flex;
    justify-content: center;
    align-items: center;
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

    @media (max-width: 480px) {
      height: 3rem;
    }

    svg {
      margin-right: 0.5rem;
    }

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

    &:focus::before,
    &:hover::before {
      border-width: 3px;
    }
  }
`;

export const Title = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const RadioButton = styled.button<RadioButtonProps>`
  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  @media (max-width: 480px) {
    height: 3rem;
  }

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: ${darken("0.1", "#d7d7d7")};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ activeColor }) => colors[activeColor]};
  }
`;

export const TransactionTypeLabel = styled.span`
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--text-title);
`;

export const LoadingIcon = styled(ImSpinner8)`
  animation: spin 1s infinite linear;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
