import { ArrowRightAlt, FiberManualRecord } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  const MyLists = styled("div")({
    lineHeight: "40px",
    marginLeft: "20px",
    fontWeight: "500",
  });

  return (
    <Card
      sx={{
        backgroundColor: "#c5eade",
        margin: "0.5rem",
        marginTop: "5rem",
        marginLeft: "-4rem",
        lineHeight: "40px",
        fontWeight: "500",
        height: "450px",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          Basic
        </Typography>
        <Typography variant="p">Hit the Grond running</Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
          }}
        >
          $56/mo
        </Typography>
        <CardActions>
          <Button
            size="small"
            sx={{
              backgroundColor: "#079a6b",
              color: "white",
              padding: "15px 30px",
              fontSize: "15px",
              margin: "0.7rem 0rem",
              textTransform: "capitalize",
            }}
          >
            Get Started
          </Button>
        </CardActions>
        <MyLists>
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} />
            Single User
          </Typography>
          <br />
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} /> 25 Documents Free To
            send for sign
          </Typography>
          <br />
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} />
            Basic Fields
          </Typography>
          <br />
          <Typography variant="p">
            <FiberManualRecord sx={{ height: "10px" }} />
            Manage Contacts
          </Typography>
        </MyLists>
        <Typography variant="P" sx={{ fontWeight: "500", color: "#51b998" }}>
          See All Reviews <ArrowRightAlt sx={{ marginBottom: "-8px" }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RightBar;
