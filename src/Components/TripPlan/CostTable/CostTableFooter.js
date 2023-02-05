import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';

const CostTableFooter = ({ footerGroups, tableData, setTableData }) => {
    const [addValues, setAddValues] = useState({})

    const addValuesItem = () => {
        setTableData([...tableData, addValues])
        let footerInputs = document.querySelectorAll('.footerInput')
        footerInputs.forEach(footerInput => footerInput.value = '')
        setAddValues({})
    }
    
    return (
    <tfoot>
        {footerGroups.map(footerGroup => (
            <tr className='footer__row' {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                        <td key={column.render('Footer')} {...column.getFooterGroupProps}>
                            <input type='text' className='footerInput' onChange={(e) => {
                                setAddValues((prevValues) => (
                                    { ...prevValues, [e.target.placeholder.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')]: e.target.value 
                                }))
                            }} placeholder={column.render('Footer')}></input>
                        </td>
                    ))}
                <td>
                </td>       
            </tr>
            ))}
        <tr className='adding__row'>
            <td colSpan="100">
                <button className="adding__row-btn" onClick={addValuesItem}>
                    <AiOutlineDown />
                </button>  
            </td>
        </tr>
        <tr className='summary__row'>
            <td colSpan="100">
                <span>Suma:</span>
            </td>
        </tr>
    </tfoot>
  )
}


export default CostTableFooter