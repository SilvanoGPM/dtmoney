import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

export const Container = styled(ScrollContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  overflow: auto;
  scrollbar-width: none;
  scrollbar-color: none;

  @media (max-width: 480px) {
    gap: 1rem;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: none;
    border-radius: 0;
    border: none;
  }
`;

export const Card = styled.div`
  background-color: var(--shape);
  color: var(--text-title);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 250px;
  }

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

  @media (max-width: 480px) {
    margin-top: 4rem;
  }
`;
