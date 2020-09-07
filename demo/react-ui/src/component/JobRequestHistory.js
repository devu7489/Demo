import React from 'react';
import moment from 'moment';
import DataTable from 'react-data-table-component';

const columns = [
			  {
			    name: 'Job Id',
			    selector: 'jobDetailId',
			    sortable: true
			  },
			  {
			    name: 'Full Name',
			    selector: 'name',
			    sortable: true,
			  },
				{
			    name: 'Address',
			    selector: 'address',
			    sortable: true,
				wrap:true
			  },
				{
			    name: 'Email',
			    selector: 'email',
			    sortable: true,
			  },
				{
			    name: 'Phone No.',
			    selector: 'phone',
			    sortable: true,
			  },
				{
			    name: 'Job Application Status',
			    selector: 'statusDesc',
			    sortable: true
			  },
				{
			    name: 'Applied Date',
			    selector: 'appliedDate',
			    sortable: true,
				cell: row => moment(row.appliedDate).format('DD-MMM-YYYY')
			  },
				{
			    name: 'Comment',
			    selector: 'comment',
			    sortable: true
			  }
		];

const JobRequestHistory = (props) => (
    <div>
		<DataTable
        			title="Job Requests History"
					striped={true}
        			columns={columns}
        			data={props.jobReqsHistory}
      			/>
	</div>
);
 
export default JobRequestHistory;