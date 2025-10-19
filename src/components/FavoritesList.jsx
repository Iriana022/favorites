import { useSelector, useDispatch } from "react-redux"
import { Button, Card, Stack, Modal, Form } from "react-bootstrap"
import Icon from "@reacticons/bootstrap-icons"
import { addFavorite, deleteFavorite, editFavorite } from "../store/favorites"
import { useState } from "react"

function EditModalsForm({show, item, onClose}){
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const handleClose = () => {
        dispatch(editFavorite({
            id: item.id,
            newNom : text
        }))
        onClose(show)
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><Icon name="pencil-square" className="me-1" />Modifier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control value={item.category} readOnly disabled className="mb-3"/>
          <Form.Control type="text" value={text} onChange={(e) => handleChange(e)} placeholder={item.nom} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            <Icon name="check-lg"/>
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

function FavoritesItem({item}){
    const [edited, setEdited] = useState(false)
    const [nom, setNom] = useState()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteFavorite({
            id: id
        }))
    }
    const handleEdit = (item) => {
        setEdited(true)
    }
    const handleOnclose = (edited) => {
        setEdited(false)
    }
    return (
        <Card.Title>
            <EditModalsForm show={edited} item={item} onClose={() => handleOnclose(edited)} />
            {item.nom}
            <Icon className="float-end text-danger mx-2" onClick={() => handleDelete(item.id)}  name="trash3"/>
            <Icon className="float-end text-warning" name="pencil-square" onClick={() => handleEdit(item)}/>
        </Card.Title>
        
    )
}



export default function FavoriteList(){
    const [show, setShow] = useState(false)
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const groupByCatfavorites = favorites.reduce((acc, item) => {
        if(!acc[item.category]){
            acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
    }, {})
    const handleAdd = () => {
        setShow(true)
        dispatch(addFavorite({
            nom: 'test',
            category: 'test'
        }))
    }
    return (
        <Stack gap={3}>
            {
                Object.entries(groupByCatfavorites).map(([category, items]) => (
                    <Card key={category}>
                        
                        <Card.Header>{category}</Card.Header>
                        <Card.Body>
                            {
                                items.map(item => <FavoritesItem key={item.id} item={item} />)
                            }

                                                    
                        </Card.Body>
                    </Card>
                ))
            }
        </Stack>
    )
}