"use client"
import { useState } from "react";
import certs from "../props/certs";

import { PiCertificate } from "react-icons/pi";
import { FaRobot, FaComputer } from "react-icons/fa6";
import { SiCisco, SiPython } from "react-icons/si";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbCode } from "react-icons/tb";

import Certificate from "../props/CertProp";

type CertificateItem = {
  image: string;
  url: string;
  altText: string;
};

const Certs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("cs50");

  const specCerts: CertificateItem[] = [
    {
      image: certs.fss,
      url: "https://coursera.org/verify/specialization/4LCWZD00SIPH",
      altText: "Meta Full-Stack Specialization",
    },
    {
      image: certs.fes,
      url: "https://coursera.org/verify/specialization/N1KVLB2O64O2",
      altText: "Meta Front-End Specialization",
    },
    {
      image: certs.bes,
      url: "https://coursera.org/verify/specialization/W74F1I8L92RQ",
      altText: "Meta Back-End Specialization",
    },
    {
      image: certs.rs,
      url: "https://coursera.org/verify/specialization/6UACQ0DBG02V",
      altText: "Meta React Specialization",
    },
    {
      image: certs.wds,
      url: "https://coursera.org/verify/specialization/WQ4IAJ7I2PVJ",
      altText: "Meta Web Dev Fundamentals Specialization",
    },
    {
      image: certs.ss,
      url: "https://coursera.org/verify/specialization/78PBQYZS06B9",
      altText: "Scrimba AI for Web Development Specialization",
    },
    {
      image: certs.scss,
      url: "https://coursera.org/verify/specialization/8933NEMMUJKF",
      altText: "Scrimba CSS Specialization",
    },
    {
      image: certs.stws,
      url: "https://coursera.org/verify/specialization/1H7XSF4EN98G",
      altText: "Scrimba Tailwind CSS Specialization",
    },
    {
      image: certs.sjss,
      url: "https://coursera.org/verify/specialization/AA8PRY1HQOZB",
      altText: "Scrimba Javascript Specialization",
    },
    {
      image: certs.saiweb,
      url: "https://coursera.org/verify/specialization/U08DUWFQ0FMW",
      altText: "Scrimba Gen AI Web Dev Specialization",
    },
  ];

  const cs50Certs: CertificateItem[] = [
    {
      image: certs.csx,
      url: "https://cs50.harvard.edu/certificates/9d966695-a4b6-4154-9952-52e4d2efa692",
      altText: "CS50x Certificate",
    },
    {
      image: certs.css,
      url: "https://cs50.harvard.edu/certificates/a06a26e2-64e9-438a-8666-977af8d062ed",
      altText: "CS50S Certificate",
    },
    {
      image: certs.csp,
      url: "https://cs50.harvard.edu/certificates/7226859c-c657-4563-b9c8-99f4873114f6",
      altText: "CS50P Certificate",
    },
    {
      image: certs.csw,
      url: "https://cs50.harvard.edu/certificates/bad7e1c0-84e5-40f5-a565-77ed246e9490",
      altText: "CS50W Certificate",
    },
  ];

  const webCerts: CertificateItem[] = [
    {
      image: certs.f1,
      url: "https://coursera.org/verify/MMU2WMZEKWOA",
      altText: "Meta Front-End Intro Certificate",
    },
    {
      image: certs.f2,
      url: "https://coursera.org/verify/LO2FMY48V1BX",
      altText: "Meta JavaScript Certificate",
    },
    {
      image: certs.f3,
      url: "https://coursera.org/verify/0RAM91AXMKNF",
      altText: "Meta HTML CSS Depth Certificate",
    },
    {
      image: certs.f4,
      url: "https://coursera.org/verify/SFY4SH8WP7J0",
      altText: "Meta React Basics Certificate",
    },
    {
      image: certs.f5,
      url: "https://coursera.org/verify/Z5OHBQ707WJW",
      altText: "Meta React Advanced Certificate",
    },
    {
      image: certs.f6,
      url: "https://coursera.org/verify/QNQLDDB6CYAT",
      altText: "Meta UX UI Certificate",
    },
    {
      image: certs.f7,
      url: "https://coursera.org/verify/MGPD0EVNC2FY",
      altText: "Meta Front-End Capstone Certificate",
    },

    {
      image: certs.b1,
      url: "https://coursera.org/verify/ACCBKW4XQTWK",
      altText: "Meta Back-End Intro Certificate",
    },
    {
      image: certs.b3,
      url: "https://coursera.org/verify/QVJ03ZPZPJWJ",
      altText: "Meta Intro to Databases Certificate",
    },
    {
      image: certs.b4,
      url: "https://coursera.org/verify/K638QW9RHVZT",
      altText: "Meta Django Certificate",
    },
    {
      image: certs.b5,
      url: "https://coursera.org/verify/KEFAZVT628EP",
      altText: "Meta API Certificate",
    },
    {
      image: certs.b6,
      url: "https://coursera.org/verify/T5QTGTRCRD35",
      altText: "Meta Full Stack Certificate",
    },
    {
      image: certs.b7,
      url: "https://coursera.org/verify/QDB61GFOAD5W",
      altText: "Meta Back-End Capstone Certificate",
    },

    {
      image: certs.ib_js,
      url: "https://coursera.org/verify/YFSJZECZWFAG",
      altText: "IBM Javascript Essentials Certificate",
    },
    {
      image: certs.ib_be,
      url: "https://coursera.org/verify/S7O0PT89GJNY",
      altText: "IBM Back-End Apps with Node & Express Certificate",
    },

    {
      image: certs.msw,
      url: "https://coursera.org/verify/BXTYMK5N240G",
      altText: "Microsoft Intro to Web Development Certificate",
    },

    {
      image: certs.wtdj,
      url: "https://coursera.org/verify/D8KCSUZ77JHC",
      altText: "UOM Web Technologies & Django Certificate",
    },
    {
      image: certs.dj2,
      url: "https://coursera.org/verify/FM487DP4QUJU",
      altText: "UOM Django Certificate",
    },

    {
      image: certs.jhu,
      url: "https://coursera.org/verify/8DILH4N0ABM6",
      altText: "JHU Web Dev Certificate",
    },

    {
      image: certs.shtmcs,
      url: "https://coursera.org/verify/3DJL39C3QXDE",
      altText: "Scrimba HTML CSS Certificate",
    },
    {
      image: certs.sawd,
      url: "https://coursera.org/verify/Z0ZHPDWW9PWE",
      altText: "Scrimba Accessible Web Certificate",
    },
    {
      image: certs.scsf,
      url: "https://coursera.org/verify/09L0ZP24T9E2",
      altText: "Scrimba CSS Flexbox Certificate",
    },
    {
      image: certs.scsg,
      url: "https://coursera.org/verify/IARX6KKUFUKE",
      altText: "Scrimba CSS Grid Certificate",
    },
    {
      image: certs.scsv,
      url: "https://coursera.org/verify/IUBYJ8Y1BVUB",
      altText: "Scrimba CSS Variables Certificate",
    },
    {
      image: certs.srwd,
      url: "https://coursera.org/verify/QU5IZHMJFPA8",
      altText: "Scrimba Responsive Web Design Certificate",
    },
    {
      image: certs.scsa,
      url: "https://coursera.org/verify/CTL04L198IUY",
      altText: "Scrimba CSS Animations Certificate",
    },
    {
      image: certs.sljs,
      url: "https://coursera.org/verify/HDMWKEOA2EVA",
      altText: "Scrimba Learn Javascript Certificate",
    },
    {
      image: certs.sajs,
      url: "https://coursera.org/verify/5ILWINY82IWQ",
      altText: "Scrimba Async Javascript Certificate",
    },
    {
      image: certs.ses6,
      url: "https://coursera.org/verify/WIQ6U1Q7SOUP",
      altText: "Scrimba Javascript ES6 Certificate",
    },
    {
      image: certs.sjsi,
      url: "https://coursera.org/verify/UMBN6WGO5OJA",
      altText: "Scrimba Javascript Deep Dive Certificate",
    },
    {
      image: certs.sjsp,
      url: "https://coursera.org/verify/RE1ULPPGQ9GM",
      altText: "Scrimba Javascript Interview Certificate",
    },
    {
      image: certs.sjsdd,
      url: "https://coursera.org/verify/1D489M0B7QCN",
      altText: "Scrimba Javascript Mini Projects Certificate",
    },
    {
      image: certs.sbp,
      url: "https://coursera.org/verify/PV62JC94HYR4",
      altText: "Scrimba Build a Portfolio Certificate",
    },
    {
      image: certs.sts,
      url: "https://coursera.org/verify/66APU5WZ7IP4",
      altText: "Scrimba Typescript Certificate",
    },
    {
      image: certs.sb,
      url: "https://coursera.org/verify/249D64NDNUL1",
      altText: "Scrimba Bootstrap Certificate",
    },
    {
      image: certs.stw,
      url: "https://coursera.org/verify/0L9ABHJZES2C",
      altText: "Scrimba Learn Tailwind CSS Certificate",
    },
    {
      image: certs.stwp,
      url: "https://coursera.org/verify/JJR1KREXJ7PN",
      altText: "Scrimba Tailwind CSS Pratice Projects Certificate",
    },
    {
      image: certs.stwc,
      url: "https://coursera.org/verify/UPJFISQZPG3Z",
      altText: "Scrimba Tailwind CSS Project : Product Page Certificate",
    },
    {
      image: certs.sr,
      url: "https://coursera.org/verify/LAB9K0IZJ0FV",
      altText: "Scrimba Learn React Certificate",
    },
    {
      image: certs.sr19,
      url: "https://coursera.org/verify/OF96ODMFFB6T",
      altText: "Scrimba React 19 Certificate",
    },
    {
      image: certs.sv,
      url: "https://coursera.org/verify/9O7BBKQOHJZW",
      altText: "Scrimba Learn Vite Certificate",
    },
    {
      image: certs.snjs,
      url: "https://coursera.org/verify/VOPI247HKGCZ",
      altText: "Scrimba Learn NextJS Certificate",
    },
    {
      image: certs.se,
      url: "https://coursera.org/verify/FORAR6A111BE",
      altText: "Scrimba Express Certificate",
    },

    {
      image: certs.hr_fe,
      url: "https://hackerrank.com/certificates/4ff791d3b93c",
      altText: "HackerRank Front-End Certificate",
    },

    {
      image: certs.cdio_v,
      url: "https://coursera.org/verify/URTGKGRP9MPV",
      altText: "Codio VueJS Certificate",
    },
    {
      image: certs.brd_vue,
      url: "https://coursera.org/verify/7YYOOCGWRBKN",
      altText: "Board Infinity VueJS Fundamentals Certificate",
    },

    {
      image: certs.fcc_rwd,
      url: "https://freecodecamp.org/certification/virakboth_soth/responsive-web-design",
      altText: "FreeCodeCamp Responsive Web Certificate",
    },
    {
      image: certs.fcc_fdl,
      url: "https://freecodecamp.org/certification/virakboth_soth/front-end-development-libraries",
      altText: "FreeCodeCamp Front-End Development Libraries Certificate",
    },

    //{ image: certs.cih, url: 'https://coursera.org/verify/1456WZEIY4BC', altText: 'Coursera HTML Intro Certificate' },
    //{ image: certs.chtmb, url: 'https://coursera.org/verify/WXPG0F9RCHPM', altText: 'Coursera HTML Beginner Certificate' },
    //{ image: certs.ctfh, url: 'https://coursera.org/verify/EBE597OCOY98', altText: 'Coursera HTML Tables & Forms Certificate' },
    //{ image: certs.cilh, url: 'https://coursera.org/verify/KFT7MRJCLXB6', altText: 'Coursera HTML Images & Links Certificate' },
    {
      image: certs.cawd,
      url: "https://coursera.org/verify/XD9F6TQH85E4",
      altText: "Coursera Accessible Web Development Certificate",
    },
    {
      image: certs.ccst,
      url: "https://coursera.org/verify/KQA56NGS1ZIW",
      altText: "Coursera CSS Tables Certificate",
    },
    {
      image: certs.cijs,
      url: "https://coursera.org/verify/S86DN43XXNA7",
      altText: "Coursera JS Intro Certificate",
    },
    {
      image: certs.chp,
      url: "https://coursera.org/verify/DP8420970HPZ",
      altText: "Coursera Portfolio with HTML & CSS Certificate",
    },
    {
      image: certs.chsp,
      url: "https://coursera.org/verify/75IZTY8TB8BF",
      altText: "Coursera Single-Page with HTML & CSS Certificate",
    },
    {
      image: certs.cfra,
      url: "https://coursera.org/verify/7X67H90I2VZX",
      altText: "Coursera Build your 1st React Website Certificate",
    },
    {
      image: certs.ctsv,
      url: "https://coursera.org/verify/ULT0DUPUZ11D",
      altText: "Coursera Typescript Variables & Data Types Certificate",
    },
    {
      image: certs.ctso,
      url: "https://coursera.org/verify/FXCOJVWUGUO0",
      altText: "Coursera Typescript Operators Certificate",
    },
    {
      image: certs.ctsx,
      url: "https://coursera.org/verify/T3QY64RK16U1",
      altText: "Coursera Typescript with React Certificate",
    },
    {
      image: certs.cnj,
      url: "https://coursera.org/verify/20OU4WALLVR6",
      altText: "Coursera Next JS Certificate",
    },
  ];

  const pyCerts: CertificateItem[] = [
    {
      image: certs.hr_py,
      url: "https://hackerrank.com/certificates/752e3a34dbe8",
      altText: "HackerRank Python Basic Certificate",
    },

    {
      image: certs.p1,
      url: "https://coursera.org/verify/NTMXA8WACBNQ",
      altText: "UOM Python Intro Certificate",
    },
    {
      image: certs.p2,
      url: "https://coursera.org/verify/Z47RD2HY9PYR",
      altText: "UOM Python Data Certificate",
    },
    {
      image: certs.p3,
      url: "https://coursera.org/verify/MTNK7QQL6XA3",
      altText: "UOM Python Web Data Certificate",
    },
    {
      image: certs.b2,
      url: "https://coursera.org/verify/76NFVZC1XF3E",
      altText: "Meta Python Certificate",
    },
    {
      image: certs.glepy,
      url: "https://coursera.org/verify/6QAFCSYOL2LM",
      altText: "Google Python Certificate",
    },
    {
      image: certs.py1,
      url: "https://netacad.com/certificates?issuanceId=4f5b3c5a-86b2-42ac-98d2-a4e2f791d4d1",
      altText: "Netacad Python Essentials Certificate",
    },
    {
      image: certs.cpyi,
      url: "https://coursera.org/verify/QJU4XE2SQ5AE",
      altText: "Coursera Intro to Python Certificate",
    },
    {
      image: certs.spy1,
      url: "https://coursera.org/verify/E5ASTFAHPMSF",
      altText: "Scrimba Python (1/3) Certificate",
    },
    {
      image: certs.fcc_scp,
      url: "https://freecodecamp.org/certification/virakboth_soth/scientific-computing-with-python-v7",
      altText: "FreeCodeCamp Scientific Python Certificate",
    },
    {
      image: certs.ib_pyda,
      url: "https://credly.com/badges/9a1d8626-ab48-4b1b-bd47-4f8a649c9adf",
      altText: "IBM Python for Data Science and AI Badge",
    },
  ];

  const aiCerts: CertificateItem[] = [
    {
      image: certs.s1,
      url: "https://coursera.org/verify/RCW3SNB46E1N",
      altText: "Scrimba Learn to Code with AI Certificate",
    },
    {
      image: certs.s2,
      url: "https://coursera.org/verify/F304YJ6YFM2X",
      altText: "Scrimba Web Dev with AI Certificate",
    },
    {
      image: certs.s3,
      url: "https://coursera.org/verify/ZDSBCX0EHPNG",
      altText: "Scrimba AI Engineering Intro Certificate",
    },
    {
      image: certs.s4,
      url: "https://coursera.org/verify/6YOVVKETFY5F",
      altText: "Scrimba Deploy AI Apps with Cloudflare Certificate",
    },
    {
      image: certs.sosai,
      url: "https://coursera.org/verify/L57TLZIKGTGR",
      altText: "Scrimba Open-Source AI Models Certificate",
    },
    {
      image: certs.sgpt,
      url: "https://coursera.org/verify/ROGNHTBQ1R3O",
      altText: "Scrimba Build AI Apps with ChatGPT and Dall-E Certificate",
    },
    {
      image: certs.scd,
      url: "https://coursera.org/verify/XKP8LCFU1IB0",
      altText: "Scrimba Claude with Cloudflare Certificate",
    },
    {
      image: certs.scs,
      url: "https://coursera.org/verify/ZOSUXAAFLX71",
      altText: "Scrimba Vibe Coding with Cursor Certificate",
    },
    {
      image: certs.vpe,
      url: "https://coursera.org/verify/5UQ6HQRO04K2",
      altText: "Vanderbilt Prompt Engineering Certificate",
    },
    {
      image: certs.ib_gai,
      url: "https://coursera.org/verify/ATE4NKGUNBT0",
      altText: "IBM Generative AI : Prompt Engineering Certificate",
    },
    {
      image: certs.hp_ai,
      url: "https://www.life-global.org/certificate/2a945a56-4422-4024-b728-1a613e522537",
      altText: "HP Life AI for Beginners Certificate",
    },
  ];

  const ciscoCerts: CertificateItem[] = [
    {
      image: certs.dc,
      url: "https://netacad.com/certificates?issuanceId=f32fb5f1-cd7f-4210-9e14-1b4a841edbdd",
      altText: "Cisco Digital Content Creation Certificate",
    },
    {
      image: certs.ud,
      url: "https://netacad.com/certificates?issuanceId=b91dac97-f5d9-4ea6-acab-9397fb44401b",
      altText: "Cisco Using Devices Certificate",
    },
    {
      image: certs.lu,
      url: "https://netacad.com/certificates?issuanceId=9a324cf8-27a8-488e-8cd3-c0af2158ac38",
      altText: "Cisco Linux Unhatched Certificate",
    },
    {
      image: certs.ie,
      url: "https://credly.com/badges/c855812c-0fb6-4078-bd74-f457dd107228/public_url",
      altText: "Cisco IT Essentials Certificate",
    },
  ];

  const otherCerts: CertificateItem[] = [
    {
      image: certs.kkdo,
      url: "https://coursera.org/verify/R9HSOD5OBJOA",
      altText: "KodeKloud DevOps Prerequisite Certificate",
    },
    {
      image: certs.kkg,
      url: "https://coursera.org/verify/D0BKDQNSC6L0",
      altText: "KodeKloud Git Basics Certificate",
    },
    {
      image: certs.mscs,
      url: "https://coursera.org/verify/KHX06Q6QZ10K",
      altText: "Microsoft Intro to C# Certificate",
    },
    {
      image: certs.msvs,
      url: "https://coursera.org/verify/1MDEAOHLGLZZ",
      altText: "Microsoft VS Code and Github Copilot Certificate",
    },
    {
      image: certs.ib_jv,
      url: "https://coursera.org/verify/LYR0T1VUSYH8",
      altText: "IBM Java Certificate",
    },
    {
      image: certs.ib_se,
      url: "https://coursera.org/verify/3FISMRSVF8TR",
      altText: "IBM Intro to Software Engineering Certificate",
    },
    {
      image: certs.ib_git,
      url: "https://coursera.org/verify/28TACULWRM5O",
      altText: "IBM Intro to Git & GitHub Certificate",
    },
    {
      image: certs.iv,
      url: "https://coursera.org/verify/74FG463109SB",
      altText: "Meta Coding Interview Certificate",
    },
    {
      image: certs.ve,
      url: "https://coursera.org/verify/4NSF48QD3FIS",
      altText: "Meta Version Control Certificate",
    },
    {
      image: certs.hks,
      url: "https://coursera.org/verify/YHEPBKM5P9UU",
      altText: "HKU Scratch Certificate",
    },
    {
      image: certs.hkse,
      url: "https://coursera.org/verify/GTPPJ35GF7JI",
      altText: "HKU Software Engineer Certificate",
    },
    {
      image: certs.scc,
      url: "https://coursera.org/verify/CQ0R220S7GL5",
      altText: "Scrimba Clean Code Certificate",
    },
    {
      image: certs.smd,
      url: "https://coursera.org/verify/0HCHBZ39JZZC",
      altText: "Scrimba Markdown Certificate",
    },
    {
      image: certs.suid,
      url: "https://coursera.org/verify/7RP4NPN6X4LE",
      altText: "Scrimba UI Design Fundamentals Certificate",
    },
  ];

  const renderCertificates = (): React.ReactNode => {
    let certificates: CertificateItem[] = [];
    if (activeCategory === "special") {
      certificates = specCerts;
    } else if (activeCategory === "cs50") {
      certificates = cs50Certs;
    } else if (activeCategory === "web") {
      certificates = webCerts;
    } else if (activeCategory === "py") {
      certificates = pyCerts;
    } else if (activeCategory === "ai") {
      certificates = aiCerts;
    } else if (activeCategory === "cisco") {
      certificates = ciscoCerts;
    } else if (activeCategory === "other") {
      certificates = otherCerts;
    }

    return certificates.map((cert, index) => (
      <Certificate
        key={index}
        image={cert.image}
        url={cert.url}
        altText={cert.altText}
      />
    ));
  };

  return (
    <section className="p-80">
      <div className="container mx-auto cert-section">
        <h2 className="section-title">
          <PiCertificate /> Certificates (
          {specCerts.length +
            cs50Certs.length +
            webCerts.length +
            pyCerts.length +
            aiCerts.length +
            ciscoCerts.length +
            otherCerts.length}
          )
        </h2>
        <p>
          <em>I know, that's a lot, so I exclude the less important ones!</em>
        </p>
        <div>
          <div className="flex space-x-4 mb-6 justify-center">
            <button
              className={`${
                activeCategory === "special"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("special")}
            >
              <PiCertificate /> Specializations{" "}
              <span className="cert-category-button-text">
                ({specCerts.length})
              </span>
            </button>
            <button
              className={`${
                activeCategory === "cs50"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("cs50")}
            >
              <FaComputer /> Harvard's CS50{" "}
              <span className="cert-category-button-text">
                ({cs50Certs.length})
              </span>
            </button>
            <button
              className={`${
                activeCategory === "web"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("web")}
            >
              <TbCode /> Web Dev{" "}
              <span className="cert-category-button-text">
                ({webCerts.length})
              </span>
            </button>
            <button
              className={`${
                activeCategory === "py"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("py")}
            >
              <SiPython /> Python{" "}
              <span className="cert-category-button-text">
                ({pyCerts.length})
              </span>
            </button>
            <button
              className={`${
                activeCategory === "ai"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("ai")}
            >
              <FaRobot /> AI{" "}
              <span className="cert-category-button-text">
                ({aiCerts.length})
              </span>
            </button>
            <button
              className={`${
                activeCategory === "cisco"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("cisco")}
            >
              <SiCisco /> Cisco{" "}
              <span className="cert-category-button-text">
                ({ciscoCerts.length})
              </span>
            </button>
            <button
              className={`${
                activeCategory === "other"
                  ? "cert-category-active"
                  : "cert-category"
              }`}
              onClick={() => setActiveCategory("other")}
            >
              <HiOutlineDotsHorizontal /> Etc.{" "}
              <span className="cert-category-button-text">
                ({otherCerts.length})
              </span>
            </button>
          </div>
          <div className="py-10 grid grid-cols-2 lg:grid-cols-3 gap-10 rounded-lg">
            {renderCertificates()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certs;
