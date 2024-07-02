import { GitlabApi } from "./GitlabApi";

export class GitlabJobService {
    constructor() {
        this.gitlabApi = new GitlabApi();
    }

    async findByProjectIdAndScope(projectId, scope, page = 1) {
        const response = await this.gitlabApi.get(`/api/v4/projects/${projectId}/jobs?scope=${scope}&order_by=id&sort=desc&per_page=100&page=${page}`);
        if (!response.status === 200) {
            throw new Error('Error load from Gitlab, status code: ' + response.status)
        }

        return await response.data;
    }
}