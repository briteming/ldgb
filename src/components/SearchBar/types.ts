export interface ISearchBar {
  totalPosts?: number
  searchTerm: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
