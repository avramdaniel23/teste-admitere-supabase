'use client'
import { useEffect, useState } from 'react'
import CategoryCard from '../Cards/CategoryCard'
import Card from '../Cards/Card'

interface Props {
  categoryName: string
  subcategories: any[]
}

const HorizontalSection = () => {
  return (
    <section className="mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] lg:px-[1rem] xl:px-0">
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="relative text-[1.5rem] font-[900] uppercase md:text-[2.25rem]">
          {/* {categoryName.toUpperCase()} */}
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto lg:gap-y-[1.5rem]`}
      >
        {/* <CategoryCard title={'Algebra'}></CategoryCard>
        <CategoryCard title={'Aparate'}></CategoryCard>
        <CategoryCard title={'trigonometrie'}></CategoryCard>
        <CategoryCard title={'Septari'}></CategoryCard> */}

        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600FF"></rect>
              <g filter="url(#blur1)">
                <circle cx="677" cy="442" fill="#ff0d74" r="357"></circle>
                <circle cx="221" cy="570" fill="#6600FF" r="357"></circle>
                <circle cx="16" cy="384" fill="#ff0d74" r="357"></circle>
                <circle cx="382" cy="179" fill="#ff0d74" r="357"></circle>
                <circle cx="777" cy="197" fill="#6600FF" r="357"></circle>
                <circle cx="510" cy="367" fill="#ff0d74" r="357"></circle>
              </g>
            </svg>
          }
        >
          Matematică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600ff"></rect>
              <g filter="url(#blur1)">
                <circle cx="769" cy="293" fill="#40ff0d" r="357"></circle>
                <circle cx="677" cy="592" fill="#6600ff" r="357"></circle>
                <circle cx="532" cy="231" fill="#40ff0d" r="357"></circle>
                <circle cx="111" cy="80" fill="#40ff0d" r="357"></circle>
                <circle cx="408" cy="102" fill="#6600ff" r="357"></circle>
                <circle cx="347" cy="494" fill="#40ff0d" r="357"></circle>
              </g>
            </svg>
          }
        >
          Fizică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600FF"></rect>
              <g filter="url(#blur1)">
                <circle cx="677" cy="442" fill="#ff0d74" r="357"></circle>
                <circle cx="221" cy="570" fill="#6600FF" r="357"></circle>
                <circle cx="16" cy="384" fill="#ff0d74" r="357"></circle>
                <circle cx="382" cy="179" fill="#ff0d74" r="357"></circle>
                <circle cx="777" cy="197" fill="#6600FF" r="357"></circle>
                <circle cx="510" cy="367" fill="#ff0d74" r="357"></circle>
              </g>
            </svg>
          }
        >
          Matematică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600ff"></rect>
              <g filter="url(#blur1)">
                <circle cx="769" cy="293" fill="#40ff0d" r="357"></circle>
                <circle cx="677" cy="592" fill="#6600ff" r="357"></circle>
                <circle cx="532" cy="231" fill="#40ff0d" r="357"></circle>
                <circle cx="111" cy="80" fill="#40ff0d" r="357"></circle>
                <circle cx="408" cy="102" fill="#6600ff" r="357"></circle>
                <circle cx="347" cy="494" fill="#40ff0d" r="357"></circle>
              </g>
            </svg>
          }
        >
          Fizică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600FF"></rect>
              <g filter="url(#blur1)">
                <circle cx="677" cy="442" fill="#ff0d74" r="357"></circle>
                <circle cx="221" cy="570" fill="#6600FF" r="357"></circle>
                <circle cx="16" cy="384" fill="#ff0d74" r="357"></circle>
                <circle cx="382" cy="179" fill="#ff0d74" r="357"></circle>
                <circle cx="777" cy="197" fill="#6600FF" r="357"></circle>
                <circle cx="510" cy="367" fill="#ff0d74" r="357"></circle>
              </g>
            </svg>
          }
        >
          Matematică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600ff"></rect>
              <g filter="url(#blur1)">
                <circle cx="769" cy="293" fill="#40ff0d" r="357"></circle>
                <circle cx="677" cy="592" fill="#6600ff" r="357"></circle>
                <circle cx="532" cy="231" fill="#40ff0d" r="357"></circle>
                <circle cx="111" cy="80" fill="#40ff0d" r="357"></circle>
                <circle cx="408" cy="102" fill="#6600ff" r="357"></circle>
                <circle cx="347" cy="494" fill="#40ff0d" r="357"></circle>
              </g>
            </svg>
          }
        >
          Fizică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#ff0000"></rect>
              <g filter="url(#blur1)">
                <circle cx="564" cy="17" fill="#ffff00" r="357"></circle>
                <circle cx="148" cy="331" fill="#ff0000" r="357"></circle>
                <circle cx="69" cy="546" fill="#ffff00" r="357"></circle>
                <circle cx="414" cy="464" fill="#ffff00" r="357"></circle>
                <circle cx="635" cy="255" fill="#ff0000" r="357"></circle>
                <circle cx="114" cy="155" fill="#ffff00" r="357"></circle>
              </g>
            </svg>
          }
        >
          Chimie
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#ff0000"></rect>
              <g filter="url(#blur1)">
                <circle cx="146" cy="556" fill="#0008ff" r="357"></circle>
                <circle cx="329" cy="348" fill="#ff0000" r="357"></circle>
                <circle cx="562" cy="455" fill="#0008ff" r="357"></circle>
                <circle cx="137" cy="255" fill="#0008ff" r="357"></circle>
                <circle cx="225" cy="18" fill="#ff0000" r="357"></circle>
                <circle cx="809" cy="157" fill="#0008ff" r="357"></circle>
              </g>
            </svg>
          }
        >
          Biologie
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600FF"></rect>
              <g filter="url(#blur1)">
                <circle cx="677" cy="442" fill="#ff0d74" r="357"></circle>
                <circle cx="221" cy="570" fill="#6600FF" r="357"></circle>
                <circle cx="16" cy="384" fill="#ff0d74" r="357"></circle>
                <circle cx="382" cy="179" fill="#ff0d74" r="357"></circle>
                <circle cx="777" cy="197" fill="#6600FF" r="357"></circle>
                <circle cx="510" cy="367" fill="#ff0d74" r="357"></circle>
              </g>
            </svg>
          }
        >
          Matematică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#6600ff"></rect>
              <g filter="url(#blur1)">
                <circle cx="769" cy="293" fill="#40ff0d" r="357"></circle>
                <circle cx="677" cy="592" fill="#6600ff" r="357"></circle>
                <circle cx="532" cy="231" fill="#40ff0d" r="357"></circle>
                <circle cx="111" cy="80" fill="#40ff0d" r="357"></circle>
                <circle cx="408" cy="102" fill="#6600ff" r="357"></circle>
                <circle cx="347" cy="494" fill="#40ff0d" r="357"></circle>
              </g>
            </svg>
          }
        >
          Fizică
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#ff0000"></rect>
              <g filter="url(#blur1)">
                <circle cx="564" cy="17" fill="#ffff00" r="357"></circle>
                <circle cx="148" cy="331" fill="#ff0000" r="357"></circle>
                <circle cx="69" cy="546" fill="#ffff00" r="357"></circle>
                <circle cx="414" cy="464" fill="#ffff00" r="357"></circle>
                <circle cx="635" cy="255" fill="#ff0000" r="357"></circle>
                <circle cx="114" cy="155" fill="#ffff00" r="357"></circle>
              </g>
            </svg>
          }
        >
          Chimie
        </Card>
        <Card
          background={
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="161"
                    result="effect1_foregroundBlur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <rect width="900" height="600" fill="#ff0000"></rect>
              <g filter="url(#blur1)">
                <circle cx="146" cy="556" fill="#0008ff" r="357"></circle>
                <circle cx="329" cy="348" fill="#ff0000" r="357"></circle>
                <circle cx="562" cy="455" fill="#0008ff" r="357"></circle>
                <circle cx="137" cy="255" fill="#0008ff" r="357"></circle>
                <circle cx="225" cy="18" fill="#ff0000" r="357"></circle>
                <circle cx="809" cy="157" fill="#0008ff" r="357"></circle>
              </g>
            </svg>
          }
        >
          Biologie
        </Card>
      </div>
    </section>
  )
}

export default HorizontalSection
