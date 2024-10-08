import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import RecipeList from '@/components/Recipes/List'
import LoadingSpinner from '@/components/UI/LoadingSpinner'

export default function SearchPage(): JSX.Element {
	const { term } = useParams()

	const { isLoading, data } = useQuery({
		queryKey: ['recipes', term],
		queryFn: () => null,
		useErrorBoundary: true
	})

	if (isLoading) return <LoadingSpinner />

	if (data)
		return <RecipeList content={data} header={`Search result for "${term ?? ''}"`} />

	return <></>
}
