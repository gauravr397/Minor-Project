import { Link, Typography } from "@mui/material";
function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF">
      {"Copyright © "}
      <Link color="#FFFFFF" href="#">
        Crowdfunding
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
