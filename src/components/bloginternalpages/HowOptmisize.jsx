import { Box, Grid, Stack } from '@mui/system'
import React from 'react'


import {  CardContent, CardMedia, Typography } from '@mui/material';
import { alldata, } from './bloginternalpagedata';
import { useParams } from 'react-router-dom';
import PageNotFound from '../../pages/PagenotFound';
import BlogBanner from '../blog/Blogbanner';
import BlogSidebar from '../blog/BlogSidebar';

function HowOptmisize() {
    const { id } = useParams();
    const blog = alldata.find((blog) => blog.id === parseInt(id));
    console.log(id,"what is data")

    if (!blog) {
        return <PageNotFound />;
    }
    return (
        <Stack>
            <BlogBanner
                heading={blog.heading}
                pageLink={"/blog"}
                subheading={`Blog / ${blog.subheading}`}
            />
            <Grid container sx={{ margin: { xs: "auto", sm: "0px 30px" } }}>
                <Grid item size={{ xs: 12, sm: 9, md: 9 }}>
                    <Box>
                        <h1>{blog.heading}</h1>
                        <CardMedia>
                            <img src={blog.image} alt="" style={{ width: "100%" }} />
                        </CardMedia>

                        <CardContent>
                            <Typography>{blog.description}</Typography>
                            <Typography sx={{ fontWeight: "bold" }}>{blog.subheading}</Typography>
                            <Typography>{blog.subdescription}</Typography>
                        </CardContent>
                    </Box>
                </Grid>

                <Grid item size={{ xs: 12, sm: 3, md: 3 }}>
                    <BlogSidebar />
                    <BlogSidebar />
                    <BlogSidebar />
                </Grid>
            </Grid>
        </Stack>
    );
}

export default HowOptmisize;
