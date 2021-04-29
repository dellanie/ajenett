import React, {useState,useEffect} from 'react';
import "./find.css"
import { Button,FormControl } from '@material-ui/core';
import Items from "./Items";
import db from "./Firebase";
import firebase from "firebase"


function Find() {
    const [items,setItems] = useState([])
    const [input,setInput] = useState("")
    // when app loads,we need to listen to the database and fetch new items as they get added/removed
    useEffect(() => { //ffires when app.js loads
        db.collection("items").orderBy('timestamp','desc').onSnapshot(snapshot => {
                
        })
    }, []);

    const additem = (event) => {
        event.preventDefault()

        db.collection("items").add({
            item: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        //setItems([...items,input])
        setInput("");
        }

    const seacrhitem = (event) => {
        event.preventDefault()

    }
    return (
        <div className="find">
            
                <div className="find_left">
                
                        <form>
                            <FormControl>
                                <input className="input" placeholder="enter" type="text" value={input} onChange={event => setInput(event.target.value)} /> 
                            </FormControl>
                            <Button disabled={!input} type="submit" onClick={additem} variant="contained" color="primary">ADD</Button>-
                            <Button disabled={!input} type="submit" onClick={seacrhitem} variant="contained" color="primary">Search</Button>
                        </form>

                </div>

                
            
                <ul className="find_display">
                    
                    {items.map((item) =>(
                        <Items item={item}/>    
                    ))}
                    
                </ul>
            


            
        </div>
        
        
    )
}

export default Find
