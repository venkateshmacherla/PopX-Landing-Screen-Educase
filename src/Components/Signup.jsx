import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "../Styles/Signup.css";

export default function RegisterUser() {
  const {
    handleSubmit: submitHandler,
    control: formControl,
    formState: { errors: formErrors, isValid: formValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      agency: "",
    },
  });

  const redirect = useNavigate();

  const handleFormSubmit = (formData) => {
    localStorage.setItem("user", JSON.stringify(formData));
    redirect("/profile");
  };

  return (
    <div className="signup-box">
      <div className="heading">
        Create your <br />
        PopX account
      </div>

      <form className="form-box" onSubmit={submitHandler(handleFormSubmit)}>
        {/* Full Name */}
        <Controller
          name="fullName"
          control={formControl}
          rules={{ required: "Full name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Full Name <span className="required">*</span>
                </>
              }
              error={!!formErrors.fullName}
              helperText={formErrors.fullName?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={formControl}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Only numbers allowed",
            },
            minLength: {
              value: 10,
              message: "Must be 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Must be 10 digits",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Phone number <span className="required">*</span>
                </>
              }
              error={!!formErrors.phone}
              helperText={formErrors.phone?.message || " "}
              size="small"
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={formControl}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Email address <span className="required">*</span>
                </>
              }
              error={!!formErrors.email}
              helperText={formErrors.email?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={formControl}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label={
                <>
                  Password <span className="required">*</span>
                </>
              }
              error={!!formErrors.password}
              helperText={formErrors.password?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Company */}
        <Controller
          name="company"
          control={formControl}
          rules={{ required: "Company name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Company name <span className="required">*</span>
                </>
              }
              error={!!formErrors.company}
              helperText={formErrors.company?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Agency Radio */}
        <Controller
          name="agency"
          control={formControl}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <FormControl error={!!formErrors.agency}>
              <FormLabel>
                Are you an Agency?<span className="required">*</span>
              </FormLabel>
              <RadioGroup row {...field}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          className="submit-btn"
          disabled={!formValid}
          sx={{
            backgroundColor: "#6C2EFF",
            textTransform: "none",
            borderRadius: "8px",
            padding: "12px",
            opacity: formValid ? 1 : 0.6,
          }}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}
