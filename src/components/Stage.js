import React, { useState } from "react";
import { GitlabJobService } from "../services/GitlabJobService";
import { GitlabProjectService } from "../services/GitlabProjectService";


const Stage = ({name, onClickResult, onLoadClick, onClickResultStage }) => {
  const gitlabJobService = new GitlabJobService();
  const gitlabProjectService = new GitlabProjectService();

  useState({
    name: ''
  })

  const handleClick = async () => {
    const projects = await gitlabProjectService.findAll();

    var seachedJobs = [];
    
    onClickResult([])
    onLoadClick({loading: true, message: ""})
    onClickResultStage(name)
    for (let project of projects) {
      let page = 1;
      let isSearched = false;
      let jobs = []

      do {
        jobs = await gitlabJobService.findByProjectIdAndScope(project.id, 'success', page)
        
        for (let job of jobs) {
          onLoadClick({loading: true, message: `Загрузка стадии ${name} проекта ${project.name}`})
          if (job.name === name) {
            seachedJobs.push({
                name: project.name,
                ref: job.ref,
                user: job.user,
                commit: job.commit,
                finished_at: job.finished_at
            });
            isSearched = true;
            break;
          }
        }
        if (isSearched) {
            break;
        }

        page++;

      } while (jobs.length > 0);
    }
  
    onLoadClick({loading: false, message: ""})
    
    onClickResult(seachedJobs)
  }

  return (
    <div onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
};


export default Stage;