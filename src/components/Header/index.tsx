import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

interface HeaderProps {
  onNewTransactionClick: () => void;
}

export function Header({ onNewTransactionClick }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img alt="dt money" src={logoImg} />

        <S.Button type="button" onClick={onNewTransactionClick}>
          Nova transação
        </S.Button>


      </S.Content>
    </S.Container>
  );
}
