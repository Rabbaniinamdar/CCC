import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import React from 'react'

export default function Remove(props) {
  const deleteItems = (id) => {
    props.setlistItems((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id
      })
    })
  };
  return (
    <React.Fragment>
      <Button onClick={() => {
        deleteItems(props.id)
      }}>
        <Delete />
      </Button>
    </React.Fragment>
  )
}
