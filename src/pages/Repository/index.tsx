import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './style'

import api from '../../services/api'

interface RepositoryParams {
  repository: string
}

interface Repository {
  id: number
  full_name: string
  description: string
  forks_count: number
  stargazers_count: number
  open_issues_count: number
  owner: {
    avatar_url: string
    login: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState(null as Repository | null)
  const [issues, setIssues] = useState([] as Issue[])

  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    async function fetchRepository() {
      try {
        const [repository, issuesData] = await Promise.all([
          api.get(`repos/${params.repository}`),
          api.get(`repos/${params.repository}/issues`),
        ])
        setRepository(repository.data)
        setIssues(issuesData.data)
      } catch (error) {
        alert(error)
      }
    }
    fetchRepository()
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h3>{repository.full_name}</h3>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <h3>{repository.stargazers_count}</h3>
              <span>Stars</span>
            </li>
            <li>
              <h3>{repository.forks_count}</h3>
              <span>Forks</span>
            </li>
            <li>
              <h3>{repository.open_issues_count}</h3>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <h3>{issue.title}</h3>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
