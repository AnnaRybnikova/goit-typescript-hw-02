import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const SearchBar = ({ query, handleChange }) => {
    const initialValues = {
        search: query,
    };

    const handleSubmit = (values) => {
        if (!values.search) {
            toast.error('Please enter search query!');
            return;
        };
        if (query === values.search) {
            toast.error('Please, change query!');
            return;
        }
        handleChange(values.search);
    }

    return (
        <header>
            <Formik initialValues={initialValues} onSubmit={(values) => {handleSubmit(values)}}>
                <Form>
                    <Field
                        name="search"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button type="submit">Search</button>
                </Form>
            </Formik>
        </header>
    )
}

SearchBar.propTypes = {
    query: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default SearchBar