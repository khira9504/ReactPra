import { useState } from "react";
import { styled } from "styled-components";

const Article = styled.article`
  background-color: #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  background-color: #fff;
  margin: 0 auto;
  max-width: 400px;
  position: relative;
  height: 500px;
  width: 100%;
`;

const Header = styled.header`
  background-color: #00c274;
  padding: 20px 0;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Lists = styled.ul`
  display: block;
  margin: 0;
  padding: 20px 0 0;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 0 20px;
  width: 90%;
`;

const ListCheck = styled.input`
  width: 13px;
`;

const ListTitle = styled.p`
  padding: 0 10px;
  margin: 0;
  width: calc(calc(100% - 13px) - 40px);
`;

const DeleteButton = styled.button`
  background-color: #e7e7e7;
  border-radius: 50%;
  color: #000;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: center;
  height: 36px;
  width: 40px;
`;

const AddList = styled.button`
  background-color: #00c274;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  position: absolute;
  inset: auto 10px 10px auto;
  height: 40px;
  width: 40px;
`;

const Modal = styled.div`
  background-color: rgb(0 0 0 / .6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
`;

const ModalInner = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 300px;
`;

const ModalHead = styled.p`
  color: #21b776;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const ModalInput = styled.input`
  font-size: 20px;
  margin: 0 0 10px;
`;

const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ModalSave = styled.button`
  background-color: #00c274;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px 0 0;
`;

const ModalCancel = styled.button`
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const NoList = styled.li`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const defaultTask = [
  {
    id: Math.random(),
    checked: true,
    title: "test",
    completed: false
  }
];

export default function R03() {
  const [activeModal, setActiveModal] = useState(false);
  const [tasks, setTasks] = useState(defaultTask);
  const [taskTitle, setTaskTitle] = useState("");
  const openModal = () => {
    setActiveModal(true);
  };
  const closeModal = () => {
    setActiveModal(false);
  };
  const setTask = () => {
    const taskBoard = {
      id: Math.random(),
      checked: false,
      title: taskTitle,
      completed: false
    };
    tasks.push(taskBoard);
    setTasks(tasks);
    setActiveModal(false);
  };
  const deleteTask = (id: number) => {
    const deletedTasks = tasks.filter(task => task.id !== id);
    setTasks(deletedTasks);
  };

  return (
    <Article>
      <Main>
        <Header>
          <Title>TODO List</Title>
        </Header>
        <Lists>
          { tasks.map(task => {
            if(tasks.length) {
              if(!task.completed) {
                return (
                  <List key={ task.id }>
                    {(() => {
                      if(task.checked) {
                        return <ListCheck type="checkbox" checked />
                      } else {
                        return <ListCheck type="checkbox" />
                      }
                    })()}
                    <ListTitle>{ task.title }</ListTitle>
                    <DeleteButton onClick={ () => deleteTask(task.id) }>×</DeleteButton>
                  </List>
                )
              }
            } else {
              return (
                <NoList>タスクはありません</NoList>
              )
            }
          }) }
        </Lists>
        <AddList onClick={ openModal }>＋</AddList>
        { activeModal && (
          <Modal>
            <ModalInner>
              <ModalHead>新規登録</ModalHead>
              <ModalInput onChange={ (e) => setTaskTitle(e.target.value) } type="text" />
              <ModalButtons>
                <ModalSave onClick={ setTask }>保存</ModalSave>
                <ModalCancel onClick={ closeModal }>キャンセル</ModalCancel>
              </ModalButtons>
            </ModalInner>
          </Modal>
        )}
      </Main>
    </Article>
  );
};
