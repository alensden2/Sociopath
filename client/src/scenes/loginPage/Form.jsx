import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Formik } from "formik";
import * as yup from "yup";

const registerSchema = yup.object().shape({
firstName: yup.string().required("required"),
lastName: yup.string().required("required"),
email: yup.string().email("Invalid Email").required("required"),
password: yup.string().required("required"),
occupation: yup.string().required("required"),
picture: yup.string().required("required")
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required")
})

const initialRegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  occupation: "",
  picture: ""
}

const initalLoginValues = {
  email: "",
  password: ""
}

const Form = () => {
  const handleSubmit = async(values, onSubmitProps) => {

  }
  return (
    // <>
    //   <Box
    //     component="form"
    //     sx={{
    //       "& .MuiTextField-root": { m: 1, width: "25rem" },
    //       padding: "2rem",
          

    //     }}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <div>
    //         <TextField 
    //         label="Email"
    //         />
    //     </div>
    //   </Box>
    // </>
    <Formik>
      onSubmit={handleSubmit}
    </Formik>
  );
};
export default Form;
