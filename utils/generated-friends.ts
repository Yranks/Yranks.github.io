import type { FriendLink } from './friends'
import { normalizeFriends } from './friends'


const generatedModules = import.meta.glob<{ default: FriendLink[] }>(
  '../public/links.json',
  { eager: true },
)

const generatedFriends = normalizeFriends(
  generatedModules['../public/links.json']?.default,
)

export default generatedFriends
