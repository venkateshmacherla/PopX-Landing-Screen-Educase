import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Welcome.css";

export default function HomeLanding() {
  const goToPage = useNavigate();

  return (
    <div className="main-wrapper">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="btn-box">
        <Button
          variant="contained"
          onClick={() => goToPage("/signup")}
          sx={{ backgroundColor: "#6C2EFF" }}
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          onClick={() => goToPage("/login")}
          sx={{ backgroundColor: "#D6C6FF", color: "#4A2AAD" }}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
