import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Base from "../Base/Base";
import "./DashBoard.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import LinearProgress from "@mui/material/LinearProgress";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function DashBoard() {
  return (
    <Base>
      <Grid container my={1} mx={1}>
        <Grid item xs={10}>
          <Box my={1}>
            <b>DashBoard</b>
            <Button sx={{ float: "right" }}>Generate Report</Button>
          </Box>
        </Grid>

        <Grid item xs={12} display={"flex"} gap={4}>
          <Box my={1} className="griditems1">
            <label className="clr-label1">EARNINGS (MONTHLY)</label>
            <br></br>
            <b>$40,000</b>
            <IconButton>
              <FolderOpenTwoToneIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
          <Box my={1} className="griditems2">
            <label className="clr-label2">EARNINGS (ANNUAL)</label>
            <br></br>
            <b>$215,000</b>
            <IconButton>
              <AttachMoneyIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
          <Box my={1} className="griditems3">
            <label className="clr-label3">TASKS</label>
            <br></br>
            <b>
              50%
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ width: "150px" }}
              />
            </b>
            <IconButton>
              <AssignmentTwoToneIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
          <Box my={1} className="griditems4">
            <label className="clr-label4">PENDING REQUESTS</label>
            <br></br>
            <b>18</b>
            <IconButton>
              <ForumTwoToneIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ backgroundColor: "whitesmoke" }}
                title="Project"
              />

              <CardContent>
                <Typography>
                  <label>Server Migration</label>
                  <br></br>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    color="secondary"
                    sx={{
                      width: "500px",
                      borderRadius: "1rem",
                      color: "red",
                      height: "15px",
                    }}
                  />
                </Typography>
                <br></br>
                <Typography>
                  <label>Sales Tracking</label>
                  <br></br>
                  <LinearProgress
                    variant="determinate"
                    value={40}
                    color="warning"
                    sx={{
                      width: "500px",
                      borderRadius: "1rem",
                      height: "15px",
                    }}
                  />
                </Typography>
                <br></br>
                <Typography>
                  <label>Customer Database</label>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="primary"
                    sx={{
                      width: "500px",
                      borderRadius: "1rem",
                      height: "15px",
                    }}
                  />
                </Typography>
                <br></br>
                <Typography>
                  <label>Payout Details</label>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    color="info"
                    sx={{
                      width: "500px",
                      borderRadius: "1rem",
                      height: "15px",
                    }}
                  />
                </Typography>
                <br></br>
                <Typography>
                  <label>Account Setup</label>
                  <LinearProgress
                    variant="determinate"
                    value={100}
                    color="success"
                    sx={{
                      width: "500px",
                      borderRadius: "1rem",
                      height: "15px",
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
            <br></br>
          </Box>

          <Box className="btn-grid">
            <Button variant="contained" sx={{ width: "250px" }}>
              <span>
                Primary<br></br>#4e73df
              </span>{" "}
            </Button>
            <Button variant="contained" color="success" sx={{ width: "250px" }}>
              <span>
                Success<br></br>#e74a3b
              </span>{" "}
            </Button>
            <Button variant="contained" color="info" sx={{ width: "250px" }}>
              <span>
                Info<br></br>#36b9cc
              </span>
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ width: "250px", backgroundColor: "#f6c23e" }}
            >
              <span>
                Warning<br></br>#f6c23e
              </span>{" "}
            </Button>
            <Button variant="contained" color="error" sx={{ width: "250px" }}>
              <span>
                Danger<br></br>#e74a3b
              </span>
            </Button>
            <Button
              variant="contained"
              sx={{ width: "250px", backgroundColor: "#858796" }}
            >
              <span>
                Secondary<br></br>#858796
              </span>
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "250px",
                backgroundColor: "#f8f9fc",
                color: "#5a5c69",
              }}
            >
              <span>
                Light<br></br>#f8f9fc
              </span>
            </Button>
            <Button
              variant="contained"
              sx={{ width: "250px", backgroundColor: "#5a5c69" }}
            >
              <span>
                Secondary<br></br>#858796
              </span>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Illustrations"
              />
              <CardMedia
                sx={{ padding: "20px" }}
                component="img"
                height="194"
                image="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
                alt="Illustrations"
              />
              <CardContent>
                <Typography paragraph>
                  Add some quality, svg illustrations to your project courtesy
                  of <span style={{ color: "blue" }}>unDraw</span>, a constantly
                  updated collection of beautiful svg images that you can use
                  completely free and without attribution!
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Development Approach"
              />
              <CardContent>
                <Typography paragraph>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility classes
                  in order to reduce CSS bloat and poor page performance. Custom
                  CSS classes are used to create custom components and custom
                  utility classes. Before working with this theme, you should
                  become familiar with the Bootstrap framework, especially the
                  utility classes.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Base>
  );
}

{
  /* <Grid xs={4}>

</Grid> */
}
