import React from "react";
import { ArrowRightAlt, FiberManualRecord } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

const CenterBar = () => {
  const MyLists = styled("div")({
    lineHeight: "40px",
    marginLeft: "20px",
    fontSize: "18px",
  });
  return (
    <Card
      sx={{
        backgroundColor: "#079a6b",
        margin: "0.5rem",
        marginTop: "2rem",
        marginLeft: "-2rem",
        lineHeight: "50px",
        color: "white",
        height: "600px",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "700" }}>
          Medium
        </Typography>
        <Typography variant="p">Power-up limits</Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
            color: "yellow",
          }}
        >
          $56/mo
        </Typography>
        <CardActions>
          <Button
            size="small"
            sx={{
              backgroundColor: "white",
              color: "Black",
              padding: "15px 30px",
              fontSize: "18px",
              margin: "0.7rem 0rem",
              borderRadius: "10px",
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
            <FiberManualRecord sx={{ height: "10px" }} />
            Unlimited Documents to send for sign
          </Typography>
          <br />
          <Typography variant="P">
            <FiberManualRecord sx={{ height: "10px" }} />1 sender 1 template
          </Typography>
          <br />
          <Typography variant="p">
            <FiberManualRecord sx={{ height: "10px" }} />
            Advance Fields
          </Typography>
          <br />
          <Typography variant="p">
            <FiberManualRecord sx={{ height: "10px" }} />
            Manage Contacts
          </Typography>
          <br />
          <Typography variant="p">
            <FiberManualRecord sx={{ height: "10px" }} />
            Manage Signature
          </Typography>
        </MyLists>
        <Typography variant="P" sx={{ fontWeight: "500", color: "white" }}>
          See All Reviews <ArrowRightAlt sx={{ marginBottom: "-8px" }} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CenterBar;
