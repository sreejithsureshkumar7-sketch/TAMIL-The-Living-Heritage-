import test from 'node:test';
import assert from 'node:assert/strict';
import {
  UYIR_EZHUTHUKAL,
  MEI_EZHUTHUKAL,
  AYTHAM_EZHUTHU,
  generateUyirmeiEzhuthukal,
  getLetterStats,
  CLASSICAL_LITERATURE,
  TAMIL_HISTORICAL_TIMELINE,
  DEFAULT_COLLEGE_DEPT_CONFIG
} from './tamilData';

test('Tamil Alphabet counts and standard composition match 247 letters', () => {
  assert.equal(UYIR_EZHUTHUKAL.length, 12, 'Must have exactly 12 vowels (உயிரெழுத்துகள்)');
  assert.equal(MEI_EZHUTHUKAL.length, 18, 'Must have exactly 18 consonants (மெய்யெழுத்துகள்)');
  assert.equal(AYTHAM_EZHUTHU.char, 'ஃ', 'Aytham character must be ஃ');

  const uyirmei = generateUyirmeiEzhuthukal();
  assert.equal(uyirmei.length, 216, 'Must generate exactly 216 combined syllables (18 * 12)');

  const stats = getLetterStats();
  assert.equal(stats.total, 247, 'Total Tamil characters must equal 247');
});

test('Consonants are partitioned into Vallinam, Mellinam, and Idaiyinam (6 each)', () => {
  const vallinam = MEI_EZHUTHUKAL.filter(m => m.subCategory === 'vallinam');
  const mellinam = MEI_EZHUTHUKAL.filter(m => m.subCategory === 'mellinam');
  const idaiyinam = MEI_EZHUTHUKAL.filter(m => m.subCategory === 'idaiyinam');

  assert.equal(vallinam.length, 6, 'Vallinam must contain 6 letters (க், ச், ட், த், ப், ற்)');
  assert.equal(mellinam.length, 6, 'Mellinam must contain 6 letters (ங், ஞ், ண், ந், ம், ன்)');
  assert.equal(idaiyinam.length, 6, 'Idaiyinam must contain 6 letters (ய், ர், ல், வ், ழ், ள்)');
});

test('Classical Literature covers all required 6 works/eras with verses', () => {
  assert.equal(CLASSICAL_LITERATURE.length, 6, 'Must cover 6 classical literature topics');
  const ids = CLASSICAL_LITERATURE.map(l => l.id);
  assert.ok(ids.includes('sangam'));
  assert.ok(ids.includes('thirukkural'));
  assert.ok(ids.includes('silappathikaram'));
  assert.ok(ids.includes('manimekalai'));
  assert.ok(ids.includes('bhakti'));
  assert.ok(ids.includes('modern'));

  // Each item must have valid Tamil verses and detailed content
  for (const item of CLASSICAL_LITERATURE) {
    assert.ok(item.sampleVerseTamil.length > 5, `Verse present for ${item.id}`);
    assert.ok(item.tamilTitle.length > 0);
  }
});

test('Historical timeline covers Keeladi/inscriptions through modern recognition', () => {
  assert.ok(TAMIL_HISTORICAL_TIMELINE.length >= 6);
  assert.ok(TAMIL_HISTORICAL_TIMELINE[0].summaryTamil.includes('கீழடி'));
  assert.ok(TAMIL_HISTORICAL_TIMELINE[0].tamilEraTitle.includes('கீழடி'));
});

test('College department config has verified initial state with editability', () => {
  assert.ok(DEFAULT_COLLEGE_DEPT_CONFIG.deptNameTamil.includes('தமிழாய்வு') || DEFAULT_COLLEGE_DEPT_CONFIG.deptNameTamil.includes('துறை'));
  assert.ok(DEFAULT_COLLEGE_DEPT_CONFIG.degreesOffered.length >= 3);
  assert.ok(DEFAULT_COLLEGE_DEPT_CONFIG.contactEmail.includes('@'));
});
