import { useState } from 'react';

function AddUserHook(list_user) {
  const  [ users , setusers] = useState(list_user)
  const [name, setName] = useState('')
  const saveInput = (e) => {
    setName(e.target.value)
  }
  const addNewName = () =>{
    let data = [].concat(users)
    data = [...data, name]
    setusers(data)
    setName("")
  }
 
  return [ name,saveInput ,addNewName,users]
}

export default AddUserHook;