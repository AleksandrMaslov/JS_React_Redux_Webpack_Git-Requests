import React from 'react'

import './repo.less'

export function Repo(props) {
  const repo = props.repo

  return (
    <div className='repo'>
      <div className="repo-header">
        <div className="repo-header-name">{repo.name}</div>
        <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
      </div>
      <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
      <div className="repo-last-commit">Ссылка на репозиторий:</div>
      <a href={repo.html_url} className='repo-link'>{repo.html_url}</a>
    </div>
  )
}