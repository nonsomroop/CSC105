import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

const slamdunk = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BOWZlM2ExOGEtMGEwNS00NTQwLTkxNjAtODMyN2Q2YmIyMTlmXkEyXkFqcGdeQXVyNzM3NDY3OTA@._V1_.jpg",
    title: "pic1",
  },
  {
    img: "https://i.pinimg.com/originals/23/97/6e/23976e5d138bb01e60e90451df17fdf2.jpg",
    title: "pic2",
  },
  {
    img: "https://i0.wp.com/quotetheanime.com/wp-content/uploads/2022/09/Akagi-Takenori-.jpg",
    title: "pic3",
  },
  {
    img: "https://64.media.tumblr.com/79c1f80908c61254d5d30aebce8e6e01/6e70b463bda8635f-b9/s500x750/55214bce18f0d66e109e4e94a940814b0a40851e.gif",
    title: "pic4",
  },
  {
    img: "https://media.tenor.com/bz4-vBNfbUIAAAAC/ryota-miyagi-slam-dunk.gif",
    title: "pic5",
  },
  {
    img: "https://i.pinimg.com/736x/fc/1d/6a/fc1d6a51f07dd599c0a5d25eb11c7d7c.jpg",
    title: "pic6",
  },
  {
    img: "https://soranews24.com/wp-content/uploads/sites/3/2016/02/anzaifi.jpg",
    title: "pic7",
  },
];

const Rightbar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }} pr={5}>
      <Box display={"flex"} flexDirection={"column"} mt={2} mb={2} m>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 250 }} cols={2}>
          {slamdunk.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
