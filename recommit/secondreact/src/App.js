import logo from './logo.svg';
import './App.css';
import Blt from './components/Blt'
import UserAcc from './components/UserAcc'


function App() {

const userList=[{name:"Stu",age:32},{name:"Tyler",age:23},{name:"Andrew",age:27}]
  return (
    <div className="App">
     
    {
     userList.map(function(acc){
        return <UserAcc acc={acc}/>
     })
    }

    </div>
  );
}

export default App; 
