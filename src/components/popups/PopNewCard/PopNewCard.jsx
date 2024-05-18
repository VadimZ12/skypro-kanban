import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { postTodo } from "../../../api/api";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopNewCard.styled";
import { useTasks } from "../../../hooks/useTasks";
import { CalendarStyled, TitleDate } from "../../Calendar/Calendar.styled";
import { GlobalStyle } from "../../../styled/global/Global.styled";
import { SubTitle } from "../../../styled/common/Common.styled";
import { themeNameColor } from "../../../lib/ThemeColor";

export default function PopNewCard() {
  const { user } = useUser();
  const { setCards } = useTasks();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSubmitted, setIsSubMitted] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsSubMitted(false);

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      ...newTask,
      date: selectedDate,
      token: user.token,
    };

    if (Object.values(taskData).includes("")) {
      return alert(
        "Нельзя оставлять пустые поля - необходимо внести все данные, выбрать дату и выбрать категорию"
      );
    }
    setIsSubMitted(true);
    await postTodo(taskData)
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
      <S.PopNewCardStyled>
        <S.PopNewCardContainer>
          <S.PopNewCardBlock>
            <S.PopNewCardContent>
              <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
              <Link to={appRoutes.HOME}>
                <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
              </Link>
              <S.PopNewCardWrap>
                <div>
                  <S.PopNewCardForm>
                    <S.FormNewBlock>
                      <SubTitle htmlFor="formTitle">Название задачи</SubTitle>
                      <S.FormNewInput
                        type="text"
                        name="title"
                        value={newTask.title}
                        onChange={handleInputChange}
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus
                      />
                    </S.FormNewBlock>
                    <S.FormNewBlock>
                      <SubTitle htmlFor="textArea">Описание задачи</SubTitle>
                      <S.FormNewInputArea
                        type="textarea"
                        name="description"
                        value={newTask.description}
                        onChange={handleInputChange}
                        id="textArea"
                        placeholder="Введите описание задачи..."
                      ></S.FormNewInputArea>
                    </S.FormNewBlock>
                  </S.PopNewCardForm>
                </div>
                <CalendarStyled>
                  <TitleDate htmlFor="formTitle">Даты</TitleDate>
                  <Calendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </CalendarStyled>
              </S.PopNewCardWrap>
              <S.PopNewCategories>
                <S.PopNewCategoriesSubtitle>
                  Категория
                </S.PopNewCategoriesSubtitle>
                <S.PopNewCategoriesThemes>
                  <S.ThemeInputs
                    type="radio"
                    id="radio1"
                    name="topic"
                    value="Web Design"
                    onChange={handleInputChange}
                  />
                  <S.CardThemeToSelect
                    $isChecked={newTask.topic === "Web Design"}
                    $themeColor={themeNameColor["Web Design"]}
                    htmlFor="radio1"
                  >
                    Web Design
                  </S.CardThemeToSelect>
                  <S.ThemeInputs
                    type="radio"
                    id="radio2"
                    name="topic"
                    value="Research"
                    onChange={handleInputChange}
                  />
                  <S.CardThemeToSelect
                    $themeColor={themeNameColor["Research"]}
                    htmlFor="radio2"
                    $isChecked={newTask.topic === "Research"}
                  >
                    Research
                  </S.CardThemeToSelect>
                  <S.ThemeInputs
                    type="radio"
                    id="radio3"
                    name="topic"
                    value="Copywriting"
                    onChange={handleInputChange}
                  />
                  <S.CardThemeToSelect
                    $themeColor={themeNameColor["Copywriting"]}
                    htmlFor="radio3"
                    $isChecked={newTask.topic === "Copywriting"}
                  >
                    Copywriting
                  </S.CardThemeToSelect>
                </S.PopNewCategoriesThemes>
              </S.PopNewCategories>
              <S.FormNewSubmit
                onClick={handleFormSubmit}
                $isSubmitted={isSubmitted}
              >
                Создать задачу
              </S.FormNewSubmit>
            </S.PopNewCardContent>
          </S.PopNewCardBlock>
        </S.PopNewCardContainer>
      </S.PopNewCardStyled>
    </>
  );
}
