// import axios from "axios";


// const params = {
//     headers: {
//         Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
//     },
// };

// export const fetchDataFromApi = async (url) => {
//     try {
//         const { data } = await axios.get(
//             process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
//             params
//         );
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };

// export const makePaymentRequest = axios.create({
//     baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
//     headers: {
//         Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
//     },
// });
import img1 from "../assets/products/headphone-prod-1.jpg"
import img2 from "../assets/products/headphone-prod-2.jpg"
import img3 from "../assets/products/headphone-prod-3.jpg"
import img4 from "../assets/products/headphone-prod-4.jpg"
import img5 from "../assets/products/headphone-prod-5.jpg"
import img6 from "../assets/products/headphone-prod-6.jpg"
import img7 from "../assets/products/speaker-prod-1.jpg"
import img8 from "../assets/products/speaker-prod-2.jpg"
import img9 from "../assets/products/speaker-prod-3.jpg"
import img10 from "../assets/products/speaker-prod-4.jpg"
import img11 from "../assets/products/speaker-prod-5.jpg"
import img12 from "../assets/products/speaker-prod-6.jpg"
import img13 from "../assets/products/watch-prod-1.jpg"
import img14 from "../assets/products/watch-prod-2.jpg"
import img15 from "../assets/products/watch-prod-3.jpg"
import img16 from "../assets/products/earbuds-prod-1.jpg"
import img17 from "../assets/products/earbuds-prod-2.jpg"
import img18 from "../assets/products/earbuds-prod-3.jpg"
import img19 from "../assets/products/earbuds-prod-4.jpg"
import img20 from "../assets/products/earbuds-prod-5.jpg"

const ProductData = [
    {
        id: "1",
        cover: img1,
        title: "boAt Rockerz 450 DC Edition | Wireless Headphone with 40mm Dynamic Driver",
        genre: "Headphones",
        price: "1999",
        desc: "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou."
    },

    {
        id: "2",
        cover: img2,
        title: "Rockerz 550 Over Ear Bluetooth Headphone",
        genre: "Headphones",
        price: "1799",
        desc: "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity. Its powerful 500mAh battery provides playtime of up to 20 hours for an extended audio bliss. Its 50mm dynamic drivers help supply immersive musical experience to the user with immersive sound. The user can utilize the headset via dualconnectivity in the form of Bluetooth and AUX."
    },

    {
        id: "3",
        cover: img3,
        title: "boAt Rockerz 518 Wireless Headphone",
        genre: "Headphones",
        price: "1599",
        desc: "Now just stop worrying about Wires hanging from here and there. Pair with any Bluetooth device, connect and play. Dead Batteries can kill your vibe. boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. We assure you have not heard such powerful bass and vocal clarity from a wireless comfortable headphone with Extra Comfort Ear cups. The boAt Super Bass Rockerz 518 Wireless Headphones will make your listening experience personal and for real. So, just plug it in and Plug into Nirvana."
    },

    {
        id: "4",
        cover: img4,
        title: "Rockerz 400",
        genre: "Headphones",
        price: "1299",
        desc: "Let's put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound. Don't just be loud, be loud and clear. We guarantee you have not heard such powerful bass and vocal clarity from a wireless headphone. The boAt Super Bass Rockerz 400 wireless headphones will make your listening experience personal and for real. Plug it in and Plug into Nirvana."
    },

    {
        id: "5",
        cover: img5,
        title: "Trebel Rockerz 550 Wireless Bluetooth Headphones",
        genre: "Headphones",
        price: "1999",
        desc: "Ladies, the time hath come to reach the wall of fame. Make your hustle shine like a diamond with TRebel Rockerz 550 — an audio partner that's made to suit your vibe. Let your hustle never stop with its 20 hours of powerful playback and never settle for less with the sheer audio power of 50mm Dynamic Drivers. Block the voices that don't matter with its physical noise isolation. With a 500mAh battery, TRebel Rockerz 550 will be your cheerleader through thick & thin. There,s no point in waiting — match your mood with the best wireless headphones for women."
    },

    {
        id: "6",
        cover: img6,
        title: "Rockerz 450 Superman DC Edition - Wireless Bluetooth Headphone",
        genre: "Headphones",
        price: "1999",
        desc: "There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins, just like the sun powers the Man of Steel, as you indulge in your playlist with its 40mm dynamic drivers. Be your own hero as you get ready to rule with #DCYOU."
    },

    {
        id: "7",
        cover: img7,
        title: "Stone 1500F | 14W boAt Signature Sound with Passive Bass Radiator",
        genre: "Speakers",
        price: "3999",
        desc: "Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker.It's powered by 14W boAt Signature Sound with Passive Bass Radiator that's built to add spark to all your plans.The RGB LED lights are perfect to set the perfect vibe for a casual chilling session with your best buds.You can take it along everywhere you go with its 360-degree ergonomic design, shoulder strap and IPX7 Water & Splash Resistance that protects it even when outdoors."
    },

    {
        id: "8",
        cover: img8,
        title: "Stone 352 - Wireless Portable Bluetooth Speaker",
        genre: "Speakers",
        price: "1699",
        desc: "Be the life of every party as you carry the ultra-portable Stone 352 with you, wherever you go.Its 10W Stereo boAt Signature Sound will make you vibe with full force as every beat becomes clear.Too bored partying within four walls ? No problem! Shield your good times as the dynamic Stone 352 is equipped with IPX7 Splash & Water Shield— rain or poolside we got you covered! Party from dusk till dawn with its 12H nonstop playtime & double the impact as you connect 2 Stone 352s via the TWS feature.So get your gang & set to groove!"
    },

    {
        id: "9",
        cover: img9,
        title: "Stone 1000v2",
        genre: "Speakers",
        price: "2999",
        desc: "Powerful and Precise. Stone 1000v2 is the premier wireless speaker that provides the best audio in the business.With its 14W stereo sound, get a boogie on and party all night.Stone 1000v2 also comes packed with state - of - the - art specs to keep you engrossed and engaged through it all!."
    },
    {
        id: "10",
        cover: img10,
        title: "boAt Stone 500 - Portable Bluetooth Speaker",
        genre: "Speakers",
        price: "3799",
        desc: "Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together.The dynamic RGB lights will add to the vibe of your party as you get transported to a club setting.Its universal connectivity with multiple connectivity modes —Bluetooth v5.0, AUX, USB and FM mode.With a Type - C charging interface & instant voice assistant, this wireless speaker will make your life easier as you enjoy the sound of your choice.With Stone 500, it is time to #BeTheLimelight.",
    },

    {
        id: "11",
        cover: img11,
        title: "Party Pal 60",
        genre: "Speakers",
        price: "4999",
        desc: "Wherever the party is tonight, make sure you carry the powerful 20W R.M.S Sound of the PartyPal 60 along.It's time to create memories with wireless Bluetooth V5.0 guiding you to the shores of Nirvana. So, get loud and vibing with the integral space boom party inspired design of the boAt PartyPal 60. Customize those EQ's until the bass is almost rude, with up to 4 hours of playtime from the 2200mAh lithium battery.Connect two PartyPal's and get turned with true wireless feature making each moment magical.The system to your sound is here to turn the world around with its karaoke feature that allows you to work on your singing embarrassment free.Tune into any mode you want with FM Radio / TF / USB / AUX that becomes easy to access with the integrated controls and in -built mic.The conditions are favourable to sail when you’re traveling on the boAt PartyPAl 60 bluetooth party speakers.",
    },

    {
        id: "12",
        cover: img12,
        title: "boAt Party Pal 50 - Bluetooth Speaker",
        genre: "Speakers",
        price: "3799",
        desc: "Immerse in the 20W RMS Stereo Sound with the powerful Party Pal 50 bluetooth speaker.Set the vibes of the party just right with the RGB LEDs.Keep worries at bay and party poolside with IPX5 splash resistant! Get, set, grooving as Party Pal 50 comes with a powerful playback of 4.5 Hrs.Access Instant Voice Assistant and enjoy the multiple connectivity modes - USB, AUX, Bluetooth v5.1, and FM. Coming with Type - C interface, Party Pal 50 is all you need to set the mood just about right.So, where all partying at ? ",
    },

    {
        id: "13",
        cover: img13,
        title: "boAt Wave Neo | 1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
        genre: "Watch",
        price: "1799",
        desc: "Introducing a #NeoWay to live smart and stylish - the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen, 550 nits brightness & 2.5D Curved Display - Watch Wave Neo will make your world better & brighter."
    },

    {
        id: "14",
        cover: img14,
        title: "boAt Iris | Round Dial Smart Watch with 1.39 AMOLED Display, Multiple Watch Faces",
        genre: "Watch",
        price: "4499",
        desc: "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. Thrive through your success with all the important notifications on your smartwatch. The timeless look comes with multiple watch faces and strap options to go with all versions of your style. Nail every sport you play with 8 active sports modes tracking your performance. Don't worry about sweat and water, it is IP68. Being healthy is an imperative when your watch has a heart rate monitor, oxygen level monitor, sedentary reminder tracking your health 24x7. Pump up your style!"
    },

    {
        id: "15",
        cover: img15,
        title: "boAt Vertex | Smartwatch with Fitness Trackers, 1.69 HD Display, Sleep Tracking, 100+ Watch Faces",
        genre: "Watch",
        price: "2299",
        desc: "Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker. It's powered by 14W boAt Signature Sound with Passive Bass Radiator that's built to add spark to all your plans. The RGB LED lights are perfect to set the perfect vibe for a casual chilling session with your best buds. You can take it along everywhere you go with its 360-degree ergonomic design, shoulder strap and IPX7 Water & Splash Resistance that protects it even when outdoors."
    },

    {
        id: "16",
        cover: img16,
        title: "TRebel Airdopes 141 | 8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge",
        genre: "Earbuds",
        price: "1499",
        desc: "Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them.Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go - getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers.Ace those business calls with its ENx™ Technology that makes you heard every time.ASAP™ Charge empowers you with 75 minutes of playback with just 5 minutes of charging.IPX4 makes it easier to roll in the good times as you rock that sweat, changing your lifestyle.Connect instantly with its IWP™ Technology & keep everything under control with its Quick Response Touch.",
    },

    {
        id: "17",
        cover: img17,
        title: "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
        genre: "Earbuds",
        price: "1399",
        desc: "Sleek. Comfortable. Stylish. And a splash of amazing acousticpowers.Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound.Keep going on for long like the DC heroes with its 12 hours of capacity.Plug -in be prepared to be awe struck",
    },

    {
        id: "18",
        cover: img18,
        title: "boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™ Technology",
        genre: "Earbuds",
        price: "1499",
        desc: "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours.Never miss a beat with boAt Signature Sound on our all - new boAt Airdopes so that every song that you listen to shines through.Plug -in and live the sound.",
    },

    {
        id: "19",
        cover: img19,
        title: "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
        genre: "Earbuds",
        price: "2499",
        desc: "Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way.It has the IWP(Insta Wake N Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode.The TWS Airdopes 441 come equipped with 6mm drivers for immersive sound. It offers a seamless user experience via its capacitive touch controls.",
    },

    {
        id: "20",
        cover: img20,
        title: "boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
        genre: "Earbuds",
        price: "1999",
        desc: "The time hath come for you, my ladies, to walk with elegance dripping with every step you take.Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality.These are the best women wireless earbuds that come in shades matching your moods! Connect and experience the magic of Nirvana with total 30 hours of playtime and Bluetooth V5.2 that never lets you down.Let yourself loose and free, choosing for your own self, with this immersive audio built just to make you experience the unreal boAt signature sound. Weighing as light as opinions should, TRebel Airdopes 402 with its 450mAh battery charging case will assist you in blocking the outside world for a long time."
    }

]

export default ProductData;
