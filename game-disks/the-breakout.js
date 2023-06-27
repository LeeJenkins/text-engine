// This adventure is converted from The Breakout, an Amber Zone by Alegis Downport from April 21, 2021
// menu.title=The Breakout
// menu.desc=An archeologist seeks your help in exploring myterious ruins deep in the jungle.
const diskMain = () => ({
  setting: 'ThirdImperium1105',
  roomId: 'Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~CosmicDrifter~lounge',
  rooms: [
    'Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~CosmicDrifter~lounge',
    'Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~promenade~west',
  ],
  characters: [
    {
      name: "Newton Alder",
      roomId: `Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~CosmicDrifter~lounge`, // "~",
      desc: "Newton Alder is a nervous-looking, nicely dressed gentleman, with short, wavy hair and goatee stubble.",
      topics: [
        'object',
        'ruins',
        'institute',
        'story'
      ],
      dossier:`
      Newton Alder who works for the Regina Institute of Archeology. Following a recent expedition to the jungles, he discovered some ruins which appeared to be a several thousand years old. Unfortunately, poor weather precluded any further exploration, and the expedition was abandoned and due to political infighting at the institute, Alder can’t get any further funding.

      However, just before he had to leave the site, he managed to extract an object that looks like something that is not of this world, which he furtively shows the player(s). The box-like object is made of a metal that has so far, defied analysis. He believes that the ruins are of alien origin; therefore, it is imperative that he gets back to the site. It is so important to him he is willing to pay for the expedition himself out of his own money – if the player(s) would be interested in joining in.
      
      The player(s) would be expected to transport the archeologist and his assistant (Galen Cantor) plus some equipment to the site in the jungle on the uninhabited side of the planet, along with escort duties in case of any animal or unexpected encounters. He can pay Cr. 50,000 and Cr. 2,000 towards any equipment expenses that the player(s) may have ahead of the expedition.

      The site is located on Ishmir, a large continent on the other side of Regina. The region is covered by dense jungle or forests, creating a steamy, humid atmosphere. Due to this, opportunities to land the player's ship are limited and they’ll have to park around 10 km from the ruins at a clearing and travel the rest on foot. The trees are massive and don’t let much light in to the ground, due to the high foliage. Once they have secured their ship, the players will have to carry their equipment necessary to establish a forward operating base at the ruins, on foot.

      The journey will be difficult for the players in that they will only be able to move as half normal walking speed, due to the dense undergrowth and humid atmosphere making strenuous activity tiring. It will take a full day to reach the site. Encounters with wild animals are possible.

      The site of the ruins is a small hill, covered in undergrowth. What made this distinctive to Alder (hence the site discovery) was three small prominences that are exactly 60 degrees in angle to each other, forming a perfect triangle. At the base of the one side of the hill is an entrance; Alder said this is where he found the alien object before the weather turned and the site was abandoned.
      `
    }
  ],
  events: [
    {
      trigger: {

      }
    }
  ]
});
