import type { FriendLink } from '../utils/friends'

export interface HiddenFriend extends FriendLink {
  hiddenAt: string
  reason: string
}

export const HIDDEN_FRIENDS_CHECKED_AT = '2026-07-19'

export const friendOverrides: Record<string, Partial<FriendLink>> = {}

const hiddenFriends = [] satisfies HiddenFriend[]

export default hiddenFriends
