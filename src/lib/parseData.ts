import type { ApiData, User } from './types'

export const parseData = ({ data }: ApiData): User[] => {
  return data.map((user) => ({
    uuid: user.uuid,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    avatar: user.avatar.url
  }))
}

