import Head from "next/head";
import Footer from "@/components/footer";
import Image from "next/image";
import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Chata - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <section className="content">
          <div>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="200pt"
              height="100pt"
              viewBox="0 0 1492.000000 1005.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,1005.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1160 9953 c-281 -100 -320 -122 -320 -190 0 -21 -16 -61 -44 -111
-51 -88 -63 -128 -105 -342 -77 -391 -115 -674 -171 -1280 -6 -63 -15 -155
-21 -205 -13 -132 -45 -497 -74 -850 -37 -458 -36 -442 -59 -817 -13 -209 -26
-352 -33 -359 -8 -8 -21 -4 -49 14 -45 29 -108 41 -122 24 -5 -7 -15 -37 -22
-67 -7 -30 -16 -65 -21 -78 -12 -32 -49 -215 -49 -246 0 -14 5 -36 11 -49 14
-30 102 -83 165 -99 92 -23 84 30 84 -587 0 -472 9 -805 24 -899 3 -15 10 -79
16 -142 56 -559 151 -937 330 -1306 67 -138 105 -191 160 -219 31 -16 291 -75
331 -75 31 0 39 15 39 76 0 31 -9 58 -31 95 -93 151 -230 524 -278 761 -52
251 -109 738 -121 1023 -11 284 -7 1222 5 1234 6 5 142 12 305 16 324 7 503
23 673 61 186 41 404 100 546 149 129 44 135 45 151 28 10 -11 37 -109 68
-248 29 -126 72 -318 97 -425 143 -615 189 -886 225 -1320 29 -348 39 -950 20
-1181 -16 -189 -142 -662 -197 -735 -24 -33 -29 -60 -13 -84 7 -11 28 -15 82
-15 65 0 87 6 206 54 175 71 170 64 238 291 20 69 47 160 60 202 13 42 35 132
50 200 26 118 27 137 32 483 8 645 -29 1146 -123 1657 -25 137 -92 437 -225
1015 -60 257 -70 315 -60 328 7 8 72 47 144 87 320 174 647 405 848 596 42 40
79 69 82 64 3 -5 1 -72 -4 -148 -5 -76 -23 -386 -40 -689 -17 -302 -37 -651
-45 -775 -25 -398 -37 -796 -33 -1145 3 -365 4 -371 59 -426 24 -24 83 -25
128 -3 102 51 273 312 417 634 25 58 105 256 176 440 224 579 341 842 368 825
4 -3 11 -22 14 -42 15 -84 131 -508 178 -650 130 -396 356 -716 609 -862 133
-77 249 -111 380 -111 185 0 256 27 359 137 68 72 129 176 180 306 12 32 25
55 29 52 3 -4 8 -119 11 -257 l5 -250 28 -24 c35 -30 38 -30 78 3 43 37 62 85
93 235 23 112 26 151 26 330 0 336 27 541 101 755 85 247 172 351 247 297 57
-41 177 -343 222 -554 45 -216 80 -428 90 -538 22 -247 31 -300 56 -327 13
-14 30 -25 38 -25 20 0 74 47 91 80 23 44 62 214 100 428 19 110 44 245 56
299 25 118 115 434 159 556 66 186 190 417 225 417 8 0 17 -19 24 -52 5 -29
31 -163 56 -298 83 -439 131 -614 220 -791 102 -202 206 -317 423 -469 102
-72 121 -89 121 -112 1 -19 14 -37 52 -67 77 -61 112 -55 154 27 20 42 14 62
-20 62 -15 0 -35 5 -46 11 -18 9 -19 12 -6 27 21 24 30 59 28 114 0 27 8 70
19 98 35 90 36 88 -126 225 -227 192 -312 292 -408 480 -82 160 -134 355 -211
780 -72 398 -77 413 -149 440 -58 22 -82 15 -143 -39 -161 -145 -314 -499
-473 -1094 -28 -102 -52 -187 -55 -190 -7 -7 -10 6 -49 203 -50 257 -117 464
-207 636 -46 88 -76 119 -145 145 -40 15 -53 16 -92 5 -142 -38 -259 -207
-364 -525 -27 -83 -52 -158 -54 -166 -14 -40 -24 31 -29 201 -4 101 -8 194
-11 206 -5 28 -49 50 -91 45 -31 -3 -34 -6 -58 -85 -14 -45 -37 -137 -50 -204
-23 -111 -25 -143 -23 -335 3 -349 -37 -528 -146 -647 -63 -68 -109 -84 -241
-84 -125 0 -182 15 -320 86 -145 75 -327 280 -443 497 -88 166 -161 391 -268
830 -71 286 -75 293 -153 306 -41 7 -43 6 -94 -47 -92 -96 -214 -360 -458
-994 -96 -249 -169 -422 -238 -560 -93 -186 -187 -333 -220 -343 -11 -4 -13
75 -8 499 4 417 11 606 40 1094 20 325 45 759 57 965 11 206 25 396 30 421 5
26 34 87 63 135 188 309 293 611 347 1004 19 136 30 468 21 630 -14 232 -89
526 -187 727 -38 79 -50 96 -84 113 -54 28 -83 25 -124 -11 -39 -34 -55 -77
-100 -269 -36 -155 -37 -172 -71 -1110 -18 -490 -42 -910 -56 -962 -23 -88
-286 -320 -594 -525 -211 -140 -591 -348 -618 -337 -10 4 -49 109 -112 302
-146 447 -246 698 -487 1227 -58 127 -159 347 -224 490 -64 143 -144 319 -177
390 -90 199 -326 769 -399 965 -36 96 -78 224 -94 284 -30 116 -58 170 -89
173 -11 1 -54 -10 -95 -24z m-13 -1005 c6 -7 43 -92 83 -188 82 -198 463
-1045 696 -1546 138 -300 444 -1154 444 -1242 0 -27 -14 -36 -95 -60 -264 -79
-518 -136 -670 -152 -136 -15 -761 -16 -778 -1 -10 7 -10 56 0 218 60 1039
194 2430 279 2896 16 86 23 99 41 75z m3242 -355 c55 -191 62 -238 68 -445 6
-223 -7 -408 -38 -519 -21 -77 -109 -272 -128 -283 -14 -9 -14 -16 4 294 8
140 19 408 25 595 11 370 17 465 30 465 4 0 21 -48 39 -107z"
                />
                <path
                  d="M14027 8892 c-42 -43 -57 -86 -87 -252 -56 -315 -72 -704 -68 -1645
l3 -750 -50 -8 c-202 -32 -339 -64 -498 -118 -291 -97 -531 -214 -757 -367
-153 -104 -196 -137 -283 -221 -121 -116 -184 -225 -215 -371 -52 -245 -55
-413 -9 -492 65 -111 237 -170 482 -163 255 6 385 51 587 202 128 95 328 295
431 430 88 116 213 311 294 461 31 56 60 102 64 102 9 0 13 -27 64 -530 81
-785 96 -921 122 -1110 15 -102 27 -217 29 -256 4 -162 9 -249 14 -254 24 -22
63 -171 90 -340 86 -532 210 -1018 270 -1050 15 -8 27 -3 59 27 44 39 61 81
61 152 0 25 5 70 11 100 11 52 10 62 -19 146 -40 118 -84 300 -129 537 -37
200 -46 335 -25 375 7 13 8 23 2 25 -16 5 -69 203 -95 353 -65 374 -100 649
-180 1440 -20 193 -38 370 -42 394 l-6 44 44 -5 c24 -3 76 -19 114 -35 109
-48 109 -48 145 -12 48 49 50 55 80 318 6 53 6 91 0 102 -19 34 -233 119 -300
119 -53 0 -52 16 12 175 218 552 315 998 337 1557 14 357 -2 480 -85 639 -93
176 -269 319 -394 319 -28 0 -44 -8 -73 -38z m127 -481 c111 -77 206 -223 227
-352 14 -80 5 -363 -16 -526 -27 -209 -76 -387 -186 -681 -81 -216 -88 -230
-100 -211 -12 19 -11 1455 1 1637 8 132 13 162 26 162 3 0 25 -13 48 -29z
m-539 -2691 c16 -25 -176 -270 -322 -411 -196 -190 -356 -289 -510 -316 -125
-21 -378 -14 -448 13 -27 11 -51 27 -53 35 -8 43 274 259 508 389 197 110 459
214 690 274 106 28 126 30 135 16z"
                />
                <path
                  d="M11041 6299 c-10 -11 -49 -74 -86 -139 -36 -65 -73 -121 -81 -124 -9
-3 -98 -6 -199 -6 -286 0 -440 -35 -655 -147 -388 -202 -587 -406 -655 -668
-24 -95 -48 -349 -42 -457 8 -155 61 -234 185 -274 80 -27 349 -27 437 0 276
82 622 430 887 890 75 132 94 154 121 143 13 -5 14 -48 10 -369 -8 -499 6
-603 108 -817 58 -123 116 -207 202 -293 35 -34 71 -77 80 -94 11 -20 49 -52
109 -91 174 -111 336 -170 550 -199 114 -16 123 -16 154 1 54 29 76 98 69 210
-3 44 -9 82 -13 86 -4 3 -28 12 -55 19 l-47 13 6 56 c7 69 4 72 -96 96 -395
94 -655 278 -801 567 -76 151 -84 198 -84 493 0 253 1 261 24 310 20 41 26 79
37 220 12 153 11 172 -3 195 -13 19 -16 47 -14 125 3 142 -12 235 -41 257 -32
24 -83 23 -107 -3z m-459 -779 c-6 -27 -121 -169 -217 -269 -117 -121 -240
-217 -344 -269 -75 -37 -75 -37 -221 -41 -155 -3 -257 10 -267 35 -9 24 16 70
80 144 131 149 410 320 633 385 137 41 344 50 336 15z"
                />
                <path
                  d="M13160 3753 c-19 -8 73 -30 193 -45 84 -11 106 -21 70 -31 -10 -3 1
-3 24 0 65 8 152 -6 174 -28 20 -20 55 -27 254 -50 55 -6 104 -15 108 -19 5
-4 25 -2 45 5 20 7 52 12 70 10 30 -2 32 -1 31 29 0 23 -2 27 -8 13 -6 -17 -8
-17 -20 -4 -6 9 -31 18 -54 22 -74 10 -281 46 -328 56 -25 6 -110 15 -190 20
-79 6 -157 13 -174 15 -54 9 -180 13 -195 7z"
                />
              </g>
            </svg>
          </div>
          <h1 className="name-heading monteya-font mb-5">
            Hi! I am Ahmad Chata.
          </h1>
          <p className="branch-font short-bio w-50 mx-auto">
            A Full-Stack Developer with passion for clean code. When I am not
            wearing out my not so expensive keyboard, I am either sleeping or
            recreating ideas on pinterest.
          </p>
          <div className="mb-4 socials">
            <a
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/ahmadchata/"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ahmadchata/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/ahmadchata/"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ahmadchata@gmail.com"
            className="btn rounded-0 btn-lg-sm p-lg-1 px-lg-3 contact-blue me-3"
          >
            Say hi!
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1C9gW_vtJHTBYVsY7IxvIfAzw6rqWBpjx/view?usp=sharing"
            className="btn rounded-0 btn-lg-sm p-lg-1 px-lg-3 contact-blue"
            download=""
          >
            Get my Resume
          </a> */}
        </section>
      </main>
    </>
  );
}
