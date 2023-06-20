import React from "react";
import CustomTable from "../../../components/Table/CustomTable";
import { PerformanceAnalysisGraphHeader } from "../../performance-analysis-graph-header/performance-analysis-graph-header";

const PerformanceTable = ({ INVOICE_DATA, columns, paginationClass }) => {
  return (
    <>
      <PerformanceAnalysisGraphHeader />
      <CustomTable
        data={INVOICE_DATA}
        columns={columns}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        paginationClass={paginationClass}
        isSuccess={true}
        isPagination={true}
      />
    </>
  );
};

export default PerformanceTable;
