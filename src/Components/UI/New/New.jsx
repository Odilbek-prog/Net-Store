import { Typography } from "@mui/material";
import React from "react";
import "./New.scss";
import { NavLink } from "react-router-dom";

const New = () => {
  return (
    <Typography
      display={"flex"}
      marginTop={"120px"}
      flexDirection={"column"}
      gap={"50px"}
      width={"1100px"}
      marginBottom={"100px"}
      className="yes"
    >
      <Typography variant="h4" fontWeight={700}>
        Yangi mahsulotlar
      </Typography>
      <Typography display={"flex"} gap={"50px"}>
        <Typography
          height={"600px"}
          width={"600px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          padding={"440px 0 0 32px"}
          className="Newbg1"
        >
          <Typography variant="h5" fontWeight={700} color={"#fff"}>
            PlayStation 5
          </Typography>
          <Typography width={"250px"} variant="p" color={"#fff"}>
            Black and White version of the PS5 coming out on sale.
          </Typography>
          <NavLink className={"newlink"} to={"#"}>
            Shop now
          </NavLink>
        </Typography>
        <Typography display={"flex"} flexDirection={"column"} gap={"30px"}>
          <Typography
            height={"285px"}
            width={"600px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            padding={"120px 0 0 30px"}
            className="Newbg2"
          >
            <Typography variant="h5" fontWeight={700} color={"#fff"}>
              Women’s Collections
            </Typography>
            <Typography width={"250px"} variant="p" color={"#fff"}>
              Featured woman collections that give you another vibe.
            </Typography>
            <NavLink className={"newlink"} to={"#"}>
              Shop now
            </NavLink>
          </Typography>
          <Typography display={"flex"} gap={"30px"}>
            <Typography
              height={"285px"}
              width={"280px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              padding={"150px 0 0 30px"}
              className="Newbg3"
            >
              <Typography variant="h5" fontWeight={700} color={"#fff"}>
                Speakers
              </Typography>
              <Typography width={"250px"} variant="p" color={"#fff"}>
                Amazon wireless speakers
              </Typography>
              <NavLink className={"newlink"} to={"#"}>
                Shop now
              </NavLink>
            </Typography>
            <Typography
              height={"285px"}
              width={"280px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              padding={"150px 0 0 30px"}
              className="Newbg4"
            >
              <Typography variant="h5" fontWeight={700} color={"#fff"}>
                Perfume
              </Typography>
              <Typography width={"250px"} variant="p" color={"#fff"}>
                GUCCI INTENSE OUD EDP
              </Typography>
              <NavLink className={"newlink"} to={"#"}>
                Shop now
              </NavLink>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
    </Typography>
  );
};

export default New;
