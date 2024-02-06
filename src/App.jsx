
function App() {

  const mark = 100;
  const name = "Purna";
  const address = "Kurunegala";
  const age = 24;
  const getFullName = (f,m,l)=>{
    return `${f} ${m} ${l}` 
  }

  const fruit = ["mango","apple","banana"]
  const lang = <ul>
    <li>javascritpt</li>
    <li>viue</li>
    <li>angular</li>
    <li>react</li>
  </ul>
  

  return (
    <>
    
     <h2>Contact Details</h2>
     <p>Name : {name}</p>
     <p>Mark : {mark}</p>
     <p>Address : {address}</p>
     <p>age : {age}</p>
     <p>FullName :{getFullName("purna","lakshitha","ekanayaka")}
     </p> 
     <p>{name} like to eat {fruit[1]}</p>
     <p>Front end languages : {lang}</p>

    </>
  )
}

export default App
