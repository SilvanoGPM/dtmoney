import styled from 'styled-components';

interface SortButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  margin-top: 4rem;
  position: relative;
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

  tbody tr {
    &.deposit {
      td:first-child {
        border-left: 0.5rem solid var(--green);
      }

      @media (max-width: 620px) {
        border-left: 0.5rem solid var(--green);

        td:first-child {
          border-left: 0;
        }
      }
    }

    &.withdraw {
      td:first-child {
        border-left: 0.5rem solid var(--red);
      }

      @media (max-width: 620px) {
        border-left: 0.5rem solid var(--red);

        td:first-child {
          border-left: 0;
        }
      }
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
    border-collapse: collapse;

    thead tr {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    th {
      width: 100%;
      text-align: center;
      background-color: transparent;
      font-size: 1.5rem;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'inherit')};

  text-align: left;
  background-color: transparent;
  border: 0;
  width: 100%;
  height: 100%;

  &:focus-visible {
    outline: none;
    border: 1px solid var(--green);
  }

  @media (max-width: 620px) {
    background-color: ${({ isActive }) =>
      isActive ? 'var(--green)' : 'inherit'};

    color: ${({ isActive }) => (isActive ? '#ffffff' : 'inherit')};

    text-align: center;
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

  @media (max-width: 620px) {
    position: absolute;
    top: -2rem;
    right: 0;
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
