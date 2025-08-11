import { useEffect, useState } from 'react'
import { UserList } from './UserList'
import { AppWrapper } from './AppWrapper'
import { Button } from './Button'
import { Filters } from './Filters'
import { API_URL } from './lib/constants'
import { parseData } from './lib/parseData'
import type { FilterFields, User } from './lib/types'
import { Error } from './Error'

const LOAD_DATA_ERROR_MESSAGE = 'Nemohli jsme načíst uživatele'

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filters, setFilters] = useState<FilterFields>({})
  const [error, setError] = useState<string>('')

  const loadData = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(API_URL)
      const responseJson = await response.json()
      const data = parseData(responseJson)

      setUsers(data)
      setError('')
    } catch {
      setError(LOAD_DATA_ERROR_MESSAGE)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <AppWrapper>
      <h1>Simple User List</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <Button onClick={loadData}>Obnovit data</Button>
      {error && (
        <Error>{error}</Error>
      )}
      <UserList users={users} isLoading={isLoading} filters={filters} />
    </AppWrapper>
  )
}
