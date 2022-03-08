import React , {useState, useEffect}from 'react';
import { Link , useParams } from 'react-router-dom';
import "./Styleinput.css";

const StudentEdit = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    const {studentid}= useParams();
    
    console.log(studentid)

    const {data} = props;
    console.log(data)

   useEffect(() => {
       const student =  data.filter(e => e.ID == studentid);
       console.log(student);
       setName(student[0].name);
       setAge(student[0].age);
       setCourse(student[0].course);
       setBatch(student[0].batch)
       
    }, [])

   const updateTheUser = () => {
      const tempObj  = {
        name : name,
        age: age,
        course : course,
        batch : batch,
        ID : studentid
      }
      
     props.func(studentid, tempObj)

   }
   const deleteTheUser = () => {
     props.func1(studentid)


   }
 

  return (
    <>
    <form action="">
<div className="input-field">
  <input type="text" onChange={(e) => {setName(e.target.value)}} id = "name" value={name}/>
  <label for = 'name' >Name:</label>
</div>
<div className="input-field">
  <input onChange={(e) => {setAge(e.target.value)}} type="number" value={age}  id = "age"/>
  <label for="age" >Age:</label>
</div>
<div className="input-field">
  <input type="text" onChange={(e) => {setCourse(e.target.value)}} value={course} id = "course" />
  <label for = "course">Course:</label>
</div>
<div className="input-field">
  <input type="text" onChange={(e) => {setBatch(e.target.value)}} value={batch} id = "batch"/>
  <label for = "batch">Batch:</label>
</div>
</form>
<Link to = "/student"><button className='btn btn-outline-secondary edit'>Cancel</button></Link>
<Link to="/student"><button onClick={updateTheUser} className='btn btn-success edit' id='bt1' >Update</button></Link>
<Link to="/student"><button onClick={deleteTheUser} className='btn btn-danger' id='bt2' >Delete</button></Link>
</>
  )
}

export default StudentEdit
