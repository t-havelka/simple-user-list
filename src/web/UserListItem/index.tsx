import type { User } from '../../common/types.ts'
import { UserListItemWrapper } from './UserListItemWrapper.tsx'
import { UserListItemText } from './UserListItemText.tsx'
import { UserListItemAvatar } from './UserListItemAvatar.tsx'
import { UserListItemInfo } from './UserListItemInfo.tsx'

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
