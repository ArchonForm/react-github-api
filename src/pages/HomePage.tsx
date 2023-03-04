import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('archon')

  console.log(data)

  return <div>HomePage</div>
}
