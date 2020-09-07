const initialState = [];

export default (state=initialState, action) => {
	
	switch (action.type) {
		
		case 'ALL_JOBS':
			return Object.assign({}, state, {
				allJobs:action.jobs
			})
			
		case 'ALL_JOB_REQUESTS':
			return Object.assign({}, state, {
				jobReqs:action.jobReqs
			})
			
		case 'GET_JOB_REQ_HISTORY':
			return Object.assign({}, state, {
				jobReqHistory:action.jobReqHistory
			})
			
			
		default:
			return state
	}
}