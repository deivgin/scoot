import useFetch from "./useFetch";
import { useState } from "react";

export default function useTabs() {
  const url = "http://localhost:1337";
  const wheels = useFetch(`${url}/wheels`, {});
  const speeds = useFetch(`${url}/speeds`, {});
  const materials = useFetch(`${url}/materials`, {});
  const controls = useFetch(`${url}/controls`, {});
  const [currTab, setCurrTab] = useState({});

  const tabs = [
    {
      id: 1,
      name: "wheels",
      data: wheels,
    },
    {
      id: 2,
      name: "speeds",
      data: speeds,
    },
    {
      id: 3,
      name: "materials",
      data: materials,
    },
    {
      id: 4,
      name: "controls",
      data: controls,
    },
  ];

  return { tabs, currTab, setCurrTab };
}
