import * as Yup from 'yup';

const cookbookCreationValidation = Yup.object({
	title: Yup.string().required('Title is required'),
});



export default cookbookCreationValidation;