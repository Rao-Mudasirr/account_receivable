export const FormControlData2 = [
    {
        id: 'userManagement',
        heading: 'User management',
        switchOptions: [
          {
            id: '1',
            label: 'DSO Report',
            parent: {
              childData: [
                {
                  id: 'Checkbox1_1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox1_2',
                  label: 'Export to PDF',
                },
              ],
            },
          },
          {
            id: '2',
            label: 'Cashflow Forecasting Report',
            parent: {
              childData: [
                {
                  id: 'Checkbox2_1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox2_2',
                  label: 'Export to PDF',
                },
              ],
            },
          },
          {
            id: '3',
            label: 'Users',
            parent: {
              childData: [
                {
                  id: 'Checkbox3_1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox3_2',
                  label: 'Export to PDF',
                },
              ],
            },
          },
          {
            id: '4',
            label: 'Clients',
            parent: {
              childData: [
                {
                  id: 'Checkbox4_1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox4_2',
                  label: 'Export to PDF',
                },
              ],
            },
          },
        ],
      },
    
        
      {
        id: 'settings',
        heading: 'Settings',
        switchOptions: [
          {
            id: 'Checkbox1',
            label: 'Edit Personal Profile',
          },
          {
            id: 'Checkbox2',
            label: 'Edit Company Management',
          },
          {
            id: 'Checkbox3',
            label: 'Integration',
          },
        ],
      },
    ];