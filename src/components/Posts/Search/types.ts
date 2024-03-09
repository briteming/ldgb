export interface ISearch {
  totalPosts?: number
  searchTerm: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
