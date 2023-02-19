import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Base from "../Base/Base";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export default function Buttons() {
  return (
    <Base>
      <Grid container my={1} mx={1}>
        <Grid item xs={12}>
          <div>
            <h2>Buttons</h2>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Brand Buttons"
              />

              <CardContent>
                <Typography paragraph>
                  Use Font Awesome Icons (included with this theme package)
                  along with the circle buttons as shown in the examples below!
                </Typography>
                <Typography>
                  <label>.btn-circle</label>
                  <br></br>
                  <FacebookRoundedIcon />
                  <CheckCircleRoundedIcon />
                  <WarningRoundedIcon />
                  <DeleteRoundedIcon />
                </Typography>
                <Typography>
                  <label>.btn-circle .btn-sm</label>
                  <br></br>
                  <FacebookRoundedIcon />
                  <CheckCircleRoundedIcon />
                  <WarningRoundedIcon />
                  <DeleteRoundedIcon />
                </Typography>
                <Typography>
                  <label>.btn-circle .btn-lg</label>
                  <br></br>
                  <FacebookRoundedIcon />
                  <CheckCircleRoundedIcon />
                  <WarningRoundedIcon />
                  <DeleteRoundedIcon />
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Circle Buttons"
              />
              <CardContent>
                <Typography paragraph>
                  Google and Facebook buttons are available featuring each
                  company's respective brand color. They are used on the user
                  login and registration pages. You can create more custom
                  buttons by adding a new color variable in the _variables.scss
                  file and then using the Bootstrap button variant mixin to
                  create a new style, as demonstrated in the _buttons.scss file.
                </Typography>
                <Typography>
                  <Button variant="contained" color="error" sx={{ width: 500 }}>
                    .btn-google
                  </Button>
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    sx={{ width: 500 }}
                    color="warning"
                  >
                    .btn-facebook
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Split Buttons with Icon"
              />

              <CardContent>
                <Typography paragraph>
                  Works with any button colors, just use the .btn-icon-split
                  class and the markup in the examples below. The examples below
                  also use the .text-white-50 helper class on the icons for
                  additional styling, but it is not required.
                </Typography>
                <Typography
                  sx={{ display: "flex", flexDirection: "column-reverse" }}
                >
                  <Button variant="contained" color="error" sx={{ width: 500 }}>
                    .btn-google
                  </Button>
                  <br></br>
                  <Button
                    variant="contained"
                    sx={{ width: 500 }}
                    color="warning"
                  >
                    .btn-facebook
                  </Button>
                  <br></br>
                  <Button variant="contained" color="error" sx={{ width: 500 }}>
                    .btn-google
                  </Button>
                  <br></br>
                  <Button
                    variant="contained"
                    sx={{ width: 500 }}
                    color="warning"
                  >
                    .btn-facebook
                  </Button>
                  <br></br>
                  <Button variant="contained" color="error" sx={{ width: 500 }}>
                    .btn-google
                  </Button>
                  <br></br>
                  <Button
                    variant="contained"
                    sx={{ width: 500 }}
                    color="warning"
                  >
                    .btn-facebook
                  </Button>
                </Typography>
                <Typography sx={{ my: "10px" }}>
                  Also works with small and large button classes!
                </Typography>
                <Typography>
                  <Button variant="contained" color="error" sx={{ width: 200 }}>
                    .split btn small
                  </Button>
                  <br></br>
                  <br></br>
                  <Button
                    variant="contained"
                    sx={{ width: 400, height: "50px" }}
                    color="warning"
                  >
                    split btn large
                  </Button>
                  <br></br>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Base>
  );
}
