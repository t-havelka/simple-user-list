import { UserListItemWrapper } from './UserListItemWrapper'
import { UserListItemText } from './UserListItemText'
import { UserListItemAvatar } from './UserListItemAvatar'
import { UserListItemInfo } from './UserListItemInfo'
import type { User } from '../lib/types'

interface UserListItemProps {
  user: User
}

export const UserListItem = ({ user }: UserListItemProps) => {
  const {
    firstName,
    lastName,
    email,
    avatar
  } = user

  return (
    <UserListItemWrapper>
      <UserListItemAvatar src={avatar}/>
      <UserListItemInfo>
        <UserListItemText>{firstName} {lastName}</UserListItemText>
        <UserListItemText>{email}</UserListItemText>
      </UserListItemInfo>
    </UserListItemWrapper>
  )
}
