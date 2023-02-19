import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Base from "../Base/Base";

function Colors() {
  return (
    <Base>
      <Grid container my={1} mx={1}>
        <Grid item xs={12}>
          <h3>Colors</h3>
          <p>
            Bootstrap's default utility classes can be found on the official
            Bootstrap Documentation page. The custom utilities below were
            created to extend this theme past the default utility classes built
            into Bootstrap's framework.
          </p>
        </Grid>
        <Grid item xs={4}>
          <Box my={5}>
            <Card sx={{ maxWidth: 550 }}>
              <CardHeader
                sx={{ bgcolor: "whitesmoke" }}
                title="Custom Text Color Utilities"
              />
              <CardContent>
                <Typography bgcolor={"grey"}>
                  <Button padding="150">
                    .text-gray-100<br></br>
                    .text-gray-200<br></br>
                    .text-gray-300<br></br>
                    .text-gray-400<br></br>
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Base>
  );
}

export default Colors;
