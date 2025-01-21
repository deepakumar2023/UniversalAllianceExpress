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
            <Grid container sx={{ margin: { xs: "auto", sm: "0px 30px" },padding:"1rem"}}>
                <Grid item size={{ xs: 12, sm: 9, md: 9 }}>
                    <Box>
                        <Typography variant='h2'  sx={{ fontSize:{xs:"18px",sm:"28px"},margin:"15px 0px"}}>{blog.heading}</Typography>
                        <CardMedia>
                            <img src={blog.image} alt="" style={{ width: "100%" }} />
                        </CardMedia>

                        <CardContent>
                            <Typography sx={{fontSize:{xs:"14px",sm:"16px"}}} >{blog.description}</Typography> <br />
                            <Typography sx={{ fontWeight: "bold",fontSize:{xs:"16px",sm:"20px"} }}>{blog.subheading}</Typography> <br />
                            <Typography  sx={{fontSize:{xs:"14px",sm:"16px"}}}>{blog.subdescription}</Typography>
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
