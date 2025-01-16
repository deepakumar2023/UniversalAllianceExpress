import { Typography, Accordion, AccordionSummary, AccordionDetails, Box, Stack, Container, List, ListItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { freightSolutionsData } from "./freightSolutionsData";

const FreightSolutions = () => {
    const [expanded, setExpanded] = useState(0);

    const handleChange = (panelIndex) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelIndex : false);
    };

    return (
        <Container>
            <Box sx={{ py: "5rem" }}>
                <Typography variant='h5' fontSize={"1.6rem"} fontWeight={"700"} color='#4d4e53' mb={".7rem"}>Freight Solutions:</Typography>
                <Typography color='#4d4e53'>
                    Providing end-to-end Freight Solutions, from customs compliance and supply chain optimization to project logistics and reverse solutions, ensuring efficiency, cost savings, and global visibility.
                </Typography>
                <Stack my={"2rem"}>
                    {freightSolutionsData.map((service, index) => (
                        <Accordion
                            key={index}
                            sx={{ boxShadow: "none", color: "#0d3f5f" }}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#0d3f5f" }} />} sx={{ p: 0 }}>
                                <Typography fontSize={"1rem"}>
                                    {service.heading}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h3" gutterBottom sx={{ fontSize: "1.5rem", color: '#4d4e53' }}>
                                    {service.Slogan}
                                </Typography>
                                <Typography color="#4d4e53">{service.Description}</Typography>
                                <List component="div" disablePadding>
                                    {service.points.map((point, index) =>
                                        Object.entries(point).map(([key, value]) => (
                                            <Stack key={index} my={2}>
                                                <ListItem sx={{ fontSize: "1.2rem", fontWeight: "500", color: '#4d4e53' }}>
                                                    {key}:
                                                </ListItem>
                                                <ListItem sx={{ color: "#4d4e53" }}>{value}</ListItem>
                                            </Stack>
                                        ))
                                    )}
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>
            </Box>
        </Container>
    );
};

export default FreightSolutions;