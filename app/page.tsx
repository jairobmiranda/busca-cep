import { Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      <Grid size={{xs:12, md:6}} sx={{backgroundColor: '#00fbffff'}}>Elemento 1</Grid>
      <Grid size={{xs:12, md:6}} sx={{backgroundColor: '#ff3700ff'}}>Elemento 2</Grid>
    </Grid>
  );
}
