import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CafeList from './CafeList';


function App() {
  const CAFES = [
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
    "title": "DDSK SAIGON KITCHEN",
    "informations": {
    "Mon": [
    "11:00 – 15:00",
    "17:00 – 22:00"
    ],
    "Tue": [
    "11:00 – 15:00",
    "17:00 – 22:00"
    ],
    "Wed": [
    "11:00 – 15:00",
    "17:00 – 22:00"
    ],
    "Thu": [
    "11:00 – 15:00",
    "17:00 – 22:00"
    ],
    "Fri": [
    "11:00 – 15:00",
    "17:00 – 22:00"
    ],
    "Sat": [
    "11:00 – 22:00",
    ""
    ],
    "Sun": [
    "11:00 – 22:00",
    ""
    ]
    },
    "address": "ss, 135-0061, Tokyo",
    "criterion": [],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=DDSK Saigon Kitchen ss, 135-0061Tokyo&query_place_id=ChIJ-2zIWKWJGGARFBUPGdJKEH4"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/common/common--tokyo.jpg",
    "title": "COMMON",
    "informations": {
    "Mon": [
    "08:00 – 23:00"
    ],
    "Tue": [
    "08:00 – 23:00"
    ],
    "Wed": [
    "08:00 – 23:00"
    ],
    "Thu": [
    "08:00 – 23:00"
    ],
    "Fri": [
    "08:00 – 23:00"
    ],
    "Sat": [
    "08:00 – 23:00"
    ],
    "Sun": [
    "08:00 – 23:00"
    ]
    },
    "address": "106-0032, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Veggie",
    "Alcohol",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Pet friendly",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Common 106-0032Tokyo&query_place_id=ChIJ1drE4CyLGGAR9-g-0v5WNCI"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/moja-in-the-house/moja-in-the-house--other.jpg",
    "title": "MOJA IN THE HOUSE",
    "informations": {
    "Mon": [
    "11:00 – 23:00"
    ],
    "Tue": [
    "11:00 – 23:00"
    ],
    "Wed": [
    "11:00 – 23:00"
    ],
    "Thu": [
    "11:00 – 23:00"
    ],
    "Fri": [
    "11:00 – 23:00"
    ],
    "Sat": [
    "11:00 – 23:00"
    ],
    "Sun": [
    "11:00 – 23:00"
    ]
    },
    "address": "1-chōme-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Alcohol",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Pet friendly"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Moja in the House  1-chōme-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002Tokyo&query_place_id=ChIJtX4Vg1iLGGARUlGXwiIyFrE"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/streamer-coffee-company-akasaka/streamer-coffee-company-akasaka--other.jpg",
    "title": "STREAMER COFFEE COMPANY AKASAKA",
    "informations": {
    "Mon": [
    "09:00 – 21:00"
    ],
    "Tue": [
    "09:00 – 21:00"
    ],
    "Wed": [
    "09:00 – 21:00"
    ],
    "Thu": [
    "09:00 – 21:00"
    ],
    "Fri": [
    "09:00 – 21:00"
    ],
    "Sat": [
    "09:00 – 21:00"
    ],
    "Sun": [
    "09:00 – 21:00"
    ]
    },
    "address": "3-chōme-6-14 Akasaka, Minato City, 107-0052, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Credit cards",
    "Natural light",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Streamer Coffee Company Akasaka 3-chōme-6-14 Akasaka, Minato City, 107-0052Tokyo&query_place_id=ChIJ_9rXVt6LGGARdDnmpESw4qY"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/nanas-green-tea-tokyo-dome-city-laqua/nanas-green-tea-tokyo-dome-city-laqua--other.jpg",
    "title": "NANA'S GREEN TEA @ TOKYO DOME CITY LAQUA",
    "informations": {
    "Mon": [
    "11:00 – 21:00"
    ],
    "Tue": [
    "11:00 – 21:00"
    ],
    "Wed": [
    "11:00 – 21:00"
    ],
    "Thu": [
    "11:00 – 21:00"
    ],
    "Fri": [
    "11:00 – 21:00"
    ],
    "Sat": [
    "11:00 – 21:00"
    ],
    "Sun": [
    "11:00 – 21:00"
    ]
    },
    "address": "〒112-0003 Tokyo, Bunkyo City, Kasuga, 1 Chome−1−1, 112-0003, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Alcohol",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=nana's green tea @ Tokyo Dome City LaQua 〒112-0003 Tokyo, Bunkyo City, Kasuga, 1 Chome−1−1, 112-0003Tokyo&query_place_id=ChIJqVA2DTiMGGAR7hGES_WgpDI"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/ls-cafe/ls-cafe--other.jpg",
    "title": "LS CAFE",
    "informations": {
    "Mon": [
    "Open 24 hours"
    ],
    "Tue": [
    "09:00 – 20:00"
    ],
    "Wed": [
    "09:00 – 20:00"
    ],
    "Thu": [
    "09:00 – 20:00"
    ],
    "Fri": [
    "09:00 – 20:00"
    ],
    "Sat": [
    "09:00 – 20:00"
    ],
    "Sun": [
    "09:00 – 20:00"
    ]
    },
    "address": "〒135-0021 Tokyo, Koto City, Shirakawa, 2 Chome−14−7, 135-0021, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=LS Cafe 〒135-0021 Tokyo, Koto City, Shirakawa, 2 Chome−14−7, 135-0021Tokyo&query_place_id=ChIJsXtjXj2JGGARQc6Kx1efp7k"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/metoa-cafe-kitchen/metoa-cafe-kitchen--other.jpg",
    "title": "METOA CAFE & KITCHEN",
    "informations": {
    "Mon": [
    "11:00 – 23:00"
    ],
    "Tue": [
    "11:00 – 23:00"
    ],
    "Wed": [
    "11:00 – 23:00"
    ],
    "Thu": [
    "11:00 – 23:00"
    ],
    "Fri": [
    "11:00 – 23:00"
    ],
    "Sat": [
    "08:30 – 23:00"
    ],
    "Sun": [
    "08:30 – 23:00"
    ]
    },
    "address": "〒104-0061 Tokyo, Chuo City, Ginza, 5 Chome−2−1, 104-0061, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Food",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Air conditioned"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=METoA Cafe & Kitchen 〒104-0061 Tokyo, Chuo City, Ginza, 5 Chome−2−1, 104-0061Tokyo&query_place_id=ChIJTz2gDqCLGGARby8mn0jXrSs"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/tokyo-metropolitan-central-library/tokyo-metropolitan-central-library--other.jpg",
    "title": "TOKYO METROPOLITAN CENTRAL LIBRARY",
    "informations": {
    "Mon": [
    "10:00 – 21:00"
    ],
    "Tue": [
    "10:00 – 21:00"
    ],
    "Wed": [
    "10:00 – 21:00"
    ],
    "Thu": [
    "10:00 – 21:00"
    ],
    "Fri": [
    "10:00 – 21:00"
    ],
    "Sat": [
    "10:00 – 17:30"
    ],
    "Sun": [
    "10:00 – 17:30"
    ]
    },
    "address": "5-chōme-7-13 Minamiazabu, Minato City, 106-8575, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Coffee",
    "Food",
    "Veggie",
    "Alcohol",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Pet friendly"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Tokyo Metropolitan Central Library 5-chōme-7-13 Minamiazabu, Minato City, 106-8575Tokyo&query_place_id=ChIJdwJIUXOLGGARLgNV5YI-lew"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/caffera-bar-lounge-by/caffera-bar-lounge-by--other.jpg",
    "title": "CAFFÈRA BAR & LOUNGE BY 上島珈琲店",
    "informations": {
    "Mon": [
    "07:30 – 20:00"
    ],
    "Tue": [
    "07:30 – 20:00"
    ],
    "Wed": [
    "07:30 – 20:00"
    ],
    "Thu": [
    "07:30 – 20:00"
    ],
    "Fri": [
    "07:30 – 20:00"
    ],
    "Sat": [
    "07:30 – 20:00"
    ],
    "Sun": [
    "07:30 – 18:00"
    ]
    },
    "address": "Japan, 〒106-0045 Tokyo, Minato City, Azabujuban, 1 Chome−5−23 HOTEL THE LIBELY２F, 106-0045, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Food",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Air conditioned",
    "Smoke free"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=CAFFÈRA BAR & LOUNGE by 上島珈琲店 Japan, 〒106-0045 Tokyo, Minato City, Azabujuban, 1 Chome−5−23 HOTEL THE LIBELY２F, 106-0045Tokyo&query_place_id=ChIJsZSvL3-LGGAR8Qljx-KZMv8"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/italian-tomato-cafe-jr-tokyo-denki-university/italian-tomato-cafe-jr-tokyo-denki-university--other.jpg",
    "title": "ITALIAN TOMATO CAFÉ JR. @ TOKYO DENKI UNIVERSITY",
    "informations": {
    "Mon": [
    "08:00 – 21:00"
    ],
    "Tue": [
    "08:00 – 21:00"
    ],
    "Wed": [
    "08:00 – 21:00"
    ],
    "Thu": [
    "08:00 – 21:00"
    ],
    "Fri": [
    "08:00 – 21:00"
    ],
    "Sat": [
    "08:00 – 17:00"
    ],
    "Sun": [
    "Closed"
    ]
    },
    "address": "5 Senjuasahicho, Adachi City, 120-0026, Tokyo",
    "criterion": [
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Veggie",
    "Credit cards",
    "Natural light",
    "Spacious",
    "Accessible",
    "Air conditioned"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Italian Tomato Café Jr. @ Tokyo Denki University 5 Senjuasahicho, Adachi City, 120-0026Tokyo&query_place_id=ChIJxXwqK06OGGARv_OM8hqT7jQ"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/downstairs-coffee/downstairs-coffee--other.jpg",
    "title": "DOWNSTAIRS COFFEE",
    "informations": {
    "Mon": [
    "11:00 – 19:00"
    ],
    "Tue": [
    "11:00 – 19:00"
    ],
    "Wed": [
    "11:00 – 19:00"
    ],
    "Thu": [
    "09:00 – 20:00"
    ],
    "Fri": [
    "11:00 – 19:00"
    ],
    "Sat": [
    "11:00 – 19:00"
    ],
    "Sun": [
    "11:00 – 19:00"
    ]
    },
    "address": "7-chōme-3-10 Roppongi, Minato City, 106-0032, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=DOWNSTAIRS COFFEE 7-chōme-3-10 Roppongi, Minato City, 106-0032Tokyo&query_place_id=ChIJ7cpzSnmLGGARmumNLDzbna8"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/roju-nakameguro/roju-nakameguro--other.jpg",
    "title": "ROJU NAKAMEGURO",
    "informations": {
    "Mon": [
    "10:00 – 20:00"
    ],
    "Tue": [
    "10:00 – 20:00"
    ],
    "Wed": [
    "10:00 – 20:00"
    ],
    "Thu": [
    "10:00 – 20:00"
    ],
    "Fri": [
    "10:00 – 20:00"
    ],
    "Sat": [
    "10:00 – 20:00"
    ],
    "Sun": [
    "10:00 – 20:00"
    ]
    },
    "address": "1-chōme-9-3 Nakameguro, Meguro City, 153-0061, Tokyo",
    "criterion": [
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "People working",
    "Coffee",
    "Natural light",
    "Outdoor area"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Roju Nakameguro 1-chōme-9-3 Nakameguro, Meguro City, 153-0061Tokyo&query_place_id=ChIJQ2Y3GweLGGARG2XChyhWLDw"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/good-sound-coffee/good-sound-coffee--other.jpg",
    "title": "GOOD SOUND COFFEE",
    "informations": {
    "Mon": [
    "08:00 – 23:00"
    ],
    "Tue": [
    "08:00 – 23:00"
    ],
    "Wed": [
    "08:00 – 23:00"
    ],
    "Thu": [
    "08:00 – 23:00"
    ],
    "Fri": [
    "08:00 – 23:00"
    ],
    "Sat": [
    "08:00 – 23:00"
    ],
    "Sun": [
    "08:00 – 23:00"
    ]
    },
    "address": "〒153-0051, Meguro City, Kamimeguro, 1 Chome−6−5 森ビル, 153-0051, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Accessible",
    "Air conditioned",
    "Smoke free"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=GOOD SOUND COFFEE 〒153-0051, Meguro City, Kamimeguro, 1 Chome−6−5 森ビル, 153-0051Tokyo&query_place_id=ChIJIymbcxqLGGARgGsK1DkYtZE"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/verve-coffee-roasters-roppongi/verve-coffee-roasters-roppongi--other.jpg",
    "title": "VERVE COFFEE ROASTERS @ ROPPONGI",
    "informations": {
    "Mon": [
    "07:00 – 21:00"
    ],
    "Tue": [
    "07:00 – 21:00"
    ],
    "Wed": [
    "07:00 – 21:00"
    ],
    "Thu": [
    "07:00 – 21:00"
    ],
    "Fri": [
    "07:00 – 21:00"
    ],
    "Sat": [
    "07:00 – 21:00"
    ],
    "Sun": [
    "07:00 – 21:00"
    ]
    },
    "address": "5-chōme-16-8 Roppongi, Minato City, 106-0032, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Verve Coffee Roasters @ Roppongi 5-chōme-16-8 Roppongi, Minato City, 106-0032Tokyo&query_place_id=ChIJg36gYPSLGGARlTI1efR23YQ"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/pronto-yurakucho-denki-building/pronto-yurakucho-denki-building--other.jpg",
    "title": "PRONTO - YURAKUCHO DENKI BUILDING",
    "informations": {
    "Mon": [
    "07:00 – 16:45",
    "17:00 – 23:00"
    ],
    "Tue": [
    "07:00 – 16:45",
    "17:00 – 23:00"
    ],
    "Wed": [
    "07:00 – 16:45",
    "17:00 – 23:00"
    ],
    "Thu": [
    "07:00 – 16:45",
    "17:00 – 23:00"
    ],
    "Fri": [
    "07:00 – 16:45",
    "17:00 – 23:00"
    ],
    "Sat": [
    "10:00 – 16:45",
    "17:00 – 22:00"
    ],
    "Sun": [
    "10:00 – 16:45",
    "17:00 – 22:00"
    ]
    },
    "address": "〒100-0006 Tokyo, Chiyoda City, Yurakucho, 1 Chome−7−1, Yurakucho Denki Building, 1階, 100-0006, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "Group tables",
    "Coffee",
    "Food",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Accessible",
    "Air conditioned"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=PRONTO - Yurakucho Denki Building 〒100-0006 Tokyo, Chiyoda City, Yurakucho, 1 Chome−7−1, Yurakucho Denki Building, 1階, 100-0006Tokyo&query_place_id=ChIJ1REw3u-LGGARRBEsnuqVeDU"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/coffee-mafia/coffee-mafia--other.jpg",
    "title": "COFFEE MAFIA 有明",
    "informations": {
    "Mon": [
    "08:00 – 22:00"
    ],
    "Tue": [
    "08:00 – 22:00"
    ],
    "Wed": [
    "08:00 – 22:00"
    ],
    "Thu": [
    "08:00 – 22:00"
    ],
    "Fri": [
    "08:00 – 22:00"
    ],
    "Sat": [
    "08:00 – 22:00"
    ],
    "Sun": [
    "08:00 – 22:00"
    ]
    },
    "address": "〒135-0063 Tokyo, Koto City, Ariake, 1 Chome, 6−30 1F, 135-0063, Tokyo",
    "criterion": [
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "People working"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=coffee mafia 有明 〒135-0063 Tokyo, Koto City, Ariake, 1 Chome, 6−30 1F, 135-0063Tokyo&query_place_id=ChIJj39eh3yJGGARNQgedk-V_Ww"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/good-coffee-farms-cafe-bar/good-coffee-farms-cafe-bar--other.jpg",
    "title": "GOOD COFFEE FARMS CAFE & BAR",
    "informations": {
    "Mon": [
    "08:00 – 21:00"
    ],
    "Tue": [
    "08:00 – 21:00"
    ],
    "Wed": [
    "08:00 – 21:00"
    ],
    "Thu": [
    "08:00 – 21:00"
    ],
    "Fri": [
    "08:00 – 21:00"
    ],
    "Sat": [
    "08:00 – 21:00"
    ],
    "Sun": [
    "08:00 – 21:00"
    ]
    },
    "address": "〒103-0027, Chuo City, Nihonbashi, 3 1-3 1F, 103-0027, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=GOOD COFFEE FARMS Cafe & Bar 〒103-0027, Chuo City, Nihonbashi, 3 1-3 1F, 103-0027Tokyo&query_place_id=ChIJGQNmBAiLGGARaYwG7xZzl80"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/sonoko-cafe/sonoko-cafe--other.jpg",
    "title": "SONOKO CAFE",
    "informations": {
    "Mon": [
    "11:00 – 20:00"
    ],
    "Tue": [
    "11:00 – 20:00"
    ],
    "Wed": [
    "11:00 – 20:00"
    ],
    "Thu": [
    "11:00 – 20:00"
    ],
    "Fri": [
    "11:00 – 20:00"
    ],
    "Sat": [
    "11:00 – 20:00"
    ],
    "Sun": [
    "11:00 – 20:00"
    ]
    },
    "address": "5 Chome−9−1 銀座幸ビル, 104-0061, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Air conditioned",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=SONOKO CAFE 5 Chome−9−1 銀座幸ビル, 104-0061Tokyo&query_place_id=ChIJD-8G9eaLGGARElu-BWgVqmQ"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/komedas-coffee-shinjuku-gyoen/komedas-coffee-shinjuku-gyoen--other.jpg",
    "title": "KOMEDA'S COFFEE SHINJUKU GYOEN",
    "informations": {
    "Mon": [
    "07:00 – 20:00"
    ],
    "Tue": [
    "07:00 – 20:00"
    ],
    "Wed": [
    "07:00 – 20:00"
    ],
    "Thu": [
    "07:00 – 20:00"
    ],
    "Fri": [
    "07:00 – 20:00"
    ],
    "Sat": [
    "07:00 – 20:00"
    ],
    "Sun": [
    "07:00 – 20:00"
    ]
    },
    "address": "1-chōme-10-1 Shinjuku, Shinjuku City, 160-0022, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Accessible",
    "Air conditioned",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Komeda's Coffee Shinjuku Gyoen 1-chōme-10-1 Shinjuku, Shinjuku City, 160-0022Tokyo&query_place_id=ChIJ0UGDKuqMGGARoWyTyRbVdK0"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/vaji-spice/vaji-spice--other.jpg",
    "title": "VAJI SPICE",
    "informations": {
    "Mon": [
    "11:00 – 20:00"
    ],
    "Tue": [
    "11:00 – 20:00"
    ],
    "Wed": [
    "11:00 – 20:00"
    ],
    "Thu": [
    "11:00 – 20:00"
    ],
    "Fri": [
    "11:00 – 20:00"
    ],
    "Sat": [
    "10:00 – 20:00"
    ],
    "Sun": [
    "10:00 – 20:00"
    ]
    },
    "address": "5-chōme-63-10 Yoyogi, Shibuya City, 151-0053, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Veggie",
    "Natural light",
    "Outdoor area",
    "Accessible",
    "Pet friendly",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Vaji spice 5-chōme-63-10 Yoyogi, Shibuya City, 151-0053Tokyo&query_place_id=ChIJOUIqb_vzGGARBdnn5-KiPjA"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/blue-bottle-coffee-ikebukuro-cafe/blue-bottle-coffee-ikebukuro-cafe--other.jpg",
    "title": "BLUE BOTTLE COFFEE - IKEBUKURO CAFE",
    "informations": {
    "Mon": [
    "08:00 – 20:00"
    ],
    "Tue": [
    "08:00 – 20:00"
    ],
    "Wed": [
    "08:00 – 20:00"
    ],
    "Thu": [
    "08:00 – 20:00"
    ],
    "Fri": [
    "08:00 – 20:00"
    ],
    "Sat": [
    "08:00 – 20:00"
    ],
    "Sun": [
    "08:00 – 20:00"
    ]
    },
    "address": "2-chōme-23-7 Minamiikebukuro, Toshima City, 171-0022, Tokyo",
    "criterion": [],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Blue Bottle Coffee - Ikebukuro Cafe 2-chōme-23-7 Minamiikebukuro, Toshima City, 171-0022Tokyo&query_place_id=ChIJ47thCASNGGAR0vVidyBFPdg"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/nacafe/nacafe%20other%20nacafe-other%20.jpg",
    "title": "新豊洲カフェ NACAFE",
    "informations": {
    "Mon": [
    "Closed"
    ],
    "Tue": [
    "10:00 – 18:00"
    ],
    "Wed": [
    "10:00 – 18:00"
    ],
    "Thu": [
    "10:00 – 18:00"
    ],
    "Fri": [
    "Closed"
    ],
    "Sat": [
    "10:00 – 18:00"
    ],
    "Sun": [
    "10:00 – 18:00"
    ]
    },
    "address": "5-chōme-1-6 Toyosu, Koto City, 135-0061, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "People working",
    "Coffee",
    "Restroom"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=新豊洲カフェ nacafe 5-chōme-1-6 Toyosu, Koto City, 135-0061Tokyo&query_place_id=ChIJR88y67GJGGARHcRAaZYAGcY"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/starbucks-shinjuku-southern-terrace/starbucks-coffee%20other%20starbucks-coffee-other%20.jpg",
    "title": "STARBUCKS @ SHINJUKU SOUTHERN TERRACE",
    "informations": {
    "Mon": [
    "07:00 – 22:30"
    ],
    "Tue": [
    "07:00 – 22:30"
    ],
    "Wed": [
    "07:00 – 22:30"
    ],
    "Thu": [
    "07:00 – 22:30"
    ],
    "Fri": [
    "07:00 – 22:30"
    ],
    "Sat": [
    "07:00 – 22:30"
    ],
    "Sun": [
    "07:00 – 22:30"
    ]
    },
    "address": "151-0053, Tokyo",
    "criterion": [],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Starbucks @ Shinjuku Southern Terrace 151-0053Tokyo&query_place_id=ChIJdbF81c-MGGAReLbuaGgXaXA"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/hibiya-library-museum/hibiya-library-museum%20other%20hibiya-library-museum-other%20.jpg",
    "title": "HIBIYA LIBRARY & MUSEUM",
    "informations": {
    "Mon": [
    "Closed"
    ],
    "Tue": [
    "10:00 – 20:00"
    ],
    "Wed": [
    "10:00 – 20:00"
    ],
    "Thu": [
    "10:00 – 20:00"
    ],
    "Fri": [
    "10:00 – 20:00"
    ],
    "Sat": [
    "10:00 – 19:00"
    ],
    "Sun": [
    "10:00 – 17:00"
    ]
    },
    "address": "1-4 Hibiyakōen, Chiyoda City, 100-0012, Tokyo",
    "criterion": [],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Hibiya Library & Museum 1-4 Hibiyakōen, Chiyoda City, 100-0012Tokyo&query_place_id=ChIJZ9ane-2LGGARwF-QjgVp3PM"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/time-out/time-out%20shibuya-city%20time-out-shibuya-city%20.jpg",
    "title": "TIME OUT",
    "informations": {
    "Unknown": []
    },
    "address": "Japan, 〒150-0011 Tokyo, Shibuya City, Higashi, 3 Chome−16−6 リキッドルーム, 150-0011, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Coffee",
    "Food",
    "Smoke free"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Time Out Japan, 〒150-0011 Tokyo, Shibuya City, Higashi, 3 Chome−16−6 リキッドルーム, 150-0011Tokyo&query_place_id=ChIJ9TMJ7EGLGGARsSXgFzqTXLA"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/living-room-cafe-by-eplus/living-room-cafe-by-eplus%20shibuya-city%20living-room-cafe-by-eplus-shibuya-city%20.jpg",
    "title": "LIVING ROOM CAFE BY EPLUS",
    "informations": {
    "Unknown": []
    },
    "address": "Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 2 Chome−29−5 渋谷プライム 5階, 150-0043, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Coffee",
    "Food"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Living Room Cafe by eplus Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 2 Chome−29−5 渋谷プライム 5階, 150-0043Tokyo&query_place_id=ChIJE24Yz6mMGGAR6a6X3gWp-JI"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/woodberry-coffee-roasters/woodberry-coffee-roasters%20shibuya-city%20woodberry-coffee-roasters-shibuya-city%20.jpg",
    "title": "WOODBERRY COFFEE ROASTERS 渋谷店",
    "informations": {
    "Unknown": []
    },
    "address": "2-chōme-20-18 Higashi, Shibuya City, 150-0011, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Coffee",
    "Food",
    "Natural light",
    "Spacious",
    "Air conditioned"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=WOODBERRY COFFEE ROASTERS 渋谷店 2-chōme-20-18 Higashi, Shibuya City, 150-0011Tokyo&query_place_id=ChIJvbYOsEaLGGARszQEtIIvb54"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/rethink-cafe-shibuya/rethink-cafe-shibuya%20shibuya-city%20rethink-cafe-shibuya-shibuya-city%20.jpg",
    "title": "RETHINK CAFE SHIBUYA",
    "informations": {
    "Unknown": []
    },
    "address": "Japan, 〒150-0001 Tokyo, Shibuya City, Jingumae, 6 Chome−16−13 Naias神宮前 1・2F, 150-0001, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Coffee",
    "Food",
    "Natural light",
    "Air conditioned"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=RETHINK CAFE SHIBUYA Japan, 〒150-0001 Tokyo, Shibuya City, Jingumae, 6 Chome−16−13 Naias神宮前 1・2F, 150-0001Tokyo&query_place_id=ChIJLWdkd6aMGGARRXoBe3AMfkQ"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/shimokitazawa-tag-cafe/shimokitazawa-tag-cafe%20setagaya-city%20shimokitazawa-tag-cafe-setagaya-city%20.jpg",
    "title": "SHIMOKITAZAWA TAG CAFE",
    "informations": {
    "Unknown": []
    },
    "address": "Japan, 〒155-0031 Tokyo, Setagaya City, Kitazawa, 2 Chome−12−10 サウスサイドⅡ-2B, 155-0031, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Veggie",
    "Alcohol",
    "Credit cards",
    "Natural light",
    "Outdoor area",
    "Spacious",
    "Restroom",
    "Accessible",
    "Air conditioned",
    "Smoke free",
    "Pet friendly",
    "Parking"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Shimokitazawa Tag Cafe Japan, 〒155-0031 Tokyo, Setagaya City, Kitazawa, 2 Chome−12−10 サウスサイドⅡ-2B, 155-0031Tokyo&query_place_id=ChIJZ0wL0mvzGGARfXqpXEXuV1k"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/mercedes-me-tokyo-downstairs-coffee/mercedes-me-tokyo-downstairs-coffee%20minato-city%20mercedes-me-tokyo-downstairs-coffee-minato-city%20.jpg",
    "title": "MERCEDES ME TOKYO / DOWNSTAIRS COFFEE",
    "informations": {
    "Unknown": []
    },
    "address": "7-chōme-3-10 Roppongi, Minato City, 106-0032, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Quiet",
    "Video/audio calls",
    "Coffee"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Mercedes me Tokyo / DOWNSTAIRS COFFEE 7-chōme-3-10 Roppongi, Minato City, 106-0032Tokyo&query_place_id=ChIJCW_sNXmLGGARF_rGZDspksk"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/streamer-coffee-company/streamer-coffee-company%20shibuya-city%20streamer-coffee-company-shibuya-city%20.jpg",
    "title": "STREAMER COFFEE COMPANY",
    "informations": {
    "Unknown": []
    },
    "address": "1-chōme-20-28 Shibuya, Shibuya City, 150-0002, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Coffee",
    "Food"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Streamer Coffee Company 1-chōme-20-28 Shibuya, Shibuya City, 150-0002Tokyo&query_place_id=ChIJJ-aF_6aMGGARfbFeJO3hQuU"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/deus-ex-machina-cafe-harajuku/deus-ex-machina-cafe-harajuku%20shibuya-city%20deus-ex-machina-cafe-harajuku-shibuya-city%20.jpg",
    "title": "DEUS EX MACHINA CAFE HARAJUKU",
    "informations": {
    "Unknown": []
    },
    "address": "3-chōme-29-5 Jingūmae, Shibuya City, 150-0001, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Quiet",
    "Coffee"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Deus Ex Machina Cafe Harajuku 3-chōme-29-5 Jingūmae, Shibuya City, 150-0001Tokyo&query_place_id=ChIJ_y-QxKKMGGARre2wFoNff-Y"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/fabcafe-tokyo/fabcafe-tokyo%20shibuya-city%20fabcafe-tokyo-shibuya-city%20.jpg",
    "title": "FABCAFE TOKYO",
    "informations": {
    "Unknown": []
    },
    "address": "Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 1 Chome−22−7 道玄坂ピア 1F, 150-0043, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "People working",
    "Coffee",
    "Food",
    "Credit cards"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=FabCafe Tokyo Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 1 Chome−22−7 道玄坂ピア 1F, 150-0043Tokyo&query_place_id=ChIJpZQcxVWLGGARUqBJbgjvKME"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/niko-and/niko-and-tokyo%20shibuya-city%20niko-and-tokyo-shibuya-city%20.jpg",
    "title": "NIKO AND ...",
    "informations": {
    "Unknown": []
    },
    "address": "6-chōme-12-20 Jingūmae, Shibuya City, 150-0001, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Credit cards",
    "Natural light",
    "Spacious",
    "Restroom"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Niko and ...  6-chōme-12-20 Jingūmae, Shibuya City, 150-0001Tokyo&query_place_id=ChIJAQCnnaaMGGARv3e26w2Kczk"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/tokyo-vip-lounge/tokyo-vip-lounge%20chuo-city%20tokyo-vip-lounge-chuo-city%20.jpg",
    "title": "TOKYO VIP LOUNGE",
    "informations": {
    "Unknown": []
    },
    "address": "Yaesu Amerex Bldg 2F, 3F, 1-5-9 Yaesu Chuo-ku Tokyo, 103-0028, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Coffee",
    "Credit cards"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Tokyo VIP Lounge Yaesu Amerex Bldg 2F, 3F, 1-5-9 Yaesu Chuo-ku Tokyo, 103-0028Tokyo&query_place_id=ChIJXW_kyf2LGGARGT5WHlRkMLA"
    },
    {
    "picture": "https://laptopfriendly.co/images/places/tokyo/brooklyn-parlor-shinjuku/brooklyn-parlor-shinjuku%20shinjuku-city%20brooklyn-parlor-shinjuku-shinjuku-city%20.jpg",
    "title": "BROOKLYN PARLOR SHINJUKU",
    "informations": {
    "Unknown": []
    },
    "address": "Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022, Tokyo",
    "criterion": [
    "Stable Wi-Fi",
    "Power sockets",
    "Long stays",
    "Work-friendly tables",
    "Quiet",
    "Video/audio calls",
    "People working",
    "Group tables",
    "Coffee",
    "Food",
    "Alcohol"
    ],
    "gmaps_url": "https://www.google.com/maps/search/?api=1&query=Brooklyn Parlor SHINJUKU Shinjuku Marui Annex B1F, 3-1-26 Shinjuku, Shinjuku-ku, Tokyo, 160-0022Tokyo&query_place_id=ChIJ2bfqFtuMGGARQlVsZFpUEp0"
    }
    ]

  const [ cafes, setCafes] = React.useState(CAFES)

  function filterCafe(keyword) {
    console.log(keyword);
    if (keyword == "") {
      setCafes(CAFES);
    } else {
      setCafes(CAFES.filter(cafe => cafe.title.toLowerCase().includes(keyword.toLowerCase())));
    }
  }

  return (
    <div className='vh-100 vw-100'>
      <Navbar filterCafe={filterCafe} />
      <div className="d-flex">
        <div className="row w-100">
          <div className="col-12 col-sm-4 col-xl-3">
            <Sidebar filterCafe={filterCafe} />
          </div>
          <div className="col-12 col-sm-8 col-xl-9">
            <CafeList cafes={cafes}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;