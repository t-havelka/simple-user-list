import { UserListItem } from '../UserListItem'
import { UserListWrapper } from './UserListWrapper'
import { LoadingSpinner } from './LoadingSpinner'
import type { User } from '../lib/types'

interface UserListProps {
  users: User[]
  isLoading: boolean
}

export const UserList = ({ users, isLoading }: UserListProps) => {
  return (
    <UserListWrapper>
      {isLoading && <LoadingSpinner>Načítavám...</LoadingSpinner>}
      {users.map(user => <UserListItem key={user.uuid} user={user}/>)}
    </UserListWrapper>
  )
}


