'use client'

import { useState } from 'react'
import certs from '../props/certs'
import { PiCertificate } from "react-icons/pi"
import Certificate from './Certificate'

type CertificateItem = {
  image: string
  url: string
  altText: string
}

const Certs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('cs50')

  const specCerts: CertificateItem[] = [
    { image: certs.fss, url: 'https://coursera.org/verify/specialization/4LCWZD00SIPH', altText: 'Meta Full-Stack Specialization' },
    { image: certs.fes, url: 'https://coursera.org/verify/specialization/N1KVLB2O64O2', altText: 'Meta Front-End Specialization' },
    { image: certs.bes, url: 'https://coursera.org/verify/specialization/W74F1I8L92RQ', altText: 'Meta Back-End Specialization' },
    { image: certs.rs, url: 'https://coursera.org/verify/specialization/6UACQ0DBG02V', altText: 'Meta React Specialization' },
    { image: certs.wds, url: 'https://coursera.org/verify/specialization/WQ4IAJ7I2PVJ', altText: 'Meta Web Dev Fundamentals Specialization' },
    { image: certs.ss, url: 'https://coursera.org/verify/specialization/78PBQYZS06B9', altText: 'Scrimba AI for Web Development Specialization' }
  ]

  const cs50Certs: CertificateItem[] = [
    { image: certs.csx, url: 'https://cs50.harvard.edu/certificates/9d966695-a4b6-4154-9952-52e4d2efa692', altText: 'CS50x Certificate' },
    { image: certs.css, url: 'https://cs50.harvard.edu/certificates/a06a26e2-64e9-438a-8666-977af8d062ed', altText: 'CS50S Certificate' },
    { image: certs.csp, url: 'https://cs50.harvard.edu/certificates/7226859c-c657-4563-b9c8-99f4873114f6', altText: 'CS50P Certificate' },
    { image: certs.csw, url: 'https://cs50.harvard.edu/certificates/bad7e1c0-84e5-40f5-a565-77ed246e9490', altText: 'CS50W Certificate' },
  ]

  const webCerts: CertificateItem[] = [
    { image: certs.f1, url: 'https://coursera.org/verify/MMU2WMZEKWOA', altText: 'Meta Front-End Intro Certificate' },
    { image: certs.f2, url: 'https://coursera.org/verify/LO2FMY48V1BX', altText: 'Meta JavaScript Certificate' },
    { image: certs.f3, url: 'https://coursera.org/verify/0RAM91AXMKNF', altText: 'Meta HTML CSS Depth Certificate' },
    { image: certs.f4, url: 'https://coursera.org/verify/SFY4SH8WP7J0', altText: 'Meta React Basics Certificate' },
    { image: certs.f5, url: 'https://coursera.org/verify/Z5OHBQ707WJW', altText: 'Meta React Advanced Certificate' },
    { image: certs.f6, url: 'https://coursera.org/verify/QNQLDDB6CYAT', altText: 'Meta UX UI Certificate' },
    { image: certs.f7, url: 'https://coursera.org/verify/MGPD0EVNC2FY', altText: 'Meta Front-End Capstone Certificate' },

    { image: certs.b1, url: 'https://coursera.org/verify/ACCBKW4XQTWK', altText: 'Meta Back-End Intro Certificate' },
    { image: certs.b2, url: 'https://coursera.org/verify/76NFVZC1XF3E', altText: 'Meta Python Certificate' },
    { image: certs.b3, url: 'https://coursera.org/verify/QVJ03ZPZPJWJ', altText: 'Meta Intro to Databases Certificate' },
    { image: certs.b4, url: 'https://coursera.org/verify/K638QW9RHVZT', altText: 'Meta Django Certificate' },
    { image: certs.b5, url: 'https://coursera.org/verify/KEFAZVT628EP', altText: 'Meta API Certificate' },
    { image: certs.b6, url: 'https://coursera.org/verify/T5QTGTRCRD35', altText: 'Meta Full Stack Certificate' },
    { image: certs.b7, url: 'https://coursera.org/verify/QDB61GFOAD5W', altText: 'Meta Back-End Capstone Certificate' },

    { image: certs.iv, url: 'https://coursera.org/verify/74FG463109SB', altText: 'Meta Coding Interview Certificate' },
    { image: certs.ve, url: 'https://coursera.org/verify/4NSF48QD3FIS', altText: 'Meta Version Control Certificate' },

    { image: certs.sljs, url: 'https://coursera.org/verify/HDMWKEOA2EVA', altText: 'Scrimba Learn JS Certificate' },
    { image: certs.snjs, url: 'https://coursera.org/verify/VOPI247HKGCZ', altText: 'Scrimba Learn NextJS Certificate' },

    { image: certs.ib_js, url: 'https://coursera.org/verify/YFSJZECZWFAG', altText: 'IBM Javascript Essentials Certificate' },
    { image: certs.ib_be, url: 'https://coursera.org/verify/S7O0PT89GJNY', altText: 'IBM Back-End Apps with Node & Express Certificate' },

    { image: certs.jhu, url: 'https://coursera.org/verify/8DILH4N0ABM6', altText: 'JHU Web Dev Certificate' },

    { image: certs.rwd, url: 'https://freecodecamp.org/certification/virakboth_soth/responsive-web-design', altText: 'FreeCodeCamp Web Design Certificate' },

    { image: certs.cih, url: 'https://coursera.org/verify/1456WZEIY4BC', altText: 'Coursera HTML Intro Certificate' },
    { image: certs.chtmb, url: 'https://coursera.org/verify/WXPG0F9RCHPM', altText: 'Coursera HTML Beginner Certificate' },
    { image: certs.ctfh, url: 'https://coursera.org/verify/EBE597OCOY98', altText: 'Coursera HTML Tables & Forms Certificate' },
    { image: certs.cilh, url: 'https://coursera.org/verify/KFT7MRJCLXB6', altText: 'Coursera HTML Images & Links Certificate' },
    { image: certs.cawd, url: 'https://coursera.org/verify/XD9F6TQH85E4', altText: 'Coursera Accessible Web Development Certificate' },
    { image: certs.ccst, url: 'https://coursera.org/verify/KQA56NGS1ZIW', altText: 'Coursera CSS Tables Certificate' },
    { image: certs.cijs, url: 'https://coursera.org/verify/S86DN43XXNA7', altText: 'Coursera JS Intro Certificate' },
    { image: certs.chp, url: 'https://coursera.org/verify/DP8420970HPZ', altText: 'Coursera Portfolio with HTML & CSS Certificate' },
    { image: certs.chsp, url: 'https://coursera.org/verify/75IZTY8TB8BF', altText: 'Coursera Single-Page with HTML & CSS Certificate' },
    { image: certs.cfra, url: 'https://coursera.org/verify/7X67H90I2VZX', altText: 'Coursera Build your 1st React Website Certificate' },
    { image: certs.cts, url: 'https://coursera.org/verify/ULT0DUPUZ11D', altText: 'Coursera Typescript Variables & Data Types Certificate' },
    { image: certs.ctsx, url: 'https://coursera.org/verify/T3QY64RK16U1', altText: 'Coursera Typescript with React Certificate' },
  ]

  const otherCerts: CertificateItem[] = [
    { image: certs.cc, url: 'https://codecombat.com/certificates/6533825122ab2d0031d4ba79', altText: 'CodeCombat Certificate' },
    { image: certs.p1, url: 'https://coursera.org/verify/NTMXA8WACBNQ', altText: 'UOM Python Intro Certificate' },
    { image: certs.p2, url: 'https://coursera.org/verify/Z47RD2HY9PYR', altText: 'UOM Python Data Certificate' },
    { image: certs.p3, url: 'https://coursera.org/verify/MTNK7QQL6XA3', altText: 'UOM Python Web Data Certificate' },
    { image: certs.hks, url: 'https://coursera.org/verify/YHEPBKM5P9UU', altText: 'HKU Scratch Certificate' },
    { image: certs.hkse, url: 'https://coursera.org/verify/GTPPJ35GF7JI', altText: 'HKU Software Engineer Certificate' },
    { image: certs.scc, url: 'https://coursera.org/verify/CQ0R220S7GL5', altText: 'Scrimba Clean Code Certificate' },
    { image: certs.smd, url: 'https://coursera.org/verify/0HCHBZ39JZZC', altText: 'Scrimba Markdown Certificate' },
    { image: certs.scp, url: 'https://freecodecamp.org/certification/virakboth_soth/scientific-computing-with-python-v7', altText: 'FreeCodeCamp Scientific Python Certificate' },
  ]

  const aiCerts: CertificateItem[] = [
    { image: certs.s1, url: 'https://coursera.org/verify/RCW3SNB46E1N', altText: 'Scrimba Learn to Code with AI Certificate' },
    { image: certs.s2, url: 'https://coursera.org/verify/F304YJ6YFM2X', altText: 'Scrimba Web Dev with AI Certificate' },
    { image: certs.s3, url: 'https://coursera.org/verify/ZDSBCX0EHPNG', altText: 'Scrimba AI Engineering Intro Certificate' },
    { image: certs.s4, url: 'https://coursera.org/verify/6YOVVKETFY5F', altText: 'Scrimba Deploy AI Apps with Cloudflare Certificate' },
    { image: certs.vpe, url: 'https://coursera.org/verify/5UQ6HQRO04K2', altText: 'Vanderbilt Prompt Engineering Certificate' },
  ]

  const ciscoCerts: CertificateItem[] = [
    { image: certs.dc, url: 'https://netacad.com/certificates?issuanceId=f32fb5f1-cd7f-4210-9e14-1b4a841edbdd', altText: 'Cisco Digital Content Creation Certificate' },
    { image: certs.ud, url: 'https://netacad.com/certificates?issuanceId=b91dac97-f5d9-4ea6-acab-9397fb44401b', altText: 'Cisco Using Devices Certificate' },
    { image: certs.lu, url: 'https://netacad.com/certificates?issuanceId=9a324cf8-27a8-488e-8cd3-c0af2158ac38', altText: 'Cisco Linux Unhatched Certificate' },
  ]

  const renderCertificates = (): React.ReactNode => {
    let certificates: CertificateItem[] = []
    if (activeCategory === 'special') {
      certificates = specCerts
    } else if (activeCategory === 'cs50') {
      certificates = cs50Certs
    } else if (activeCategory === 'web') {
      certificates = webCerts
    } else if (activeCategory === 'ai') {
      certificates = aiCerts
    } else if (activeCategory === 'cisco') {
      certificates = ciscoCerts
    } else if (activeCategory === 'other') {
      certificates = otherCerts
    }

    return certificates.map((cert, index) => (
      <Certificate
        key={index}
        image={cert.image}
        url={cert.url}
        altText={cert.altText}
      />
    ))
  }

  return (
    <section className="p-80">
      <div className="container mx-auto cert-section">
        <h2 className="section-title">
          <PiCertificate />
          <kbd>/</kbd>
          Certificates (
          {specCerts.length + cs50Certs.length + webCerts.length + aiCerts.length + ciscoCerts.length + otherCerts.length}
          )
        </h2>
        <div className="border-[0.5px] border-[#272b3b]">
          <div className="flex space-x-4 mb-6 justify-center">
            <button
              className={`${activeCategory === 'special' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('special')}
            >
              Specializations
            </button>
            <button
              className={`${activeCategory === 'cs50' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('cs50')}
            >
              Harvard's CS50
            </button>
            <button
              className={`${activeCategory === 'web' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('web')}
            >
              Web Dev
            </button>
            <button
              className={`${activeCategory === 'ai' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('ai')}
            >
              AI
            </button>
            <button
              className={`${activeCategory === 'cisco' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('cisco')}
            >
              Cisco
            </button>
            <button
              className={`${activeCategory === 'other' ? 'cert-category-active' : 'cert-category'}`}
              onClick={() => setActiveCategory('other')}
            >
              Etc.
            </button>
          </div>
          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10 rounded-lg">
            {renderCertificates()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certs
