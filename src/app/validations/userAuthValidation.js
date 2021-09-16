import * as Yup from 'yup';

const userLoginValidation = Yup.object({
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string().required('Required'),
});

const userEmailValidation = Yup.object({ newPropValue: Yup.string().email('Invalid email address').required('Required'), })

const userSignInValidation = Yup.object({
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Required'),
	confirmPassword: Yup.string().when('password', {
		is: (val) => !!(val && val.length > 0),
		then: Yup.string().oneOf(
			[Yup.ref('password')],
			'Both password need to be the same'
		),
	}),
});

const passwordChangeValidation = Yup.object({
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters long')
		.required('Required'),
	confirmPassword: Yup.string().when('password', {
		is: (val) => !!(val && val.length > 0),
		then: Yup.string().oneOf(
			[Yup.ref('password')],
			'Both password need to be the same'
		),
	}),
});

export { userLoginValidation, userSignInValidation, passwordChangeValidation, userEmailValidation };
