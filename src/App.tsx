import { useEffect, useState } from 'react'
import { UserList } from './UserList'
import { AppWrapper } from './AppWrapper'
import { Button } from './Button'
import { Filters } from './Filters'
import { API_URL } from './lib/constants'
import { filterData } from './lib/filterData'
import { parseData } from './lib/parseData'
import type { ApiFilters, User } from './lib/types'

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filters, setFilters] = useState<ApiFilters>({})

  const loadData = async () => {
    setIsLoading(true)

    const response = await fetch(API_URL)
    const responseJson = await response.json()

    const data = parseData(responseJson)
    const filteredData = filterData(data, filters)

    setUsers(filteredData)
    setIsLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <AppWrapper>
      <h1>Simple User List</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <Button onClick={loadData}>Obnovit data</Button>
      <UserList users={users} isLoading={isLoading} />
    </AppWrapper>
  )
}
