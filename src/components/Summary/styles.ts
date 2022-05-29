import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const Card = styled.div`
  background-color: var(--shape);
  color: var(--text-title);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  &.highlight {
    background-color: var(--green);
    color: var(--shape);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
