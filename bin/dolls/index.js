//Grab the doll emote server ids from the config file.
const {dollservers} = require("../../config.json");

class DollType {
    constructor(iname,name,flags){
        this.iname   = iname;
        this.name    = name;
        this.flags   = flags;
    }

    createDoll(){

    }

    grabEmote(client){
        return client.emojis.find(emote => emote.name === "doll_"+this.iname && dollservers.includes(emote.guild.id))
    }
}

class Doll {
    constructor(id,type,name,owner,per,friend,orgnl,shiny){
        this.id     = id;
        this.type   = type;
        this.name   = name;
        this.owner  = owner;
        this.per    = per;
        this.friend = friend;
        this.orgnl  = orgnl;
        this.shiny  = shiny;
    }
}

class Area {
    constructor(iname,name,dollTable){
        this.iname      = iname;
        this.name       = name;
        this.dollTable  = dollTable;
    }

    getDoll(){

    }
}

//Doll Types
var doll = {};

//Main Characters
doll.reimu      = new DollType("reimu","Reimu Hakurei",{spr:[0,0]});
doll.marisa     = new DollType("marisa","Marisa Kirisame",{spr:[1,0]});
//Touhou 6
doll.rumia      = new DollType("rumia","Rumia",{spr:[2,0]});
doll.dayousei   = new DollType("dayousei","Dayousei",{spr:[3,0]});
doll.cirno      = new DollType("cirno","Cirno",{spr:[4,0]});
doll.meiling    = new DollType("meiling","Hong Meiling",{spr:[5,0]});
doll.koakuma    = new DollType("koakuma","Koakuma",{spr:[6,0]});
doll.patchouli  = new DollType("patchouli", "Patchouli Knowledge",{spr:[7,0]});
doll.sakuya     = new DollType("sakuya","Sakuya Izayoi",{spr:[8,0]});
doll.remilia    = new DollType("remilia","Remilia Scarlet",{spr:[7,1]});
doll.flandre    = new DollType("flandre","Flandre Scarlet",{spr:[6,2]});
//Touhou 7
doll.letty      = new DollType("letty","Letty Whiterock",{spr:[7,2]});
doll.chen       = new DollType("chen","Chen",{spr:[8,2]});
doll.alice      = new DollType("alice","Alice Margatroid",{spr:[9,2]});
doll.lily       = new DollType("lily","Lily White",{spr:[10,2]});
doll.lunasa     = new DollType("lunasa","Lunasa Prismriver",{spr:[0,3]});
doll.merlin     = new DollType("merlin","Merlin Prismriver",{spr:[1,3]});
doll.lyrica     = new DollType("lyrica","Lyrica Prismriver",{spr:[2,3]});
doll.youmu      = new DollType("youmu","Youmu Konpaku",{spr:[3,3]});
doll.yuyuko     = new DollType("yuyuko","Yuyuko Saigyouji",{spr:[4,3]});
doll.ran        = new DollType("ran","Ran Yakumo",{spr:[5,3]});
doll.yukari     = new DollType("yukari","Yukari Yakumo",{spr:[6,3]});
//Touhou 7.5
doll.suika      = new DollType("suika","Suika Ibuki",{spr:[6,4]});
//Touhou 8
doll.wriggle    = new DollType("wriggle","Wriggle Nightbug",{spr:[7,3]});
doll.mystia     = new DollType("mystia","Mystia Lorelei",{spr:[8,3]});
doll.keine      = new DollType("keine","Keine Kamishirasawa",{spr:[9,3]});
doll.tewi       = new DollType("tewi","Tewi Inaba",{spr:[10,3]});
doll.reisen     = new DollType("reisen","Reisen Udongein Inaba",{spr:[0,4]});
doll.eirin      = new DollType("eirin","Eirin Yagokoro",{spr:[1,4]});
doll.kaguya     = new DollType("kaguya","Kaguya Houraisan",{spr:[2,4]});
doll.mokou      = new DollType("mokou","Fujiwara no Mokou",{spr:[4,4]});
//Touhou 9
doll.aya        = new DollType("aya","Aya Shameimaru",{spr:[9,5]});
doll.medicine   = new DollType("medicine","Medicine Melancholy",{spr:[8,4]});
doll.yuuka      = new DollType("yuuka","Yuuka Kazami",{spr:[9,4]});
doll.komachi    = new DollType("komachi","Komachi Onozuka",{spr:[10,4]});
doll.eiki       = new DollType("eiki","Eiki Shiki",{spr:[0,5]});
//Touhou 10
doll.shizuha    = new DollType("shizuha","Shizuha Aki",{spr:[4,5]});
doll.minoriko   = new DollType("minoriko","Minoriko Aki",{spr:[5,5]});
doll.hina       = new DollType("hina","Hina Kagiyama",{spr:[6,5]});
doll.nitori     = new DollType("nitori","Nitori Kawashiro",{spr:[7,5]});
doll.momiji     = new DollType("momiji","Momiji Inubashiri",{spr:[8,5]});
doll.sanae      = new DollType("sanae","Sanae Kochiya",{spr:[10,5]});
doll.kanako     = new DollType("kanako","Kanako Yasaka",{spr:[0,6]});
doll.suwako     = new DollType("suwako","Suwako Moriya",{spr:[1,6]});
//Touhou 10.5
doll.iku        = new DollType("iku","Iku Nagae",{spr:[2,5]});
doll.tenshi     = new DollType("tenshi","Tenshi Hinanawi",{spr:[3,5]});
//Touhou 11
doll.kisume     = new DollType("kisume","Kisume",{spr:[2,6]});
doll.yamame     = new DollType("yamame","Yamame Kurodani",{spr:[3,6]});
doll.parsee     = new DollType("parsee","Parsee Mizuhashi",{spr:[4,6]});
doll.yuugi      = new DollType("yuugi","Yuugi Hoshiguma",{spr:[5,6]});
doll.satori     = new DollType("satori","Satori Komeiji",{spr:[6,6]});
doll.orin       = new DollType("orin","Rin Kaenbyou",{spr:[7,6]});
doll.okuu       = new DollType("okuu","Utsuho Reiuji",{spr:[8,6]});
doll.koishi     = new DollType("koishi","Koishi Komeiji",{spr:[9,6]});
//Touhou 12
doll.nazrin     = new DollType("nazrin","Nazrin",{spr:[10,9]});
doll.kogasa     = new DollType("kogasa","Kogasa Tatara",{spr:[0,7]});
doll.ichirin    = new DollType("ichirin","Ichirin Kumoi",{spr:[1,7]});
doll.murasa     = new DollType("murasa","Minamitsu Murasa",{spr:[2,7]});
doll.shou       = new DollType("shou","Shou Toramaru",{spr:[3,7]});
doll.byakuren   = new DollType("byakuren","Byakuren Hijiri",{spr:[4,7]});
doll.nue        = new DollType("nue","Nue Houjuu",{spr:[5,7]});
//Touhou 12.5
doll.sunny      = new DollType("sunny","Sunny Milk",{spr:[3,8]});
doll.star       = new DollType("star","Star Sapphire",{spr:[4,8]});
doll.luna       = new DollType("luna","Luna Child",{spr:[5,8]});
//Touhou 12.8
doll.hatate     = new DollType("hatate","Hatate Himekaidou",{spr:[11,2]});
//Touhou 13
doll.kyouko     = new DollType("kyouko","Kyouko Kasodani",{spr:[10,9]});
doll.yoshika    = new DollType("yoshika","Yoshika Miyako",{spr:[0,10]});
doll.seiga      = new DollType("seiga","Seiga Kaku",{spr:[1,10]});
doll.tojiko     = new DollType("tojiko","Soga no Tojiko",{spr:[2,10]});
doll.futo       = new DollType("futo","Mononobe no Futo",{spr:[3,10]});
doll.miko       = new DollType("miko","Toyosatomimi no Miko",{spr:[4,10]});
doll.mamizou    = new DollType("mamizou","Mamizou Futatsuiwa",{spr:[5,10]});
//Touhou 13.5
doll.kokoro     = new DollType("kokoro","Hata no Kokoro",{spr:[9,10]});
//Touhou 14
doll.waka       = new DollType("waka","Wakasagihime",{spr:[10,10]});
doll.seki       = new DollType("seki","Sekibanki",{spr:[11,0]});
doll.kagerou    = new DollType("kagerou","Kagerou Imaizumi",{spr:[11,1]});
doll.benben     = new DollType("benben","Benben Tsukumo",{spr:[11,3]});
doll.yatsu      = new DollType("yatsu","Yatsuhashi Tsukumo",{spr:[11,4]});
doll.seija      = new DollType("seija","Seija Kijin",{spr:[11,5]});
doll.shinmyou   = new DollType("shinmyou","Shinmyoumaru Sukuna",{spr:[11,6]});
doll.raiko      = new DollType("raiko","Raiko Horikawa",{spr:[11,7]});
//Touhou 14.5
doll.sumireko   = new DollType("sumireko","Sumireko Usami",{spr:[9,11]});
//Touhou 15
doll.seiran     = new DollType("seiran","Seiran",{spr:[0,11]});
doll.ringo      = new DollType("ringo","Ringo",{spr:[1,11]});
doll.doremy     = new DollType("doremy","Doremy Sweet",{spr:[2,11]});
doll.sagume     = new DollType("sagume","Sagume Kishin",{spr:[3,11]});
doll.clownpiece = new DollType("clownpiece","Clownpiece",{spr:[4,11]});
doll.junko      = new DollType("junko","Junko",{spr:[5,11]});
doll.hecatia    = new DollType("hecatia","Hecatia Lapislazuli",{spr:[6,11]});
//Touhou 15.5
doll.joon       = new DollType("joon","Joon Yorigami",{spr:[8,12]});
doll.shion      = new DollType("shion","Shion Yorigami",{spr:[9,12]});
//Touhou 16
doll.eternity   = new DollType("eternity","Eternity Larva",{spr:[0,12]});
doll.nemuno     = new DollType("nemuno","Nemuno Sakata",{spr:[1,12]});
doll.aunn       = new DollType("aunn","Aunn Komano",{spr:[2,12]});
doll.narumi     = new DollType("narumi","Narumi Yatadera",{spr:[4,12]});
doll.satono     = new DollType("satono","Satono Nishida",{spr:[5,12]});
doll.mai        = new DollType("mai","Mai Teiredia",{spr:[6,12]});
doll.okina      = new DollType("okina","Okina Matara",{spr:[7,12]});
//Touhou 17
doll.eika       = new DollType("eika","Eika Ebisu",{spr:[3,13]});
doll.urumi      = new DollType("urumi","Urumi Ushizaki",{spr:[7,15]});
doll.kutaka     = new DollType("kutaka","Kutaka Niwatari",{spr:[2,14]});
doll.yachie     = new DollType("yachie","Yachie Kicchou",{spr:[10,15]});
doll.mayumi     = new DollType("mayumi","Mayumi Joutouguu",{spr:[6,14]});
doll.keiki      = new DollType("keiki","Keiki Haniyasushin",{spr:[1,14]});
doll.saki       = new DollType("saki","Saki Kurokoma",{spr:[10,15]});
//Manga Characters
doll.rinnosuke  = new DollType("rinnosuke","Rinnosuke Morichika",{spr:[1,8]});
doll.tokiko     = new DollType("tokiko","Tokiko",{spr:[2,8]});
doll.toyohime   = new DollType("toyohime","Watatsuki no Toyohime",{spr:[10,7]});
doll.yorihime   = new DollType("yorihime","Watatsuki no Yorihime",{spr:[0,8]});
doll.kasen      = new DollType("kasen","Kasen Ibaraki",{spr:[7,10]});
doll.kosuzu     = new DollType("kosuzu","Kosuzu Motoori",{spr:[8,10]});
//doll.miyoi      = new DollType("miyoi","Miyoi Okunoda",{}); //No Sprite

//Areas
var area = {};

area.hakurei    = new Area("hakurei","Hakurei Shrine",[
    {doll:doll.reimu,prob:80},
    {doll:doll.marisa,prob:70}
]);

module.exports = {doll,area};

//Utility Functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
