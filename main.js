// import pluralize from 'pluralize';

const adjectiveArray = ['super','gnarly','funky','spinning','smashing','delicious','serene','abominable','zombie','dead','undead','spicy','crushing','awesome','honest',
'melancholy','tight','loose','luminating','lucid','flaccid','enigmatic','hairy','lukewarm','prestigous','paranoid','xenophobic','deiphobic','paraplegic','leprous','distilled',
'fiery','ice cold','frigid','magic','lying','dying','thriving','cauliflour','burnt','deep-sea','billionare','cheesy','metaphoric','upside-down','oxymoronic','ironic','dancing',
'broke-neck','broke-back','limp','indecent','moist','unassuming','forgettable','wicked','morbid','lunar','solar','extraterrestrial','ancient','wandering','duck-billed','red-breasted',
'oven-roasted','charbroiled','drowned','swollen','unprecedented','lyrical','ambient','weird','interdimensional','virtual','binary','disoriented','spotted','dysfunctional','merry',
'green','cyan','blue','indigo','red','orange','yellow','black','white','gray','purple','lime','violet','pink','irreverent','cadywompus','narcissistic','troubled','stimulated',
'awkward','hammy','conceited','vain','villianous','absurd','shimmering','gargantuan','blazing','flaming','theoretical','spetoinkered','cybernetic','maleficent','benevolent',
'dismissable','silicon','wooden','metallic','metal','plastic','smooth','abrasive','flamboyant','bouant','amphibious','ambidextrous','bisexual','gay','greasy','obese',
'made-in-China','Russian','Antarctic','African','Canadian','turquoise','alien','melted','dissolving','carbonated','flat','distended','attentive','plastered','abecedarian',
'rudimentary','sacreligious','intolerant', 'lactose-intolerant', 'serpentine','waning','waxing','aqueous','ravenous','crocodilian', 'Seinfeldian','Ricktastic', 'mortified',
'mammalian', 'reptilian', 'rock-hard', 'Freudian','erect','solid', 'dumpy', 'mollycoddled', 'bamboozled','used','abused','recycled','Jewish','stingy','shit-faced','Zionist',
'mustachioed','wasted','snockered','drunk','toinkered','flying','pretentious','superfluous','Hispanic','affluent','cranberry','tangerine','glass','short','extended','bloody',
'disgusting','morose','recently deceased','wormy','wriggling','balding','obnoxious','ostentatious','silent','vertical','horizontal','longitudinal','duck-walking','unkempt',
'well-groomed','disheveled','headless','bearded','sloped','cascading','rainbow','colorful','naughty','stoned','pulsating','throbbing','veiny','corded','special','friendly',
'unfriendly','varicose','frosted','frost','bespectacled','lactating','squirting','fecal','feral','wild','enthusiastic','hidden','secret','pestilent','porous','evil',
'angelic','ungodly','gold','diamond','jade','emerald','opaque','obtuse','acute','unwarranted','impossible','boring','chocolate-covered','defiled','expectant','pregnant',
'curvy','voluptuous','enormous','buried','unfortunate','misanthropic','altruistic','king of','lord of','god of','voided','nihilist','annihilated','disrupted','scorned',
'ignored','granite','slate','pixelated','censored','fuzzy','manscaped','trimmed','large-cleavaged','gapped','gashed','toothless','nocturnal','rushed','snivelling',
'menstrual','menstruating','smooshy','mushy','squishy','squelching','wretched','']

const adverbArray = ['somewhat','inadvertantly','slightly','mostly','overly','socially','technically','partially','absurdly','undoubtedly','possibly','understandably','marginally',
'morbidly','exceedingly','nonchalantly','scarily','frighteningly','sort of','absolutely','totally','non','holy','unholy','satanic','demonic','ultimate','']

const nounArray = [
    'darkness', 'light',      'midnight',
    'platypus', 'streetcar',  'vixen',
    'harlot',   'saint',      'muffin',
    'time',     'person',     'year',
    'way',      'day',        'thing',
    'man',      'world',      'life',
    'hand',     'dick',       'child',
    'eye',      'woman',      'place',
    'work',     'week',       'case',
    'point',    'government', 'company',
    'number',   'group',      'problem',
    'fact',     'whoreson',   'nematoad',
    'giant',    'pickle',     'hydrofoil',
    'cream',    'dream',      'galaxy',
    'star',     'planetarium','undecided',
    'moron',    'mormon',     'glass',
    'stain',    'pie',        'cow',
    'toast',    'rocket',     'monkey',
    'spetoinkerville','hooligan','ne\'er-do-well',
    'brigand','simpleton','cyborg','pirate','mama',
    'weed','rat','rat tail','turban','turbine',
    'Hank','screw','nail','tail','chain','gimp',
    'hood','quack','ion','box','fox','sword','philibuster',
    'skeleton','bone shaman','turtle','taco',
    'sorbet','mullet','lesbian','hat','electricity',
    'alien','cohort','sorcerer','ranger','alcoholic','',
    'wimp','nipple','ass', 'psychogalvanometer','weasel',
    'herald', 'bazongas', 'boaner', 'schlongle', 'diamond-cutter', 'dump','terd', 'brouhaha', 'melee', 'donnybrook','rigmarole', 'winklepicker', 'hullaballoo', 'gobbledygook',
    'whippersnapper', 'dipthong', 'fisticuffs','rascal','fart','shart','organ','daffodil','warthog','behemoth','leviathan','polka','rainbow','nightgown','undergarment','thong',
    'thief','icon','idol','stone','loser','Indian','tip','hiney','piehole','pate','skull','noggin','eagle','patriot','moon','sun','planet','star','sky','cloud','wisp','waif',
    'train','charlatan','brown-noser','billy club','pistol','shotgun','knife','tommy gun','peter','john','sheep','dwarf','dork','nerd','geek','knocker','blossom','petal','leaf',
    'tree','whelp','brat','devil','demon','angel','demigod','void','nothing','dweeb','weevil','coward','Howard Stern','Hugh Heffner','blackjack','knight','jester','bard',
    'minstrel','fornicater','liar','wretch',''
  ]

const createBandName = () => {
  let modifier;
  let adjectiveIndex = Math.floor(Math.random()*adjectiveArray.length);
  let nounIndex = Math.floor(Math.random()*nounArray.length);
  let adverbIndex = Math.floor(Math.random()*adverbArray.length);
  let selector = Math.floor(Math.random()*100);
  let simpleName = `${adjectiveArray[adjectiveIndex]} ${nounArray[nounIndex]}`;
  let finalName = `${simpleName}`;
  if (selector < 50) {
    modifier = '';
  } else if (selector < 75) {
    modifier = 'The';
    let newNoun = nounArray[nounIndex];
    // simpleName = `${adjectiveArray[adjectiveIndex]} ${pluralize(newNoun)}`;
    finalName = `${modifier} ${finalName}s`;
  } else if (selector < 98) {
    modifier = adverbArray[adverbIndex];
    finalName = `${modifier} ${finalName}`;
  } else if (selector < 100) {
    let secondNounIndex = Math.floor(Math.random()*nounArray.length);
    let firstNoun = nounArray[nounIndex];
    let secondNoun = nounArray[secondNounIndex];
    finalName = `${firstNoun} ${secondNoun}`;
  }
  return finalName;
}

console.log(createBandName());
