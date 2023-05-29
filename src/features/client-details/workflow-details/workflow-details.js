
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const data = [
  { id: 1, element: 'Element 1', status: 'paid' },
  { id: 2, element: 'Element 2', status: 'due' },
  { id: 3, element: 'Element 3', status: 'overdue' },
];

const statusCategories = ['paid', 'due', 'overdue'];

const WorkflowDetails = () => {
  const [filterCategory, setFilterCategory] = useState('');

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'green';
      case 'due':
        return 'yellow';
      case 'overdue':
        return 'blue';
      default:
        return 'inherit';
    }
  };

  const filteredData = filterCategory ? data.filter((row) => row.status === filterCategory) : data;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.element}</TableCell>
              <TableCell>
                <span style={{ backgroundColor: getStatusColor(row.status) }}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        {statusCategories.map((category) => (
          <Button key={category} onClick={() => handleFilter(category)}>
            {category}
          </Button>
        ))}
        <Button onClick={() => handleFilter('')}>Clear Filter</Button>
      </div>
    </TableContainer>
  );
};

export default WorkflowDetails;

