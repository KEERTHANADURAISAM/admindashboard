import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ExpandMoreOutlined } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";

function Base({ children }) {
  const history = useHistory();

  return (
    <div className="main-component">
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <AppBar
              position="sticky"
              sx={{
                backgroundColor: "pink",
                marginTop: "0px",
                minHeight: "150vh",
              }}
            >
              <Toolbar variant="dense" className="ul-nav">
                <ul className="ul-nav">
                  <li>
                    <Typography className="nav-ietms">
                      <h2 onClick={() => history.push("/")}>
                        😉SB ADMIN<sup>2</sup>
                      </h2>
                    </Typography>
                    <hr></hr>
                    <br></br>
                  </li>
                  <li>
                    <label onClick={() => history.push("/")}>
                      <GridViewIcon />
                      <b> Dashboard</b>
                    </label>

                    <hr></hr>
                    <br></br>
                  </li>
                  <li>
                    <label>INTERFACE</label>
                  </li>
                  <br></br>
                  <li>
                    <Accordion
                      className="accordian"
                      sx={{ backgroundColor: "pink" }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                        <Typography>
                          <SettingsIcon />
                          components
                        </Typography>
                      </AccordionSummary>
                      <AccordionActions>
                        <label className="acc-lable">CUSTOM COMPONENTS:</label>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/button")}
                        >
                          <b>Buttons</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/cards")}
                        >
                          <b>Cards</b>
                        </button>
                      </AccordionActions>
                    </Accordion>
                  </li>
                  <br></br>
                  <li>
                    <Accordion
                      className="accordian"
                      sx={{ backgroundColor: "pink" }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                        <Typography>
                          <BuildIcon />
                          Utilities
                        </Typography>
                      </AccordionSummary>
                      <AccordionActions>
                        <label className="acc-lable">CUSTOM UTILITIES:</label>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/colors")}
                        >
                          <b>Colors</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/borders")}
                        >
                          <b>Borders</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/animation")}
                        >
                          <b>Animations</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/others")}
                        >
                          <b>Others</b>
                        </button>
                      </AccordionActions>
                    </Accordion>
                    <hr></hr>
                    <br></br>
                  </li>
                  <li>
                    <label>ADDONS</label>
                    <br></br>
                    <br></br>
                    <Accordion
                      className="accordian"
                      sx={{ backgroundColor: "pink" }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                        <Typography>
                          <FolderIcon />
                          Pages
                        </Typography>
                      </AccordionSummary>

                      <AccordionActions>
                        <label className="acc-lable">LOGIN SCREENS:</label>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/login")}
                        >
                          <b>Login</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/register")}
                        >
                          <b>Register</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button className="acc-btn">
                          <b>Forgot Password</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <label className="acc-lable">OTHER PAGES:</label>
                      </AccordionActions>

                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/four")}
                        >
                          <b>404 Page</b>
                        </button>
                      </AccordionActions>
                      <AccordionActions>
                        <button
                          className="acc-btn"
                          onClick={() => history.push("/no")}
                        >
                          <b>Blank Page</b>
                        </button>
                      </AccordionActions>
                    </Accordion>
                    <br></br>
                  </li>
                  <li>
                    <Typography>
                      <label onClick={() => history.push("/charts")}>
                        <InsertChartIcon />
                        Charts
                      </label>
                    </Typography>
                    <br></br>
                  </li>
                  <li>
                    <Typography>
                      <label onClick={() => history.push("/table")}>
                        <BackupTableIcon />
                        Tables
                      </label>
                      <hr></hr>
                    </Typography>
                  </li>
                </ul>
                <Typography></Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>

        <Grid item xs={10}>
          <Box>
            <AppBar position="sticky" sx={{ backgroundColor: "pink" }}>
              <Toolbar variant="dense">
                <input
                  type="text"
                  name="search"
                  className="input-nav"
                  placeholder="Search For..."
                ></input>
                <Button color="inherit" sx={{ backgroundColor: "black" }}>
                  <SearchIcon />
                </Button>
                <div className="nav-li">
                  <span>
                    <MailIcon sx={{ color: "black" }} />
                    <sup className="span-profile">7</sup>
                  </span>
                  <span>
                    <NotificationsIcon sx={{ color: "black" }} />
                    <sup className="span-profile">7+</sup>
                  </span>

                  <span className="span-profile">Keerthana Durai</span>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://thumbs.dreamstime.com/b/business-woman-user-profile-icon-you-can-use-icon-any-kind-web-print-design-business-woman-user-profile-icon-160648191.jpg"
                  />
                </div>
              </Toolbar>
            </AppBar>
            <div className="children-segment">{children}</div>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "pink",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <footer position="fixed">Copyright © Your Website 2020</footer>
          </Box>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}
export default Base;
