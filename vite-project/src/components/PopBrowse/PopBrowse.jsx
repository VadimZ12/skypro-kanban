import { deleteCard, editCardQuery } from "../../api";
import { useUser } from "../../hooks/useUser";
import { Calendar } from "../Calendar/Calendar";
import React, { useState } from "react";
import {
  PopBrowseSta,
  PopBrowseTopBlock,
  StatusP,
  StatusThemes,
  TaskDesc,
} from "./PopBrowse.styled";

const TYPE_COLOR = {
  "Web Design": "_orange",
  Copywriting: "_purple",
  Research: "_green",
};
export const HeaderPopBrowse = ({ item }) => {
  const color = TYPE_COLOR[item.topic] || "_gray";

  return (
    <PopBrowseTopBlock>
      <h3 className="pop-browse__ttl">Название задачи:{item.title}</h3>
      <div className={`categories__theme theme-top ${color} _active-category`}>
        <p>{item.topic}</p>
      </div>
    </PopBrowseTopBlock>
  );
};
export const PopBrowse = ({ item, setCards, handleCloseModal }) => {
  const [storedValue, setStoredValue] = useState({});
  const [editCard, setEditCard] = useState(false);
  const { userData } = useUser();
  const modalForm = item;
  const [modalData, setModalData] = useState(modalForm);

  const editClick = () => {
    setStoredValue(modalData);
    setEditCard(true);
  };

  const cancelClick = () => {
    setModalData(storedValue);
    setStoredValue({});
    setEditCard(false);
  };
  const deleteTask = async (e) => {
    try {
      e.preventDefault();
      await deleteCard({ token: userData.token, id: item._id }).then((data) => {
        setCards(data.tasks);
        handleCloseModal();
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const editTask = async (e) => {
    try {
      e.preventDefault();
      await editCardQuery({
        token: userData.token,
        id: item._id,
        info: modalData,
      }).then((data) => {
        setCards(data.tasks);
        setEditCard(false);
        setStoredValue({});
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const valueChange = (value, name) => {
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    valueChange(value, name);
  };

  const handleCalendarChange = (value) => {
    valueChange(value, "date");
  };

  const handleStatusChange = (value) => {
    valueChange(value, "status");
  };

  const STATUS = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <>
      <PopBrowseSta>
        <StatusP>Статус</StatusP>
        <StatusThemes>
          {STATUS.map((el, key) => (
            <React.Fragment key={key}>
              {(editCard || modalData.status === el) && (
                <div
                  onClick={() => handleStatusChange(el)}
                  className={`status__theme ${
                    modalData.status === el ? "_gray" : ""
                  }`}
                >
                  <p className={` ${modalData.status === el ? "_gray" : ""}`}>
                    {el}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </StatusThemes>
      </PopBrowseSta>

      <div className="pop-browse__wrap">
        <form
          className="pop-browse__form form-browse"
          id="formBrowseCard"
          action="#"
        >
          <div className="form-browse__block">
            <TaskDesc> Описание задачи</TaskDesc>
            <textarea
              disabled={!editCard}
              className="form-browse__area"
              name="description"
              id="textArea01"
              readOnly=""
              placeholder="Введите описание задачи..."
              value={modalData.description}
              onChange={handleInputChange}
            />
          </div>
        </form>

        <Calendar
          disabled={!editCard}
          selected={new Date(modalData.date)}
          setSelected={handleCalendarChange}
        />
      </div>
      <div className="pop-browse__btn-browse ">
        {editCard && (
          <>
            <div className="btn-group">
              <button
                className="btn-edit__edit _btn-bg _hover01"
                onClick={editTask}
              >
                Сохранить
              </button>
              <button
                className="btn-edit__edit _btn-bor _hover03"
                onClick={cancelClick}
              >
                Отменить
              </button>
              <button
                className="btn-edit__delete _btn-bor _hover03"
                id="btnDelete"
                onClick={deleteTask}
              >
                Удалить задачу
              </button>
            </div>

            <button
              className="btn-edit__close _btn-bg _hover01"
              onClick={handleCloseModal}
            >
              Закрыть
            </button>
          </>
        )}

        {!editCard && (
          <>
            <div className="btn-group">
              <button
                className="btn-browse__edit _btn-bor _hover03"
                onClick={editClick}
              >
                Редактировать задачу
              </button>
              <button
                className="btn-edit__delete _btn-bor _hover03"
                id="btnDelete"
                onClick={deleteTask}
              >
                Удалить задачу
              </button>
            </div>
            <button
              className="btn-browse__close _btn-bg _hover01"
              onClick={handleCloseModal}
            >
              Закрыть
            </button>
          </>
        )}
      </div>
    </>
  );
};
