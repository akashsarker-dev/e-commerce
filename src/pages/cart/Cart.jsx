import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from 'material-react-table';
import * as React from "react";
import data from './makeData';
import Pagetitle from '../../components/utils/Pagetitle';
import Breadcrumbs from '../../components/utils/Breadcrumbs';

const columns = [
  {
    accessorKey: 'name.firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'name.lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
];

const Cart = () => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: false,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  return (
    <div className=' max-w-container mx-auto'>
       <Pagetitle></Pagetitle>
      <Breadcrumbs></Breadcrumbs>
      <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:"20px 0" }} >
        <div variant="h4">My Custom Headless Table</div>
        <MRT_GlobalFilterTextField table={table} />
      </div>
      <div>
        <table className="min-w-full text-left text-sm font-light text-surface  border-collapse border border-gray-300">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} scope="col" className="px-6 py-4">
                    {header.isPlaceholder ? null :
                      flexRender(
                        header.column.columnDef.Header ?? header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr className="border-b border-neutral-200 " key={row.id} selected={row.getIsSelected()}>
                {row.getVisibleCells().map((cell, _columnIndex) => (
                  <td key={cell.id} className="whitespace-nowrap px-6 py-4 font-medium">
                    <MRT_TableBodyCellValue
                      cell={cell}
                      table={table}
                      staticRowIndex={rowIndex}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />

        <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
       
        <MRT_TablePagination table={table} />
      </div>
    </div>
  );
};

export default Cart;
