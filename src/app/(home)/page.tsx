"use client"

import { Button } from '@/components/ui/atoms/button'
import { Footer } from '@/components/ui/molecules/footer'
import { Header, siteConfig } from '@/components/ui/molecules/header'
import { ProductCard } from '@/components/ui/molecules/product-card'
import { cn } from '@/lib/utils'
import { ArrowUpIcon, FileTextIcon, GithubIcon, LinkedinIcon, MailIcon, SendIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [scroll, setScroll] = React.useState(0)

  useEffect(() => {
    const scrollToTop = window.addEventListener("scroll", (e) => {
      console.log(e);
      if (window.scrollY > 50) {
        setScroll(1)
      } else {
        setScroll(0)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => scrollToTop)
    }
  }, [])

  return (
    <Button variant={'outline'} asChild className={cn('fixed md:bottom-6 bottom-16 right-6 opacity-0 transition-all border border-dashed border-slate-400', scroll && 'opacity-100')}>
      <Link href={'#main'} scroll={true}>
        <ArrowUpIcon className='w-4 h-4'></ArrowUpIcon>
      </Link>
    </Button>
  )
}

export default function Home() {
  return (
    <main id='main'>
      <ScrollToTop></ScrollToTop>
      <Header items={siteConfig} ></Header>
      {/* profile */}
      <section className='container py-4 md:py-8 flex justify-between flex-wrap gap-6 '>
        <article className='profile flex-1'>
          <h2 className='inline-block sm:text-4xl font-normal border-b border-dashed border-slate-400'>Hi!</h2>
          <h1 className='text-xl sm:text-6xl py-4 sm:py-6 md:text-8xl font-semibold md:py-12'>I&#39;m <span className='underline decoration-dashed'>Phat Ly</span>,</h1>
          <h2 className='inline-block sm:text-4xl font-normal border-b border-dashed border-slate-400'>Frontend Developer.</h2>
          <p className='inline-block text-base py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto doloremque consequatur voluptatibus qui blanditiis voluptas repudiandae, repellat illum. Quaerat ab sunt rem? Esse culpa maxime doloremque veniam repellendus ullam accusamus.</p>
          <div className='flex items-center gap-2 flex-wrap py-4'>
            <Button variant={'outline'} className='gap-2 items-center min-w-[140px] border border-dashed border-slate-400' asChild>
              <Link href={'/'}>
                Résumé
                <FileTextIcon className='w-4 h-4'></FileTextIcon>
              </Link>
            </Button>
            <Button className='gap-2 items-center min-w-[140px]' asChild>
              <Link href={'mailto:lhpworking@gmail.com'}>
                Contact me
                <SendIcon className='w-4 h-4'></SendIcon>
              </Link>
            </Button>
          </div>

          {/* language */}
          <div className='py-2'>
            <h3 className='font-medium text-lg py-4'>Languages</h3>
            <div className='flex items-center gap-2'>
              <Button variant={'outline'} className='dashed-cus'>
                Vietnamese
              </Button>
              <Button variant={'outline'} className='dashed-cus'>
               English (basic)
              </Button>
            </div>
          </div>

          {/* socials */}
          <div className='py-2'>
            <h3 className='font-medium text-lg py-4'>Socials</h3>
            <div className='flex items-center gap-2'>
              <Button variant={'outline'} className='dashed-cus'>
                <Link href={'https://github.com/lhpworking'}><GithubIcon></GithubIcon></Link>
              </Button>
              <Button variant={'outline'} className='dashed-cus'>
                <Link href={'https://www.linkedin.com/in/lhngpht/'}><LinkedinIcon></LinkedinIcon></Link>
              </Button>
            </div>
          </div>

          {/* skill */}
          <div className='py-2'>
            <h3 className='font-medium text-lg py-4'>skills</h3>
            <div className='flex items-center gap-2 flex-wrap'>
              <Button variant={'outline'} className='dashed-cus'>
                HTML
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                CSS
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                JS
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                Git
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                ReactJs
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                NextJs
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                TailwindCss
              </Button>
              <Button variant={'outline'} className='dashed-cus' >
                Figma
              </Button>
            </div>
          </div>
        </article>
        <article className='image border border-dashed border-slate-400 p-4 rounded-sm aspect-square w-full xl:max-w-[500px]  '>
          <Image src={'/phat.jpeg'} alt={'phat'} width={500} height={500} className='w-full h-full object-contain'></Image>
        </article>
      </section>
      {/* product */}
      <section id='product'>
        <div className='container py-8'>
          <div className='flex items-center justify-center py-4 sm:py-8 md:py-16'>
            <h2 className='inline-block text-4xl sm:text-8xl font-medium'>Pro</h2>
            <Image className='aspect-square max-w-[200px] sm:max-w-[400px] object-contain' src={'/produck.png'} width={400} height={300} alt={'product'}></Image>
          </div>
          <article className='flex flex-col gap-6'>
            <ProductCard title={'HoaTruyen Project'} desc='Role: Frontend' imgSrc={'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug='} alt='product-1' webLink={'hoaTruyen.com'} detailsLink={'hoatruyen'}></ProductCard>
          </article>
        </div>
      </section>
      {/* contact */}
      <section id='contact'>
        <div className='container py-4 md:py-8'>
          <div className='flex items-center justify-center  py-4 sm:py-8 md:py-16'>
            <Image className='aspect-square max-w-[200px] sm:max-w-[400px] object-contain' src={'/contact.png'} width={400} height={300} alt={'product'}></Image>
            <h2 className='inline-block text-4xl sm:text-8xl font-medium'>tact</h2>
          </div>
          <article className='flex flex-col gap-6 justify-center items-center'>
            <div className='phone font-medium text-xl sm:text-4xl md:text-5xl'>
              <label htmlFor="phone">Phone: </label>
              <span id='phone' className='border-b border-dashed border-slate-400'>+84932791657</span>
            </div>
            <div className='email font-medium text-xl sm:text-4xl md:text-5xl'>
              <label htmlFor="email">Email: </label>
              <Link id='email' href={'mailto:lhpworking@gmail.com'} className='border-b border-dashed border-slate-400'>lhpworking@gmail.com</Link>
            </div>
          </article>
        </div>
      </section>

      <Footer></Footer>
    </main>
  )
}
