import { RegisterFormProps } from './RegisterForm.types'

import * as Field from '@/components/Fields'
import Button from '@/components/UI/Button'

const RegisterForm = ({ control }: RegisterFormProps) => {
	const { values, errors, touched, isValid, isSubmitting, handleChange, handleBlur, handleSubmit } =
		control

	return (
		<div className="mx-3 md:mx-auto md:w-96">
			<h2 className="p-5 text-3xl font-bold text-center dark:text-white">Register Here Chef !👇🏼</h2>

			<form onSubmit={handleSubmit}>
				<Field.Text
					name="email"
					label="Email"
					placeholder="Your email..."
					value={values.email}
					errorMsg={errors.email}
					isTouched={touched.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<Field.Text
					type="password"
					name="password"
					label="Password"
					placeholder="shhhh.... your password🤫"
					value={values.password}
					errorMsg={errors.password}
					isTouched={touched.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<Field.Text
					type="password"
					name="confirmPassword"
					label="Confirm Password"
					placeholder="Confirm Password"
					value={values.confirmPassword}
					errorMsg={errors.confirmPassword}
					isTouched={touched.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
				/>

				<div className="text-center">
					<Button
						type="submit"
						color="green"
						disabled={!isValid || isSubmitting}
						loadingMsg="Registration">
						Register Chef!🧑🏼‍🍳
					</Button>
				</div>
			</form>
		</div>
	)
}

export default RegisterForm
