import React, {useEffect, useState} from 'react';
import ModalForm from "./Сomponents/ModalForm";

function App() {
const [usersList, setUsersList] =useState(users);
const [user, setUser] = useState({
    name:'',
    city:'',
});
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setUsersList(users)
    }, []);

const handleDelete=(id)=>{
    setUsersList(usersList.filter((user) => user.id !== id));

}

    const handleEdit=(id)=>{
        const editUser=usersList.find((user) => user.id === id);
        setUser(editUser)
        setIsEditing(true);
        setShowModal(true);

    }

    const handleAddOrUpdate = (props) => {
        if (user.name !== '' && user.city !== '') {
            if (isEditing) {
                setUsersList(usersList.map((u) => (u.id === user.id ? user : u)));
                setIsEditing(false);
            } else {
                setUsersList([
                    ...usersList,
                    {
                        id: usersList.length + 1,
                        name: user.name,
                        city: user.city,
                    },
                ]);
            }
            setUser({
                id: null,
                name: '',
                city: '',
            });
        } else {
            alert('Пожалуйста заполните все поля!');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setUser({
            id: null,
            name: '',
            city: '',
        });
        setIsEditing(false);
    };




    const handleAdd = () => {
        if (user.name !== '' && user.city !== '') {
            setUsersList([...usersList, {
                id: usersList.length + 1,
                name: user.name,
                city: user.city,
            }])
            setUser({
                name: '',
                city: '',
            });
        } else {
            alert('Пожалуйста заполните все поля!')
        }


    }

  return (


      <div>
          <ModalForm show={showModal} handleClose={handleCloseModal}>
              <input
                  className='modal-form-input'
                  value={user.name}
                  placeholder={'Name'}
                  onChange={(e) => setUser({...user, name: e.target.value})}
              />
              <input
                  className='modal-form-input'
                  value={user.city}
                  placeholder={'City'}
                  onChange={(e) => setUser({...user, city: e.target.value})}
              />
              <button className='btn-add' onClick={handleAddOrUpdate}>
                  {isEditing ? 'Update' : 'Add'}
              </button>
          </ModalForm>

          <div className='form-inputs'>
              <input
                  className='modal-form-input'
                  value={user.name}
                  placeholder={'Name'}
                  onChange={(e) => setUser({...user, name: e.target.value})}
              />
              <input
                  className='modal-form-input'
                  value={user.city}
                  placeholder={'City'}
                  onChange={(e) => setUser({...user, city: e.target.value})}
              />
              <button className={'btn-add'} onClick={() => handleAdd(user.id)}>Add</button>
          </div>


          {


              usersList.map(el =>
                  <div className={'card'} key={el.id}>
                      <h3>{el.name}</h3>
                      <p>{el.city}</p>
                      <div className={'btns-container'}>
                          <button className={'btn-edit'} onClick={() => handleEdit(el.id)}>Edit</button>
                          <button className={'btn-del'} onClick={() => handleDelete(el.id)}>Delete</button>
                      </div>
                  </div>
              )
          }
      </div>


  );
}

export default App;

const users = [
    {
        id: 1,
        name: 'John',
        city: 'New York',
    },
    {
        id: 2,
        name: 'Adam',
        city: 'London'
    },
    {
        id: 3,
        name: 'Kate',
        city: 'Moscow'
    },
    {
        id: 4,
        name: 'James',
        city: 'London'
    },
    {
        id: 5,
        name: 'Ben',
        city: 'London'
    },
    {
        id: 6,
        name: 'Anna',
        city: 'Dublin'
    },

]
