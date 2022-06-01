import styled from 'styled-components';

interface GraphProps {
  full?: boolean;
}

export const Container = styled.section`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Group = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Graph = styled.div<GraphProps>`
  flex: 1;
  max-width: ${({ full = false }) => (full ? '100%' : '600px')};
  min-width: 250px;
`;
