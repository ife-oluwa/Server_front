import Header from "../../components/Header";
import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Box>
        <Header title="Line Chart" subtitle="Line Chart goes here." />
        <Box height="75vh">
          <LineChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Line;
