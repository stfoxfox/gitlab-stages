import React, { useState, useEffect } from "react";
import Job from "./Job";

const JobList = ({jobs, project}) => {
    useState({
        jobs: [],
        project: null
    })
    return (
        <div className="job-list">
            <h2>Информация {project}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Стенд</th>
                        <th>Ветка/тег</th>
                        <th>Послений комит</th>
                        <th>Пользователь</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                {jobs.map((item) => (
                    <Job name={item.name} refItem={item.ref} username={item.user.name} date={item.finished_at} commit={item.commit.title}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default JobList;