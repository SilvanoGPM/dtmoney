import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';

import { useTransactions } from '../../contexts/TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import * as S from './styles';
import { toast } from 'react-toastify';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = 'DEPOSIT' | 'WITHDRAW';

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { addTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const [type, setType] = useState<TransactionType>('DEPOSIT');

  const [isAddingTransaction, setIsAddingTransaction] = useState(false);

  function resetValues() {
    setTitle('');
    setCategory('');
    setAmount(0);
    setType('DEPOSIT');
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (!title) {
      toast.warn('Insira o título da transação');
      return;
    }

    if (amount <= 0) {
      toast.warn('Insira apenas valores positivos');
      return;
    }

    if (!category) {
      toast.warn('Insira uma categoria para a transação');
      return;
    }

    try {
      setIsAddingTransaction(true);
      await addTransaction({ title, amount, category, type });

      onRequestClose();

      resetValues();

      toast.success('Transação adicionada com sucesso');
    } catch {
      toast.error('Aconteceu um erro ao tentar adicionar esta transação!', {
        theme: 'colored',
        position: 'bottom-center',
      });
    } finally {
      setIsAddingTransaction(false);
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
        <img alt="Fechar modal" src={closeImg} />
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
          value={amount}
          min={0}
          onChange={({ target }) => setAmount(Number(target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioButton
            type="button"
            onClick={handleSetTypeChange('DEPOSIT')}
            isActive={type === 'DEPOSIT'}
            activeColor="green"
          >
            <img alt="Entrada" src={incomeImg} />
            <S.TransactionTypeLabel>Entrada</S.TransactionTypeLabel>
          </S.RadioButton>

          <S.RadioButton
            type="button"
            onClick={handleSetTypeChange('WITHDRAW')}
            isActive={type === 'WITHDRAW'}
            activeColor="red"
          >
            <img alt="Saída" src={outcomeImg} />
            <S.TransactionTypeLabel>Saída</S.TransactionTypeLabel>
          </S.RadioButton>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <button type="submit" disabled={isAddingTransaction}>
          {isAddingTransaction ? (
            <S.LoadingIcon size={30} />
          ) : (
            <AiOutlinePlus size={30} />
          )}
          <span>{isAddingTransaction ? 'Cadastrando...' : 'Cadastrar'}</span>
        </button>
      </S.Container>
    </Modal>
  );
}
