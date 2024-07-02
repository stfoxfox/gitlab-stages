import axios from 'axios'

export class GitlabApi {
    constructor() {
        return axios.create({
            baseURL: process.env.REACT_APP_GITLAB_HOST,
            headers: {
                'PRIVATE-TOKEN': process.env.REACT_APP_GITLAB_TOKEN
            },
        })
   }
}