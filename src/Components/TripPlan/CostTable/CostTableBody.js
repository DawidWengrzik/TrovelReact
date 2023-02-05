import React, { Fragment, useState } from 'react'


const CostTableBody = ({getTableBodyProps, rows, prepareRow, data , setData, columns}) => {

  const [editableRowId, setEditableRowId] = useState([]);
  const [modifyValues, setModifyValues] = useState(data);

  const handleEditRow = (row) => {
    console.log(row)
    setEditableRowId([...editableRowId, row.id])
  }

  const handleSaveRow = (row) => {
    let oldRow = data[row.id];
    let newRow = modifyValues[row.id]
    const modifiedRow = { ...oldRow, ...newRow}

    const updatedRow = data.map(individualRow => {
      if (individualRow === row.original) {
        return {...individualRow, ...modifiedRow};
      }
      return individualRow;
    })

    setData(updatedRow)
    handleUneditableRow(row)                  
    //setData(data[row.id] = modifiedRow)
  }

  const handleUneditableRow = (row) => {
    setEditableRowId(editableRowId.filter(el => el !== row.id))
  }

  return (
    <tbody {...getTableBodyProps()}>
        {rows.map(row => {
            prepareRow(row)
            return(
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return(
                        <Fragment>
                          {editableRowId.includes(row.id) ? 
                          <td {...cell.getCellProps()}>
                            <input type='text' defaultValue={cell.value} onChange={(e) => {
                              setModifyValues(prevState => ({...prevState,[row.id]: {...prevState[row.id],[cell.column.id]: e.target.value}}))}}>
                            </input>
                            </td> 
                          : <td {...cell.getCellProps()}>{cell.render('Cell')}</td>}
                        </Fragment>)
                    })}
                    <td>
                      {!editableRowId.includes(row.id) ? 
                      <button onClick={() => handleEditRow(row)}>Edit</button> : 
                      <Fragment>
                        <button onClick={() => handleSaveRow(row)}>Save</button>
                        <button onClick={() =>handleUneditableRow(row)}>X</button>
                      </Fragment>}
                      <button onClick={() => setData(data.filter(el => el !== row.original))}>-</button>
                    </td>
                </tr>
        )})}
    </tbody>
  )
}

export default CostTableBody