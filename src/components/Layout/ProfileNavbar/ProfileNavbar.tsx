import { Outlet, useLocation } from 'react-router-dom'
import ProtectedRoute from '@/components/Layout/ProtectedRoute'

import ProfileItem from './NavItem'

const ProfileNavbar = (): JSX.Element => {
	const { pathname } = useLocation()

	return (
		<ProtectedRoute>
			<nav className="-mt-9 text-sm font-semibold text-center border-b text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
				<ul className="flex flex-wrap -mb-px">
					<ProfileItem>Edit your Profile</ProfileItem>
					<ProfileItem href="recipes">My Recipes😋</ProfileItem>
					{pathname.includes('dodaj') ? <ProfileItem isButton>New recipe🍽️</ProfileItem> : null}
					{pathname.includes('edytuj') ? <ProfileItem isButton>Edit a recipe</ProfileItem> : null}
				</ul>
			</nav>

			<div className="my-4">
				<Outlet />
			</div>
		</ProtectedRoute>
	)
}

export default ProfileNavbar
