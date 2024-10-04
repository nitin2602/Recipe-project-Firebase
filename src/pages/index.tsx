import { useQuery } from '@tanstack/react-query'
import { getRecipes } from '@/lib/firebase/getRecipe'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

import RecipeList from '@/components/Recipes/List'
import LoadingSpinner from '@/components/UI/LoadingSpinner'

export default function HomePage(): JSX.Element {
	useDocumentTitle('Home | Tastebite Recipes App')

	const { isLoading, data } = useQuery({
		queryKey: ['recipes'],
		queryFn: () => getRecipes(),
		useErrorBoundary: true
	})

	if (isLoading) return <LoadingSpinner />

	if (data) return <RecipeList content={data} header="All the recipes" />

	return <div>There is no recipe!</div>
}
