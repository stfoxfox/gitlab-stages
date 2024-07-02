import './App.css';
import React, { useState, useEffect } from "react";
import ProjectList from './components/ProjectList';
import Loader from './components/Loader';
import JobList from './components/JobList';
import StageList from './components/StageList';


const App = () => {
  const [loading, setLoading] = useState(false)
  const [loadMessage, setLoadMessage] = useState(null)
  const [jobs, setJobs] = useState([])
  const [activeProject, setActiveProject] = useState(null)

  const handleLoading = (data) => {
    setLoading(data)
  }

  const handleLoadMessage = (data) => {
    setLoadMessage(data)
  }

  const handleLoadJobs = (data) => {
    setJobs(data)
  }

  const handleActiveProject = (data) => {
    setActiveProject(data)
  }
  
  return (
    <div className='main'>
      <ProjectList setLoading={handleLoading} setLoadingMessage={handleLoadMessage} setLoadingJobs={handleLoadJobs} setActiveProject={handleActiveProject}/>
      <StageList setLoading={handleLoading} setLoadingMessage={handleLoadMessage} setLoadingJobs={handleLoadJobs} setActiveProject={handleActiveProject}/>
      <JobList jobs={jobs} project={activeProject}/>
      {loading ? <Loader message={loadMessage}/>: ""}
    </div>
  );
}

export default App;
