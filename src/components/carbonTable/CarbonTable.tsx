/* eslint-disable no-unused-vars */
import React from 'react';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableHead,
  TableHeader,
  TableRow,
  DataTableSkeleton,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableExpandedRow,
} from 'carbon-components-react';
import {RowElementIBM, tableDescirption, tableTitle, titleFilterRows} from './TableModel';
import './CarbonTable.scss';
import DetailViewTableRow from './DetailViewTableRow';


interface ICarbonTableProps {
    rows: any;
    headers: any;
}


export default function CarbonTable({rows, headers}: ICarbonTableProps) {
  if (rows.length === 0 || headers === undefined) {
    return (
      <DataTableSkeleton
        headers={headers}
        columnCount={headers.length}
        rowCount={10}/>
    );
  }

  const retrieveDetailInfo = function(id: string) {
    return rows.find((row: RowElementIBM) => row.id == id);
  };

  return (
    <DataTable rows={rows}
      headers={headers}
      isSortable
      filterRows={titleFilterRows}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getToolbarProps,
        onInputChange,
      }) => (
        <TableContainer title={tableTitle} description={tableDescirption}>
          <TableToolbar {...getToolbarProps()}>
            <TableToolbarContent>
              <TableToolbarSearch onChange={onInputChange} placeholder={'Search by Title'}/>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map((header) => (
                  <TableHeader {
                    ...getHeaderProps({header})}>{header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                const rowDetail: RowElementIBM = retrieveDetailInfo(row.id);
                return (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({row})}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>))}
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 1}>
                      <DetailViewTableRow rowDetail={rowDetail} />
                    </TableExpandedRow>
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}/>
  );
}
