<template>
    <head>
        <meta charset="utf-8">

        <title>Pinball Tutorials</title>
    </head>
  <body>
        <div id="app" class="u-mainNormal">
            <div class="heading">
                <div class="u-inlineBlock u-marginR u-alignMiddle u-maxWidth40">
                    <svg class="" xmlns="http://www.w3.org/2000/svg">
                        <g id="Component_2_1" data-name="Component 2 – 1" transform="translate(1.497)">
                            <g id="Component_1_1" data-name="Component 1 – 1">
                            <g id="Rectangle_1" data-name="Rectangle 1" transform="translate(0 54)" fill="none" stroke="#707070" stroke-width="4">
                                <rect width="108" height="33" stroke="none"/>
                                <rect x="2" y="2" width="104" height="29" fill="none"/>
                            </g>
                            <line id="Line_1" data-name="Line 1" x1="2" y2="34.22" transform="translate(0.5 85.28)" fill="none" stroke="#707070" stroke-width="4"/>
                            <line id="Line_2" data-name="Line 2" x2="7.24" y2="34.22" transform="translate(101.26 85.28)" fill="none" stroke="#707070" stroke-width="4"/>
                            <g id="Rectangle_2" data-name="Rectangle 2" fill="none" stroke="#707070" stroke-width="4">
                                <rect width="16" height="58" stroke="none"/>
                                <rect x="2" y="2" width="12" height="54" fill="none"/>
                            </g>
                            </g>
                            <text id="tutorials" transform="translate(15 78)" fill="#707070" font-size="20" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">tutorials</tspan></text>
                        </g>
                    </svg>
                </div>
                <h1 class="u-inlineBlock">{{ title }}</h1>
            </div>
            <div class="u-flexSpaceBetween">
                <button type="button" v-on:click="viewStyle = 'list'">List Style</button>
                <button type="button" v-on:click="viewStyle = 'visual'">Visual Style</button>
            </div>
            <div v-if="viewStyle === 'list'">
                <div class="u-flexSpaceBetween u-heading">
                    <div class="u-paddingLsm u-width20">Code</div>
                    <div class="u-paddingLsm u-width40">Name</div>
                    <div class="u-paddingLsm u-width40">Links</div>
                </div>
                <div  class="u-flexSpaceBetween u-paddingBsm" v-for="pintable in pinData" :key="'pintable' + pintable.name">
                    <div class="u-paddingLsm u-width20 u-ellipsis u-colorBgGrey">{{pintable.tag}}</div>
                    <div class="u-paddingLsm u-width40 u-ellipsis u-colorBgGreyLight">{{pintable.name}}</div>
                    <div class="u-paddingLsm u-width40 u-ellipsis u-colorBgGrey">
                        <template v-for="(link, index) in pintable.links" :key="'link' + link.linkhref">
                            <a class="u-marginRsm u-link" :href="link.linkhref">video{{index + 1}}</a><span> </span>
                        </template>
                    </div>
                </div>
            </div>
            <div v-else>
                <div  class="u-flex u-flexWrap" >
                    <div v-for="pintable in pinData" :key="'pintable' + pintable.name">
                        <div v-if="pintable.image" class="tableImage u-relative u-marginL" :style="'background-image: url(http://localhost:8000/assets/images/tables/LPA/' + encodeURI(pintable.image) + ')'">
                            <div class="u-width10 u-inlineBlock"></div>
                            <div class="tableText u-inlineBlock">
                                {{pintable.name}}
                            </div>
                            <div class="u-width10 u-inlineBlock"></div>
                        </div>
                        <div class="u-relative u-marginL u-marginT" v-else>
                            <div class="tableImage noImage u-relative" :style="'background-image: url(http://localhost:8000/assets/images/tables/noimage.jpg)'"></div>
                            <div class="tableText noImage u-inlineBlock u-paddingL u-paddingR">
                                {{pintable.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { } from 'vue-property-decorator';
import { PinTable } from './interfaces/pintable';

export default class Pinball extends Vue {
    title: string = '';
    viewStyle: string = "list";
    pinData: PinTable[] = [
        {
        "tag": "6M$M",
        "name": "The Six Million Dollar Man",
        "links": [{
            "linkhref": "https://youtu.be/W1VMFpTqHSY?t=36"
            }]
        },
        {
        "tag": "8B",
        "name": "Eight Ball",
        "image": "eight ball-bally-760.jpg",
        "links": [{
            "linkhref": "https://youtu.be/-wGicmY0lYk?t=5"
            }]
        },
        {
        "tag": "ACDC",
        "name": "AC/DC",
        "links": [{
            "linkhref": "https://youtu.be/kxkgnSTltVE?t=261"
            },{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=24029"
            },{
            "linkhref": "https://youtu.be/q90L2NTiObo?t=125"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=06:42:00"
            }]
        },
        {
        "tag": "AERO",
        "name": "Aerosmith",
        "links": [{
            "linkhref": "https://youtu.be/oej9gql5OTU?t=559"
            }]
        },
        {
        "tag": "AFM",
        "name": "Attack from Mars",
        "image": "attack from mars-bally-3781.jpg",
        "links": [{
            "linkhref": "https://youtu.be/kpi-sdpJFjc?t=73"
            }]
        },
        {
        "tag": "AVA",
        "name": "Avatar",
        "image": "avatar-stern-5618.jpg",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=15055"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=04:10:55"
            }]
        },
        {
        "tag": "BJ",
        "name": "Black Jack",
        "image": "black jack-bally-309.jpg",
        "links": [{
            "linkhref": "https://youtu.be/__XTvYs1GSE?t=40"
            }]
        },
        {
        "tag": "BKSOR",
        "name": "Black Knight: Sword of Rage",
        "links": [{
            "linkhref": "https://youtu.be/lyPG3357htE?t=396"
            }]
        },
        {
        "tag": "BSD",
        "name": "Bram Stoker's Dracula",
        "image": "bram stokers dracula-williams-3072.jpg",
        "links": [{
            "linkhref": "https://youtu.be/cR5mvi_edM4?t=60"
            }]
        },
        {
        "tag": "BTDK",
        "name": "Batman the dark Knight",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/HOXy2xpY25o?t=43"
            }]
        },
        {
        "tag": "BURO",
        "name": "Buck Rogers",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/lePevjDCOVE?t=12"
            }]
        },
        {
        "tag": "CD",
        "name": "Count-Down",
        "image": "count down-gottlieb-573.jpg",
        "links": [{
            "linkhref": "https://youtu.be/OivgT9NXxbI?t=326"
            }]
        },
        {
        "tag": "CFTBL",
        "name": "Creature from the Black Lagoon",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/USGjjXcjM5w?t=668"
            }]
        },
        {
        "tag": "CON",
        "name": "Congo",
        "image": "congo-bally-3780.jpg",
        "links": [{
            "linkhref": "https://youtu.be/HOxXGvlaMQc?t=721"
            }]
        },
        {
        "tag": "CORV",
        "name": "Corvette",
        "image": "corvette-williams-570.jpg",
        "links": [{
            "linkhref": "https://youtu.be/F-UEWoNhrvM?t=67"
            }]
        },
        {
        "tag": "CV",
        "name": "Cirqus Voltaire",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/JP5Axk3VLic?t=594"
            }]
        },
        {
        "tag": "DH",
        "name": "Dirty Harry",
        "image": "dirty harry-williams-684.jpg",
        "links": [{
            "linkhref": "https://youtu.be/fm0WXpLxMnM?t=64"
            }]
        },
        {
        "tag": "DM",
        "name": "Demolition Man",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/ylSY_jQUjs0?t=5069"
            },{
            "linkhref": "videos\\Part6BPO-X.mp4#t=07:56:35"
            }]
        },
        {
        "tag": "DP",
        "name": "Deadpool",
        "image": "",
        "links": [{
            "linkhref": "videos\\2019SternProCircuit1.mp4#t=01:06:30"
            }]
        },
        {
        "tag": "DP",
        "name": "Dolly Parton",
        "image": "dolly parton-bally-698.jpg",
        "links": [{
            "linkhref": "https://youtu.be/tUE_HaR2rBc?t=6518"
            }]
        },
        {
        "tag": "DRAG",
        "name": "Dragon (Gottleib 1978)",
        "image": "dragon-gottlieb-729.jpg",
        "links": [{
            "linkhref": "https://youtu.be/Fp1k7RcIOkw"
            }]
        },
        {
        "tag": "DW",
        "name": "Doctor Who",
        "image": "doctor who-bally-738.jpg",
        "links": [{
            "linkhref": "https://youtu.be/iawmrs69jrQ?t=60"
            }]
        },
        {
        "tag": "FH",
        "name": "Funhouse",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/yY0GJPinballXco?t=327"
            }]
        },
        {
        "tag": "FLG",
        "name": "Flash Gordon",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/ylSY_jQUjs0?t=25619"
            }]
        },
        {
        "tag": "FRONT",
        "name": "Frontier",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/7nGOwi7qJgM?t=4690"
            }]
        },
        {
        "tag": "FS",
        "name": "The Flintstones",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=28712"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=08:02:40"
            }]
        },
        {
        "tag": "FT",
        "name": "Fish Tales",
        "image": "fish tales-williams-861.jpg",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=26727"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=08:02:40"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=08:25:25"
            }]
        },
        {
        "tag": "GB",
        "name": "Ghostbusters",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=267"
            }]
        },
        {
        "tag": "GEN?",
        "name": "Genesis",
        "image": "",
        "links": [{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=00:03:40"
            },{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=218"
            }]
        },
        {
        "tag": "GOT",
        "name": "Game of Thrones",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=22478"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=06:17:30"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=08:08:50"
            }]
        },
        {
        "tag": "GOTG",
        "name": "Guardians of the Galaxy",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/fk6rAZ0vARo?t=10882"
            }]
        },
        {
        "tag": "HG",
        "name": "Harlem Globetrotters on Tour",
        "image": "harlem globetrotters-bally-1125.jpg",
        "links": [{
            "linkhref": "https://youtu.be/XTqu1NSmQ30?t=595"
            }]
        },
        {
        "tag": "HS2",
        "name": "Getaway: High Speed II",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/y_BgVLzT3I0?t=632"
            }]
        },
        {
        "tag": "I500",
        "name": "Indianapolis 500",
        "image": "indianapolis 500-bally-2853.jpg",
        "links": [{
            "linkhref": "https://youtu.be/0JJ58ZBaBxo?t=96"
            }]
        },
        {
        "tag": "IM",
        "name": "Iron Man",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=10551"
            },{
            "linkhref": "videos\\Part6BPO-X.mp4#t=05:57:20"
            }]
        },
        {
        "tag": "IMDN",
        "name": "Iron Maiden (2018)",
        "image": "iron maiden legacy of the beast-stern-6555.jpg",
        "links": [{
            "linkhref": "https://youtu.be/tUE_HaR2rBc?t=1138"
            },{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=4529"
            },{
            "linkhref": "videos\\IFPA16.mp4#t=06:36:40"
            },{
            "linkhref": "videos\\IFPA16.mp4#t=02:09:30"
            }]
        },
        {
        "tag": "JOP",
        "name": "Joker Poker",
        "image": "joker poker-gottlieb-1306.jpg",
        "links": [{
            "linkhref": "https://youtu.be/Forr0hevMVA?t=6278"
            }]
        },
        {
        "tag": "JP2",
        "name": "Jurassic Park (Stern)",
        "image": "jurassic park-stern-6573.jpg",
        "links": [{
            "linkhref": "https://youtu.be/wsHKv8PFk3s?t=146"
            }]
        },
        {
        "tag": "JQ",
        "name": "Jungle Queen",
        "image": "",
        "links": [{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=06:36:40"
            },{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=02:09:30"
            }]
        },
        {
        "tag": "JY",
        "name": "Junk Yard",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/pe1C9LUxn6k?t=281"
            }]
        },
        {
        "tag": "KISS",
        "name": "Kiss (Bally)",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=24849"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=06:55:10"
            }]
        },
        {
        "tag": "LOTR",
        "name": "The Lord of the Rings",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/zttZPQy1vnk?t=501"
            }]
        },
        {
        "tag": "LW",
        "name": "Lost World",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/xMHuvYiDMxI?t=9"
            }]
        },
        {
        "tag": "MA",
        "name": "Mousin Around!",
        "image": "mousin around-bally-1635.jpg",
        "links": [{
            "linkhref": "https://youtu.be/XPbt_R9FW7E?t=2066"
            }]
        },
        {
        "tag": "MB",
        "name": "Monster Bash",
        "image": "monster bash-chicago-unknown.jpg",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=18104"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=05:06:10"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=07:12:05"
            }]
        },
        {
        "tag": "MET",
        "name": "Metallica",
        "image": "metallica-stern-6028.jpg",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=2924"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=04:19:49"
            },{
            "linkhref": "videos\\Part5BPO-X.mp4#t=07:28:20"
            }]
        },
        {
        "tag": "NF",
        "name": "No Fear",
        "image": "no fear-williams-2852.jpg",
        "links": [{
            "linkhref": "https://youtu.be/ntJPqnz9OGo?t=1080"
            }]
        },
        {
        "tag": "NGG",
        "name": "No Good Gofers",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/kNOWXKKNqRw?t=71"
            }]
        },
        {
        "tag": "PAR",
        "name": "Paragon",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/S75vg7Wtf7w?t=57"
            }]
        },
        {
        "tag": "POWP",
        "name": "Power Play",
        "image": "bobby orr power play-bally-1858.jpg",
        "links": [{
            "linkhref": "https://youtu.be/rkgZsn-WvBE?t=10"
            }]
        },
        {
        "tag": "RAD!",
        "name": "Radical!",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/iqyxn1EH1OA?t=51"
            }]
        },
        {
        "tag": "RS",
        "name": "Road Show",
        "image": "",
        "links": [{
            "linkhref": "videos\\Part5BPO-X.mp4#t=05:15:20"
            },{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=1825"
            }]
        },
        {
        "tag": "SBM",
        "name": "Silverball Mania",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/EGNRddj_ZU0?t=430"
            }]
        },
        {
        "tag": "SHREK",
        "name": "Shrek",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/AJRwpatZR-w?t=1"
            }]
        },
        {
        "tag": "SK8B",
        "name": "Skateball",
        "image": "skateball-bally-2170.jpg",
        "links": [{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=2135"
            },{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=00:35:40"
            },{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=01:47:45"
            },{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=2140"
            }]
        },
        {
        "tag": "SM",
        "name": "Spider-man",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/5mqTABBa3fI?t=5012"
            }]
        },
        {
        "tag": "SNS",
        "name": "Strikes N Spares",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/6Q9mWnumgc8?t=19"
            }]
        },
        {
        "tag": "SOLR",
        "name": "Solar Ride",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/x_CYy_mICZ4?t=226"
            }]
        },
        {
        "tag": "SS",
        "name": "Scared Stiff",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/YOz4RxI-vnQ?t=334"
            }]
        },
        {
        "tag": "ST-B",
        "name": "Star Trek (Stern)",
        "image": "Star trek-stern-6044.jpg",
        "links": [{
            "linkhref": "https://youtu.be/wYZuLK6ShUk?t=118"
            }]
        },
        {
        "tag": "SW",
        "name": "Star Wars",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/fk6rAZ0vARo?t=42274"
            }]
        },
        {
        "tag": "T2",
        "name": "Terminator 2",
        "image": "",
        "links": [{
            "linkhref": "videos\\Part6BPO-X.mp4#t=06:47:52"
            }]
        },
        {
        "tag": "TF",
        "name": "Transformers",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/bFKvbsyt6XI?t=63"
            }]
        },
        {
        "tag": "TNA",
        "name": "Total Nuclear Annihilation",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/s6ZaHk1Fbys?t=57"
            }]
        },
        {
        "tag": "TOM",
        "name": "Theatre of Magic",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/BzLXJMNdoXs?t=69"
            }]
        },
        {
        "tag": "TOTAN",
        "name": "Tales of the Arabian Nights",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/XUnw9ogKkYA?t=252"
            },{
            "linkhref": "videos\\Part6BPO-X.mp4#t=07:30:5"
            }]
        },
        {
        "tag": "TRON",
        "name": "Tron: Legacy",
        "image": "disney tron legacy-stern-5682.jpg",
        "links": [{
            "linkhref": "https://youtu.be/8u1bVbwYy0U?t=21"
            }]
        },
        {
        "tag": "TS",
        "name": "The Shadow",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/fMxSmlqRqtE?t=816"
            }]
        },
        {
        "tag": "TWD",
        "name": "The Walking Dead",
        "image": "the walking dead-stern-6155.jpg",
        "links": [{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=3194"
            },{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=00:54:40"
            }]
        },
        {
        "tag": "TZ",
        "name": "Twilight Zone",
        "image": "",
        "links": [{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=01:41:00"
            },{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=2135"
            }]
        },
        {
        "tag": "WCS",
        "name": "World Cup Soccer",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/ylSY_jQUjs0?t=14725"
            }]
        },
        {
        "tag": "VIK",
        "name": "Viking",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/hDu9g6RrI8g?t=840"
            }]
        },
        {
        "tag": "WM",
        "name": "Wrestlemania",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/hFXAC7A2Etg?t=284"
            }]
        },
        {
        "tag": "WPT",
        "name": "World Poker Tour",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=3987"
            },{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=01:06:30"
            }]
        },
        {
        "tag": "WW",
        "name": "White Water",
        "image": "",
        "links": [{
            "linkhref": "https://youtu.be/Z7YOug3f9a4?t=2"
            }]
        },
        {
        "tag": "XENON",
        "name": "Xenon",
        "image": "xenon-bally-2821.jpg",
        "links": [{
            "linkhref": "https://youtu.be/YKWEpKjZekA?t=9"
            }]
        },
        {
        "tag": "XM",
        "name": "X-Men",
        "image": "xmen-stern-5822.jpg",
        "links": [{
            "linkhref": "https://youtu.be/Y8c43MU7rqs?t=8946"
            },{
            "linkhref": "videos\\PAPA20Finals2017.mp4#t=02:30:00"
            }]
        }
    ]

    mounted(): void {
        this.title = "Pinball Tutorials";
        // this.getData();
    }

    getData(): void {
        console.info('here we will load the data in the future');
    }
}
</script>
