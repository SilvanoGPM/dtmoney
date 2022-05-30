import { useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import * as S from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = "DEPOSIT" | "WITHDRAW";

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("DEPOSIT");

  function handleTransactionTypeChange(type: TransactionType) {
    return () => setTransactionType(type);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img alt="Close new transaction modal" src={closeImg} />
      </button>

      <S.Container>
        <S.Title>Cadastrar transação</S.Title>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <S.TransactionTypeContainer>
          <S.RadioButton
            type="button"
            onClick={handleTransactionTypeChange("DEPOSIT")}
            isActive={transactionType === 'DEPOSIT'}
            activeColor="green"
          >
            <img alt="Income" src={incomeImg} />
            <S.TransactionTypeLabel>Entrada</S.TransactionTypeLabel>
          </S.RadioButton>

          <S.RadioButton
            type="button"
            onClick={handleTransactionTypeChange("WITHDRAW")}
            isActive={transactionType === 'WITHDRAW'}
            activeColor="red"
          >
            <img alt="Outcome" src={outcomeImg} />
            <S.TransactionTypeLabel>Saída</S.TransactionTypeLabel>
          </S.RadioButton>
        </S.TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
