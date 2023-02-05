import React, { useState } from 'react'
import { useTable } from 'react-table'
import './costTable.css';

import CostTableHeader from './CostTableHeader';
import CostTableBody from './CostTableBody';
import CostTableFooter from './CostTableFooter';

const CostTable = () => {

    const [tableHeaders, setTableHeaders] = useState([
        {
            Header: 'Nazwa',
            Footer: 'Nazwa',
            accessor: 'Nazwa'.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')
        },
        {
            Header: 'Grupa wydatków',
            Footer: 'Grupa wydatków',
            accessor: 'Grupa wydatków'.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')
        },
        {
            Header: 'Planowany budżet',
            Footer: 'Planowany budżet',
            accessor: 'Planowany budżet'.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')
        },
        {
            Header: 'Aktualne wydatki',
            Footer: 'Aktualne wydatki',
            accessor: 'Aktualne wydatki'.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')
        }
    ]);

    const [data, setData] = useState([{'nazwa': 'yes', 'grupa_wydatkow': 'niezbedne', 'planowany_budzet': '2300', 'aktualne_wydatki': 'f'}])
    
    let columns =  tableHeaders

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        footerGroups,
      } = useTable({
        columns,
        data
})

    return (
        <table {...getTableProps()}>
            <CostTableHeader headerGroups={headerGroups} tableHeaders={tableHeaders} setTableHeaders={setTableHeaders}/>
            <CostTableBody getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow} data={data} setData={setData} columns={columns}/>
            <CostTableFooter footerGroups={footerGroups} tableData={data} setTableData={setData}/>
        </table>
    )
}

export default CostTable