"use client"

import React from "react";
import "./globals.css";


import { Header } from "@/components/Header";
import CarouselNav from "@/components/CarouselNav";
import HomeSlide from "@/components/HomeSlide"
import HorrorCategory from "@/components/HorrorCategory";
import NationalCategory from "@/components/NationalCategory";
import DCCategory from "@/components/DCCategory";
import MarvelCategory from "@/components/MarvelCategory";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <Header />
      <CarouselNav />
      <HomeSlide />
      <HorrorCategory />
      <NationalCategory />
      <DCCategory />
      <MarvelCategory />
      <Footer />

    </div>
  )
}
