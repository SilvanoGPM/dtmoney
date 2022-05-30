import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: #fff;
  background-color: var(--blue-light);
  border: 0;
  border-radius: 0.25rem;
  padding: 0 2rem;
  height: 3rem;
  transition: filter 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    span {
      display: none;
    }

    svg {
      margin: 0;
    }
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:focus-visible {
    outline: 1px solid #fff;
    filter: brightness(0.9);
  }
`;
