/*
  COMPLETE DRIVER + MAP DATABASE — VIGILANTE 8 FIRST OFFENSE + VIGILANTE 8 SECOND OFFENSE
  Exact roster order requested by the project owner.
  Biographies, vehicles and special weapons are preserved from the researched V16 database.
*/

const drivers = [
  {
    "name": "CHASSEY BLUE",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "'67 RATTLER",
    "specialWeapon": "GRIDLOCK",
    "tagline": "An FBI investigator who turns precision and control into a nine-shot roadblock.",
    "description": "An FBI agent assigned to investigate gun-running and violent corporate warfare across the Southwest. Her case draws her into Convoy’s Vigilantes and directly into the war against OMAR and the Coyotes.",
    "accent": "#1d69c7",
    "accent2": "#55d7ff",
    "accent3": "#173270",
    "image": "assets/drivers/large/01-v8-chassey-blue.webp",
    "avatar": "assets/drivers/thumbs/01-v8-chassey-blue.webp",
    "backgroundImage": "assets/drivers/large/01-v8-chassey-blue.webp",
    "skills": [
      {
        "title": "GRIDLOCK",
        "text": "Fires nine energy charges in a 3×3 formation. The grid detonates on contact and is designed to block lanes, punish predictable movement and disrupt enemy vehicles.",
        "icon": "assets/drivers/weapons/01-v8-chassey-blue.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "An FBI agent assigned to investigate gun-running and violent corporate warfare across the Southwest.",
        "icon": "assets/drivers/thumbs/01-v8-chassey-blue.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/01-v8-chassey-blue-a.webp"
    ]
  },
  {
    "name": "SLICK CLYDE",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "'70 CLYDESDALE",
    "specialWeapon": "WHITE LIGHTNING",
    "tagline": "A mysterious playboy with a polished car and a dangerous electrical strike.",
    "description": "A smooth-talking, self-interested playboy whom John Torque pressures into joining the Vigilantes. Clyde’s charm hides ambitions that reach far beyond the current road war.",
    "accent": "#319bd5",
    "accent2": "#8feaff",
    "accent3": "#31558e",
    "image": "assets/drivers/large/02-v8-slick-clyde.webp",
    "avatar": "assets/drivers/thumbs/02-v8-slick-clyde.webp",
    "backgroundImage": "assets/drivers/large/02-v8-slick-clyde.webp",
    "skills": [
      {
        "title": "WHITE LIGHTNING",
        "text": "Calls down concentrated lightning on the selected vehicle. The electrical attack deals damage and briefly interferes with movement and weapon systems.",
        "icon": "assets/drivers/weapons/02-v8-slick-clyde.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A smooth-talking, self-interested playboy whom John Torque pressures into joining the Vigilantes.",
        "icon": "assets/drivers/thumbs/02-v8-slick-clyde.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/02-v8-slick-clyde-a.webp"
    ]
  },
  {
    "name": "SHEILA",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "'74 STRIDER",
    "specialWeapon": "TANTRUM GUN",
    "tagline": "Convoy’s rebellious niece refuses to stay out of the fight.",
    "description": "Convoy’s determined and rebellious niece. She joins the Vigilantes despite her uncle’s objections and proves that the lightweight Strider can be just as dangerous as the largest trucks.",
    "accent": "#ef7d1c",
    "accent2": "#ffd451",
    "accent3": "#9b3c25",
    "image": "assets/drivers/large/03-v8-sheila.webp",
    "avatar": "assets/drivers/thumbs/03-v8-sheila.webp",
    "backgroundImage": "assets/drivers/large/03-v8-sheila.webp",
    "skills": [
      {
        "title": "TANTRUM GUN",
        "text": "Deploys an aggressive auto-tracking Gatling gun. Its rapid fire keeps pressure on the target and can knock loose weapons and power-ups.",
        "icon": "assets/drivers/weapons/03-v8-sheila.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Convoy’s determined and rebellious niece.",
        "icon": "assets/drivers/thumbs/03-v8-sheila.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/03-v8-sheila-a.webp"
    ]
  },
  {
    "name": "JOHN TORQUE",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "'69 JEFFERSON",
    "specialWeapon": "BASS QUAKE",
    "tagline": "Convoy’s right-hand man brings Las Vegas style and earth-shaking bass.",
    "description": "A confident Las Vegas high-roller, experienced fighter and Convoy’s trusted right-hand man. Torque joins the Vigilantes with a taste for expensive cars, big risks and even bigger payoffs.",
    "accent": "#6bc7e9",
    "accent2": "#effbff",
    "accent3": "#426f9c",
    "image": "assets/drivers/large/04-v8-john-torque.webp",
    "avatar": "assets/drivers/thumbs/04-v8-john-torque.webp",
    "backgroundImage": "assets/drivers/large/04-v8-john-torque.webp",
    "skills": [
      {
        "title": "BASS QUAKE",
        "text": "Activates high-powered speakers that release an expanding seismic sound wave. The blast damages nearby enemies and throws them away from the Jefferson.",
        "icon": "assets/drivers/weapons/04-v8-john-torque.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A confident Las Vegas high-roller, experienced fighter and Convoy’s trusted right-hand man.",
        "icon": "assets/drivers/thumbs/04-v8-john-torque.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/04-v8-john-torque-a.webp"
    ]
  },
  {
    "name": "DAVE",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "'70 VAN",
    "specialWeapon": "INVASION",
    "tagline": "An alien-obsessed hippie whose homemade technology calls for help from above.",
    "description": "A free-spirited UFO believer who somehow becomes part of the Vigilantes’ fight. His obsession with extraterrestrials becomes surprisingly useful when the roads turn into a war zone.",
    "accent": "#c9322f",
    "accent2": "#ff6544",
    "accent3": "#701d36",
    "image": "assets/drivers/large/05-v8-dave.webp",
    "avatar": "assets/drivers/thumbs/05-v8-dave.webp",
    "backgroundImage": "assets/drivers/large/05-v8-dave.webp",
    "skills": [
      {
        "title": "INVASION",
        "text": "Uses the van’s dish to summon a formation of small UFOs. The craft descend on the selected enemy and attack from above, even across long distances.",
        "icon": "assets/drivers/weapons/05-v8-dave.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A free-spirited UFO believer who somehow becomes part of the Vigilantes’ fight.",
        "icon": "assets/drivers/thumbs/05-v8-dave.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/05-v8-dave-a.webp"
    ]
  },
  {
    "name": "CONVOY",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "'72 MOTH TRUCK",
    "specialWeapon": "STEEL BELTER",
    "tagline": "The rugged trucker who founded the Vigilantes and leads from the front.",
    "description": "A good-hearted long-haul trucker with the manners of an old cowboy. When Sid Burn’s Coyotes begin destroying the Southwest for OMAR, Convoy forms the Vigilantes to stop them.",
    "accent": "#d8a91b",
    "accent2": "#ffe35c",
    "accent3": "#80522d",
    "image": "assets/drivers/large/06-v8-convoy.webp",
    "avatar": "assets/drivers/thumbs/06-v8-convoy.webp",
    "backgroundImage": "assets/drivers/large/06-v8-convoy.webp",
    "skills": [
      {
        "title": "STEEL BELTER",
        "text": "Launches an explosive steel-belted tire. It rolls across the battlefield, tracks its selected target and delivers a heavy impact with powerful knockback.",
        "icon": "assets/drivers/weapons/06-v8-convoy.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A good-hearted long-haul trucker with the manners of an old cowboy.",
        "icon": "assets/drivers/thumbs/06-v8-convoy.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/06-v8-convoy-a.webp"
    ]
  },
  {
    "name": "LOKI",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "COYOTE",
    "vehicle": "'73 GLENN 4X4",
    "specialWeapon": "SCATTER MISSILES",
    "tagline": "A disturbed former Site-4 test pilot turns experimental missiles loose.",
    "description": "A mentally unstable former military test pilot discharged after a serious flight accident at Site-4. Loki remains obsessed with experimental aircraft, alien technology and destruction.",
    "accent": "#3aa45b",
    "accent2": "#9fdf69",
    "accent3": "#27513d",
    "image": "assets/drivers/large/07-v8-loki.webp",
    "avatar": "assets/drivers/thumbs/07-v8-loki.webp",
    "backgroundImage": "assets/drivers/large/07-v8-loki.webp",
    "skills": [
      {
        "title": "SCATTER MISSILES",
        "text": "Launches three missiles that move above the selected target before breaking into a scattered cluster attack. The delayed pattern makes escape difficult.",
        "icon": "assets/drivers/weapons/07-v8-loki.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A mentally unstable former military test pilot discharged after a serious flight accident at Site-4.",
        "icon": "assets/drivers/thumbs/07-v8-loki.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/07-v8-loki-a.webp"
    ]
  },
  {
    "name": "HOUSTON 3",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "COYOTE",
    "vehicle": "'75 PALOMINO",
    "specialWeapon": "SUPER FANTASTIC DEATH RAY 3-AX",
    "tagline": "An OMAR-controlled assassin armed with a precise and devastating energy weapon.",
    "description": "A woman brainwashed by OMAR and transformed into one of its most dangerous assassins. The name Houston 3 reflects the identity imposed on her while under OMAR control.",
    "accent": "#d8a514",
    "accent2": "#ffe458",
    "accent3": "#885a28",
    "image": "assets/drivers/large/08-v8-houston-3.webp",
    "avatar": "assets/drivers/thumbs/08-v8-houston-3.webp",
    "backgroundImage": "assets/drivers/large/08-v8-houston-3.webp",
    "skills": [
      {
        "title": "SUPER FANTASTIC DEATH RAY 3-AX",
        "text": "Fires a piercing blue death ray through the selected target. Its concentrated energy inflicts heavy damage and can remove collected power-ups.",
        "icon": "assets/drivers/weapons/08-v8-houston-3.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A woman brainwashed by OMAR and transformed into one of its most dangerous assassins.",
        "icon": "assets/drivers/thumbs/08-v8-houston-3.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/08-v8-houston-3-a.webp"
    ]
  },
  {
    "name": "BOOGIE",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "COYOTE",
    "vehicle": "'76 LEPRECHAUN",
    "specialWeapon": "DISCO INFERNO",
    "tagline": "A disco-loving petty criminal turns the battlefield into a deadly dance floor.",
    "description": "A flashy small-time criminal who owes Sid Burn a favor and joins the Coyotes. Boogie fights with speed, showmanship and an endless devotion to disco.",
    "accent": "#f07c1f",
    "accent2": "#b44bd0",
    "accent3": "#5a286c",
    "image": "assets/drivers/large/09-v8-boogie.webp",
    "avatar": "assets/drivers/thumbs/09-v8-boogie.webp",
    "backgroundImage": "assets/drivers/large/09-v8-boogie.webp",
    "skills": [
      {
        "title": "DISCO INFERNO",
        "text": "Deploys a giant disco ball that fires explosive flares at nearby enemies. The blasts can spin, lift and juggle vehicles in the air.",
        "icon": "assets/drivers/weapons/09-v8-boogie.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A flashy small-time criminal who owes Sid Burn a favor and joins the Coyotes.",
        "icon": "assets/drivers/thumbs/09-v8-boogie.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/09-v8-boogie-a.webp"
    ]
  },
  {
    "name": "BEEZWAX",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "COYOTE",
    "vehicle": "'70 STAG PICKUP",
    "specialWeapon": "GAMMA SWARM",
    "tagline": "An irradiated beekeeper unleashes a relentless cloud of mutant attackers.",
    "description": "A beekeeper driven psychotic after radiation transforms his hive. Beezwax joins the Coyotes with his pickup, his unstable temper and a swarm that obeys no ordinary rules.",
    "accent": "#359c4e",
    "accent2": "#a9d84c",
    "accent3": "#315032",
    "image": "assets/drivers/large/10-v8-beezwax.webp",
    "avatar": "assets/drivers/thumbs/10-v8-beezwax.webp",
    "backgroundImage": "assets/drivers/large/10-v8-beezwax.webp",
    "skills": [
      {
        "title": "GAMMA SWARM",
        "text": "Releases a guided swarm of radioactive bees. They pursue the selected vehicle, surround it and deliver repeated attacks before dispersing.",
        "icon": "assets/drivers/weapons/10-v8-beezwax.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A beekeeper driven psychotic after radiation transforms his hive.",
        "icon": "assets/drivers/thumbs/10-v8-beezwax.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/10-v8-beezwax-a.webp"
    ]
  },
  {
    "name": "MOLO",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "COYOTE",
    "vehicle": "'66 SCHOOL BUS",
    "specialWeapon": "BAD DAY IN L.A.",
    "tagline": "A juvenile delinquent in a school bus dreams of earning a place beside Sid Burn.",
    "description": "A reckless young delinquent who idolizes Sid Burn and is desperate to prove himself worthy of the Coyotes. His oversized school bus turns every initiation test into a demolition run.",
    "accent": "#e2aa22",
    "accent2": "#ff7c1d",
    "accent3": "#794027",
    "image": "assets/drivers/large/11-v8-molo.webp",
    "avatar": "assets/drivers/thumbs/11-v8-molo.webp",
    "backgroundImage": "assets/drivers/large/11-v8-molo.webp",
    "skills": [
      {
        "title": "BAD DAY IN L.A.",
        "text": "Pumps out a thick toxic smoke cloud around the bus. Enemies caught inside take damage, lose visibility and may have their engines disrupted.",
        "icon": "assets/drivers/weapons/11-v8-molo.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A reckless young delinquent who idolizes Sid Burn and is desperate to prove himself worthy of the Coyotes.",
        "icon": "assets/drivers/thumbs/11-v8-molo.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/11-v8-molo-a.webp"
    ]
  },
  {
    "name": "SID BURN",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "COYOTE LEADER",
    "vehicle": "'69 MANTA",
    "specialWeapon": "BREATH OF FIRE",
    "tagline": "The Australian terrorist leading OMAR’s campaign across the Southwest.",
    "description": "An Australian-born professional terrorist hired by OMAR to eliminate competing oil interests. Sid Burn creates and commands the Coyotes, making him the central threat of the first road war.",
    "accent": "#d33b28",
    "accent2": "#ffd33f",
    "accent3": "#842033",
    "image": "assets/drivers/large/12-v8-sid-burn.webp",
    "avatar": "assets/drivers/thumbs/12-v8-sid-burn.webp",
    "backgroundImage": "assets/drivers/large/12-v8-sid-burn.webp",
    "skills": [
      {
        "title": "BREATH OF FIRE",
        "text": "Launches burning fireballs into the target area. A successful hit ignites the enemy and continues dealing fire damage after the initial impact.",
        "icon": "assets/drivers/weapons/12-v8-sid-burn.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "An Australian-born professional terrorist hired by OMAR to eliminate competing oil interests.",
        "icon": "assets/drivers/thumbs/12-v8-sid-burn.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/12-v8-sid-burn-a.webp"
    ]
  },
  {
    "name": "Y THE ALIEN",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "faction": "SECRET DRIVER",
    "vehicle": "'64 LUXO SAUCER",
    "specialWeapon": "BLUE LASER",
    "tagline": "A stranded extraterrestrial unlockable with technology no human can match.",
    "description": "A secret alien driver stranded on Earth and searching for the parts and energy needed to continue the journey home. The Luxo Saucer brings true extraterrestrial technology to the battlefield.",
    "accent": "#dff8ff",
    "accent2": "#63d8ee",
    "accent3": "#4c73a0",
    "image": "assets/drivers/large/13-v8-y-the-alien.webp",
    "avatar": "assets/drivers/thumbs/13-v8-y-the-alien.webp",
    "backgroundImage": "assets/drivers/large/13-v8-y-the-alien.webp",
    "skills": [
      {
        "title": "BLUE LASER",
        "text": "Projects a sustained blue energy beam through the target line. The classified weapon delivers piercing damage and can strip away valuable combat resources.",
        "icon": "assets/drivers/weapons/13-v8-y-the-alien.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A secret alien driver stranded on Earth and searching for the parts and energy needed to continue the journey home.",
        "icon": "assets/drivers/thumbs/13-v8-y-the-alien.webp",
        "kind": "driver"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/13-v8-y-the-alien-a.webp"
    ]
  },
  {
    "name": "SHEILA",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "WONDERWAGON",
    "specialWeapon": "TANTRUM GUN",
    "tagline": "Older, sharper and preparing for the FBI, Sheila answers the call again.",
    "description": "Sheila studies at Berkeley and works toward a future in federal law enforcement after the first conflict. The return of the Coyotes pulls her back into active combat beside the renewed Vigilantes.",
    "accent": "#ce3550",
    "accent2": "#ff82ad",
    "accent3": "#6e2a5c",
    "image": "assets/drivers/large/14-v82-sheila.webp",
    "avatar": "assets/drivers/thumbs/14-v82-sheila.webp",
    "backgroundImage": "assets/drivers/large/14-v82-sheila.webp",
    "skills": [
      {
        "title": "TANTRUM GUN",
        "text": "Deploys the upgraded auto-tracking Tantrum Gatling gun. Its sustained burst chews through armor and can knock weapons or power-ups away from the target.",
        "icon": "assets/drivers/weapons/14-v82-sheila.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Sheila studies at Berkeley and works toward a future in federal law enforcement after the first conflict.",
        "icon": "assets/drivers/backgrounds-v40/14.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/14-v82-sheila-a.webp",
      "assets/drivers/vehicles/14-v82-sheila-b.webp"
    ]
  },
  {
    "name": "JOHN TORQUE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "THUNDERBOLT",
    "specialWeapon": "WHEEL O' FORTUNE",
    "tagline": "Now a bounty hunter, Torque wagers everything on one more high-stakes pursuit.",
    "description": "After the first war, Torque’s gambling and appetite for luxury send him toward bounty hunting. He returns to the conflict while tracking Nina Loco and searching for Convoy and Houston.",
    "accent": "#d0aa17",
    "accent2": "#ffe656",
    "accent3": "#11151a",
    "image": "assets/drivers/large/15-v82-john-torque.webp",
    "avatar": "assets/drivers/thumbs/15-v82-john-torque.webp",
    "backgroundImage": "assets/drivers/large/15-v82-john-torque.webp",
    "skills": [
      {
        "title": "WHEEL O' FORTUNE",
        "text": "Spins a revolver-style wheel before firing. The randomly selected round changes the projectile’s size, damage and recoil, making every shot a gamble.",
        "icon": "assets/drivers/weapons/15-v82-john-torque.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "After the first war, Torque’s gambling and appetite for luxury send him toward bounty hunting.",
        "icon": "assets/drivers/backgrounds-v40/15.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/15-v82-john-torque-a.webp",
      "assets/drivers/vehicles/15-v82-john-torque-b.webp"
    ]
  },
  {
    "name": "FLYING ALL-STAR TRIO",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "DAKOTA STUNT CYCLE",
    "specialWeapon": "SOARING GLORY",
    "tagline": "A fearless stunt team takes to the road while searching for their missing sister.",
    "description": "Tomey, Romey and Leilah are motorcycle stunt performers collectively known as the Flying All-Star Trio. Their battle through the Southwest is tied to the disappearance of their fourth sibling.",
    "accent": "#dff8ff",
    "accent2": "#55c9ee",
    "accent3": "#527ca5",
    "image": "assets/drivers/large/16-v82-flying-all-star-trio.webp",
    "avatar": "assets/drivers/thumbs/16-v82-flying-all-star-trio.webp",
    "backgroundImage": "assets/drivers/large/16-v82-flying-all-star-trio.webp",
    "skills": [
      {
        "title": "SOARING GLORY",
        "text": "Launches a spectacular aerial strike from the stunt cycle. The attack hits with explosive force and can strip useful power-ups from an enemy vehicle.",
        "icon": "assets/drivers/weapons/16-v82-flying-all-star-trio.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Tomey, Romey and Leilah are motorcycle stunt performers collectively known as the Flying All-Star Trio.",
        "icon": "assets/drivers/backgrounds-v40/16.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/16-v82-flying-all-star-trio-a.webp",
      "assets/drivers/vehicles/16-v82-flying-all-star-trio-b.webp"
    ]
  },
  {
    "name": "HOUSTON",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "SAMSON TOW TRUCK",
    "specialWeapon": "TOW HOOK",
    "tagline": "Freed from OMAR control, Houston fights to protect her new life and recover the past.",
    "description": "No longer the brainwashed Houston 3, she has built a life with Convoy but still carries missing memories from OMAR’s conditioning. The new conflict offers a chance to uncover what was taken from her.",
    "accent": "#ef6b1d",
    "accent2": "#d93930",
    "accent3": "#782035",
    "image": "assets/drivers/large/17-v82-houston.webp",
    "avatar": "assets/drivers/thumbs/17-v82-houston.webp",
    "backgroundImage": "assets/drivers/large/17-v82-houston.webp",
    "skills": [
      {
        "title": "TOW HOOK",
        "text": "Fires a heavy tow hook that latches onto an enemy vehicle. Houston can drag, redirect and violently swing the captured target before releasing it.",
        "icon": "assets/drivers/weapons/17-v82-houston.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "No longer the brainwashed Houston 3, she has built a life with Convoy but still carries missing memories from OMAR’s conditioning.",
        "icon": "assets/drivers/backgrounds-v40/17.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/17-v82-houston-a.webp",
      "assets/drivers/vehicles/17-v82-houston-b.webp"
    ]
  },
  {
    "name": "CONVOY",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "LIVINGSTON TRUCK",
    "specialWeapon": "ROLLING THUNDER",
    "tagline": "The retired leader returns when the future brings the Coyotes back to his doorstep.",
    "description": "After the first conflict, Convoy settles down, marries Houston and builds a trucking business. The peace ends when a new Coyote assault forces the original Vigilante leader back onto the road.",
    "accent": "#d6a515",
    "accent2": "#ffe55b",
    "accent3": "#8b5b29",
    "image": "assets/drivers/large/18-v82-convoy.webp",
    "avatar": "assets/drivers/thumbs/18-v82-convoy.webp",
    "backgroundImage": "assets/drivers/large/18-v82-convoy.webp",
    "skills": [
      {
        "title": "ROLLING THUNDER",
        "text": "Blasts a focused sonic shockwave from the truck’s powerful air horns. The straight-line burst damages enemies and pushes them violently away.",
        "icon": "assets/drivers/weapons/18-v82-convoy.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "After the first conflict, Convoy settles down, marries Houston and builds a trucking business.",
        "icon": "assets/drivers/backgrounds-v40/18.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/18-v82-convoy-a.webp",
      "assets/drivers/vehicles/18-v82-convoy-b.webp"
    ]
  },
  {
    "name": "DAVE'S CULTSMEN",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "VIGILANTE",
    "vehicle": "XANADU RV",
    "specialWeapon": "SUPER SAUCER INVASION",
    "tagline": "Three devoted followers retrace Dave’s journey in search of extraterrestrial truth.",
    "description": "A group of hippies who elevate Dave and his alien stories into a full belief system. They take the Xanadu RV across the Southwest, hoping to repeat his encounters and make contact themselves.",
    "accent": "#49bde5",
    "accent2": "#eefcff",
    "accent3": "#3e6f99",
    "image": "assets/drivers/large/19-v82-daves-cultists.webp",
    "avatar": "assets/drivers/thumbs/19-v82-daves-cultists.webp",
    "backgroundImage": "assets/drivers/large/19-v82-daves-cultists.webp",
    "skills": [
      {
        "title": "SUPER SAUCER INVASION",
        "text": "Calls a larger and more destructive formation of flying saucers. The craft converge on the selected enemy and bombard the area from above.",
        "icon": "assets/drivers/weapons/19-v82-daves-cultists.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "A group of hippies who elevate Dave and his alien stories into a full belief system.",
        "icon": "assets/drivers/backgrounds-v40/19.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/19-v82-daves-cultists-a.webp",
      "assets/drivers/vehicles/19-v82-daves-cultists-b.webp"
    ]
  },
  {
    "name": "DALLAS 13",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "COYOTE",
    "vehicle": "PALOMINO XIII",
    "specialWeapon": "MEGA COLLIDER",
    "tagline": "A BioBot from 2017 engineered for OMAR’s second assault on history.",
    "description": "Dallas 13 is a cybernetic OMAR BioBot created in the future for Mission: Second Offense. Built around the remains and identity of Darius, he is sent into the past as a powerful Coyote weapon.",
    "accent": "#ed791c",
    "accent2": "#ffd64b",
    "accent3": "#893f29",
    "image": "assets/drivers/large/20-v82-dallas-13.webp",
    "avatar": "assets/drivers/thumbs/20-v82-dallas-13.webp",
    "backgroundImage": "assets/drivers/large/20-v82-dallas-13.webp",
    "skills": [
      {
        "title": "MEGA COLLIDER",
        "text": "Fires opposing energy masses that converge around the selected vehicle. Their collision creates a violent implosion and throws the target with tremendous force.",
        "icon": "assets/drivers/weapons/20-v82-dallas-13.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Dallas 13 is a cybernetic OMAR BioBot created in the future for Mission: Second Offense.",
        "icon": "assets/drivers/backgrounds-v40/20.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/20-v82-dallas-13-a.webp",
      "assets/drivers/vehicles/20-v82-dallas-13-b.webp"
    ]
  },
  {
    "name": "NINA LOCO",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "COYOTE",
    "vehicle": "EL GUERRERO",
    "specialWeapon": "LEMMING MISSILE",
    "tagline": "A ruthless arms dealer reunites the Coyotes for profit, revenge and leverage.",
    "description": "Nina Loco is a weapons smuggler, former partner of Sid Burn and a highly capable organizer. She supplies the revived Coyotes with stolen heavy weapons in exchange for a promised payoff.",
    "accent": "#329fd4",
    "accent2": "#79e4ff",
    "accent3": "#31598d",
    "image": "assets/drivers/large/21-v82-nina-loco.webp",
    "avatar": "assets/drivers/thumbs/21-v82-nina-loco.webp",
    "backgroundImage": "assets/drivers/large/21-v82-nina-loco.webp",
    "skills": [
      {
        "title": "LEMMING MISSILE",
        "text": "Attaches a homing decoy to the selected vehicle. The device disrupts radar and draws other guided missiles toward its unwilling carrier.",
        "icon": "assets/drivers/weapons/21-v82-nina-loco.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Nina Loco is a weapons smuggler, former partner of Sid Burn and a highly capable organizer.",
        "icon": "assets/drivers/backgrounds-v40/21.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/21-v82-nina-loco-a.webp",
      "assets/drivers/vehicles/21-v82-nina-loco-b.webp"
    ]
  },
  {
    "name": "MOLO",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "COYOTE",
    "vehicle": "BLUE BURRO BUS",
    "specialWeapon": "SMOG CHECK",
    "tagline": "The former delinquent returns from prison behind the wheel of an armored bus.",
    "description": "Molo is imprisoned after the first Coyote campaign, but Lord Clyde’s forces free him and put him back in the fight. His new Blue Burro prison bus suits his heavy-handed style perfectly.",
    "accent": "#727b83",
    "accent2": "#c8d0d6",
    "accent3": "#363e47",
    "image": "assets/drivers/large/22-v82-molo.webp",
    "avatar": "assets/drivers/thumbs/22-v82-molo.webp",
    "backgroundImage": "assets/drivers/large/22-v82-molo.webp",
    "skills": [
      {
        "title": "SMOG CHECK",
        "text": "Spews a concentrated cloud of choking smog. Vehicles trapped in it take sustained damage, lose visibility and suffer severe engine disruption.",
        "icon": "assets/drivers/weapons/22-v82-molo.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Molo is imprisoned after the first Coyote campaign, but Lord Clyde’s forces free him and put him back in the fight.",
        "icon": "assets/drivers/backgrounds-v40/22.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/22-v82-molo-a.webp",
      "assets/drivers/vehicles/22-v82-molo-b.webp"
    ]
  },
  {
    "name": "LORD CLYDE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "COYOTE LEADER",
    "vehicle": "EXCELSIOR STRETCH",
    "specialWeapon": "CHAIN LIGHTNING",
    "tagline": "The future ruler of OMAR travels back in time to erase his greatest defeat.",
    "description": "Lord Clyde is the older Slick Clyde, now the powerful head of OMAR in 2017. He steals time-travel technology and returns to the 1970s to rewrite history and guarantee OMAR’s control of the future.",
    "accent": "#2863bd",
    "accent2": "#56d2f2",
    "accent3": "#233778",
    "image": "assets/drivers/large/23-v82-lord-clyde.webp",
    "avatar": "assets/drivers/thumbs/23-v82-lord-clyde.webp",
    "backgroundImage": "assets/drivers/large/23-v82-lord-clyde.webp",
    "skills": [
      {
        "title": "CHAIN LIGHTNING",
        "text": "Fires an electrical bolt that jumps between nearby vehicles. Enemies positioned close together become links in a damaging chain of lightning.",
        "icon": "assets/drivers/weapons/23-v82-lord-clyde.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Lord Clyde is the older Slick Clyde, now the powerful head of OMAR in 2017.",
        "icon": "assets/drivers/backgrounds-v40/23.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/23-v82-lord-clyde-a.webp",
      "assets/drivers/vehicles/23-v82-lord-clyde-b.webp"
    ]
  },
  {
    "name": "OBAKE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "COYOTE",
    "vehicle": "TSUNAMI",
    "specialWeapon": "RIFT BLADE",
    "tagline": "The assassin known as Obake serves Lord Clyde while hunting the truth behind OMAR.",
    "description": "Keiko Uzumi is an elite assassin trained by OMAR and known by the codename Obake. Though loyal to Lord Clyde’s mission, her personal search for answers about Darius and her family runs underneath every assignment.",
    "accent": "#c83235",
    "accent2": "#ff684c",
    "accent3": "#5d1b35",
    "image": "assets/drivers/large/24-v82-obake.webp",
    "avatar": "assets/drivers/thumbs/24-v82-obake.webp",
    "backgroundImage": "assets/drivers/large/24-v82-obake.webp",
    "skills": [
      {
        "title": "RIFT BLADE",
        "text": "Projects a razor-like energy rift in front of the Tsunami. The blade cuts through enemies at close range and can pass through multiple targets in its path.",
        "icon": "assets/drivers/weapons/24-v82-obake.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Obake is the codename of elite assassin Keiko Uzumi, trained by OMAR and driven by a hidden search for the truth.",
        "icon": "assets/drivers/backgrounds-v40/24.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/24-v82-obake-a.webp",
      "assets/drivers/vehicles/24-v82-obake-b-replacement.png"
    ]
  },
  {
    "name": "BOOGIE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "COYOTE",
    "vehicle": "MARATHON",
    "specialWeapon": "DISCO INFERNO",
    "tagline": "Broken out of prison and back under the lights, Boogie resumes the dance of destruction.",
    "description": "Boogie is jailed after the original Coyote campaign but is freed when Nina Loco rebuilds the gang. He returns with a new car, the same disco obsession and no interest in reform.",
    "accent": "#2869c4",
    "accent2": "#55d7f3",
    "accent3": "#293d7a",
    "image": "assets/drivers/large/25-v82-boogie.webp",
    "avatar": "assets/drivers/thumbs/25-v82-boogie.webp",
    "backgroundImage": "assets/drivers/large/25-v82-boogie.webp",
    "skills": [
      {
        "title": "DISCO INFERNO",
        "text": "Unfolds a giant disco ball that fires explosive flares in every direction. Nearby enemies can be lifted, spun and repeatedly struck by the light show.",
        "icon": "assets/drivers/weapons/25-v82-boogie.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Boogie is jailed after the original Coyote campaign but is freed when Nina Loco rebuilds the gang.",
        "icon": "assets/drivers/backgrounds-v40/25.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/25-v82-boogie-a.webp",
      "assets/drivers/vehicles/25-v82-boogie-b.webp"
    ]
  },
  {
    "name": "ASTRONAUT BOB O.",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "DRIFTER",
    "vehicle": "MOON TREKKER",
    "specialWeapon": "COLLECTOR",
    "tagline": "A mysterious astronaut escapes with a lunar rover and a very unusual appetite.",
    "description": "Bob O. never removes the space suit or helmet and communicates through a strange electronic voice. After escaping NASA in a stolen Moon Trekker, the mysterious astronaut roams the battlefield collecting whatever looks useful.",
    "accent": "#e8f2f7",
    "accent2": "#e34b43",
    "accent3": "#7c2d3d",
    "image": "assets/drivers/large/26-v82-astronaut-bob-o.webp",
    "avatar": "assets/drivers/thumbs/26-v82-astronaut-bob-o.webp",
    "backgroundImage": "assets/drivers/large/26-v82-astronaut-bob-o.webp",
    "skills": [
      {
        "title": "COLLECTOR",
        "text": "Extends the rover’s mechanical collection arms to seize and claw enemy vehicles. The grab damages armor and tears away carried weapons and power-ups.",
        "icon": "assets/drivers/weapons/26-v82-astronaut-bob-o.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Astronaut Bob O. escaped NASA in a stolen Moon Trekker and roams the battlefield collecting anything that looks useful.",
        "icon": "assets/drivers/backgrounds-v40/26.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/26-v82-astronaut-bob-o-a.webp",
      "assets/drivers/vehicles/26-v82-astronaut-bob-o-b.webp"
    ]
  },
  {
    "name": "GARBAGE MAN",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "DRIFTER",
    "vehicle": "GRUBB DUAL LOADER",
    "specialWeapon": "COMPACTOR",
    "tagline": "A silent scavenger collects machinery, weapons and secrets from every battlefield.",
    "description": "The Garbage Man is a mysterious drifter who roams the Southwest gathering discarded equipment and vehicle parts. His real purpose remains hidden behind the loader’s cab and piles of salvage.",
    "accent": "#3c4546",
    "accent2": "#858d55",
    "accent3": "#1e2527",
    "image": "assets/drivers/large/27-v82-garbage-man.webp",
    "avatar": "assets/drivers/thumbs/27-v82-garbage-man.webp",
    "backgroundImage": "assets/drivers/large/27-v82-garbage-man.webp",
    "skills": [
      {
        "title": "COMPACTOR",
        "text": "Uses the loader’s compactor arms to grab and crush smaller vehicles. Larger targets can be slammed against the ground before being thrown away.",
        "icon": "assets/drivers/weapons/27-v82-garbage-man.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "The Garbage Man is a mysterious drifter who roams the Southwest gathering discarded equipment and vehicle parts.",
        "icon": "assets/drivers/backgrounds-v40/27.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/27-v82-garbage-man-a.webp",
      "assets/drivers/vehicles/27-v82-garbage-man-b.webp"
    ]
  },
  {
    "name": "AGENT R. CHASE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "DRIFTER",
    "vehicle": "CHRONO STINGER",
    "specialWeapon": "HARD TIME",
    "tagline": "A ChronoPol agent from 2017 pursues Lord Clyde through a damaged timeline.",
    "description": "Agent R. Chase is a future law-enforcement operative investigating OMAR and its stolen time machines. He follows Clyde into the 1970s to protect history from the Second Offense.",
    "accent": "#7747c7",
    "accent2": "#d06dff",
    "accent3": "#33276e",
    "image": "assets/drivers/large/28-v82-agent-r-chase.webp",
    "avatar": "assets/drivers/thumbs/28-v82-agent-r-chase.webp",
    "backgroundImage": "assets/drivers/large/28-v82-agent-r-chase.webp",
    "skills": [
      {
        "title": "HARD TIME",
        "text": "Launches a temporal bubble that freezes enemies, weapons and nearby scenery. Chase alone remains free to move and attack while time is suspended.",
        "icon": "assets/drivers/weapons/28-v82-agent-r-chase.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Agent R.",
        "icon": "assets/drivers/backgrounds-v40/28.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/28-v82-agent-r-chase-a.webp",
      "assets/drivers/vehicles/28-v82-agent-r-chase-b.webp"
    ]
  },
  {
    "name": "CHASSEY BLUE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "DRIFTER",
    "vehicle": "VERTIGO",
    "specialWeapon": "STAR POWER",
    "tagline": "The former FBI agent returns from Hollywood to investigate a threat from the future.",
    "description": "After the original conflict, Chassey becomes a Hollywood action star before her career is derailed. Renewed Coyote activity and unexplained time anomalies pull the experienced investigator back into combat.",
    "accent": "#e8f4f7",
    "accent2": "#d94740",
    "accent3": "#702c3c",
    "image": "assets/drivers/large/29-v82-chassey-blue.webp",
    "avatar": "assets/drivers/thumbs/29-v82-chassey-blue.webp",
    "backgroundImage": "assets/drivers/large/29-v82-chassey-blue.webp",
    "skills": [
      {
        "title": "STAR POWER",
        "text": "Deploys a small orbiting satellite that searches for the selected enemy. Once locked, it moves over the target and fires a concentrated laser beam.",
        "icon": "assets/drivers/weapons/29-v82-chassey-blue.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "After the original conflict, Chassey becomes a Hollywood action star before her career is derailed.",
        "icon": "assets/drivers/backgrounds-v40/29.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/29-v82-chassey-blue-a.webp",
      "assets/drivers/vehicles/29-v82-chassey-blue-b.webp"
    ]
  },
  {
    "name": "PADRE DESTINO",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "DRIFTER",
    "vehicle": "GOLIATH HALFTRACK",
    "specialWeapon": "HADES GATE",
    "tagline": "A former soldier and doomsday prophet is ready to force his own apocalypse.",
    "description": "Padre Destino is a wandering preacher and former military man obsessed with proving that the end of the world is near. If prophecy will not arrive on schedule, he is prepared to help it happen.",
    "accent": "#ec761d",
    "accent2": "#ffd14d",
    "accent3": "#843d29",
    "image": "assets/drivers/large/30-v82-padre-destino.webp",
    "avatar": "assets/drivers/thumbs/30-v82-padre-destino.webp",
    "backgroundImage": "assets/drivers/large/30-v82-padre-destino.webp",
    "skills": [
      {
        "title": "HADES GATE",
        "text": "Opens a spectral gate that lets the Goliath sink beneath the ground. It then erupts below the selected enemy, launching the vehicle into the air.",
        "icon": "assets/drivers/weapons/30-v82-padre-destino.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Padre Destino is a wandering preacher and former military man obsessed with proving that the end of the world is near.",
        "icon": "assets/drivers/backgrounds-v40/30.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/30-v82-padre-destino-a.webp",
      "assets/drivers/vehicles/30-v82-padre-destino-b.webp"
    ]
  },
  {
    "name": "DUSTY 'EARTH'",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "faction": "DRIFTER",
    "vehicle": "WAPITI 4WD",
    "specialWeapon": "TRIBAL MAGIC",
    "tagline": "A Zuni spiritual leader defends sacred land from a war that never should have reached it.",
    "description": "Dusty Earth is a Zuni chief and shaman angered by the damage caused to tribal lands by the Vigilante–Coyote conflict. Guided by the Falcon spirit, he enters the war on his own terms.",
    "accent": "#87502f",
    "accent2": "#e78a31",
    "accent3": "#493527",
    "image": "assets/drivers/large/31-v82-dusty-earth.webp",
    "avatar": "assets/drivers/thumbs/31-v82-dusty-earth.webp",
    "backgroundImage": "assets/drivers/large/31-v82-dusty-earth.webp",
    "skills": [
      {
        "title": "TRIBAL MAGIC",
        "text": "Summons a spirit falcon that calls a tornado beneath the selected vehicle. The vortex lifts the target high into the air before releasing it.",
        "icon": "assets/drivers/weapons/31-v82-dusty-earth.webp",
        "kind": "weapon"
      },
      {
        "title": "DRIVER BACKGROUND",
        "text": "Dusty Earth is a Zuni chief and shaman angered by the damage caused to tribal lands by the Vigilante–Coyote conflict.",
        "icon": "assets/drivers/backgrounds-v40/31.png?v=40",
        "kind": "driver",
        "fit": "contain"
      }
    ],
    "vehicles": [
      "assets/drivers/vehicles/31-v82-dusty-earth-a.webp",
      "assets/drivers/vehicles/31-v82-dusty-earth-b.webp"
    ]
  }
];

window.V8_SITE_DATA = {
  drivers,
  maps: [
  {
    "name": "OIL FIELDS",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "HEXAGON PETROLEUM REFINERY — ANTELOPE RIDGE, NEW MEXICO",
    "description": "A sprawling refinery filled with pumpjacks, spherical storage tanks, oil drums and exposed pipe routes. Fire and spilled fuel can turn its open lanes into dangerous traps.",
    "image": "assets/maps-v44/backgrounds/01.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/01.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/01.jpg?v=44",
    "accent": "#f06a16",
    "accent2": "#ffba2e",
    "accent3": "#4b2419",
    "highlightTitle": "REFINERY ROUTES / HIDDEN RAMP",
    "highlightText": "Use the tanks and refinery structures as cover, search for the hidden access route and stay clear of burning oil.",
    "stats": [
      {
        "label": "REGION",
        "value": "NEW MEXICO"
      },
      {
        "label": "STYLE",
        "value": "REFINERY"
      },
      {
        "label": "HAZARD",
        "value": "FIRE"
      }
    ]
  },
  {
    "name": "AIRCRAFT GRAVEYARD",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "U.S.A.F. REPOSITORY — YUMA DESERT, ARIZONA",
    "description": "A desert aircraft repository packed with wrecked planes, hangars, control towers and a long runway. Moving aircraft and crushing machinery make the open yard deceptively dangerous.",
    "image": "assets/maps-v44/backgrounds/02.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/02.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/02.jpg?v=44",
    "accent": "#b37b3b",
    "accent2": "#8fc4dc",
    "accent3": "#3e4b57",
    "highlightTitle": "CONTROL TOWERS / SECRET HANGARS",
    "highlightText": "Watch the radar towers, avoid the smashing machinery and break open hidden sections around the edge of the airfield.",
    "stats": [
      {
        "label": "REGION",
        "value": "ARIZONA"
      },
      {
        "label": "STYLE",
        "value": "AIRFIELD"
      },
      {
        "label": "HAZARD",
        "value": "AIRSTRIKES"
      }
    ]
  },
  {
    "name": "GHOST TOWN",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "MESA DIABLO — HUNTERS WASH, NEW MEXICO",
    "description": "An abandoned western settlement crossed by train tracks, bridges, graveyards and burning ruins. A roaming tornado and the moving train keep the battlefield in constant motion.",
    "image": "assets/maps-v44/backgrounds/03.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/03.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/03.jpg?v=44",
    "accent": "#c34a24",
    "accent2": "#e9a34b",
    "accent3": "#5e3047",
    "highlightTitle": "MOVING TRAIN / TORNADO PATH",
    "highlightText": "Control the rail line, use the bridges carefully and never remain exposed when the tornado sweeps through town.",
    "stats": [
      {
        "label": "REGION",
        "value": "NEW MEXICO"
      },
      {
        "label": "STYLE",
        "value": "WESTERN"
      },
      {
        "label": "HAZARD",
        "value": "TORNADO"
      }
    ]
  },
  {
    "name": "HOOVER DAM",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "HOOVER DAM — ARIZONA–NEVADA BORDER",
    "description": "A concrete giant built around four tunnels, dam towers, a power station and narrow water channels. The arena mixes long straights with dangerous drops and electrical machinery.",
    "image": "assets/maps-v44/backgrounds/04.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/04.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/04.jpg?v=44",
    "accent": "#2f8ebd",
    "accent2": "#88e7ff",
    "accent3": "#5a6067",
    "highlightTitle": "ELECTRIFIED CHANNEL / FOUR TUNNELS",
    "highlightText": "Trigger the electrical switch when enemies enter the channel, then use the tunnel network to escape retaliation.",
    "stats": [
      {
        "label": "REGION",
        "value": "AZ / NV"
      },
      {
        "label": "STYLE",
        "value": "DAM"
      },
      {
        "label": "HAZARD",
        "value": "ELECTRIC"
      }
    ]
  },
  {
    "name": "VALLEY FARMS",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "PREMIUM FRUIT CO. — SAN JOAQUIN VALLEY, CALIFORNIA",
    "description": "Orchards, barns, grain silos, bridges and wind generators surround a working irrigation channel. The open farmland hides several destructive environmental machines.",
    "image": "assets/maps-v44/backgrounds/05.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/05.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/05.jpg?v=44",
    "accent": "#6e9e31",
    "accent2": "#e0b63f",
    "accent3": "#4b6732",
    "highlightTitle": "WAVE MACHINE / WIND GENERATORS",
    "highlightText": "Use the barns and groves as cover, but watch the channel when the wave machine comes alive.",
    "stats": [
      {
        "label": "REGION",
        "value": "CALIFORNIA"
      },
      {
        "label": "STYLE",
        "value": "FARMLAND"
      },
      {
        "label": "HAZARD",
        "value": "WAVE"
      }
    ]
  },
  {
    "name": "CASINO CITY",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "NUGGET CITY, NEVADA",
    "description": "A neon casino district filled with rooftops, parking ramps, garages, hotel courtyards and narrow streets. The vertical routes reward drivers who learn how to reach the upper levels.",
    "image": "assets/maps-v44/backgrounds/06.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/06.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/06.jpg?v=44",
    "accent": "#e53768",
    "accent2": "#5bd8ff",
    "accent3": "#673080",
    "highlightTitle": "ROOFTOPS / PILOTABLE BLIMP",
    "highlightText": "Use the hidden ramp and gas-station approaches to reach rooftop weapons, then watch for the city blimp overhead.",
    "stats": [
      {
        "label": "REGION",
        "value": "NEVADA"
      },
      {
        "label": "STYLE",
        "value": "NEON CITY"
      },
      {
        "label": "HAZARD",
        "value": "HEIGHT"
      }
    ]
  },
  {
    "name": "CANYONLANDS",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "ROUTE 191 — NEAR LA SAL JUNCTION, UTAH",
    "description": "A sandstone maze of cliffs, broken bridges, desert roads, ruins and a small settlement. Narrow passes create ambushes while the exposed plateaus favor long-range weapons.",
    "image": "assets/maps-v44/backgrounds/07.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/07.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/07.jpg?v=44",
    "accent": "#d46024",
    "accent2": "#f3b94d",
    "accent3": "#526e72",
    "highlightTitle": "HOVEKEEP TELEPORT / FALLING BOULDERS",
    "highlightText": "Use the ancient ruins to reposition across the arena and stay alert near marked rockfall zones.",
    "stats": [
      {
        "label": "REGION",
        "value": "UTAH"
      },
      {
        "label": "STYLE",
        "value": "CANYON"
      },
      {
        "label": "HAZARD",
        "value": "BOULDERS"
      }
    ]
  },
  {
    "name": "SKI RESORT",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "BUSTED HUMP SKI RESORT — ROCKY MOUNTAINS, COLORADO",
    "description": "A high-altitude resort with steep ski runs, cabins, slalom gates, snow machines and a working gondola route. Speed is high, but traction is limited.",
    "image": "assets/maps-v44/backgrounds/08.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/08.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/08.jpg?v=44",
    "accent": "#48b6e6",
    "accent2": "#e8fbff",
    "accent3": "#436695",
    "highlightTitle": "AVALANCHES / GONDOLA ROUTE",
    "highlightText": "Trigger avalanches to control the slopes and use the gondola area to move between elevation levels.",
    "stats": [
      {
        "label": "REGION",
        "value": "COLORADO"
      },
      {
        "label": "STYLE",
        "value": "SNOW"
      },
      {
        "label": "HAZARD",
        "value": "AVALANCHE"
      }
    ]
  },
  {
    "name": "SECRET BASE",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "ADVANCED WEAPONS RESEARCH CENTER SITE 4 — PAPOOSE DRY LAKE, NEVADA",
    "description": "A classified military complex containing nuclear missile silos, radar dishes, laser turrets, stealth aircraft and hidden service routes.",
    "image": "assets/maps-v44/backgrounds/09.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/09.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/09.jpg?v=44",
    "accent": "#6e8f44",
    "accent2": "#f1603b",
    "accent3": "#202f35",
    "highlightTitle": "MISSILE COMMAND / LASER DEFENSES",
    "highlightText": "Use the command systems to launch silos and aircraft, but avoid the automated laser turrets guarding the facility.",
    "stats": [
      {
        "label": "REGION",
        "value": "NEVADA"
      },
      {
        "label": "STYLE",
        "value": "MILITARY"
      },
      {
        "label": "HAZARD",
        "value": "DEFENSES"
      }
    ]
  },
  {
    "name": "SAND FACTORY",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "ANASAZI SANDWORX CO. — BACON SLAB, UTAH",
    "description": "A desert processing plant built around conveyor belts, crushers, chutes and a constantly shifting mountain of sand. The machinery creates unusual vertical routes.",
    "image": "assets/maps-v44/backgrounds/10.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/10.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/10.jpg?v=44",
    "accent": "#c8892f",
    "accent2": "#ffd268",
    "accent3": "#73513b",
    "highlightTitle": "CONVEYOR NETWORK / LAUNCH CHUTE",
    "highlightText": "Ride the conveyor systems to reach elevated pickups and use the refinery chute as a rapid escape route.",
    "stats": [
      {
        "label": "REGION",
        "value": "UTAH"
      },
      {
        "label": "STYLE",
        "value": "FACTORY"
      },
      {
        "label": "HAZARD",
        "value": "MACHINERY"
      }
    ]
  },
  {
    "name": "DREAMLAND",
    "game": "VIGILANTE 8 FIRST OFFENSE",
    "location": "SUPER DREAMLAND — LOCATION UNKNOWN",
    "description": "A surreal bonus arena of oversized mushrooms, toy-like terrain and impossible fantasy landmarks. Its bright appearance hides unpredictable movement and strange shortcuts.",
    "image": "assets/maps-v44/backgrounds/11.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/11.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/11.jpg?v=44",
    "accent": "#b44ee1",
    "accent2": "#52e2ff",
    "accent3": "#ffcf39",
    "highlightTitle": "MUSHROOM BOUNCES / DREAM LOGIC",
    "highlightText": "Use the giant mushrooms to launch across the arena and expect the environment to behave unlike any normal battlefield.",
    "stats": [
      {
        "label": "REGION",
        "value": "UNKNOWN"
      },
      {
        "label": "STYLE",
        "value": "FANTASY"
      },
      {
        "label": "HAZARD",
        "value": "TRICKERY"
      }
    ]
  },
  {
    "name": "METEOR CRATER",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "ROUTE 40 — NEAR WINSLOW, ARIZONA",
    "description": "A vast impact crater surrounded by desert highway, an observatory and roadside structures. The steep bowl pulls combat toward the center before launching vehicles back into the air.",
    "image": "assets/maps-v44/backgrounds/12.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/12.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/12.jpg?v=44",
    "accent": "#d06a2c",
    "accent2": "#77a6d9",
    "accent3": "#4d3d4c",
    "highlightTitle": "CRATER LAUNCH / OBSERVATORY",
    "highlightText": "Use the center of the crater for dramatic aerial movement, then control the rim and observatory approaches.",
    "stats": [
      {
        "label": "REGION",
        "value": "ARIZONA"
      },
      {
        "label": "STYLE",
        "value": "CRATER"
      },
      {
        "label": "HAZARD",
        "value": "IMPACT"
      }
    ]
  },
  {
    "name": "WINTER GAMES",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "OLYMPUS GAMES RESORT — WASATCH RANGE, UTAH",
    "description": "A wide mountain arena built around three winter events: slalom, ski jump and bobsled. Long descents produce extreme speed and limited braking control.",
    "image": "assets/maps-v44/backgrounds/13.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/13.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/13.jpg?v=44",
    "accent": "#2ca9df",
    "accent2": "#f0fdff",
    "accent3": "#374f8c",
    "highlightTitle": "SLALOM / SKI JUMP / BOBSLED",
    "highlightText": "Choose the right mobility setup, look ahead on the bobsled run and use the ski jump to cross the arena at speed.",
    "stats": [
      {
        "label": "REGION",
        "value": "UTAH"
      },
      {
        "label": "STYLE",
        "value": "SPORT"
      },
      {
        "label": "HAZARD",
        "value": "ICE"
      }
    ]
  },
  {
    "name": "GHASTLY BAYOU",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "ABANDONED SUGAR PLANTATION — BAYOU VISTA, LOUISIANA",
    "description": "A haunted swamp of flooded roads, plantation ruins, graveyards and dark wooden bridges. Water and narrow paths force close-range fights.",
    "image": "assets/maps-v44/backgrounds/14.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/14.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/14.jpg?v=44",
    "accent": "#6a8e36",
    "accent2": "#c5d957",
    "accent3": "#3f3b52",
    "highlightTitle": "GRAVEYARD TELEPORT / MANSION ROUTE",
    "highlightText": "Use the graveyard building to travel between the cemetery and mansion, but avoid being trapped on the narrow swamp crossings.",
    "stats": [
      {
        "label": "REGION",
        "value": "LOUISIANA"
      },
      {
        "label": "STYLE",
        "value": "SWAMP"
      },
      {
        "label": "HAZARD",
        "value": "WATER"
      }
    ]
  },
  {
    "name": "LAUNCH SITE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "NASA SPACE LAUNCH CENTER — CAPE CANAVERAL, FLORIDA",
    "description": "A coastal aerospace complex with launch pads, service tunnels, hangars and towering rocket structures. The arena mixes technical corridors with huge exposed platforms.",
    "image": "assets/maps-v44/backgrounds/15.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/15.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/15.jpg?v=44",
    "accent": "#e96b2b",
    "accent2": "#67cfff",
    "accent3": "#d9e4eb",
    "highlightTitle": "ROCKET TUNNEL / AERIAL PICKUPS",
    "highlightText": "Enter the launch tunnel at the correct signal to be fired high above the battlefield and collect weapons on the descent.",
    "stats": [
      {
        "label": "REGION",
        "value": "FLORIDA"
      },
      {
        "label": "STYLE",
        "value": "SPACEPORT"
      },
      {
        "label": "HAZARD",
        "value": "LAUNCH"
      }
    ]
  },
  {
    "name": "STEEL MILL",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "SUNSHINE STEEL WORKS — NEAR PITTSBURGH, PENNSYLVANIA",
    "description": "A dense industrial battlefield of furnaces, rail tracks, bridges, foundry buildings and molten metal. Heavy machinery creates both cover and lethal traps.",
    "image": "assets/maps-v44/backgrounds/16.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/16.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/16.jpg?v=44",
    "accent": "#e24f21",
    "accent2": "#ffb52d",
    "accent3": "#414951",
    "highlightTitle": "ACTIVE RAIL SYSTEM / MOLTEN STEEL",
    "highlightText": "Operate the track levers to redirect the train, then use the mill structures to avoid exposed furnace lanes.",
    "stats": [
      {
        "label": "REGION",
        "value": "PENNSYLVANIA"
      },
      {
        "label": "STYLE",
        "value": "INDUSTRIAL"
      },
      {
        "label": "HAZARD",
        "value": "FURNACE"
      }
    ]
  },
  {
    "name": "NUCLEAR PLANT",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "PANDER ISLAND NUCLEAR POWER PLANT — MINNESOTA",
    "description": "A reactor complex of turbines, control terminals, cooling structures and toxic waste channels. Machinery can be activated to reshape the fight.",
    "image": "assets/maps-v44/backgrounds/17.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/17.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/17.jpg?v=44",
    "accent": "#77a934",
    "accent2": "#ccf05b",
    "accent3": "#45525c",
    "highlightTitle": "CONTROL ROOM / TURBINE SYSTEM",
    "highlightText": "Reach the computer room to manipulate the plant systems, but keep away from the reactor and contaminated water routes.",
    "stats": [
      {
        "label": "REGION",
        "value": "MINNESOTA"
      },
      {
        "label": "STYLE",
        "value": "REACTOR"
      },
      {
        "label": "HAZARD",
        "value": "RADIATION"
      }
    ]
  },
  {
    "name": "ALASKAN PIPELINE",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "HEXAGON DRILLING CO. — VALDEZ BAY, ALASKA",
    "description": "An arctic oil installation spread across snow, water, pipelines, storage drums and an offshore drilling area. Ice and narrow walkways make every route dangerous.",
    "image": "assets/maps-v44/backgrounds/18.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/18.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/18.jpg?v=44",
    "accent": "#359fc9",
    "accent2": "#bcecff",
    "accent3": "#243d4c",
    "highlightTitle": "PIPE LAUNCHES / OFFSHORE RIG",
    "highlightText": "Use the pipeline routes for rapid movement, fight for the drum platforms and watch the glaciers and wildlife in the bay.",
    "stats": [
      {
        "label": "REGION",
        "value": "ALASKA"
      },
      {
        "label": "STYLE",
        "value": "ARCTIC OIL"
      },
      {
        "label": "HAZARD",
        "value": "ICE"
      }
    ]
  },
  {
    "name": "PACIFIC HARBOR",
    "game": "VIGILANTE 8 SECOND OFFENSE",
    "location": "COMMERCIAL SEAPORT OF LONG BEACH — CALIFORNIA",
    "description": "A busy coastal port with cargo ships, cranes, warehouses, water routes, a lighthouse and a large bridge. The arena supports both land and water combat.",
    "image": "assets/maps-v44/backgrounds/19.jpg?v=44",
    "previewImage": "assets/maps-v44/previews/19.jpg?v=44",
    "thumbImage": "assets/maps-v44/thumbs/19.jpg?v=44",
    "accent": "#267ea9",
    "accent2": "#f49a3b",
    "accent3": "#2f4658",
    "highlightTitle": "CARGO SHIP / LIGHTHOUSE / BRIDGE",
    "highlightText": "Use the harbor tunnels and water routes to reposition, then attack the transport ship and bridge from safer angles.",
    "stats": [
      {
        "label": "REGION",
        "value": "CALIFORNIA"
      },
      {
        "label": "STYLE",
        "value": "SEAPORT"
      },
      {
        "label": "HAZARD",
        "value": "WATER"
      }
    ]
  }
],
  tutorial: {
  "beginner": [
    {
      "title": "Movement",
      "image": "assets/tutorial/tutorials-battle-background.png"
    },
    {
      "title": "Weapons",
      "image": "assets/tutorial/tutorials-battle-background.png"
    },
    {
      "title": "Lock-On",
      "image": "assets/tutorial/tutorials-battle-background.png"
    }
  ],
  "advanced": [
    {
      "title": "Team Play",
      "image": "assets/tutorial/tutorials-battle-background.png"
    },
    {
      "title": "Special Weapons",
      "image": "assets/tutorial/tutorials-battle-background.png"
    },
    {
      "title": "Survival",
      "image": "assets/tutorial/tutorials-battle-background.png"
    }
  ],
  "master": [
    {
      "title": "Upgrades",
      "image": "assets/tutorial/tutorials-battle-background.png"
    },
    {
      "title": "Combat Tips",
      "image": "assets/tutorial/tutorials-battle-background.png"
    }
  ]
}
};
