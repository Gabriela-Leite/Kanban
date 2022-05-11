import { FiTrash, FiEdit, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useListCards, CardProps } from "../../context/useListCards";

import * as S from "./styles";

type CardDetailsProps = { card: CardProps };

export const Card = ({ card }: CardDetailsProps) => {
  const { deleteCard, changeCard } = useListCards();

  const handleNext = () => {
    return card.lista === "toDoList"
      ? changeCard({
          titulo: card.titulo,
          conteudo: card.conteudo,
          lista: "doingList",
          id: card.id,
        })
      : changeCard({
          titulo: card.titulo,
          conteudo: card.conteudo,
          lista: "doneList",
          id: card.id,
        });
  };

  const handlePrevious = () => {
    return card.lista === "doneList"
      ? changeCard({
          titulo: card.titulo,
          conteudo: card.conteudo,
          lista: "doingList",
          id: card.id,
        })
      : changeCard({
          titulo: card.titulo,
          conteudo: card.conteudo,
          lista: "toDoList",
          id: card.id,
        });
  };

  return (
    <S.Container>
      <S.Title>{card.titulo}</S.Title>
      <S.Description>{card.conteudo}</S.Description>
      <S.ContainerButtons>
        {card.lista !== "toDoList" && (
          <S.ButtonProperties onClick={handlePrevious}>
            <FiChevronLeft size={20} />
          </S.ButtonProperties>
        )}

        <S.ButtonProperties>
          <FiEdit size={20} />
        </S.ButtonProperties>

        <S.ButtonProperties
          onClick={() => {
            deleteCard(card.id, card.lista);
          }}
        >
          <FiTrash size={20} />
        </S.ButtonProperties>

        {card.lista !== "doneList" && (
          <S.ButtonProperties onClick={handleNext}>
            <FiChevronRight size={20} />
          </S.ButtonProperties>
        )}
      </S.ContainerButtons>
    </S.Container>
  );
};
