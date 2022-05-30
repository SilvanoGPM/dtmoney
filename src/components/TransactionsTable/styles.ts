import styled from "styled-components";

interface SortButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    text-align: left;
    line-height: 1.5rem;
    padding: 1rem 2rem;

    &:last-child {
      display: flex;
      justify-content: space-between;
    }
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: var(--shape);
    color: var(--text-body);

    &:first-child {
      color: var(--text-title);
    }

    &.withdraw {
      color: var(--red);
    }

    &.deposit {
      color: var(--green);
    }
  }

  @media (max-width: 620px) {
    thead {
      display: none;
    }

    tr {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      position: relative;
      min-height: 10rem;
      background-color: var(--shape);
    }

    td {
      padding: 0.25rem 2rem;

      &:first-child {
        padding-top: 1rem;
      }

      &:last-child {
        padding-bottom: 1rem;
      }

      &.category,
      &.createdAt {
        position: absolute;
        bottom: 1rem;
        padding: 0;
      }

      &.amount {
        font-size: 1.4rem;
      }

      &.category {
        left: 2rem;
      }

      &.createdAt {
        right: 2rem;
      }
    }
  }
`;

export const SortButton = styled.button<SortButtonProps>`
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  color: ${({ isActive }) => (isActive ? "var(--green)" : "inherit")};

  background-color: transparent;
  border: 0;

  &:focus-visible {
    outline: none;
    border: 1px solid var(--green);
  }
`;

export const AscButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  color: inherit;

  &:focus-visible {
    outline: none;
    border: 1px solid var(--green);
  }
`;

export const Title = styled.h2`
  display: none;
  color: var(--text-title);
  font-weight: 400;
  font-size: 1.4rem;
  margin-bottom: 1rem;

  @media (max-width: 620px) {
    display: block;
  }
`;
