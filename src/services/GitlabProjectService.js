import { GitlabApi } from "./GitlabApi";

export class GitlabProjectService {
    constructor() {
        this.gitlabApi = new GitlabApi();
    }

    async findAll() {
        const response = await this.gitlabApi.get('/api/v4/projects?per_page=100&order_by=name&sort=asc');
        if (!response.status === 200) {
            throw new Error('Error load from Gitlab, status code: ' + response.status)
        }

        return await response.data;
    }
}