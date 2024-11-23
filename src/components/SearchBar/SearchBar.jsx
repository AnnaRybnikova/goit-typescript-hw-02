import { Formik, Form, Field } from 'formik';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

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
        <header className={s.header}>
            <Formik initialValues={initialValues} onSubmit={(values) => {handleSubmit(values)}}>
                <Form className={s.form}>
                    <Field
                        name="search"
                        className={s.field}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <button className={s.submit_button} type="submit">Search</button>
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