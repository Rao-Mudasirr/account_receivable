import React from 'react'
import ReportDetails from '../features/Reports/DSO_Report/ReportDetails'
import { useParams } from 'react-router-dom';
import { CashCollectionReport } from '../features/Reports/cash-collection-report/cash-collection-report';
import CashFlowForCasting from '../features/Reports/CashflowForcasting/CashFlowForCasting';

const reportsPages = {
  "dso": <ReportDetails />,
  "cashflow-forecasting-report": <CashFlowForCasting />,
  "cash-collection-report": <CashCollectionReport />,
  "aging-buckets-report": <ReportDetails />,
  "workflows-report": <ReportDetails />,
}

function ReportInfo() {
  let { id } = useParams();
  return (
    reportsPages[id]
  )
}

export default ReportInfo