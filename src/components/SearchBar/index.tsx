import { Header, SearchInput } from './styles'
import { ISearchBar } from './types'

export function SearchBar({
  totalPosts,
  searchTerm,
  onSearchChange,
}: ISearchBar) {
  return (
    <Header>
      <h2>Posts</h2>
      <p>
        {totalPosts} {totalPosts === 1 ? 'post' : 'posts'}
      </p>
      <label htmlFor="search" className="visually-hidden">
        Search for posts
      </label>
      <SearchInput
        id="search"
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </Header>
  )
}
