
(function() {
  const loungeID = `Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~CosmicDrifter~lounge.js`;
  const promenadeID = `Regina/Regina/Regina/Noncredo/CredoDown/Terminal3~promenade~west.js`;
  registerRoom({
    id: loungeID,
    name: 'Cosmic Drifter lounge',
    desc: `The black decor is illuminated dimly by pinpoints of light moving in unison slowly across the ceiling.\n`+
          `\n`+
          `There's an EXIT to the PROMENADE. Type ITEMS to see a list of items in the room.`,
    items: [
      {
        name: ['exit', 'entrance'],
        desc: 'It leads to the terminal PROMENADE.',
        onUse: () => println(`Type GO PROMENADE to try the door.`),
      },
      {
        name: ['buttons', 'button'],
        desc: `They are on the wall next to the EXIT. You could probably USE it to unlock the door.`,
        isTakeable: false,
        onUse() {
          // lock/unlock the room's only exit.
          const room = getRoom(loungeID);
          const exit = getExit('promenade', room.exits);

          if (exit.block) {
            delete exit.block;
            println(`You press the buttons, unlocking the EXIT door.`);
            getItem('buttons').desc = `You USED it to unlock the EXIT door.`;
          } else {
            println(`You press the buttons, locking the EXIT door.`);
            getItem('buttons').desc = `They are on the wall next to the EXIT. You could probably USE it to unlock the door.`;
            exit.block = `The DOOR leading to the PROMENADE is sealed shut.`;
          }
        },
      }
    ],
    exits: [
      {
          dir: 'promenade',
          id: promenadeID,
          block: `The DOOR leading to the PROMENADE is sealed shut.`,
      },
    ]
  });
})();
