import { UserListItem } from '../UserListItem'
import { UserListWrapper } from './UserListWrapper'
import { LoadingSpinner } from './LoadingSpinner'
import type { FilterFields, User } from '../lib/types'
import { filterData } from '../lib/filterData'
import { memo } from 'react'

interface UserListProps {
  users: User[]
  isLoading: boolean
  filters: FilterFields
}

export const UserList = memo(({ users, isLoading, filters }: UserListProps) => {
  const filteredUsers = filterData(users, filters)

  if (!isLoading && (!filteredUsers || filteredUsers.length === 0)) {
    return (
      <UserListWrapper>Nenašli jsme žádné uživatele</UserListWrapper>
    )
  }

  return (
    <UserListWrapper>
      {isLoading && <LoadingSpinner>Načítavám...</LoadingSpinner>}
      {filteredUsers.map(user => <UserListItem key={user.uuid} user={user} />)}
    </UserListWrapper>
  )
})
