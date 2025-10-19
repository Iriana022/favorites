import { Button, Container, Form, Modal } from "react-bootstrap";
import FavoriteList from "./components/FavoritesList";
import "bootstrap/dist/css/bootstrap.min.css"
import Icon from "@reacticons/bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavorite } from "./store/favorites";


function AddModalsForm({show, onShow}){
    const dispatch = useDispatch()
    const [nom, setNom] = useState('')
    const [category, setCategory] = useState('')
    const handleChangeCategory = (e) => {
      setCategory(e.target.value)
    }
    const handleChangeNom = (e) => {
      setNom(e.target.value)
    }
    const handleClose = () => {
      dispatch(addFavorite ({
        nom: nom,
        category: category
      }))
      onShow()
      setCategory('')
      setNom('')
    }

    return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><Icon name="folder-plus" className="me-1" />Ajouter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" name="category" value={category} 
          onChange={(e) => handleChangeCategory(e)}
          className="mb-3" placeholder="categorie"/>
          <Form.Control type="text" name="nom" value={nom} 
          onChange={(e) => handleChangeNom(e)}
          placeholder="nom"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            <Icon name="check-lg"/>
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default function App(){
  const [edited, setEdited] = useState(false)

  const handleClose = () => {
    setEdited(false)
  }
  return(
    <Container>
      <h1 className="text-center">
        Gestionaire de Favoris
      </h1>
        <AddModalsForm show={edited} onShow={handleClose} />
      <Button variant="outline-primary" className="mb-3" onClick={() => setEdited(true)}>
        <Icon name="folder-plus"/> Ajouter favori
      </Button>
      <FavoriteList/>
    </Container>
  )
}

/* import { createSlice, configureStore } from "@reduxjs/toolkit";

let id = 2;

const reviews = [
  {
    id: 1,
    content: 'Nice Job, awesome !',
    rating : 3.5
  },
  {
    id: 2,
    content: 'I recommended this services, this is professionnal',
    rating : 4.5
  }
]

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState : reviews,
  reducers: {
    addReview: (state, action) => (
      [
        ...state, { id: ++id, content : action.payload.content, rating : action.payload.rating} 
      ]      
    )    
  }
})

export const {addReview} = reviewsSlice.actions

const store = configureStore({
  reducer: reviewsSlice.reducer
})

store.subscribe(() => console.log(store.getState()))
store.dispatch(addReview({
  content: 'This is a great App, subscribe !',
  rating: 4.8
}))
 */
/* const state = ratingsReducer(undefined, {})
const newState = ratingsReducer(reviews, {
  type: ADD_REVIEWS,
  payload: {
    content: 'This is a demo content',
    rating: 5
  }
}) */
//console.log(state, newState)


/* export default function App(){
  return <>

  </>
} */
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import {TodoListStore} from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <TodoListStore />
    </Provider>
  )
} */

//export default App
