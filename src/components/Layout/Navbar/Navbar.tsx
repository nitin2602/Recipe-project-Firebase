import { useAuth } from '@/hooks/useAuth'

import NavItem from './NavItem'

const Navbar = (): JSX.Element => {
	const { user, logoutUser } = useAuth()

	return (
		<nav className="p-4 flex justify-center items-center gap-6 text-sm font-bold bg-gray-100 dark:bg-gray-800">
			<NavItem href="/">Home</NavItem>
			{user ? (
				<>
					<NavItem href="profile">Profile</NavItem>
					<NavItem href="/" onClick={() => logoutUser()} isLink>
						LogOut Chef !
					</NavItem>
				</>
			) : (
				<>
					<NavItem href="register">Register Chef !</NavItem>
					<NavItem href="login">Login Chef !</NavItem>
				</>
			)}
		</nav>
	)
}

export default Navbar
