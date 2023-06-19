import img1 from '../assests/images/report/Frame.svg';
import img2 from '../assests/images/report/Frame (1).svg';
import img3 from '../assests/images/report/Cash collection.svg';
import img4 from '../assests/images/report/Frame (2).svg';
import img5 from '../assests/images/report/undraw_bookmarks_re_mq1u 1.svg';

export const ReportData = [
    {
        id: 1,
        title: 'Days Sale Outstanding (DSO) Report',
        image: img1,
        param:'dso'
    },
    {
        id: 2,
        title: 'Cashflow Forecasting Report',
        image: img2,
        param:"cashflow-forecasting-report"
    },
    {
        id: 3,
        title: 'Cash Collection Report',
        image: img3,
        param:"cash-collection-report"
    },
    {
        id: 4,
        title: 'Aging Buckets Report',
        image: img4,
        param:"aging-buckets-report"
    },
    {
        id: 5,
        title: 'Workflows Report',
        image: img5,
        param:"workflows-report"
    },
];

export const CashCollectionReportData = [
    {
        id: 1,
        invoiceId: "01",
        client: 'Jacob',
        amount: "£1234",
        issueDate: "19 Oct, 1999",
        dueDate: "19 Oct, 1999",
        paidOn: "19 Oct, 1999",
    },
    {
        id: 21,
        invoiceId: "02",
        client: 'Jacob',
        amount: "£1234",
        issueDate: "19 Oct, 1999",
        dueDate: "19 Oct, 1999",
        paidOn: "19 Oct, 1999",
    },
    {
        id: 3,
        invoiceId: "03",
        client: 'Jacob',
        amount: "£1234",
        issueDate: "19 Oct, 1999",
        dueDate: "19 Oct, 1999",
        paidOn: "19 Oct, 1999",
    },
];