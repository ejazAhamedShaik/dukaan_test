import { useMemo } from "react";
import mockData from "../../utils/mockTransactionsData";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { Wrapper } from "./transactionsTable.styles";
import PropTypes from "prop-types";
import { Button } from "../../pages/paymentsPage/paymentsPage.styles";

const TransactionsTable = ({ searchQuery }) => {
  const data = useMemo(() => {
    return mockData.filter((item) =>
      (item.orderId ?? "")
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Order Date",
        accessor: "orderDate",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Order Amount",
        accessor: "orderAmount",
      },
      {
        Header: "Transaction Fees",
        accessor: "transactionFees",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of rows, we'll use page
    state: { pageIndex },
    gotoPage,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageCount,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } }, // Set initial page size and index
    useFilters,
    useSortBy,
    usePagination // Enable pagination
  );
  return (
    <Wrapper>
      <table {...getTableProps()} style={{ width: "100%", height: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, id) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={id}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, id) => (
                  <td {...cell.getCellProps()} key={id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Pagination controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
          </strong>{" "}
        </span> */}
        <Button onClick={() => gotoPage(0)} disabled={pageIndex === 0}>
          {"<<"}
        </Button>{" "}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </Button>{" "}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </Button>{" "}
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={pageIndex === pageCount - 1}
        >
          {">>"}
        </Button>{" "}
        {/* <span>
          | Go to page:{" "}
          <input
            type="number"
            value={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "50px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          style={{ width: "70px" }}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select> */}
      </div>
    </Wrapper>
  );
};

TransactionsTable.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default TransactionsTable;
