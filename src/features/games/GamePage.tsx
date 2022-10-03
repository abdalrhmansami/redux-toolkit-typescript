import { Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../store/store";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GamePage = () => {
  const { games } = useAppSelector((state) => state.games);
  console.log(games);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {games &&
          games.map((game) => (
            <Grid item xs={4}>
              <Item
                sx={{
                  backgroundImage:
                    "linear-gradient(-170deg, rgb(121, 55, 245), rgb(0, 102, 255))",
                  color: "#FFF",
                }}
              >
                {game.name}
              </Item>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default GamePage;
