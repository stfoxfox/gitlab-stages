import { GitlabJobService } from "./GitlabJobService";

export class FindJobService {
    constructor() {
        this.gitlabJobService = new GitlabJobService();
    }

    findJobByProjectIdAndScopeAndName(projectId, scope, name, page = 1, jobs = []) {
        
    }
}