import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  return (
    <div>
      <Grid container>
        <Grid item xs={6} my={10} mt={5}>
          <Box className="login">
            <Card sx={{ maxwidth: "80%" }}>
              <CardMedia
                sx={{ height: 440 }}
                image="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"
                title="green iguana"
              />
              <Typography className="input-type" my={2}>
                <input
                  type="text"
                  className="input-nav"
                  placeholder="First Name"
                ></input>

                <input
                  type="text"
                  className="input-nav"
                  placeholder="Last Name"
                ></input>
              </Typography>
              <Typography className="btn">
                <button className="btn1" onClick={() => history.push("/")}>
                  login
                </button>
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
