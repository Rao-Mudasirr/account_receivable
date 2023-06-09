import React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import WorkflowPage from "../features/workflows-page/WorkflowPage";

const Workflow = () => {
  const outlet = useOutlet();

  return <>{outlet ? <Outlet /> : <WorkflowPage />}</>;
};

export default Workflow;
