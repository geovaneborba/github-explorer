import React, { FormEvent, useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import api from '../../services/api'
import { Title, Form, Repositories, Error } from './style'

interface Repository {
  full_name: string
  description: string
  owner: {
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')

  const [repositories, setNewRepositories] = useState<Repository[]>(() => {
    // Resgatando o valor salvo no localstorage
    const storageRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    )

    // Se existir o resgado pelo localstorage retorna um objeto
    // Se não um array vazio
    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    } else {
      return []
    }
  })

  /**
   * Hook que monitora o estado dos repositories
   * Quando for inserido um novo repositório
   * então salva no localstorage do navegador
   */
  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    )
  }, [repositories])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return
    }

    try {
      const response = await api.get(`/repos/${newRepo}`)

      const repository = response.data

      setNewRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca por esse repositório')
      setNewRepo('')
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt="Avatar de Geovane Borba"
            />
            <div>
              <h3>{repository.full_name}</h3>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
