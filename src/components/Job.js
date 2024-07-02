import React, { useState } from "react";
import { GitlabApi } from "../services/GitlabApi";

const Job = ({name, refItem, username, date, commit}) => {
  useState({
    name: '',
    refItem: '',
    username: '',
    date: ''
  })

  const mutateDate = (dateTime) => {
    const date = new Date(dateTime)
    return `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString('ru-RU')}`
  }

  return (
    <tr>
      <td>
        <b>{name}</b>
      </td>
      <td>
        {refItem}
      </td>
      <td>
        {commit}
      </td>
      <td>
        {username}
      </td>
      <td>
        {mutateDate(date)}
      </td>
    </tr>
  );
};

export default Job;