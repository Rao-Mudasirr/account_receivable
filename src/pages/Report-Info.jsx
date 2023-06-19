import React from 'react'
import ReportDetails from '../features/Reports/DSO_Report/ReportDetails'
import AgingBucketsReport from '../features/Reports/Aging_buckets_report/AgingBuckets';
import { useParams } from 'react-router-dom';
import { CashCollectionReport } from '../features/Reports/cash-collection-report/cash-collection-report';
import CashFlowForCasting from '../features/Reports/CashflowForcasting/CashFlowForCasting';
import WorkflowReport from '../features/Reports/workflow-report/WorkflowReport';

const reportsPages = {
  "dso": <ReportDetails />,
  "cashflow-forecasting-report": <CashFlowForCasting />,
  "cash-collection-report": <CashCollectionReport />,
  "aging-buckets-report": <AgingBucketsReport />,
  "workflows-report": <WorkflowReport />,
}

function ReportInfo() {
  let { id } = useParams();
  return (
    reportsPages[id]
  )
}

export default ReportInfo