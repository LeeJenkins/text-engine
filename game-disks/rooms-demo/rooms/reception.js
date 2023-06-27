
registerRoom({
  id: 'reception',
  name: 'Reception Desk',
  desc: `**BENJI** is here. I'm sure he'd be happy to tell you more about the features available in **text-engine**.

  *You can speak with characters using the **TALK** command.*

  To the **EAST** is a closed **DOOR**.

  To the **SOUTH** is the foyer where you started your adventure.

  Next to the **DESK** are **STAIRS** leading **UP**.`,
  items: [
    {
      name: 'desk',
    },
    {
      name: 'door',
      desc: `There are 4" metal letters nailed to the door. They spell out: "RESEARCH LAB".`,
      onUse() {
        const reception = getRoom('reception');
        const exit = getExit('east', reception.exits);
        if (exit.block) {
          println(`It's locked.`);
        } else {
          goDir('east');
        }
      },
    },
    {
      name: 'gate',
      desc: `The guilded gate is blocking the way to the **STAIRS**.`,
    },
    {
      name: ['stairs', 'staircase'],
      desc: `They lead up to a door. If you squint, you can make out the word "ADVANCED" on the door.`,
      onUse: () => println(`Try typing GO UPSTAIRS (once you've unlocked the gate).`),
    },
  ],
  exits: [
    // exits with a BLOCK cannot be used, but print a message instead
    {dir: 'east', id: 'lab', block: `The door is locked.`},
    {dir: ['upstairs', 'up'], id: 'advanced', block: `There's a locked GATE blocking your path.`},
    {dir: 'south', id: 'foyer'},
  ],
})