import { BsPalette } from "react-icons/bs";
import { FaUserGraduate, FaHistory } from "react-icons/fa";

export const QUALIFICATIONS = [
  {
    title: "Education",
    icon: <FaUserGraduate />,
    contents: [
      {
        name: "Cornerstone college",
        year: "2007 - 2010",
      },
      {
        name: "Ogulade college",
        year: "2010 - 2013",
      },
      {
        name: "Adekunle Ajasin University",
        year: "2014 - 2018",
      },
    ],
  },
  {
    title: "Work",
    icon: <FaHistory />,
    contents: [
      {
        name: "National Youth Service Corp (NYSC)",
        year: "2019 - 2020",
      },
      {
        name: "Brass",
        year: "2021 - present",
      },
    ],
  },
  {
    title: "Interest",
    icon: <BsPalette />,
    contents: [
      {
        name: "Writing codes",
      },
      {
        name: "Watching movies",
      },
      {
        name: "Listening to music",
      },
      {
        name: "Playing football",
      },
      {
        name: "Watching animes",
      },
    ],
  },
];
