import { List } from '@material-ui/core'
import {ListItem,ListItemText} from '@material-ui/core'
import React from 'react'
import db from "./Firebase"
import DeleteIcon from '@material-ui/icons/Delete';

function Items(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.item.item}/>
            </ListItem>  
            <DeleteIcon onClick={event => db.collection('items').doc(props.item.id).delete()}/>         
        </List>
    )
}

export default Items
