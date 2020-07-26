//Import the BunCommand class.
const {BunCommand} = require("../command.js");

class DollType {
    constructor(iname,name,baseper){
        this.iname   = iname;
        this.name    = name;
        this.baseper = baseper;
    }

    createDoll(){

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
    constructor(iname,name,flags){
        this.iname  = iname;
        this.name   = name;
        this.flags  = flags;
    }

    getDoll(){

    }
}

const dollcmd = new BunCommand("doll",{
    alias:["d"],
    func:{
        default:{
            run:function(msg){

            }
        }
    }
});

module.exports = {doll};

//Doll Types
var doll = {};

//Main Characters
doll.reimu      = new DollType("reimu","Reimu Hakurei",{});
doll.marisa     = new DollType("marisa","Marisa Kirisame",{});
//Touhou 6
doll.rumia      = new DollType("rumia","Rumia",{});
doll.dayousei   = new DollType("dayousei","Dayousei",{});
doll.cirno      = new DollType("cirno","Cirno",{});
doll.meiling    = new DollType("meiling","Hong Meiling",{});
doll.koakuma    = new DollType("koakuma","Koakuma",{});
doll.patchouli  = new DollType("patchouli", "Patchouli Knowledge",{});
doll.sakuya     = new DollType("sakuya","Sakuya Izayoi",{});
doll.remilia    = new DollType("remilia","Remilia Scarlet",{});
doll.flandre    = new DollType("flandre","Flandre Scarlet",{});
//Touhou 7
doll.letty      = new DollType("letty","Letty Whiterock",{});
doll.chen       = new DollType("chen","Chen",{});
doll.alice      = new DollType("alice","Alice Margatroid",{});
doll.lily       = new DollType("lily","Lily White",{});
doll.lunasa     = new DollType("lunasa","Lunasa Prismriver",{});
doll.merlin     = new DollType("merlin","Merlin Prismriver",{});
doll.lyrica     = new DollType("lyrica","Lyrica Prismriver",{});
doll.youmu      = new DollType("youmu","Youmu Konpaku",{});
doll.yuyuko     = new DollType("yuyuko","Yuyuko Saigyouji",{});
doll.ran        = new DollType("ran","Ran Yakumo",{});
doll.yukari     = new DollType("yukari","Yukari Yakumo",{});
//Touhou 7.5
doll.suika      = new DollType("suika","Suika Ibuki",{});
//Touhou 8
doll.wriggle    = new DollType("wriggle","Wriggle Nightbug",{});
doll.mystia     = new DollType("mystia","Mystia Lorelei",{});
doll.keine      = new DollType("keine","Keine Kamishirasawa",{});
doll.tewi       = new DollType("tewi","Tewi Inaba",{});
doll.reisen     = new DollType("reisen","Reisen Udongein Inaba",{});
doll.eirin      = new DollType("eirin","Eirin Yagokoro",{});
doll.kaguya     = new DollType("kaguya","Kaguya Houraisan",{});
doll.mokou      = new DollType("mokou","Fujiwara no Mokou",{});
//Touhou 9
doll.medicine   = new DollType("medicine","Medicine Melancholy",{});
doll.yuuka      = new DollType("yuuka","Yuuka Kazami",{});
doll.komachi    = new DollType("komachi","Komachi Onozuka",{});
doll.eiki       = new DollType("eiki","Eiki Shiki",{});
//Touhou 10
doll.shizuha    = new DollType("shizuha","Shizuha Aki",{});
doll.minoriko   = new DollType("minoriko","Minoriko Aki",{});
doll.hina       = new DollType("hina","Hina Kagiyama",{});
doll.nitori     = new DollType("nitori","Nitori Kawashiro",{});
doll.momiji     = new DollType("momiji","Momiji Inubashiri",{});
doll.aya        = new DollType("aya","Aya Shameimaru",{});
doll.sanae      = new DollType("sanae","Sanae Kochiya",{});
doll.kanako     = new DollType("kanako","Kanako Yasaka",{});
doll.suwako     = new DollType("suwako","Suwako Moriya",{});
//Touhou 10.5
doll.iku        = new DollType("iku","Iku Nagae",{});
doll.tenshi     = new DollType("tenshi","Tenshi Hinanawi",{});
//Touhou 11
doll.kisume     = new DollType("kisume","Kisume",{});
doll.yamame     = new DollType("yamame","Yamame Kurodani",{});
doll.parsee     = new DollType("parsee","Parsee Mizuhashi",{});
doll.yuugi      = new DollType("yuugi","Yuugi Hoshiguma",{});
doll.satori     = new DollType("satori","Satori Komeiji",{});
doll.orin       = new DollType("orin","Rin Kaenbyou",{});
doll.okuu       = new DollType("okuu","Utsuho Reiuji",{});
doll.koishi     = new DollType("koishi","Koishi Komeiji",{});
//Touhou 12
doll.nazrin     = new DollType("nazrin","Nazrin",{});
doll.kogasa     = new DollType("kogasa","Kogasa Tatara",{});
doll.ichirin    = new DollType("ichirin","Ichirin Kumoi",{});
doll.murasa     = new DollType("murasa","Minamitsu Murasa",{});
doll.shou       = new DollType("shou","Shou Toramaru",{});
doll.byakuren   = new DollType("byakuren","Byakuren Hijiri",{});
doll.nue        = new DollType("nue","Nue Houjuu",{});
//Touhou 12.5
doll.sunny      = new DollType("sunny","Sunny Milk",{});
doll.star       = new DollType("star","Star Sapphire",{});
doll.luna       = new DollType("luna","Luna Child",{});
//Touhou 12.8
doll.hatate     = new DollType("hatate","Hatate Himekaidou",{});
//Touhou 13
doll.kyouko     = new DollType("kyouko","Kyouko Kasodani",{});
doll.yoshika    = new DollType("yoshika","Yoshika Miyako",{});
doll.seiga      = new DollType("seiga","Seiga Kaku",{});
doll.tojiko     = new DollType("tojiko","Soga no Tojiko",{});
doll.futo       = new DollType("futo","Mononobe no Futo",{});
doll.miko       = new DollType("miko","Toyosatomimi no Miko",{});
doll.mamizou    = new DollType("mamizou","Mamizou Futatsuiwa",{});
//Touhou 13.5
doll.kokoro     = new DollType("kokoro","Hata no Kokoro",{});
//Touhou 14
doll.waka       = new DollType("waka","Wakasagihime",{});
doll.seki       = new DollType("seki","Sekibanki",{});
doll.kagerou    = new DollType("kagerou","Kagerou Imaizumi",{});
doll.benben     = new DollType("benben","Benben Tsukumo",{});
doll.yatsu      = new DollType("yatsu","Yatsuhashi Tsukumo",{});
doll.seija      = new DollType("seija","Seija Kijin",{});
doll.shinmyou   = new DollType("shinmyou","Shinmyoumaru Sukuna",{});
doll.raiko      = new DollType("raiko","Raiko Horikawa",{});
//Touhou 14.5
doll.sumireko   = new DollType("sumireko","Sumireko Usami",{});
//Touhou 15
doll.seiran     = new DollType("seiran","Seiran",{});
doll.ringo      = new DollType("ringo","Ringo",{});
doll.doremy     = new DollType("doremy","Doremy Sweet",{});
doll.sagume     = new DollType("sagume","Sagume Kishin",{});
doll.clownpiece = new DollType("clownpiece","Clownpiece",{});
doll.junko      = new DollType("junko","Junko",{});
doll.hecatia    = new DollType("hecatia","Hecatia Lapislazuli",{});
//Touhou 15.5
doll.joon       = new DollType("joon","Joon Yorigami",{});
doll.shion      = new DollType("shion","Shion Yorigami",{});
//Touhou 16
doll.eternity   = new DollType("eternity","Eternity Larva",{});
doll.nemuno     = new DollType("nemuno","Nemuno Sakata",{});
doll.aunn       = new DollType("aunn","Aunn Komano",{});
doll.narumi     = new DollType("narumi","Narumi Yatadera",{});
doll.satono     = new DollType("satono","Satono Nishida",{});
doll.mai        = new DollType("mai","Mai Teiredia",{});
doll.okina      = new DollType("okina","Okina Matara",{});
//Touhou 17
doll.eika       = new DollType("eika","Eika Ebisu",{});
doll.urumi      = new DollType("urumi","Urumi Ushizaki",{});
doll.kutaka     = new DollType("kutaka","Kutaka Niwatari",{});
doll.yachie     = new DollType("yachie","Yachie Kicchou",{});
doll.mayumi     = new DollType("mayumi","Mayumi Joutouguu",{});
doll.keiki      = new DollType("keiki","Keiki Haniyasushin",{});
doll.saki       = new DollType("saki","Saki Kurokoma",{});
//Manga Characters
doll.rinnosuke  = new DollType("rinnosuke","Rinnosuke Morichika",{});
doll.tokiko     = new DollType("tokiko","Tokiko",{});
doll.toyohime   = new DollType("toyohime","Watatsuki no Toyohime",{});
doll.yorihime   = new DollType("yorihime","Watatsuki no Yorihime",{});
doll.kasen      = new DollType("kasen","Kasen Ibaraki",{});
doll.kosuzu     = new DollType("kosuzu","Kosuzu Motoori",{});
doll.miyoi      = new DollType("miyoi","Miyoi Okunoda",{});

//Areas
var area = {};

area.hakurei    = new Area("hakurei","Hakurei Shrine",[
    {doll:doll.reimu,prob:80},
    {doll:doll.marisa,prob:70}
]);
