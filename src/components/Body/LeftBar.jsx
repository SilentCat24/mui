import { ArrowRightAlt, FiberManualRecord } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const MyLists = styled("div")({
  lineHeight: "40px",
  marginLeft: "20px",
  fontWeight: "500",
});

const LeftBar = () => {
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
          Advance
        </Typography>
        <Typography variant="p" sx={{ fontWeight: "700" }}>
          Customized Just for You
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "500",
          }}
        >
          +1 888 890 99 88
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
            Talk To us
          </Button>
        </CardActions>

        <MyLists>
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} /> Unlimited Documents to
            send for sign
          </Typography>
          <br />
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} /> unlimited Templates
          </Typography>
          <br />
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} /> Advance & Custome
            templte
          </Typography>
          <br />
          <Typography variant="p">
            <FiberManualRecord sx={{ height: "10px" }} /> Manage Contacts
          </Typography>
        </MyLists>
        <Typography variant="P" sx={{ fontWeight: "500", color: "#51b998" }}>
          See All Features <ArrowRightAlt sx={{ marginBottom: "-8px" }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LeftBar;
