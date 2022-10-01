import {
  Check,
  Circle,
  FiberManualRecord,
  Shortcut,
  South,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Stack,
  styled,
  Table,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import RightBar from "./components/Body/RightBar";
import CenterBar from "./components/Body/CenterBar";
import LeftBar from "./components/Body/LeftBar";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#20a37a",
});

const Header = styled(Toolbar)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#079a6b",
  padding: "20px 10px",
  color: "white",
  lineHeight: "40px",
});

const PriceBar = styled("div")({
  backgroundColor: "#079a6b",
  border: "1px solid  #BDC4A7",
  borderRadius: "10px",
  padding: "3px",
});

const MyButtons = styled(Button)({
  color: "Black",
  marginRight: 5,
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: "white",
    color: "Black",
  },
  "&disabled": {
    backgroundColor: "none",
    color: "Black",
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Single User",
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />
  ),
  createData(
    "25 Document Free tos send for sign",
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />
  ),
  createData(
    "Basic Fields",
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />
  ),
  createData(
    "manage Contacts",
    <Check sx={{ display: "none" }} />,
    <Check
      sx={{ backgroundColor: "#24a67c", padding: "5px", borderRadius: "35px" }}
    />,
    <Check sx={{ display: "none" }} />
  ),
];
function App() {
  return (
    <Box>
      <StyledToolbar></StyledToolbar>

      <Header>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="P" sx={{ margin: "10px", fontSize: "20px" }}>
          Choose the plan that's right for You
        </Typography>
        <PriceBar>
          <MyButtons
            sx={{
              backgroundColor: "White",
              padding: "5px 45px",
              fontWeight: "800",
            }}
          >
            Anually
          </MyButtons>
          <MyButtons sx={{ padding: "5px 45px", color: "white" }}>
            Monthly
          </MyButtons>
        </PriceBar>
        <Typography
          variant="P"
          sx={{ marginTop: "10px", color: "yellow", marginBottom: "20px" }}
        >
          Save 17%
        </Typography>
      </Header>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <RightBar />
        <CenterBar />
        <LeftBar />
      </Stack>
      {/* table */}
      <TableContainer component={Paper} sx={{ alignItems: "center" }}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "700", fontSize: "20px" }}>
                Features
              </TableCell>
              <TableCell sx={{ fontWeight: "700", fontSize: "20px" }}>
                Basic
              </TableCell>
              <TableCell sx={{ fontWeight: "700", fontSize: "20px" }}>
                Medium
              </TableCell>
              <TableCell sx={{ fontWeight: "700", fontSize: "20px" }}>
                Advance
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontWeight: "700",
                    fontSize: "20px",
                    marginLeft: "5rem",
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
