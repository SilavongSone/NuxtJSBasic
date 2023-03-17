export interface RootObject {
  session: Session
  mfa?: any
}

export interface Session {
  accessToken: string
  accessTokenExpiresIn: number
  refreshToken: string
  user: User
}

export interface User {
  id: string
  createdAt: string
  displayName: string
  avatarUrl: string
  locale: string
  email: string
  isAnonymous: boolean
  defaultRole: string
  metadata: Metadata
  emailVerified: boolean
  phoneNumber?: any
  phoneNumberVerified: boolean
  activeMfaType?: any
  roles: string[]
}

export interface Metadata {}
