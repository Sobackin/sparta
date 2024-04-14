const bibles = [
    {
        BibleVerse: "나의 도움은 천지를 지으신 여호와에게서로다",
        verse: "시편 121:2",
    },
    {
        BibleVerse: "여호와께서 너를 축복하시고 지키시기 원하노라",
        verse: "민수기 6:24",
    },
    {
        BibleVerse: "항상 기뻐하십시오",
        verse: "데살로니가전서 5:16",
    },
    {
        BibleVerse: "아무것도 염려하지 말고 모든 일에 기도와 간구로 여러분이 필요로 하는 것을 감사하는 마음으로 하나님께 말씀드리십시오",
        verse: "빌립보서 4:6",
    },
    {
        BibleVerse: "바짝 정신을 차리고 철저하게 경계하십시오. 여러분의 원수인 마귀가 울부짖는 사자처럼 삼킬 자를 찾아 돌아다니고 있습니다",
        verse: "베드로전서 5:8",
    },
    {
        BibleVerse: "나는 부활이며 생명이다. 나를 믿는 사람은 죽어도 살 것이며",
        verse: "요한복음 11:25",
    },
    {
        BibleVerse: "나에게 능력 주시는 분 안에서 나는 모든 것을 할 수 있습니다",
        verse: "빌립보서 4:13",
    },
    {
        BibleVerse: "이제 내가 새로운 계명을 너희에게 준다. 서로 사랑하여라. 내가 너희를 사랑한 것처럼 너희도 서로 사랑하여라",
        verse: "요한복음 13:34",
    },
    {
        BibleVerse: "내가 선한 싸움을 싸우고 모든 일을 다 마치고 믿음을 지켰으니",
        verse: "디모데후서 4:7",
    },
    {
        BibleVerse: "너희가 내 안에서 평안을 얻게 하려고 내가 너희에게 이 말을 하였다. 이 세상에서는 너희가 고난을 당하기 마련이다. 그러나 용기를 내어라. 내가 세상을 이겼다",
        verse: "요한복음 16:33",
    },
];

const bible = document.querySelector("#bible span:first-child");
const ver = document.querySelector("#bible span:last-child");

const todayBible= bibles[Math.floor(Math.random() * bibles.length)];

bible.innerText = todayBible.BibleVerse;
ver.innerText = todayBible.verse;