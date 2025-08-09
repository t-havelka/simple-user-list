import { useEffect, useState } from 'react'
import type { ApiFilters, User } from '../common/types.ts'
import { UserList } from './UserList'
import { AppWrapper } from './AppWrapper.tsx'
import { Button } from './Button.tsx'
import { Filters } from './Filters'
import { buildApiUrl } from './lib/buildApiUrl.ts'

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filters, setFilters] = useState<ApiFilters>({})

  const loadData = async () => {
    setIsLoading(true)

    const data = await fetch(buildApiUrl(filters))
    const json = await data.json()

    setUsers(json)
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
