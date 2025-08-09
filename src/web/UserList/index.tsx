import type { User } from '../../common/types.ts'
import { UserListItem } from '../UserListItem'
import { UserListWrapper } from './UserListWrapper.tsx'

interface UserListProps {
  users: User[]
  isLoading: boolean
}

export const UserList = ({ users, isLoading }: UserListProps) => {
  return (
    <UserListWrapper>
      {isLoading && <div>Načítavám...</div>}
      {users.map(user => <UserListItem key={user.uuid} user={user}/>)}
    </UserListWrapper>
  )
}
