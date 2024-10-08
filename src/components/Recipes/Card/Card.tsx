import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { IRecipeApi } from '@/types/Recipe.types'

import Badges from '@/components/UI/Badges'
import CustomLink from '@/components/UI/CustomLink'
import Image from '@/components/UI/Image'

const wrapperStyles =
	'w-full break-words overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition group bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 xl:w-full'

const Card = ({ id, img, name, details, description }: IRecipeApi): JSX.Element => (
	<div className={wrapperStyles}>
		<div className="h-60 rounded-t-lg overflow-hidden">
			<Image
				className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
				src={img}
				alt={name}
			/>
		</div>

		<div className="p-4 flex flex-col gap-2">
			<h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
				{name}
			</h3>

			<Badges duration={details.duration} level={details.level} rating={5} />

			<p className="min-h-[4.5rem] text-gray-700 dark:text-gray-400 line-clamp-3">{description}</p>

			<CustomLink href={`/recipe/${id}`} color="green">
				Check <ArrowRightIcon className="ml-2 -mr-1 w-4 h-4" />
			</CustomLink>
		</div>
	</div>
)

export default Card
