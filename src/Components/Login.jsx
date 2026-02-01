import "../Styles/Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const redirectUser = useNavigate();

  const {
    handleSubmit: submitForm,
    control: loginControl,
    formState: { errors: loginErrors, isValid: formReady },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const processLogin = (formValues) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser?.email === formValues.email &&
      savedUser?.password === formValues.password
    ) {
      redirectUser("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-box">
      <div className="header-box">
        <div className="heading">
          Signin to your <br />
          PopX account
        </div>

        <div className="lorem">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <form className="login-form" onSubmit={submitForm(processLogin)}>
        {/* Email */}
        <Controller
          name="email"
          control={loginControl}
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
              error={!!loginErrors.email}
              helperText={loginErrors.email?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={loginControl}
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
              error={!!loginErrors.password}
              helperText={loginErrors.password?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!formReady}
          sx={{
            backgroundColor: "#6C2EFF",
            textTransform: "none",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "16px",
            opacity: formReady ? 1 : 0.6,
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
