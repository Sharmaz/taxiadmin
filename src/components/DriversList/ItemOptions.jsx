import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

const ItemOptions = ({driver_id, deleteItem}) => {
  const path = `/user/${driver_id}`;
  const edit_path = `${path}/edit`;
  const confirmDelete = () => {
    var opcion = window.confirm("Eliminar?");
    if (opcion == true) {
      deleteItem(driver_id)
    }
  } 
  return(
    <div>
      <Button color="link" onClick={() => confirmDelete()}>Delete</Button>
    </div>
  )
}

export default ItemOptions;