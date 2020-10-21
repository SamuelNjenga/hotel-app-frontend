import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { TextField} from 'formik-material-ui'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Navigation from '../navigation/Navigation'
import { postContactRegistration } from '../../util/APIUtils';


const ContactSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().required('Email is required'),
	message: Yup.string().required('Message is required')
});

const ContactRegistration = () => {
    const history = useHistory();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div>
     <Navigation />
     <Formik
        initialValues={{
		  name: '',
          email: '',
          message: ''
				}}
        onSubmit={(values, { setSubmitting }) => {
					const sendPostRequest = async () => {
						try {
							const resp = await postContactRegistration(values);
							if (resp.status === 201) {
								history.push('/');
							} else {
								alert('Enter again the session');
							}
						} catch (err) {
							console.error(err);
						}
					};
					sendPostRequest();
				}}
                validationSchema={ContactSchema}
     >
{({ submitForm, isSubmitting }) => (
    <Form>
    <Box p="1em">
    
                    <Box display = {matches ? "flex" : ""}>
					<Box flex={1} mr="1.5em">
							<Field
								component={TextField}
								name="name"
								type="text"
								label="Name"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<Box flex={2} mr="1.5em">
							<Field
								component={TextField}
								name="email"
								type="email"
								label="Email"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
                        
                        </Box>
						<Box mr="1.5em">
							<Field
								component={TextField}
								name="message"
								type="text"
								label="Message"
								margin="dense"
								variant="outlined"
							/>
						</Box>
						<br />
						<div>
						<Box margin={1.5} padding={0}>
							<Button
                            style={{backgroundColor: 'mediumPurple'}}
							    startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
								variant="contained"
								className="login-form-button"
								disabled={isSubmitting}
								onClick={submitForm}
							>
								Send Message
							</Button>
						</Box>
						<br/>
						</div>
                        </Box>
					</Form>
)}
     </Formik>
     </div>
  )
}

export default ContactRegistration
