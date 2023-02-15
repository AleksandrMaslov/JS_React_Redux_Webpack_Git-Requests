import axios from 'axios'
import {
  setFetchError,
  setIsFetching,
  setRepos,
} from '../../reducers/reposReducer'

export function getRepos(searchQuery = 'stars:%3E1', currentPage, perPage) {
  if (searchQuery === '') {
    searchQuery = 'stars:%3E1'
  }

  return async (dispatch) => {
    try {
      dispatch(setFetchError(false))
      dispatch(setIsFetching(true))
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`
      )
      dispatch(setRepos(response.data))
    } catch (error) {
      dispatch(setFetchError(true))
      dispatch(setIsFetching(false))
    }
  }
}

export async function getCurrentRepo(userName, repoName, setRepo) {
  const response = await axios.get(
    `https://api.github.com/repos/${userName}/${repoName}`
  )
  setRepo(response.data)
}

export async function getContributors(userName, repoName, setContributors) {
  const response = await axios.get(
    `https://api.github.com/repos/${userName}/${repoName}/contributors?page=1&per_page=10`
  )
  setContributors(response.data)
}
