import { useSearchParams } from 'react-router-dom'

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' })

  const currentPage = parseInt(searchParams.get('page') as string) || 1
  const id = searchParams.get('id') || undefined

  const clickHandler = (pageNumber: number) => {
    setSearchParams((prev) => {
      const id = prev.get('id') || null

      return {
        page: pageNumber.toString(),
        ...(id !== null ? { id } : {}),
      }
    })
  }

  return {
    searchParams,
    setSearchParams,
    currentPage,
    onPageChange: clickHandler,
    id,
  }
}
