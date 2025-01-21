import React from 'react'
import {Card, CardContent, List, ListItem, ListItemText, Typography } from '@mui/material';
import { categories } from './blogData';

function BlogSidebar() {
    return (
        <Card sx={{ margin: "10px", boxShadow: 1, borderRadius: 2 }}>
            <CardContent>
                {/* Header */}
                <Typography
                    variant="h3"
                    sx={{
                        backgroundColor: "#eaaa00",
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
                               
                                primaryTypographyProps={{
                                    variant: "body1",
                                    sx: {
                                        color: "#333", fontSize: { xs: "13px", sm: "14px" }, fontWeight: 500, "&:hover": {
                                            color: "#1976d2",
                                            cursor: "pointer",
                                            paddingLeft: '10px'
                                        },
                                    },
                                }}

                                primary={category}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

export default BlogSidebar