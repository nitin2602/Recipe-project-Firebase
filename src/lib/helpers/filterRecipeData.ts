import { IRecipeDetails, IRecipeNutrions } from '@/types/Recipe.types'
import { roundToTwo } from './roundToTwo'

const filterNutrions = (data: IRecipeNutrions) => {
	const { calories, protein, carbohydrates, fat } = data

	const filteredData = [
		{
			title: 'Energy value',
			description: `${roundToTwo(calories * 4.2)} kJ / ${calories} kcal`
		},
		{
			title: 'Protein',
			description: `${protein} g`
		},
		{
			title: 'Carbohydrates',
			description: `${carbohydrates} g`
		},
		{
			title: 'Fats',
			description: `${fat} g`
		}
	]

	return filteredData
}

const filterDetails = (data: IRecipeDetails) => {
	const { duration, level, portions } = data

	const name = {
		easy: 'Easy',
		medium: 'Medium',
		hard: 'Hard'
	}

	const filteredData = [
		{
			title: 'Total time',
			description: `${duration} min`
		},
		{
			title: 'Difficulty',
			description: name[level]
		},
		{
			title: 'Portions',
			description: `${portions}`
		}
	]

	return filteredData
}

export { filterNutrions, filterDetails }
