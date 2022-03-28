import react from "react";

const Table = ({empdata,setPath,path}) => {

    const emp = empdata.map( (data) =>{
        return(
            <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.mobileno}</td>
            </tr>
        )
        
    })
    return(
        <div style={{background: 'green',height: '100vh'}}>
             <table className='table table-stripped'>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        {/* <th>Confirm Password</th> */}
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    { emp }                    
                </tbody>
            </table>
            <button  className= "btn btn-warning"onClick={() => setPath("Input")}>Edit</button>
        </div>
    )
}
export default Table 





