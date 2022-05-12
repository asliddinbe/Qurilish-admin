import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography,  AccordionDetails, AccordionSummary, Accordion } from "@mui/material";
import React from "react";

const Component = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lorem ipsum dolor sit amet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Component;
