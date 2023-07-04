import React from "react";

const data = [
  {
    id: 1,
    title: 'Total Bills',
    number: '1350',
    price: '£ 17500.00',
  },
  {
    id: 2,
    title: 'Paid Bills',
    number: '1350',
    price: '£ 123650.00',
  },
  {
    id: 3,
    title: 'Rejected Bills',
    number: '1350',
    price: '£ 17500.00',
  },
]

function TotalBills() {
  return (
    <div
      style={{
        width: 280,
        height: 130,
        opacity: 0.1,
        background: "white",
        boxShadow: "0px 0px 9px black",
        borderRadius: 8,
        borderLeft: "0.50px #6B6B80 solid",
        borderTop: "0.50px #6B6B80 solid",
        borderRight: "0.50px #6B6B80 solid",
        borderBottom: "0.50px #6B6B80 solid",
      }}
    >
      
    </div>
  );
}

export default TotalBills;
