import React from 'react'
import { useEffect } from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }
  ////

const TableBody = ({employeeData, removeEmployee}) => {
    useEffect((()=>{
        return ()=>{
            console.log('unmoutning')
        }
    }), [])
    return (
        <tbody>
        {employeeData.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.job}</td>
            <td>
                <button onClick={() => removeEmployee(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    )
  }
// const TableRow =({employee, index, remove}) =>{
//     useEffect(()=>{
//             return ()=>{
//                 console.log('unmount')
//             }
        
//     }, [])
//     return(
//         <tr>
//              <td>{employee.name}</td>
//              <td>{employee.job}</td>
//              <td>
//                  <button onClick={() => remove(index)}>Delete</button>
//              </td>     
//         </tr>
//     )
// }
// const TableBody =({employeeData, removeEmployee}) =>{
//     return(
//         <tbody>
//          {employeeData.map((employee, i) => (
//             <TableRow employee={employee} index={i} remove={removeEmployee}/>
//          ))}   
//         </tbody>
//     )
// }

  const Table = ({employeeData, removeEmployee}) => {
    return (
      <table>
        <TableHeader />
        <TableBody employeeData={employeeData} removeEmployee={removeEmployee}/>
      </table>
    );
  };

export default Table