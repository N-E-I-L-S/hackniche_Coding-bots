
export default function ProductsFunctions(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'API_ERROR':
            return {
                ...state,
                loading: false,
                error: true,
            }
        case 'SET_API_DATA':
            return {
                ...state,
                loading: false,
                jobs: action.payload,
                filterjobs : action.payload,
            }
        case 'UPDATE_FILTER_VALUE':
            return {
                ...state,
                filter:
                {
                    job: action.payload
                }
            }
        case 'FILTER_JOBS':
            let { jobs, filter } = state;
            let filtered = [...jobs]

            filtered = filtered.filter((i) => {
                return i.job.toLowerCase().startsWith(filter.job.toLowerCase());
            })
            console.log(state.filterjobs)
            return {
                ...state,
                filterjobs: filtered
            }
    }
}