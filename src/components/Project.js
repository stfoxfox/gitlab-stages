import React, { useState } from "react";
import { GitlabJobService } from "../services/GitlabJobService";
import Job from "./Job";
import { render } from "@testing-library/react";
import Loader from "./Loader";


const Project = ({ id, name, onClickResult, onLoadClick, onClickResultStage }) => {
  const gitlabJobService = new GitlabJobService();

  useState({
    id: '',
    name: ''
  })

  const handleClick = async () => {
    const stages = ['deploy:pre_prod', 'deploy:prod', 'deploy:uat', 'deploy:test', 'deploy:dev']

    var seachedJobs = [];
    var page = 1;
    onClickResult([])
    onLoadClick({loading: true, message: ""})
    onClickResultStage(name)
    for (let stage of stages) {
      
      let jobs = []
      do {
        jobs = await gitlabJobService.findByProjectIdAndScope(id, 'success', page)
        page++;
        
        for (let job of jobs) {
          onLoadClick({loading: true, message: `Загрузка стадии ${stage} проекта ${name}`})
          if (job.name === stage) {
            seachedJobs.push(job);
            page = 1;
            break;
          }
        }

        if (page == 1) {
          break;
        }

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


export default Project;