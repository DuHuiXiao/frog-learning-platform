'use client'

import { initRemUnit } from "@/util/rem";
import { useEffect } from "react";

export default function Config() {
  useEffect(()=>{
    initRemUnit();
  })
  return (null);
}