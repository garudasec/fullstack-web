import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {  createuserapi,  deleteuserapi,  getuserapi , updateuserapi} from '../service/api'

const EmployeeCards = () => {
  const[users, setUsers] = useState([])  

  const[newUser, setNewUser] = useState({
      name:'',
      email:'',
      empId:'',
      salary:''
  })


  const[isEdit, setIsEdit]= useState(false)

  const[userid, setUserId] = useState('')

  async function getUserData(){
    try {
      const response = await axios.get(getuserapi)
      console.log(response.data.data)
        setUsers(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getUserData()
  },[])

    function changeHandler(e){

        let {name, value} = e.target

        setNewUser((preItem)=>{
          return {...preItem, [name]:value}
        })

    }

    async function createUser(){
      try {
        const response = await axios.post(createuserapi, newUser )
        console.log(response)
        
        await getUserData()

        setNewUser({
          name:"",
          email:"",
          empId:"",
          salary:""
        });

      } catch (error) {
        console.log(error)
      }
    }

    async function updatedUser() {
        try {
          const response = await axios.put(`${updateuserapi}/${userid}`, newUser)

          console.log(response)

          await getUserData()
    
          setNewUser({
            name:"",
            email:"",
            empId:"",
            salary:""
          })

          setIsEdit(false);
          setUserId("");

        } catch (error) {
          console.log(error)
        }
    }


  async function submitHandler(e){
    e.preventDefault()
    // console.log(e)

   if(isEdit){
    await updatedUser()
   }else{
     await createUser()
   }
  }

  async  function deleteHandler(userid){
   try {
      const response = await axios.delete(`${deleteuserapi}/${userid}`)
         await getUserData()
      console.log(response) 
    } catch (error) {
        console.log(error)
    }
  }



  function  editHandler(user) {
    setUserId(user._id);

    setNewUser({
      name: user.name,
      email: user.email,
      empId: user.empId,
      salary: user.salary
    })

    setIsEdit(true);
  }
  

  return (
    <div>
        <h1>Employee System App</h1>
        <form onSubmit={submitHandler}>
            <input value={newUser.name}  onChange={changeHandler} name='name' placeholder='Name'/><br/>

            <input value={newUser.email}  onChange={changeHandler} name='email' placeholder='Email'/><br/>

            <input value={newUser.empId}  onChange={changeHandler} name='empId' placeholder='Enter your employee id'/><br/>

            <input type="number" value={newUser.salary} onChange={changeHandler} name='salary' placeholder='Enter your salary' /><br />

            <button type='submit'>{isEdit ? 'Update' : 'Create'}</button>
        </form>
        <div>
          {
            users.map((item,i)=>{
              return <div key={i}>
                <p>Name : {item.name}</p>
                <p>Email : {item.email}</p>
                <p>Emp. Id: {item.empId}</p>
                <p>Salary: {item.salary}</p>
            
                <div>
                  <button onClick={()=>deleteHandler(item._id)} >Delete</button>
                  <button onClick={()=>editHandler(item)}>Edit</button>
                </div>
                <hr/>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default EmployeeCards