const defaultErrorMessages = {
	required_error: 'Field is required',
	invalid_type_error: 'Invalid value'
  }
  
  const authErrorMessages = {
	invalid_email: 'Please enter a valid email address',
	different_passwords: 'Passwords do not match'
  }
  
  const recipeErrorMessages = {
	name_too_many_characters: 'Maximum character limit is 50',
	name_special_characters: 'Text contains special characters',
	description_too_many_characters: 'Maximum character limit is 550',
	file_too_large: 'Maximum file size is 1MB.',
	file_wrong_format: 'Allowed formats: jpg, jpeg, gif, png',
	nutrion_overvalued: 'Maximum value is 9999',
	duration_overvalued: 'Maximum value is 999',
	portions_overvalued: 'Maximum value is 99'
  }
  
  export { defaultErrorMessages, authErrorMessages, recipeErrorMessages }
  