export const FormControlData2 = [
    {
        id: 'userManagement',
        heading: 'User management',
        switchOptions: [
          {
            id: '1',
            label: 'DSO Report',
            parent:
            {
              childData: [
                {
                  id: 'Checkbox1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox2',
                  label: 'Export to PDF',
                },
              ]
            }
          },
          {
            id: '2',
            label: 'Cashflow Forecasting Report',
            parent:
            {
              childData: [
                {
                  id: 'Checkbox1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox2',
                  label: 'Export to PDF',
                },
              ]
            }
          },
          {
            id: '3',
            label: 'Cash Collection Report',
            parent:
            {
              childData: [
                {
                  id: 'Checkbox1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox2',
                  label: 'Export to PDF',
                },
              ]
            }
          },
          {
            id: '4',
            label: 'Aging Buckets Report',
            parent:
            {
              childData: [
                {
                  id: 'Checkbox1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox2',
                  label: 'Export to PDF',
                },
              ]
            }
          },
          {
            id: '5',
            label: 'Workflows Report',
            parent:
            {
              childData: [
                {
                  id: 'Checkbox1',
                  label: 'Export to Excel',
                },
                {
                  id: 'Checkbox2',
                  label: 'Export to PDF',
                },
              ]
            }
          }
        ]
      },
      {
        id: 'admin',
        heading: 'Admin',
        switchOptions: [
          {
            id: 'Checkbox1',
            label: 'The tab and view dashboard with own user data',
            value: true
          },
          {
            id: 'Checkbox2',
            label: 'The tab and view dashboard wkkith own user data',
          },
        ],
      },
]