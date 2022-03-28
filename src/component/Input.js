import React, { useState, useEffect } from 'react'
import Table from './Table'

const Input = ({empdata, setEmpdata, path, setPath, count, setCount}) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [mobileno, setMobileno] = useState()
    
    // const [empdata, setEmpdata] = useState([])
    // const [path, setPath] = useState('Input')
    const [errors, setErrors] = useState([]) 

    const changeName = (event) => {
        
        setName(event.target.value)
        console.log("inside name change")
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeConfirmpassword = (event) => {
        setConfirmpassword(event.target.value)
    }
    const changeMobileno = (event) => {
        setMobileno(event.target.value)
    }


    const handleValidation = (event) => {
        // event.preventDefault();
        console.log("inside validation")
        console.log(name)
        if (!name){
            console.log("nameinvalid")
            let temperror = [...errors]
            temperror.push("enter name")
            alert("Enter name")
            // setErrors(temperror)
            return false
            // alert("name invalid")
        }
        if(typeof name !== "undefined"){
            if(!name.match(/^[a-zA-Z ]+$/)){
              alert("Only letters are allowed in name")
              return false
            }        
         }
        if (!email){
            // console.log("Einvalid")
            // console.log(errors)
            // let temperror = [...errors]
            // console.log(temperror)
            // temperror.push("enter email")
            // setErrors(temperror)
            alert("Enter Email")
            return false
            // alert("name invalid")
        }
        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
            
                alert("Enter valdid email")
                return false
             }
        }  

        if (!password){
            // console.log("nameinvalid")
            // setErrors("Enter password")
            alert("Enter Password")
            return false
            // alert("name invalid")
        }
        if ( password != confirmpassword ){
            // console.log("Pa")
            // setErrors("password and confirm password do not match")
            alert("Passwords do not match")
            return false
            // alert("name invalid")
        }
        if (!mobileno){
            // console.log("nameinvalid")
            // setErrors("Please Enter Mobile Number")
            alert("Enter valid Mobile number")
            return false
            // alert("name invalid")
        }
        if(mobileno){
            if(!mobileno.match(/^[0-9]+$/)){
                alert("Only Nubers are allowed in Mobile Number")
                return false
              }        
        }
        return true 
    }



    const addvalue = () => {
        
        if (handleValidation()){
            // setCount(count + 1)
            const row = {
                'name': name,
                'email': email,
                'password': password,
                'mobileno': mobileno 
    
            }
            // console.log(row)
            const tempdata = [...empdata]
            tempdata.push(row)
            setEmpdata(tempdata)
        }else{
            // alert(errors)
        }
        
       
    }
    const removevalue = () => {
        const tempdata = [...empdata]
        tempdata.pop()
        setEmpdata(tempdata)
    }

 
    useEffect( () => {
        console.log("inside Effect")
        if(name){
            console.log(name)

        }
        if(empdata){
            console.log(empdata)
        }
        if(email){
            console.log(email)
        }
    }, [name, empdata, email])
    const [tablerows, setTablerows] = useState([
        <tr>
            <td><input placeholder='name' onChange={changeName}></input></td>
            <td><input placeholder='email'onChange={changeEmail}></input></td>
            <td><input placeholder='password'onChange={changePassword}></input></td>
            <td><input placeholder='password'onChange={changeConfirmpassword}></input></td>
            <td><input placeholder='mobileno'onChange={changeMobileno}></input></td>
            <td><button onClick={addvalue}>add</button></td>
            <td><button onClick={removevalue}>remove</button></td>
            <td><button>New_row</button></td>

        </tr>
    ])
    // const New_row = () => {
    //     rowvalues.push(
    //     <tr>
    //         <td><input placeholder='name' onChange={changeName}></input></td>
    //         <td><input placeholder='email'onChange={changeEmail}></input></td>
    //         <td><input placeholder='password'onChange={changePassword}></input></td>
    //         <td><input placeholder='password'onChange={changeConfirmpassword}></input></td>
    //         <td><input placeholder='mobileno'onChange={changeMobileno}></input></td>
    //         <td><button onClick={addvalue}>add</button></td>
    //         <td><button onClick={removevalue}>remove</button></td>
    //         <td><button>New_row</button></td>

    //     </tr>)
    //     // setTablerows(['jkj'])
    //     window.location.reload()
    //    console.log(rowvalues)
    // }
    // let rowvalues = [
    //     <tr>
    //         <td><input placeholder='name' onChange={changeName}></input></td>
    //         <td><input placeholder='email'onChange={changeEmail}></input></td>
    //         <td><input placeholder='password'onChange={changePassword}></input></td>
    //         <td><input placeholder='password'onChange={changeConfirmpassword}></input></td>
    //         <td><input placeholder='mobileno'onChange={changeMobileno}></input></td>
    //         <td><button onClick={addvalue}>add</button></td>
    //         <td><button onClick={removevalue}>remove</button></td>
    //         <td><button onClick={New_row}>New_row</button></td>

    //     </tr>
    // ]

    // const [count, setCount] = useState(1)
    return(
        // path == 'Input'?
        // (
        <div style={{ height: '100vh',backgroundColor: 'yellow', height: '100vh',display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <table className='table table-stripped'>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td><input placeholder='name' onChange={changeName}></input></td>
                        <td><input placeholder='email'onChange={changeEmail}></input></td>
                        <td><input placeholder='password'onChange={changePassword}></input></td>
                        <td><input placeholder='password'onChange={changeConfirmpassword}></input></td>
                        <td><input placeholder='mobileno'onChange={changeMobileno}></input></td>
                        <td><button onClick={addvalue}>add</button></td>
                        <td><button onClick={removevalue}>remove</button></td>
                        <td><button>New_row</button></td>

                    </tr> */}
                    {/* { tablerows } */}
                    {/* { rowvalues } */}
                    {[...Array(count)].map((x, i) =>
                        <tr>
                            <td><input placeholder='name' onChange={changeName}></input></td>
                            <td><input placeholder='email'onChange={changeEmail}></input></td>
                            <td><input placeholder='password'onChange={changePassword}></input></td>
                            <td><input placeholder='password'onChange={changeConfirmpassword}></input></td>
                            <td><input placeholder='mobileno'onChange={changeMobileno}></input></td>
                            <td><button className= "btn btn-primary"onClick={addvalue}>add</button></td>
                            <td><button className= "btn btn-danger" onClick={removevalue}>remove</button></td>
                            {/* <td><button className= "btn btn-success" onClick={() => setCount(count + 1)}>New_row</button></td> */}
                        </tr>
                    )}
                    {
                        
                    }
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <button  className= "btn btn-success" onClick = {() => setPath('Table')}>Submit</button>
            </div>
        </div>
        // )
    //     :
    //     (
    //         <Table empdata= { empdata } />
    //     )
    )
}


export default Input





