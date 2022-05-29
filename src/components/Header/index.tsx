import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img alt="dt money" src={logoImg} />

        <S.Button type="button">Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
}
