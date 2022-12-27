import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

//the initial values of our form, left as empty strings.
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

//phone validation regex we got from the internet, b/c regex.
const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// this will define the validation logic for each field that we're using
const userSchema = yup.object().shape({
  //checks that it is a string, and let's user know it's required. It won't accept empty fields.
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  // yup already has a built in function for email validation
  email: yup.string().email("invalid email").required("required"),
  //we use the phone regex we got as an additional validation to check that the value of the contact field is a valid phone #
  contact: yup
    .string()
    .matches(phoneRegex, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  //bool that checks whether or not a specific width, in this case min-width is met. We can use with MUI
  const isNonMobile = useMediaQuery("(min-width:600px");

  //doesn't do anything other than prints out the values in our console. The focus of this exercise is creating forms and handling validation.
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m='20px'>
      <Header title='CREATE USER' subtitle='Create a new User Profile' />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {/* all these values we're passing into this anon function are from the Formik component, the arrow function allows us to use these inside our form component*/}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* gridTemplateColumns allows us to split the grid into 4 columns, and each of the sections is going to have a min of 0 and a max of 1fr, fractional units used specifically for grids */}
            <Box
              m='40px 0 0 0'
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0,1fr))'
              sx={{
                // if we are on desktop, we want this to take up the entire width
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                // handleBlur is the function that gets run when we touch out of the text field
                onBlur={handleBlur}
                onChange={handleChange}
                // the value that is being changed, has to match name in userSchema
                value={values.firstName}
                name='firstName'
                // if you have touched this component and it doesn't meet validation, it will trigger the error/helper text.
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                // because we put span 2, it'll only use up 2 out of the 4 grid columns we set earlier
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                // handleBlur is the function that gets run when we touch out of the text field
                onBlur={handleBlur}
                onChange={handleChange}
                // the value that is being changed, has to match name in userSchema
                value={values.lastName}
                name='lastName'
                // if you have touched this component and it doesn't meet validation, it will trigger the error/helper text.
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                // because we put span 2, it'll only use up 2 out of the 4 grid columns we set earlier
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                // handleBlur is the function that gets run when we touch out of the text field
                onBlur={handleBlur}
                onChange={handleChange}
                // the value that is being changed, has to match name in userSchema
                value={values.email}
                name='email'
                // if you have touched this component and it doesn't meet validation, it will trigger the error/helper text.
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                // because we put span 2, it'll only use up 2 out of the 4 grid columns we set earlier
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Contact'
                // handleBlur is the function that gets run when we touch out of the text field
                onBlur={handleBlur}
                onChange={handleChange}
                // the value that is being changed, has to match name in userSchema
                value={values.contact}
                name='contact'
                // if you have touched this component and it doesn't meet validation, it will trigger the error/helper text.
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                // because we put span 2, it'll only use up 2 out of the 4 grid columns we set earlier
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address 1'
                // handleBlur is the function that gets run when we touch out of the text field
                onBlur={handleBlur}
                onChange={handleChange}
                // the value that is being changed, has to match name in userSchema
                value={values.address1}
                name='address1'
                // if you have touched this component and it doesn't meet validation, it will trigger the error/helper text.
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                // because we put span 2, it'll only use up 2 out of the 4 grid columns we set earlier
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address 2'
                // handleBlur is the function that gets run when we touch out of the text field
                onBlur={handleBlur}
                onChange={handleChange}
                // the value that is being changed, has to match name in userSchema
                value={values.address2}
                name='address2'
                // if you have touched this component and it doesn't meet validation, it will trigger the error/helper text.
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                // because we put span 2, it'll only use up 2 out of the 4 grid columns we set earlier
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained'>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
