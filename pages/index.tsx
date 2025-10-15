import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack className="home-page">
      {/* Trend Properties */}
      <Stack className="container section">
        <h2>Trend Properties</h2>
      </Stack>

      {/* Popular Properties */}
      <Stack className="container section">
        <h2>Popular Properties</h2>
      </Stack>

      {/* Advertisement */}
      <Stack className="container section">
        <h2>Advertisement</h2>
      </Stack>

      {/* Top Properties */}
      <Stack className="container section">
        <h2>Top Properties</h2>
      </Stack>

      {/* Top Agents */}
      <Stack className="container section">
        <h2>Top Agents</h2>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
