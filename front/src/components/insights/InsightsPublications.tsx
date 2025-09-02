import { Box, Grid } from "@mui/material"
import InsightsCardItem from "./InsightCardItem";
import { insightsCardPublications } from "@/mock/insightsCardPublications";

const InsightsPublications = () => {
  return (
    <Box>
      <Grid container spacing={{ xs: 3, md: 1 }}>
        {insightsCardPublications.map((insight) => (
          <Grid size={{ xs: 12, md: 4 }} key={insight.id}>
            <InsightsCardItem insight={insight} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InsightsPublications;