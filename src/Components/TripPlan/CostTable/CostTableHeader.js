import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const CostTableHeader = ({ headerGroups, tableHeaders,  setTableHeaders }) => {

    const[columnNameText, setColumnNameText] = useState("")

    const addColumn = ( columnName = columnNameText ) => {
        if (columnName === "") {
            return 0
        }

        setTableHeaders([...tableHeaders, {
            Header: columnName,
            Footer: columnName, 
            accessor: columnName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')
        }])

        document.querySelector("input[name='addNewColumn']").value = ''
    }

    return (
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="headers__row">
                    {headerGroup.headers.map( column => (
                        <th {...column.getHeaderProps()}>
                            <div>{column.render('Header')}</div>
                        </th>
                    ))}
                    <th className='adding__column'>
                        <span>
                            <input type='text' className="adding__column-inpt" name='addNewColumn' required onChange={e => setColumnNameText(e.target.value)}></input>
                            <button className="adding__column-btn" onClick={ () => addColumn(columnNameText) }><AiOutlinePlus /></button>
                        </span>                            
                    </th>
                </tr> 
            ))}
        </thead>
    )}

export default CostTableHeader