import logo from './logo.svg';
import './App.css';
import AddUserHook from './hook'
function App() {
  const  list_users = ['Huyen','Hoa','Hung','Long']
  const [ name,saveInput,addNewName,users] = AddUserHook(list_users)
  const show_list_users = (users) =>{
    let result = null
    result = users.map((value,index)=>{
      if(index === users.length -1){
        return(
          <span>{value}</span>
        )
      } else {
        return(
          <span>{value} ,</span>
        )
      }
      
    })
    return result
  } 
  return (
    <div className="App">
      <p>学生一覧：[{show_list_users(list_users)}]</p>
      <p>追加する名前を入力してください。</p>
      <input  value={name} onChange={saveInput} />
      <br/>
      <button onClick={addNewName} >確定</button>
      <p>追加する名前： {name}</p>
      <p>新しい一覧：[{show_list_users(users)}]</p>
    </div>
  );
}

export default App;