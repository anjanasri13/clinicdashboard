import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accor() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-[90%] ml-[80px] mt-[10px]">
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="rounded-[20px]"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className="bg-[#F2F2F2] rounded-[10px]"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontSize: "18px",
              color: "#000",
            }}
          >
            Lorem Ipsum is simply dummy text ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-[#F2F2F2]">
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
