import { useState, FormEvent } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from '../../services/api';

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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);

  const [type, setType] = useState<TransactionType>("DEPOSIT");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, category, type };

    try {
      await api.post('/transactions', data);
    } catch (error) {
      console.error('Error', error);
    }
  }

  function handleSetTypeChange(type: TransactionType) {
    return () => setType(type);
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

      <S.Container onSubmit={handleCreateNewTransaction}>
        <S.Title>Cadastrar transação</S.Title>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioButton
            type="button"
            onClick={handleSetTypeChange("DEPOSIT")}
            isActive={type === "DEPOSIT"}
            activeColor="green"
          >
            <img alt="Income" src={incomeImg} />
            <S.TransactionTypeLabel>Entrada</S.TransactionTypeLabel>
          </S.RadioButton>

          <S.RadioButton
            type="button"
            onClick={handleSetTypeChange("WITHDRAW")}
            isActive={type === "WITHDRAW"}
            activeColor="red"
          >
            <img alt="Outcome" src={outcomeImg} />
            <S.TransactionTypeLabel>Saída</S.TransactionTypeLabel>
          </S.RadioButton>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
