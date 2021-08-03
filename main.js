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
'mustachioed','wasted','snockered','drunk','toinkered','flying','pretentious','superfluous']

const adverbArray = ['somewhat','inadvertantly','slightly','mostly','overly','socially','technically','partially','absurdly','undoubtedly','possibly','understandably','marginally',
'morbidly','exceedingly','nonchalantly','scarily','frighteningly','sort of','absolutely','totally','non']

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
    'whippersnapper', 'dipthong', 'fisticuffs','rascal'
  ]

const createBandName = () => {
  let modifier;
  let adjectiveIndex = Math.floor(Math.random()*adjectiveArray.length);
  let nounIndex = Math.floor(Math.random()*nounArray.length);
  let adverbIndex = Math.floor(Math.random()*adverbArray.length);
  let selector = Math.floor(Math.random()*100);
  let simpleName = `${adjectiveArray[adjectiveIndex]} ${nounArray[nounIndex]}`;
  let finalName = `${simpleName}`;
  if (selector < 40) {
    modifier = '';
  } else if (selector < 70) {
    modifier = 'The';
    let newNoun = nounArray[nounIndex];
    // simpleName = `${adjectiveArray[adjectiveIndex]} ${pluralize(newNoun)}`;
    finalName = `${modifier} ${finalName}s`;
  } else if (selector < 100) {
    modifier = adverbArray[adverbIndex];
    finalName = `${modifier} ${finalName}`;
  } else if (selector == 100) {
    let secondNounIndex = Math.floor(Math.random()*nounArray.length);
    finalName = `${nounArray[nounIndex]} ${nounArray[secondNounIndex]}`;
  }
  return finalName;
}

console.log(createBandName());