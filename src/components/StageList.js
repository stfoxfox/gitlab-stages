import React, { useState, useEffect } from "react";
import Stage from "./Stage";

const StageList = ({ setLoading, setLoadingMessage, setLoadingJobs, setActiveProject }) => {
    const [stages, setStages] = useState(['deploy:pre_prod', 'deploy:prod', 'deploy:uat', 'deploy:test', 'deploy:dev']);

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

    return <div className="stage-list">
        <h2>Стенды</h2>
        <ul>
            {stages.map((item) => (
                <Stage name={item} onClickResult={handleProjectClick} onLoadClick={handleLoadJobs} onClickResultStage={handleSetActiveProject} />
            ))}
        </ul>
    </div>
}

export default StageList;