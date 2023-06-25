(function() {
  const loungeID = `Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~CosmicDrifter~lounge.js`;
  const promenadeID = `Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~promenade~west.js`;
  registerRoom({

    id: promenadeID,
    name: 'Credo downport Terminal 3, west promenade',
    desc: `It's a promenade in a typical Imperial starport. The promenade connects to the CosmicDrifter.`,
    exits: [
      {
        dir: 'cosmicdrifter',
        id: loungeID,
      },
    ],
  });
})();
