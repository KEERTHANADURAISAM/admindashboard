import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import Base from "../Base/Base";
import "./DashBoard.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import LinearProgress from "@mui/material/LinearProgress";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExpandMoreTwoTone } from "@mui/icons-material";

export default function Cards() {
  return (
    <Base>
      <Grid container my={1} mx={1}>
        <Grid item xs={12}>
          <Box my={1}>
            <h2>Cards</h2>
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
                sx={{ bgcolor: "whitesmoke" }}
                title="Default Card Example"
              />

              <CardContent>
                <Typography paragraph>
                  This card uses Bootstrap's default styling with no utility
                  classes added. Global styles are the only things modifying the
                  look and feel of this default card example.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Basic Card Example"
              />
              <CardContent>
                <Typography paragraph>
                  The styling for this basic card example is created by using
                  default Bootstrap utility classes. By using utility classes,
                  the style of the card component can be easily modified with no
                  need for any custom CSS!
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
                title="Dropdown Card Example"
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />

              <CardContent>
                <Typography paragraph>
                  Dropdown menus can be placed in the card header in order to
                  extend the functionality of a basic card. In this dropdown
                  card example, the Font Awesome vertical ellipsis icon in the
                  card header can be clicked on in order to toggle a dropdown
                  menu.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box my={5}>
            <card sx={{ maxWidth: 550 }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreTwoTone />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Collapsable Card Example</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    This is a collapsable card example using Bootstrap's built
                    in collapse functionality. Click on the card header to see
                    the card body collapse and expand!
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </card>
          </Box>
        </Grid>
      </Grid>
    </Base>
  );
}
