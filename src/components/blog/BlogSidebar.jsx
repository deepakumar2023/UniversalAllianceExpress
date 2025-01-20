import React from 'react'
import {Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { categories } from './blogData';

function BlogSidebar() {
    return (
        <Card sx={{ margin: "10px", boxShadow: 1, borderRadius: 2 }}>
            <CardContent>
                {/* Header */}
                <Typography
                    variant="h6"
                    sx={{
                        bgcolor: "#EAAA00",
                        color: "white",
                        padding: "8px",
                        borderRadius: "4px 4px 0 0",
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: { xs: "14px", sm: "16px" },
                        position: "relative",
                        maxWidth: "160px",
                        zIndex: 1,
                    }}
                >
                    BLOG CATEGORY
                </Typography>
                <List sx={{ padding: "8px 0" }}>
                    {categories.map((category, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                            sx={{
                                padding: "4px 0",

                            }}
                        >
                            <ListItemText
                                primary={category}
                                primaryTypographyProps={{
                                    variant: "body1",
                                    sx: {
                                        color: "#333", fontSize: "0.9rem", fontWeight: 500, "&:hover": {
                                            color: "#101c4b",
                                            cursor: "pointer",
                                            paddingLeft: '10px'
                                        },
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

export default BlogSidebar