export interface User {
  uuid: string
  firstName: string
  lastName: string
  email: string
  avatar: string
}

export interface ApiFilters {
  name?: string,
  email?: string
}
