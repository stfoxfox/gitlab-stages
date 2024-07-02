import React, { useState, useEffect } from "react";

import { GitlabProjectService } from "../services/GitlabProjectService";
import Project from "./Project";

const ProjectList = ({setLoading, setLoadingMessage, setLoadingJobs, setActiveProject}) => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const gitlabProjectService = new GitlabProjectService();

    const handleProjectClick = (data) => {
        setLoadingJobs(data)
    }

    const handleLoadJobs = (data) => {
        setLoading(data.loading)
        setLoadingMessage(data.message)
    }

    const handleSetActiveProject = (data) => {
        setActiveProject(data)
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setLoadingMessage('Загрузка проектов')
            try {
                setProjects(await gitlabProjectService.findAll());
                setLoading(false)
            } catch (error) {
                console.error('Error fetch data: ', error);
                setError('Error fetch data');
                setLoading(false)
            }
        };

        fetchData();
    }, []);

    return (
        <div className="project-list">
            <h2>Проекты</h2>
            <ul>
                {projects.map((item) => (
                    <Project id={item.id} name={item.name} onClickResult={handleProjectClick} onLoadClick={handleLoadJobs} onClickResultStage={handleSetActiveProject}/>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;