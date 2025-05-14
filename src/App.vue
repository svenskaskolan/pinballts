<template>
    <div class="u-mainHeading u-marginT u-marginB">
        <div class="u-flexSpaceBetween">
            <img src="/images/pageparts/speaker.png" width="100"/>
            <dmd :rows="dmdSettings.rows" :columns="dmdSettings.columns" :displayString = "dmdSettings.displayString"/>       
            <img src="/images/pageparts/speaker.png" width="100"/>
        </div>
    </div>
    <div class="u-mainNormal">
        <div class="u-flexSpaceBetween">
            <button type="button" v-on:click="viewStyle = 'list'">List Style</button>
            <div>{{title}}</div>
            <button type="button" v-on:click="viewStyle = 'visual'">Visual Style</button>
        </div>
        <div class="u-mainContent list" v-if="viewStyle === 'list'">
            <div class="u-flexSpaceBetween u-heading">
                <div class="u-paddingLsm u-width20">Code</div>
                <div class="u-paddingLsm u-width40">Name</div>
                <div class="u-paddingLsm u-width40">Links</div>
            </div>
            <div  class="u-flexSpaceBetween u-paddingBsm" v-for="pintable in pinData" :key="'pintable' + pintable.name">
                <div class="u-paddingLsm u-width20 u-ellipsis u-colorBgGrey">{{pintable.tag}}</div>
                <div class="u-paddingLsm u-width40 u-ellipsis u-colorBgGreyLight">{{pintable.name}}</div>
                <div class="u-paddingLsm u-width40 u-ellipsis u-colorBgGrey">
                    <template v-for="(links, index) in pintable.links" :key="'link' + links.linkhref">
                        <a class="u-marginRsm u-link" :href="links.linkhref">video{{index + 1}}</a><span> </span>
                    </template>
                </div>
            </div>
        </div>
        <div v-else class="u-mainContent icons">
            <div class="u-flexSpaceAround u-flexWrap" >
                <div class="u-marginLsm u-marginRsm" v-for="pintable in pinData" :key="'pintable' + pintable.name">
                    <div v-if="pintable.image" v-on:mouseover="hoverName = pintable.name" class="u-relative" >
                        <div  class="tableImage" :class="{'imageHover': pintable.name === hoverName}"  :style="'background-image: url(images/tables/LPA/JPEG/' + encodeURI(pintable.image) + ')'">
                        </div>
                        <div v-if="pintable.name != hoverName" class="tableText">
                            {{pintable.name}}
                        </div>
                        <div v-if="pintable.name === hoverName" class="tableText noImage">
                            <a v-for="(links, index) in pintable.links" :href="links.linkhref" :key="'links' + links.linkhref" class="u-block">
                                video{{index + 1}}
                            </a>
                        </div>
                    </div>
                    <div v-else class="u-relative" v-on:mouseover="hoverName = pintable.name">
                        <div  class="tableImage noImage" :style="'background-image: url(images/tables/noimage.jpg)'"></div>
                        <div  v-if="pintable.name != hoverName" class="tableText noImage">
                            {{pintable.name}}
                        </div>
                        <div v-if="pintable.name === hoverName">
                            <a v-for="(links, index) in pintable.links" :href="links.linkhref" :key="'links' + links.linkhref" class="tableText noImage u-block">
                                video{{index + 1}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {ref, reactive, defineComponent} from "vue";
import { PinTable } from './interfaces/pintable';
import dmd from './components/dmd.vue';

export default defineComponent ({
    name: 'app',
    components: {
        dmd
    },
    setup() {
        // use ref to make a primitive values reactive, or reactive to make an object reactive.
        // See the video here..   https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/
        const title = 'Pinball Tutorials';
        const viewStyle = ref('list');
        const hoverName = ref('');
        const dmdSettings = reactive({
            rows: 9,
            columns: 100,
            displayString: "Welcome to Pinball Tutorials",
            flowFrom: "right",
            flowStop: "loop"
        })
        const pinData: PinTable[] = [
            {
            "tag": "8B",
            "name": "Eight Ball",
            "image": "eight ball-bally-760.jpg",
            "links": [{
                "linkhref": "https://youtu.be/-wGicmY0lYk?t=5"
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
            "tag": "BSD",
            "name": "Bram Stoker's Dracula",
            "image": "bram stokers dracula-williams-3072.jpg",
            "links": [{
                "linkhref": "https://youtu.be/cR5mvi_edM4?t=60"
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
            "tag": "ST",
            "name": "Stranger Things",
            "image": "",
            "links": [{
                "linkhref": "https://youtu.be/fm0WXpLxMnM?t=64"
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
            "image": "the getaway high speed2-williams-1000.jpg",
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
            "tag": "JM",
            "name": "Johnny Mnemonic",
            "image": "johnny mnemonic-williams-3683.jpg",
            "links": []
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
            "tag": "POWP",
            "name": "Power Play",
            "image": "bobby orr power play-bally-1858.jpg",
            "links": [{
                "linkhref": "https://youtu.be/rkgZsn-WvBE?t=10"
                }]
            },
            {
            "tag": "PP",
            "name": "Pinball Pool",
            "image": "pinball pool-gottlieb-1795.jpg",
            "links": []
            },
            {
            "tag": "PZ",
            "name": "Party Zone",
            "image": "party zone-bally-1764.jpg",
            "links": []
            },
            {
            "tag": "RS",
            "name": "Road Show",
            "image": "red and teds roadshow-williams-1972.jpg",
            "links": [{
                "linkhref": "videos\\Part5BPO-X.mp4#t=05:15:20"
                },{
                "linkhref": "https://youtu.be/XUnw9ogKkYA?t=1825"
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
            "image": "the amazing spiderman-gottlieb-2285.jpg",
            "links": [{
                "linkhref": "https://youtu.be/5mqTABBa3fI?t=5012"
                }]
            },
            {
            "tag": "SB",
            "name": "Sinbad",
            "image": "sinbad-gottlieb-2159.jpg",
            "links": []
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
            "tag": "TOM",
            "name": "Theatre of Magic",
            "image": "the theatre of magic-bally-2845.jpg",
            "links": [{
                "linkhref": "https://youtu.be/BzLXJMNdoXs?t=69"
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
            "tag": "WCS",
            "name": "World Cup Soccer",
            "image": "world cup soccer-williams-2811.jpg",
            "links": [{
                "linkhref": "https://youtu.be/ylSY_jQUjs0?t=14725"
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
        return {
            title,
            viewStyle,
            hoverName,
            pinData,
            dmdSettings
        }
    }
});
</script>
