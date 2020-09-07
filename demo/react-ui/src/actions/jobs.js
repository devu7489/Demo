import axios from '../axios/axios';

const _getAllJobs = (jobs) => ({
	type:'ALL_JOBS',
	jobs
})

export const getAllJobs = () => {
	return(dispatch) => {
		return axios.get('jobs').then(response => {
			dispatch(_getAllJobs(response.data));
		})
	}
}

const _submitJob = (jobApplication) => ({
	type:'APPLY_JOB',
	jobApplication
})

export const submitJob = (jobApplication) => {
	return(dispatch) => {
		return axios.post('applyJob',jobApplication).then(response => {
			dispatch(_submitJob(response.data));
		})
	}
}

const _getAllJobRequests = (jobReqs) => ({
	type:'ALL_JOB_REQUESTS',
	jobReqs
})

export const getAllJobRequests = () => {
	return(dispatch) => {
		return axios.get('allJobRequests').then(response => {
			dispatch(_getAllJobRequests(response.data));
		})
	}
}

const _getJobReqHistory = (jobReqHistory) => ({
	type:'GET_JOB_REQ_HISTORY',
	jobReqHistory
})

export const getJobReqHistory = (jobReqId) => {
	return(dispatch) => {
		return axios.get('job?jobReqId='+jobReqId).then(response => {
			dispatch(_getJobReqHistory(response.data));
		})
	}
}