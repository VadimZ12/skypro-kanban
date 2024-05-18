import { Link, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useTasks } from "../../../hooks/useTasks";
import { themeNameColor } from "../../../lib/ThemeColor";
import { GlobalStyle } from "../../../styled/global/Global.styled";
import { useState } from "react";
import { CalendarStyled, TitleDate } from "../../Calendar/Calendar.styled";
import {
  FormNewInputAreaForBrowse,
  ThemeInputs,
} from "../PopNewCard/PopNewCard.styled";
import { useUser } from "../../../hooks/useUser";
import { deleteTodo, putTodo } from "../../../api/api";
import { NotCorrectText } from "../../../styled/common/SignPages.styled";
import { statusList } from "../../../lib/statusList";

export default function PopBrowse() {
  const { user } = useUser();
  const { id } = useParams();
  const { cards, setCards } = useTasks();

  const navigate = useNavigate();

  const openedCard = cards.filter((card) => card._id === id);
  const selectedCardData = {
    title: openedCard[0].title,
    description: openedCard[0].description,
    topic: openedCard[0].topic,
    status: openedCard[0].status,
    date: openedCard[0].date,
  };
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDiscard, setIsDiscard] = useState(false);
  const [selectedDate, setSelectedDate] = useState(selectedCardData.date);
  const [editTask, setEditTask] = useState(selectedCardData);
  const [isSubmitted, setIsSubMitted] = useState(false);

  const handleEditMode = () => {
    setIsEditMode(true);
    setIsDiscard(false);
    setSelectedDate(selectedCardData.date);
    setEditTask(selectedCardData);
  };

  const handleDiscard = () => {
    setIsEditMode(false);
    setEditTask(selectedCardData);
    setIsDiscard(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsNotCorrect(false);

    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  const [isNotCorrect, setIsNotCorrect] = useState(false);

  const handleFormSave = async (e) => {
    e.preventDefault();

    if (editTask.description === "") {
      setIsNotCorrect(true);
      return;
    }

    // setIsSubMitted(true);
    const taskData = {
      ...editTask,
      date: selectedDate,
      token: user.token,
      id: id,
    };

    await putTodo(taskData)
      .then((data) => {
        setCards(data.tasks);
        navigate(appRoutes.HOME);
      })
      .catch(() => {
        alert("Похоже отсутствует интернет, попробуйте позже");
        setIsSubMitted(false);
      });
  };

  const handleFormDelete = async (e) => {
    e.preventDefault();
    setIsSubMitted(true);
    const taskData = {
      ...editTask,
      token: user.token,
      id: id,
    };
    await deleteTodo(taskData)
      .then((data) => {
        setCards(data.tasks);
        navigate(appRoutes.HOME);
      })
      .catch(() => {
        alert("Похоже отсутствует интернет, попробуйте позже");
        setIsSubMitted(false);
      });
  };

  return (
    <>
      <GlobalStyle />
      <S.PopBrowseStyled>
        <S.PopBrowseContainer>
          <S.PopBrowseBlock>
            <S.PopBrowseContent>
              <S.PopBrowseTopBlock>
                <S.PopBrowseTitle>{openedCard[0].title}</S.PopBrowseTitle>
                <S.OpenedCardTheme
                  $themeColor={themeNameColor[openedCard[0].topic]}
                >
                  {openedCard[0].topic}
                </S.OpenedCardTheme>
              </S.PopBrowseTopBlock>
              <S.PopBrowseStatus>
                <S.PopBrowseStatusTitle>Статус</S.PopBrowseStatusTitle>

                <S.PopBrowseStatusThemes>
                  {isEditMode ? (
                    statusList.map((el, index) => (
                      <div key={`input-${index}`}>
                        <ThemeInputs
                          name={"status"}
                          type="radio"
                          id={`radio${index}`}
                          value={el}
                          onChange={handleInputChange}
                        />
                        <S.NewSelectedStatus
                          $isChecked={editTask.status === el}
                          htmlFor={`radio${index}`}
                        >
                          {el}
                        </S.NewSelectedStatus>
                      </div>
                    ))
                  ) : (
                    <S.SelectedStatus>
                      {selectedCardData.status}
                    </S.SelectedStatus>
                  )}
                </S.PopBrowseStatusThemes>
              </S.PopBrowseStatus>
              <S.PopBrowseWrap>
                <S.PopBrowseForm>
                  <S.FormBrowseBlock>
                    <S.FormBrowseTitle htmlFor="textArea01">
                      Описание задачи
                    </S.FormBrowseTitle>
                    {isEditMode ? (
                      <FormNewInputAreaForBrowse
                        type="textarea"
                        name="description"
                        value={editTask.description}
                        onChange={handleInputChange}
                      ></FormNewInputAreaForBrowse>
                    ) : (
                      <S.FormBrowseArea>
                        {openedCard[0].description}
                      </S.FormBrowseArea>
                    )}
                  </S.FormBrowseBlock>
                </S.PopBrowseForm>
                <CalendarStyled>
                  <TitleDate htmlFor="formTitle">Даты</TitleDate>
                  {isEditMode ? (
                    <Calendar
                      isDiscard={isDiscard}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  ) : (
                    <Calendar
                      isDiscard={isDiscard}
                      selectedDateBrowse={openedCard[0].date}
                    />
                  )}
                </CalendarStyled>
              </S.PopBrowseWrap>
              <S.ThemeDownCategories></S.ThemeDownCategories>
              <S.PopBrowseButtonBrowse>
                <S.ButtonGroup>
                  {isEditMode ? (
                    <>
                      <S.ButtonSave
                        onClick={handleFormSave}
                        $isSubmitted={isSubmitted}
                      >
                        Сохранить
                      </S.ButtonSave>
                      <S.ButtonDiscard
                        onClick={handleDiscard}
                        $isSubmitted={isSubmitted}
                      >
                        Отменить
                      </S.ButtonDiscard>
                    </>
                  ) : (
                    <S.ButtonChange onClick={handleEditMode}>
                      Редактировать задачу
                    </S.ButtonChange>
                  )}
                  <S.ButtonDelete
                    onClick={handleFormDelete}
                    $isSubmitted={isSubmitted}
                  >
                    Удалить задачу
                  </S.ButtonDelete>
                </S.ButtonGroup>
                <Link to={appRoutes.HOME}>
                  <S.ButtonClose $isSubmitted={isSubmitted}>
                    Закрыть
                  </S.ButtonClose>
                </Link>
                {isNotCorrect && (
                  <NotCorrectText>
                    Нельзя оставлять описание пустым. Внесите данные.
                  </NotCorrectText>
                )}
              </S.PopBrowseButtonBrowse>
            </S.PopBrowseContent>
          </S.PopBrowseBlock>
        </S.PopBrowseContainer>
      </S.PopBrowseStyled>
    </>
  );
}
