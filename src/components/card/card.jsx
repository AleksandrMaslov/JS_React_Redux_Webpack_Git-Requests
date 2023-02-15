import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { getContributors, getCurrentRepo } from '../actions/repos'
import './card.less'

export function RepoCard(props) {
  const navigate = useNavigate()
  const { userName, repoName } = useParams()
  const [repo, setRepo] = useState({ owner: { avatar_url: '' }, name: '', stargazers_count: '' })
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(userName, repoName, setRepo)
    getContributors(userName, repoName, setContributors)
  }, [])

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className='back-btn'
      >BACK</button>
      <div className='card'>
        <img src={repo.owner.avatar_url} alt='userAvatar' />
        <div className='name'>{repo.name}</div>
        <div className='stars'>{repo.stargazers_count}</div>
      </div>
      {contributors.map((c, index) =>
        <div key={index}>{index + 1}. {c.login}</div>
      )}
    </div>
  )
}