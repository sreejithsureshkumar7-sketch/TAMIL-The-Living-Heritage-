/**
 * Tamil Language & Heritage Data Structures and Classification Engine
 */

export interface TamilLetter {
  char: string;
  name: string;
  transliteration: string;
  category: 'vowel' | 'consonant' | 'combined' | 'aytham';
  subCategory?: 'kuril' | 'nedil' | 'vallinam' | 'mellinam' | 'idaiyinam';
  exampleWord: string;
  exampleMeaning: string;
  audioPhonetic?: string;
  vowelBase?: string;
  consonantBase?: string;
}

export const UYIR_EZHUTHUKAL: TamilLetter[] = [
  { char: 'அ', name: 'அகர உயிர்', transliteration: 'a', category: 'vowel', subCategory: 'kuril', exampleWord: 'அன்பு', exampleMeaning: 'Love / Compassion' },
  { char: 'ஆ', name: 'ஆகார உயிர்', transliteration: 'aa', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஆழ்கடல்', exampleMeaning: 'Deep Ocean' },
  { char: 'இ', name: 'இகர உயிர்', transliteration: 'i', category: 'vowel', subCategory: 'kuril', exampleWord: 'இனியவை', exampleMeaning: 'Sweet Virtues' },
  { char: 'ஈ', name: 'ஈகார உயிர்', transliteration: 'ee', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஈகை', exampleMeaning: 'Generosity / Charity' },
  { char: 'உ', name: 'உகர உயிர்', transliteration: 'u', category: 'vowel', subCategory: 'kuril', exampleWord: 'உண்மை', exampleMeaning: 'Truth / Integrity' },
  { char: 'ஊ', name: 'ஊகார உயிர்', transliteration: 'oo', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஊக்கம்', exampleMeaning: 'Enthusiasm / Drive' },
  { char: 'எ', name: 'எகர உயிர்', transliteration: 'e', category: 'vowel', subCategory: 'kuril', exampleWord: 'எண்ணம்', exampleMeaning: 'Noble Thought' },
  { char: 'ஏ', name: 'ஏகார உயிர்', transliteration: 'ae', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஏற்றம்', exampleMeaning: 'Elevation / Prosperity' },
  { char: 'ஐ', name: 'ஐகார உயிர்', transliteration: 'ai', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஐயம்', exampleMeaning: 'Wonder / Inquisitiveness' },
  { char: 'ஒ', name: 'ஒகர உயிர்', transliteration: 'o', category: 'vowel', subCategory: 'kuril', exampleWord: 'ஒழுக்கம்', exampleMeaning: 'Right Conduct / Discipline' },
  { char: 'ஓ', name: 'ஓகார உயிர்', transliteration: 'oh', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஓவியம்', exampleMeaning: 'Artistic Painting' },
  { char: 'ஔ', name: 'ஔகார உயிர்', transliteration: 'au', category: 'vowel', subCategory: 'nedil', exampleWord: 'ஔடதம்', exampleMeaning: 'Healing Medicine / Remedy' },
];

export const MEI_EZHUTHUKAL: TamilLetter[] = [
  // வல்லினம் (Hard consonants - 6)
  { char: 'க்', name: 'ககர மெய்', transliteration: 'k', category: 'consonant', subCategory: 'vallinam', exampleWord: 'கற்கை', exampleMeaning: 'Lifelong Learning' },
  { char: 'ச்', name: 'சகர மெய்', transliteration: 'ch / s', category: 'consonant', subCategory: 'vallinam', exampleWord: 'செம்மொழி', exampleMeaning: 'Classical Language' },
  { char: 'ட்', name: 'டகர மெய்', transliteration: 't', category: 'consonant', subCategory: 'vallinam', exampleWord: 'பாட்டு', exampleMeaning: 'Poetry / Song' },
  { char: 'த்', name: 'தகர மெய்', transliteration: 'th', category: 'consonant', subCategory: 'vallinam', exampleWord: 'தமிழ்', exampleMeaning: 'Tamil / Sweetness / Heritage' },
  { char: 'ப்', name: 'பகர மெய்', transliteration: 'p', category: 'consonant', subCategory: 'vallinam', exampleWord: 'பண்பாடு', exampleMeaning: 'Culture and Civility' },
  { char: 'ற்', name: 'றகர மெய்', transliteration: 'tr / r', category: 'consonant', subCategory: 'vallinam', exampleWord: 'அறிவு', exampleMeaning: 'Wisdom / Knowledge' },

  // மெல்லினம் (Soft nasal consonants - 6)
  { char: 'ங்', name: 'ஙகர மெய்', transliteration: 'ng', category: 'consonant', subCategory: 'mellinam', exampleWord: 'சங்கு', exampleMeaning: 'Sacred Conch' },
  { char: 'ஞ்', name: 'ஞகர மெய்', transliteration: 'ny', category: 'consonant', subCategory: 'mellinam', exampleWord: 'ஞாயிறு', exampleMeaning: 'Radiant Sun' },
  { char: 'ண்', name: 'ணகர மெய்', transliteration: 'n (retroflex)', category: 'consonant', subCategory: 'mellinam', exampleWord: 'கண்', exampleMeaning: 'Vision / Inner Eye' },
  { char: 'ந்', name: 'நகர மெய்', transliteration: 'n (dental)', category: 'consonant', subCategory: 'mellinam', exampleWord: 'நன்றி', exampleMeaning: 'Gratitude' },
  { char: 'ம்', name: 'மகர மெய்', transliteration: 'm', category: 'consonant', subCategory: 'mellinam', exampleWord: 'மலர்', exampleMeaning: 'Blossom' },
  { char: 'ன்', name: 'னகர மெய்', transliteration: 'n (alveolar)', category: 'consonant', subCategory: 'mellinam', exampleWord: 'பொன்', exampleMeaning: 'Gold' },

  // இடையினம் (Medial consonants - 6)
  { char: 'ய்', name: 'யகர மெய்', transliteration: 'y', category: 'consonant', subCategory: 'idaiyinam', exampleWord: 'யானை', exampleMeaning: 'Majestic Elephant' },
  { char: 'ர்', name: 'ரகர மெய்', transliteration: 'r', category: 'consonant', subCategory: 'idaiyinam', exampleWord: 'வரலாறு', exampleMeaning: 'History' },
  { char: 'ல்', name: 'லகர மெய்', transliteration: 'l', category: 'consonant', subCategory: 'idaiyinam', exampleWord: 'கல்வி', exampleMeaning: 'Education' },
  { char: 'வ்', name: 'வகர மெய்', transliteration: 'v', category: 'consonant', subCategory: 'idaiyinam', exampleWord: 'வான்', exampleMeaning: 'Sky / Cosmos' },
  { char: 'ழ்', name: 'ழகர மெய்', transliteration: 'zh (retroflex approximant)', category: 'consonant', subCategory: 'idaiyinam', exampleWord: 'வாழ்வு', exampleMeaning: 'Life in Harmony' },
  { char: 'ள்', name: 'ளகர மெய்', transliteration: 'l (retroflex)', category: 'consonant', subCategory: 'idaiyinam', exampleWord: 'ஒளி', exampleMeaning: 'Illuminating Light' },
];

export const AYTHAM_EZHUTHU: TamilLetter = {
  char: 'ஃ',
  name: 'ஆய்த எழுத்து (தனிநிலை)',
  transliteration: 'ak',
  category: 'aytham',
  exampleWord: 'எஃகு',
  exampleMeaning: 'Tempered Steel / Armour',
};

// Consonant pure root characters (without pulli)
const CONSONANT_ROOTS = ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'];

// Diacritics markers for 12 vowels applied to consonants:
// அ (inherent), ஆ (ா), இ (ி), ஈ (ீ), உ, ஊ, எ (ெ), ஏ (ே), ஐ (ை), ஒ (ொ), ஓ (ோ), ஔ (ௌ)
const VOWEL_DIACRITICS: { [key: string]: (root: string) => string } = {
  'அ': (root) => root,
  'ஆ': (root) => root + 'ா',
  'இ': (root) => root + 'ி',
  'ஈ': (root) => root + 'ீ',
  'உ': (root) => {
    // Tamil special u diacritics
    const uMap: { [k: string]: string } = {
      'க': 'கு', 'ங': 'ஙு', 'ச': 'சு', 'ஞ': 'ஞு', 'ட': 'டு', 'ண': 'ணு',
      'த': 'து', 'ந': 'நு', 'ப': 'பு', 'ம': 'மு', 'ய': 'யு', 'ர': 'ரு',
      'ல': 'லு', 'வ': 'வு', 'ழ': 'ழு', 'ள': 'ளு', 'ற': 'று', 'ன': 'னு'
    };
    return uMap[root] || root + 'ு';
  },
  'ஊ': (root) => {
    const ooMap: { [k: string]: string } = {
      'க': 'கூ', 'ங': 'ஙூ', 'ச': 'சூ', 'ஞ': 'ஞூ', 'ட': 'டூ', 'ண': 'ணூ',
      'த': 'தூ', 'ந': 'நூ', 'ப': 'பூ', 'ம': 'மூ', 'ய': 'யூ', 'ர': 'ரூ',
      'ல': 'லூ', 'வ': 'வூ', 'ழ': 'ழூ', 'ள': 'ளூ', 'ற': 'றூ', 'ன': 'னூ'
    };
    return ooMap[root] || root + 'ூ';
  },
  'எ': (root) => 'ெ' + root,
  'ஏ': (root) => 'ே' + root,
  'ஐ': (root) => 'ை' + root,
  'ஒ': (root) => 'ொ' + root, // commonly formatted as ெ + root + ா
  'ஓ': (root) => 'ோ' + root,
  'ஔ': (root) => 'ௌ' + root,
};

// Generate 216 Uyirmei characters accurately
export function generateUyirmeiEzhuthukal(): TamilLetter[] {
  const result: TamilLetter[] = [];
  const vowels = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'];
  
  for (let cIdx = 0; cIdx < MEI_EZHUTHUKAL.length; cIdx++) {
    const mei = MEI_EZHUTHUKAL[cIdx];
    const root = CONSONANT_ROOTS[cIdx];
    
    for (let vIdx = 0; vIdx < vowels.length; vIdx++) {
      const v = vowels[vIdx];
      let combinedChar = '';
      if (v === 'அ') combinedChar = root;
      else if (v === 'ஆ') combinedChar = root + 'ா';
      else if (v === 'இ') combinedChar = root + 'ி';
      else if (v === 'ஈ') combinedChar = root + 'ீ';
      else if (v === 'உ') combinedChar = VOWEL_DIACRITICS['உ'](root);
      else if (v === 'ஊ') combinedChar = VOWEL_DIACRITICS['ஊ'](root);
      else if (v === 'எ') combinedChar = 'ெ' + root;
      else if (v === 'ஏ') combinedChar = 'ே' + root;
      else if (v === 'ஐ') combinedChar = 'ை' + root;
      else if (v === 'ஒ') combinedChar = 'ெ' + root + 'ா';
      else if (v === 'ஓ') combinedChar = 'ே' + root + 'ா';
      else if (v === 'ஔ') combinedChar = 'ெ' + root + 'ௗ';

      result.push({
        char: combinedChar,
        name: `${mei.char} + ${v} = ${combinedChar}`,
        transliteration: `${mei.transliteration}${vIdx === 0 ? 'a' : vowels[vIdx]}`,
        category: 'combined',
        vowelBase: v,
        consonantBase: mei.char,
        exampleWord: `${combinedChar}...`,
        exampleMeaning: `Combined syllable (${mei.char} + ${v})`,
      });
    }
  }
  return result;
}

export function getLetterStats() {
  const uyir = UYIR_EZHUTHUKAL.length; // 12
  const mei = MEI_EZHUTHUKAL.length;   // 18
  const uyirmei = generateUyirmeiEzhuthukal().length; // 216
  const aytham = 1; // 1
  const total = uyir + mei + uyirmei + aytham; // 247
  return { uyir, mei, uyirmei, aytham, total };
}

// Classical Literature Data
export interface LiteratureItem {
  id: string;
  tamilTitle: string;
  englishTitle: string;
  era: string;
  significance: string;
  keyFeature: string;
  detailedAnalysis: string;
  sampleVerseTamil: string;
  sampleVerseTranslit: string;
  sampleVerseMeaning: string;
  authorOrCompilation: string;
  tags: string[];
}

export const CLASSICAL_LITERATURE: LiteratureItem[] = [
  {
    id: 'sangam',
    tamilTitle: 'சங்க இலக்கியம்',
    englishTitle: 'Sangam Literature (Classical Anthologies)',
    era: 'கி.மு. 300 – கி.பி. 300 (பொ.ஆ.மு. 300 – பொ.ஆ. 300)',
    significance: 'பண்டைய தமிழரின் இயற்கையோடு இயைந்த வாழ்வியல், அகம் மற்றும் புறம் சார்ந்த வாழ்நெறி.',
    keyFeature: 'எட்டுத்தொகையும் பத்துப்பாட்டும் கொண்ட ஐந்திணை (குறிஞ்சி, முல்லை, மருதம், நெய்தல், பாலை) நிலப் பாகுபாடு.',
    detailedAnalysis: 'சங்க இலக்கியம் என்பது தமிழ்மொழியின் செம்மொழித் தகுதிக்கான அச்சாணி. எட்டுத்தொகை (நற்றிணை, குறுந்தொகை, ஐங்குறுநூறு, பதிற்றுப்பத்து, பரிபாடல், கலித்தொகை, அகநானூறு, புறநானூறு) மற்றும் பத்துப்பாட்டு ஆகியன இதில் அடங்கும். ஐந்திணைக் கோட்பாட்டின் மூலம் நிலம், காலம், மக்களின் உணர்வுகள் ஆகியவற்றை இயற்கையின் பின்னணியில் வடித்த ஒப்பற்ற செவ்வியல் கவிதைப் பேழை.',
    sampleVerseTamil: 'யாதும் ஊரே யாவரும் கேளிர்;\nதீதும் நன்றும் பிறர்தர வாரா;\nநோதலும் தணிதலும் அவற்றோ ரன்ன;\nசாதலும் புதுவது அன்றே...',
    sampleVerseTranslit: 'Yaadhum Oore Yaavarum Kelir;\nTheedhum Nandrum Pirarthara Vaaraa;\nNodhalum Thanidhalum Avattro Ranna;\nSaadhalum Puthuvathu Andre...',
    sampleVerseMeaning: '"To us all towns are one, all humans our kin; Good and evil come not from others; Pain and relief are similarly of our own; And death is nothing new." — Kaniyan Poongundranar (Purananuru 192)',
    authorOrCompilation: 'கணியன் பூங்குன்றனார் உள்ளிட்ட 473 புலவர்கள்',
    tags: ['அகப்பொருள்', 'புறப்பொருள்', 'எட்டுத்தொகை', 'பத்துப்பாட்டு', 'ஐந்திணை']
  },
  {
    id: 'thirukkural',
    tamilTitle: 'திருக்குறள்',
    englishTitle: 'Thirukkural — The Universal Veda of Ethics',
    era: 'பொ.ஆ.மு. 1-ஆம் நூற்றாண்டு / பொ.ஆ. 5-ஆம் நூற்றாண்டுக்கு முற்பட்டது',
    significance: 'மதம், இனம், மொழி கடந்து உலக மக்கள் அனைவருக்கும் பொதுவான அறநெறி புகட்டும் உலகப் பொதுமறை.',
    keyFeature: '133 அதிகாரங்கள், 1330 குறட்பாக்கள்; முப்பால்: அறத்துப்பால் (38), பொருட்பால் (70), காமத்துப்பால் (25).',
    detailedAnalysis: 'தெய்வப்புலவர் திருவள்ளுவரால் இயற்றப்பட்ட திருக்குறள், மனித வாழ்வின் உன்னத விழுமியங்களை ஈரேழ் சீர்களில் இரத்தினச் சுருக்கமாக இயம்புகிறது. எந்தவொரு கடவுளையோ, மதத்தையோ, குறிப்பிட்ட நாட்டையோ சுட்டாமல் மனித நேயத்தையும், நேர்மையான அரசியலையும், அன்பான குடும்ப வாழ்வையும் முன்வைக்கும் உலகளாவிய இலக்கியம்.',
    sampleVerseTamil: 'அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.',
    sampleVerseTranslit: 'Agara Mudhala Ezhuththellam Aadhi\nBagavan Mudhattre Ulagu.',
    sampleVerseMeaning: '"As the letter "A" is the first of all letters, so the Primordial One is foremost in all the cosmos." — Kural 1',
    authorOrCompilation: 'திருவள்ளுவர் (Thiruvalluvar)',
    tags: ['அறம்', 'பொருள்', 'இன்பம்', 'உலகப் பொதுமறை', 'முப்பால்']
  },
  {
    id: 'silappathikaram',
    tamilTitle: 'சிலப்பதிகாரம்',
    englishTitle: 'Silappathikaram — The Epic of the Ankle Bracelet',
    era: 'பொ.ஆ. 2-ஆம் நூற்றாண்டு (சங்க மருவிய காலம்)',
    significance: 'தமிழின் முதற் பெருங்காப்பியம். நீதி வழுவிய மன்னனுக்கு எதிராக ஒரு சாதாரணப் பெண் கண்ணகி நிகழ்த்திய அறச்சீற்றம்.',
    keyFeature: 'முப்பெரும் உண்மைகள்: "அரசியல் பிழைத்தோர்க்கு அறங்கூற்றாவதூஉம், உரைசால் பத்தினிக்க உயர்ந்தோர் ஏத்தலும், ஊழ்வினை உருத்துவந்து ஊட்டும் என்பதும்."',
    detailedAnalysis: 'சேர மன்னன் சேரன் செங்குட்டுவனின் தம்பியான இளங்கோவடிகளால் இயற்றப்பட்ட முத்தமிழ்க் காப்பியம் (இயல், இசை, நாடகம் ஒருங்கிணைந்தது). புகார் காண்டம் (சோழ நாடு), மதுரைக் காண்டம் (பாண்டிய நாடு), வஞ்சிக் காண்டம் (சேர நாடு) என மூவேந்தர் நிலங்களையும் இணைக்கும் தேசிய ஒருமைப்பாட்டுக் காப்பியம்.',
    sampleVerseTamil: 'திங்களைப் போற்றுதும் திங்களைப் போற்றுதும்;\nஞாயிறு போற்றுதும் ஞாயிறு போற்றுதும்;\nமாமழை போற்றுதும் மாமழை போற்றுதும்...',
    sampleVerseTranslit: 'Thingalai Potrruthum Thingalai Potrruthum;\nNjaayiru Potrruthum Njaayiru Potrruthum;\nMaamazhai Potrruthum Maamazhai Potrruthum...',
    sampleVerseMeaning: '"Praise be to the Moon that grants cool grace; Praise be to the Sun that turns across the golden peaks; Praise be to the Great Rain that nourishes the world!" — Ilango Adigal',
    authorOrCompilation: 'இளங்கோவடிகள் (Ilango Adigal)',
    tags: ['ஐம்பெருங்காப்பியங்கள்', 'கண்ணகி', 'முத்தமிழ்', 'அறம்']
  },
  {
    id: 'manimekalai',
    tamilTitle: 'மணிமேகலை',
    englishTitle: 'Manimekalai — The Epic of Compassion & Logic',
    era: 'பொ.ஆ. 2-6 ஆம் நூற்றாண்டு',
    significance: 'பசிப்பிணி நீக்கும் அறச்செயலையும் பௌத்த தத்துவ தருக்க நெறியையும் முன்வைத்த காப்பியம்.',
    keyFeature: 'ஆபுத்திரன் கை அமுதசுரபியும், உலகத்து உயிர்களின் பசி துடைத்தலும்; பெண்கல்வி மற்றும் துறவு.',
    detailedAnalysis: 'சீத்தலைச் சாத்தனார் இயற்றிய மணிமேகலை, சிலப்பதிகாரத்தின் தொடர்ச்சியாகக் கருதப்படுகிறது. கோவலன்-மாதவியின் மகளான மணிமேகலை உலக இன்பங்களைத் துறந்து, "அமுதசுரபி" பாத்திரம் ஏந்தி மாந்தரின் பசிப்பிணி தீர்க்கும் பேரறத்தைத் தன் வாழ்வின் லட்சியமாகக் கொண்ட உன்னதக் காப்பியம்.',
    sampleVerseTamil: 'உண்டி கொடுத்தோர் உயிர் கொடுத்தோரே!\nஉண்டி முதற்றே உணவின் பிண்டம்;\nஉணவெனப் படுவது நிலத்தொடு நீரே...',
    sampleVerseTranslit: 'Undi Kodutthor Uyir Koduthore!\nUndi Mudhattre Unavin Pindam;\nUnavena Paduvathu Nilatthodu Neere...',
    sampleVerseMeaning: '"Those who give food give life itself! For the body is built upon food, and food is but water marrying the fertile earth." — Seethalai Saathanar',
    authorOrCompilation: 'மதுரை கூலவாணிகன் சீத்தலைச் சாத்தனார்',
    tags: ['அமுதசுரபி', 'பசிப்பிணி மருத்துவம்', 'தத்துவம்', 'அறம்']
  },
  {
    id: 'bhakti',
    tamilTitle: 'பக்தி இலக்கியம்',
    englishTitle: 'Bhakti Literature (Alvars & Nayanmars)',
    era: 'பொ.ஆ. 6 – 10-ஆம் நூற்றாண்டு',
    significance: 'இசையும் உணர்ச்சியும் கலந்த எளிய தமிழ் நடையில் இறைவனை அணுகிய பண்பாட்டு மறுமலர்ச்சி இயக்கம்.',
    keyFeature: 'பன்னிரு திருமுறைகள் (தேவாரம், திருவாசகம்), நாலாயிர திவ்வியப் பிரபந்தம் (திருவாய்மொழி).',
    detailedAnalysis: 'சைவ சமயக் குரவர்களான அப்பர், சம்பந்தர், சுந்தரர், மாணிக்கவாசகர் உள்ளிட்ட நாயன்மார்களும், ஆண்டாள், நம்மாழ்வார் உள்ளிட்ட பன்னிரு ஆழ்வார்களும் தோற்றுவித்த பக்தி இயக்கம் தமிழகத்தின் கலை, சிற்பம், இசையை உச்சத்திற்குக் கொண்டு சென்றது.',
    sampleVerseTamil: 'சொற்றுணை வேதியன் சோதி வானவன்\nபொற்றுணைத் திருந்தடி பொருந்தக் கைதொழக்\nகற்றுணைப் பூட்டியோர் கடலிற்பாய்ச்சினும்\nநற்றுணையாவது நமச்சிவாயவே.',
    sampleVerseTranslit: 'Sottrunai Vedhiyan Sodhi Vaanavan\nPottrunait Thirundhadi Porundhak Kaithozha\nKattrunaip Poottiyor Kadalirp Paaichinum\nNatrttrunai Yaavadhu Namachivaayave.',
    sampleVerseMeaning: '"Even if tied to a heavy stone and cast into the raging ocean, the sacred five syllables remain my steadfast haven and savior." — Appar (Thirunavukkarasar)',
    authorOrCompilation: 'நாயன்மார்கள் & ஆழ்வார்கள்',
    tags: ['தேவாரம்', 'திருவாசகம்', 'திவ்வியப் பிரபந்தம்', 'ஆண்டாள்', 'இன்னிசை']
  },
  {
    id: 'modern',
    tamilTitle: 'நவீன தமிழ் இலக்கியம்',
    englishTitle: 'Modern Tamil Literature & Renaissance',
    era: '19-ஆம் நூற்றாண்டு முதல் தற்காலம் வரை',
    significance: 'விடுதலை வேட்கை, சமூக சீர்திருத்தம், புதுக்கவிதை, சிறுகதை, நாவல் மற்றும் உலகளாவிய புலம்பெயர் எழுத்துகள்.',
    keyFeature: 'பாரதியார், பாரதிதாசன், புதுமைப்பித்தன், கல்கி, ஜெயகாந்தன் முதல் இன்றைய நவீன ஈழத்து/புலம்பெயர் இலக்கியம் வரை.',
    detailedAnalysis: 'மகாகவி சுப்பிரமணிய பாரதியாரின் எளிய புதிய தமிழ் நடையோடு நவீன இலக்கியம் மலர்ந்தது. பெண்ணுரிமை, சாதி ஒழிப்பு, சமத்துவம் பாடிய புரட்சிக்கவிஞர் பாரதிதாசன், தமிழ் சிறுகதையின் முன்னோடியான புதுமைப்பித்தன், வரலாற்று நாவல்களின் தந்தை கல்கி ஆகியோர் புதிய பரிமாணங்களை அளித்தனர்.',
    sampleVerseTamil: 'சென்றிடுவீர் எட்டுத் திக்கும் — கலைச்\nசெல்வங்கள் யாவும் கொணர்ந்திங்கு சேர்ப்பீர்!\nபிறநாட்டு நல்லறிஞர் சாத்திரங்கள்\nதமிழ்மொழியிற் பெயர்த்தல் வேண்டும்.',
    sampleVerseTranslit: 'Sendriduveer Ettuth Thikkum — Kalaic\nSelvangal Yaavum Konarnthingu Serppeer!\nPiranattu Nallarignar Saathirangal\nTamilmozhiyil Peyartthal Vendum.',
    sampleVerseMeaning: '"Venture forth in all eight directions — bring home every treasure of art and wisdom! Translate into Tamil the scholarly sciences of the world." — Mahakavi Subramania Bharati',
    authorOrCompilation: 'பாரதியார், புதுமைப்பித்தன், கல்கி, ஜெயகாந்தன் & நவீன எழுத்தாளர்கள்',
    tags: ['புதுக்கவிதை', 'சிறுகதை', 'நாவல்', 'விடுதலை வேட்கை', 'சமூக விழிப்புணர்வு']
  }
];

// Historical Milestones
export interface HistoricalMilestone {
  yearOrEra: string;
  tamilEraTitle: string;
  englishTitle: string;
  theme: 'inscription' | 'literature' | 'empire' | 'architecture' | 'maritime' | 'manuscripts' | 'modern';
  summaryTamil: string;
  summaryEnglish: string;
  archaeologicalFact: string;
  iconName: string;
}

export const TAMIL_HISTORICAL_TIMELINE: HistoricalMilestone[] = [
  {
    yearOrEra: 'பொ.ஆ.மு. 6-ஆம் நூற்றாண்டுக்கு முற்பட்டது',
    tamilEraTitle: 'கீழடி & பொருந்தல் நாகரிகம் (வைகை நதிக்கரை)',
    englishTitle: 'Keeladi & Porunthal Urban Civilization',
    theme: 'inscription',
    summaryTamil: 'கீழடி உள்ளிட்ட வைகைக் கரையில் செழித்த நகர நாகரிகம். எழுத்தறிவு பெற்ற மக்கள், தொழிற்கூடங்கள், ஆடை நெசவு மற்றும் பானை ஓடுகளில் பொறிக்கப்பட்ட தமிழ்-பிராமி எழுத்துகள்.',
    summaryEnglish: 'Archaeological excavations at Keeladi demonstrate an advanced literate urban civilization dating back to ~6th century BCE along the Vaigai river basin.',
    archaeologicalFact: 'கார்பன்-14 அறிவியல் காலக்கணிப்பின்படி கீழடி சுடுமண் பொருட்களும் தமிழ்-பிராமி கீறல்களும் கி.மு. 580-ஐச் சேர்ந்தவை என உறுதிப்படுத்தப்பட்டுள்ளன.',
    iconName: 'Landmark'
  },
  {
    yearOrEra: 'பொ.ஆ.மு. 300 – பொ.ஆ. 300',
    tamilEraTitle: 'சங்க காலம் — முச்சங்கப் பொற்காலம்',
    englishTitle: 'The Sangam Era — Three Classical Academies',
    theme: 'literature',
    summaryTamil: 'தென்மதுரை, கபாடபுரம், மதுரை ஆகிய இடங்களில் முச்சங்கம் கூடி தமிழ் வளர்த்த காலம். எட்டுத்தொகை, பத்துப்பாட்டு மற்றும் தொல்காப்பிய இலக்கண உருவாக்கம்.',
    summaryEnglish: 'The age of classical poetry, celebrated assembly of poets, grammar synthesis in Tolkappiyam, and flourishing maritime ports like Poompuhar and Muziris.',
    archaeologicalFact: 'தொல்காப்பியம் உலகின் மிகத் தொன்மையான முழுமையான இலக்கண நூல்களில் ஒன்றாகும், இது மொழியை மட்டுமன்றி தமிழரின் வாழ்க்கை இலக்கணத்தையும் வகுத்தது.',
    iconName: 'Scroll'
  },
  {
    yearOrEra: 'பொ.ஆ. 300 – 900',
    tamilEraTitle: 'பல்லவர் மற்றும் முற்காலப் பாண்டியர் கலை',
    englishTitle: 'Pallava Rock-Cut & Early Pandya Era',
    theme: 'architecture',
    summaryTamil: 'மாமல்லபுரக் குடவரை மற்றும் கற்றளிக் கோயில்கள்; தேவாரம், திருவாசகம், திவ்வியப் பிரபந்தங்கள் எழுந்த பக்தி இயக்கக் காலம்.',
    summaryEnglish: 'The genesis of monumental stone architecture, Mahabalipuram shore temples, and the profound devotional literature revolution.',
    archaeologicalFact: 'மகேந்திரவர்ம பல்லவன் காலத்தில் மரமும் சுண்ணமும் இன்றி பாறைகளைக் குடைந்து அழியா கற்றளிகள் எழுப்பும் முறை தொடங்கியது.',
    iconName: 'Castle'
  },
  {
    yearOrEra: 'பொ.ஆ. 850 – 1280',
    tamilEraTitle: 'பேரரசுச் சோழர் பொற்காலம் & கடல்சார் வணிகம்',
    englishTitle: 'Imperial Chola Golden Age & Maritime Thalassocracy',
    theme: 'maritime',
    summaryTamil: 'இராஜராஜ சோழன், இராஜேந்திர சோழன் தலைமையில் கடல் கடந்து இலங்கை, கடாரம் (மலேசியா), ஸ்ரீவிஜயம் (இந்தோனேசியா) வரை பரவிய தமிழ் ஆதிக்கம் மற்றும் தஞ்சைப் பெருவுடையார் கோயில்.',
    summaryEnglish: 'The zenith of Tamil architectural engineering (Brihadisvara Temple) and naval expeditions across Southeast Asia, establishing trade links with Song China.',
    archaeologicalFact: 'தஞ்சைப் பெருவுடையார் கோயிலின் 80 டன் ஒற்றைக்கல் விமானக் கலசம் மற்றும் உலகப்புகழ் பெற்ற சோழர் வெண்கலத் திருமேனிகள் (நடராஜர்).',
    iconName: 'Compass'
  },
  {
    yearOrEra: 'பொ.ஆ. 14 – 18-ஆம் நூற்றாண்டு',
    tamilEraTitle: 'ஏட்டுச்சுவடிகள் & நாயக்கர் கால இலக்கியம்',
    englishTitle: 'Palm-Leaf Manuscripts & Saraswathi Mahal',
    theme: 'manuscripts',
    summaryTamil: 'பனை ஓலைகளில் எழுத்தாணி கொண்டு இலக்கண, மருத்துவ, சோதிட நூல்களைப் பாதுகாத்த நற்பணி. சரசுவதி மகால் நூலகத்தின் வளர்ச்சி.',
    summaryEnglish: 'Careful preservation of classical Tamil lore, Siddha medicine, and grammar on cured palm leaves (Olaichuvadi) through guru-sishya lineage.',
    archaeologicalFact: 'உ.வே. சாமிநாதையர் (தமிழ்த்தாத்தா) கிராமம் கிராமமாகச் சென்று செல்லரித்த ஓலைச்சுவடிகளைத் தேடிக் கண்டெடுத்து அச்சு வாகனமேற்றினார்.',
    iconName: 'BookOpen'
  },
  {
    yearOrEra: 'பொ.ஆ. 1800 – தற்காலம்',
    tamilEraTitle: 'அச்சு ஊடக மறுமலர்ச்சி & செம்மொழி அங்கீகாரம்',
    englishTitle: 'Print Renaissance & Global Classical Language Status',
    theme: 'modern',
    summaryTamil: 'அச்சு இயந்திர வருகை, தமிழ்ப் பல்கலைக்கழகங்கள் உருவாக்கம், நவீன இலக்கியம் மற்றும் இந்திய அரசால் முதன்முதலாக 2004-ல் "செம்மொழி" என அறிவிக்கப்பட்ட பெருமை.',
    summaryEnglish: 'The modern printing of Sangam works, linguistic renaissance, UNESCO recognition, and formal declaration as India’s first Classical Language in 2004.',
    archaeologicalFact: 'தமிழ்மொழி 2004-ஆம் ஆண்டு அக்டோபர் 12 அன்று இந்திய அரசால் முதல் செம்மொழியாக (Classical Language) அதிகாரப்பூர்வமாகப் பிரகடனம் செய்யப்பட்டது.',
    iconName: 'Award'
  }
];

// Cultural Showcase Elements
export interface CultureShowcase {
  id: string;
  tamilName: string;
  englishTitle: string;
  tagline: string;
  description: string;
  visualHighlight: string;
  features: string[];
}

export const TAMIL_CULTURE_SHOWCASE: CultureShowcase[] = [
  {
    id: 'architecture',
    tamilName: 'திராவிடக் கட்டடக் கலை & கோபுரங்கள்',
    englishTitle: 'Dravidian Architecture & Temple Gopurams',
    tagline: 'கல்லில் வடித்த வானளாவிய காவியங்கள்',
    description: 'ஆயிரங்கால் மண்டபங்கள், நுட்பமான சுதை வேலைப்பாடுகள், வானுயர்ந்த இராஜகோபுரங்கள் மற்றும் நிலநடுக்கங்களைத் தாங்கும் தனித்துவமான அஸ்திவார அமைப்பு.',
    visualHighlight: 'தஞ்சைப் பெருவுடையார் கோயில், மதுரை மீனாட்சியம்மன் கோயில் கோபுரங்கள்',
    features: ['விமானம் & கோபுரக் கட்டமைப்பு', 'இசைத் தூண்கள் (Musical Pillars)', 'கருங்கல் சிற்ப நுட்பம்', 'ஆயிரங்கால் மண்டபம்']
  },
  {
    id: 'dance_music',
    tamilName: 'பரதநாட்டியம் & பண்ணிசை மரபு',
    englishTitle: 'Bharatanatyam & Ancient Pann Isai',
    tagline: 'பாவம், ராகம், தாளம் இணைந்த முத்தமிழ் நடனம்',
    description: 'சிலப்பதிகாரத்தில் குறிப்பிடப்படும் மாதவியின் நாட்டிய நன்னூல் மரபும், பழந்தமிழரின் 103 பண்களிலிருந்து கிளைத்த கர்நாடக சங்கீத மூலமும் தமிழரின் ஆன்ம இசை வெளிப்பாடுகள்.',
    visualHighlight: 'முத்திரைகள், அடவுகள், யாழ், குழல், முழவு இன்னிசைக் கருவிகள்',
    features: ['அபிநயம் & முத்திரைகள்', 'சிலப்பதிகார அரங்கேற்று காதை', 'யாழ் மற்றும் தட்டழி', 'தேவாரப் பண்ணிசை']
  },
  {
    id: 'manuscripts_crafts',
    tamilName: 'ஓலைச்சுவடிகளும் வெண்கல வார்ப்புகளும்',
    englishTitle: 'Palm-Leaf Manuscripts & Lost-Wax Bronzes',
    tagline: 'அறிவையும் கலை நுட்பத்தையும் பாதுகாத்த பாரம்பரியம்',
    description: 'பனை மரத்தின் பதப்படுத்தப்பட்ட ஓலைகளில் எழுத்தாணியால் பொறிக்கப்பட்ட அரிய இலக்கண மருத்துவக் களஞ்சியங்களும், மெழுகு வார்ப்பு முறையில் வடிக்கப்பட்ட உலகப் புகழ்பெற்ற சோழர் வெண்கலத் திருமேனிகளும்.',
    visualHighlight: 'ஆனந்த தாண்டவ நடராஜர் சிலை, சரசுவதி மகால் ஏட்டுச்சுவடிகள்',
    features: ['பனை ஓலை பதனிடும் முறை', 'எழுத்தாணி எழுத்து நுட்பம்', 'லாஸ்ட்-வாக்ஸ் வெண்கல வார்ப்பு', 'சித்த மருத்துவ சுவடிகள்']
  },
  {
    id: 'festivals',
    tamilName: 'தமிழர் திருநாளும் வாழ்வியல் விழாக்களும்',
    englishTitle: 'Pongal Harvest & Living Traditional Festivals',
    tagline: 'இயற்கையையும் உழவையும் போற்றும் நன்றித் திருவிழா',
    description: 'தை முதல் நாளில் சூரியனுக்கும் உழவு மாடுகளுக்கும் நன்றி செலுத்தும் தைப்பொங்கல், வீர விளையாட்டான ஏறுதழுவுதல் (ஜல்லிக்கட்டு), மற்றும் சித்திரைத் திருவிழா.',
    visualHighlight: 'புதிய மண்பானையில் பொங்கும் வெண்பொங்கல், அலங்கரித்த காளைகள்',
    features: ['இயற்கை வழிபாடு', 'உழவர் பெருமை', 'வீர விளையாட்டு (ஏறுதழுவுதல்)', 'மண்பானைக் கலை']
  }
];

// College Department Information Configuration (Fully editable)
export interface CollegeDeptConfig {
  collegeNameTamil: string;
  collegeNameEnglish: string;
  deptNameTamil: string;
  deptNameEnglish: string;
  establishedYear: string;
  mottoTamil: string;
  mottoEnglish: string;
  hodName: string;
  hodQualification: string;
  introTextTamil: string;
  introTextEnglish: string;
  objectives: string[];
  degreesOffered: { code: string; title: string; duration: string; level: string }[];
  contactEmail: string;
  contactPhone: string;
  collegeWebsite: string;
  addressTamil: string;
  addressEnglish: string;
}

export const DEFAULT_COLLEGE_DEPT_CONFIG: CollegeDeptConfig = {
  collegeNameTamil: 'அரசுக் கலை மற்றும் அறிவியல் கல்லூரி (தன்னாட்சி)',
  collegeNameEnglish: 'Government Arts & Science College (Autonomous)',
  deptNameTamil: 'முதுகலை மற்றும் தமிழாய்வுத் துறை',
  deptNameEnglish: 'Postgraduate & Research Department of Tamil',
  establishedYear: '1968',
  mottoTamil: 'தமிழை அறிதல், மரபைக் காத்தல், மானுடம் போற்றுதல்',
  mottoEnglish: 'Learning Tamil, Preserving Heritage, Celebrating Humanity',
  hodName: 'முனைவர் க. செழியன், எம்.ஏ., எம்.பில்., பிஎச்.டி.',
  hodQualification: 'பேராசிரியர் & தமிழ்த்துறைத் தலைவர் (30+ ஆண்டுகள் ஆய்வுப் பணி)',
  introTextTamil: 'எங்கள் தமிழ்த்துறை ஐம்பதாண்டுகளுக்கும் மேலாகச் செம்மொழித் தமிழின் தொன்மையையும், சங்க இலக்கியத்தின் மாண்பையும், நவீன இலக்கியப் போக்குகளையும் இளம் தலைமுறையினருக்கு ஆழமாகக் கற்பித்து வருகிறது. பண்பாட்டுப் பாதுகாப்பு, ஓலைச்சுவடி பாதுகாப்புப் பயிற்சி, கல்வெட்டியல் ஆய்வுகள் மற்றும் இலக்கியப் பட்டறைகள் வாயிலாக மாணவர்களைச் சிறந்த ஆய்வாளர்களாகவும் சமூக விழிப்புணர்வு கொண்டோராகவும் உருவாக்குவதே எங்கள் தலையாய நோக்கம்.',
  introTextEnglish: 'For over half a century, our Department of Tamil has been dedicated to cultivating deep scholarship in classical Sangam literature, epigraphy, linguistics, and contemporary literature. We foster research excellence through specialized manuscriptology workshops, field epigraphy expeditions, and comparative literature seminars.',
  objectives: [
    'செம்மொழித் தமிழின் தொன்மை இலக்கண, இலக்கியப் படைப்புகளை அறிவியல் கண்ணோட்டத்தோடு பயிற்றுவித்தல்.',
    'பண்டைய கல்வெட்டுகள் மற்றும் ஓலைச்சுவடிகளைப் படித்து ஆராயும் களப்பயிற்சி வழங்குதல்.',
    'மாணவர்களிடம் தமிழ் மேடைப்பேச்சு, கவிதை, சிறுகதை ஆக்கத் திறன்களை வளர்த்தெடுத்தல்.',
    'கணினித் தமிழ், தமிழ் இணையப் பயன்பாடுகள் மற்றும் நவீன மொழிபெயர்ப்பியல் துறைகளில் நிபுணத்துவம் அளித்தல்.'
  ],
  degreesOffered: [
    { code: 'B.A.', title: 'இளங்கலைத் தமிழ் (B.A. Tamil)', duration: '3 ஆண்டுகள்', level: 'இளநிலை' },
    { code: 'M.A.', title: 'முதுகலைத் தமிழ் (M.A. Tamil)', duration: '2 ஆண்டுகள்', level: 'முதுநிலை' },
    { code: 'M.Phil.', title: 'ஆய்வியல் நிறைஞர் (M.Phil. Tamil)', duration: '1 ஆண்டு', level: 'ஆய்வு' },
    { code: 'Ph.D.', title: 'முனைவர் பட்ட ஆய்வு (Ph.D. in Tamil)', duration: '3-5 ஆண்டுகள்', level: 'முனைவர்' }
  ],
  contactEmail: 'tamil.dept@college-heritage.edu',
  contactPhone: '+91 44 2854 1968',
  collegeWebsite: 'https://college-heritage.edu/tamil-dept',
  addressTamil: 'பாரதி அரங்கம், தமிழாய்வுத் துறை, கல்லூரி வளாகம், சென்னை, தமிழ்நாடு — 600005',
  addressEnglish: 'Bharathi Block, Dept. of Tamil, College Campus, Chennai, Tamil Nadu — 600005'
};
