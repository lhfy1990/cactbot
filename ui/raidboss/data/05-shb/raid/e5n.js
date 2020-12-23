import Conditions from '../../../../../resources/conditions.js';
import NetRegexes from '../../../../../resources/netregexes.js';
import { Responses } from '../../../../../resources/responses.js';
import ZoneId from '../../../../../resources/zone_id.js';

export default {
  zoneId: ZoneId.EdensVerseFulmination,
  timelineFile: 'e5n.txt',
  triggers: [
    {
      id: 'E5N Surge Protection Gain',
      netRegex: NetRegexes.gainsEffect({ effectId: '8B4' }),
      condition: Conditions.targetIsYou(),
      run: function(data) {
        data.surgeProtection = true;
      },
    },
    {
      id: 'E5N Surge Protection Lose',
      netRegex: NetRegexes.losesEffect({ effectId: '8B4' }),
      condition: Conditions.targetIsYou(),
      run: function(data) {
        data.surgeProtection = false;
      },
    },
    {
      id: 'E5N Crippling Blow',
      netRegex: NetRegexes.startsUsing({ id: '4BA3', source: 'Ramuh' }),
      netRegexDe: NetRegexes.startsUsing({ id: '4BA3', source: 'Ramuh' }),
      netRegexFr: NetRegexes.startsUsing({ id: '4BA3', source: 'Ramuh' }),
      netRegexJa: NetRegexes.startsUsing({ id: '4BA3', source: 'ラムウ' }),
      netRegexKo: NetRegexes.startsUsing({ id: '4BA3', source: '라무' }),
      netRegexCn: NetRegexes.startsUsing({ id: '4BA3', source: '拉姆' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'E5N Stratospear Summons',
      netRegex: NetRegexes.ability({ id: '4B8D', source: 'Ramuh', capture: false }),
      netRegexDe: NetRegexes.ability({ id: '4B8D', source: 'Ramuh', capture: false }),
      netRegexFr: NetRegexes.ability({ id: '4B8D', source: 'Ramuh', capture: false }),
      netRegexJa: NetRegexes.ability({ id: '4B8D', source: 'ラムウ', capture: false }),
      netRegexKo: NetRegexes.ability({ id: '4B8D', source: '라무', capture: false }),
      netRegexCn: NetRegexes.ability({ id: '4B8D', source: '拉姆', capture: false }),
      delaySeconds: 5,
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look for small spear',
          de: 'Halt nach kleinem Speer ausschau',
          fr: 'Allez sur la petite lance',
          cn: '找短矛',
          ko: '작은 지팡이 확인',
        },
      },
    },
    {
      id: 'E5N Tribunal Summons',
      netRegex: NetRegexes.startsUsing({ id: '4B91', source: 'Ramuh', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4B91', source: 'Ramuh', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4B91', source: 'Ramuh', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4B91', source: 'ラムウ', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4B91', source: '라무', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4B91', source: '拉姆', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Look for adds',
          de: 'Halt nach dem Add ausschau',
          fr: 'Cherchez les adds',
          cn: '注意小怪',
          ko: '쫄 위치 확인',
        },
      },
    },
    {
      id: 'E5N Fury\'s Bolt',
      netRegex: NetRegexes.startsUsing({ id: '4B90', source: 'Ramuh', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4B90', source: 'Ramuh', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4B90', source: 'Ramuh', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4B90', source: 'ラムウ', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4B90', source: '라무', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4B90', source: '拉姆', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Fury\'s Bolt',
          de: 'Wütender Blitz',
          fr: 'Boule de foudre',
          cn: '蓄雷',
          ko: '라무 강화',
        },
      },
    },
    {
      id: 'E5N Judgment Volts',
      netRegex: NetRegexes.startsUsing({ id: ['4B98', '4B9A'], source: 'Ramuh', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['4B98', '4B9A'], source: 'Ramuh', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['4B98', '4B9A'], source: 'Ramuh', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['4B98', '4B9A'], source: 'ラムウ', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['4B98', '4B9A'], source: '라무', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['4B98', '4B9A'], source: '拉姆', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'E5N Divine Judgment Volts',
      netRegex: NetRegexes.startsUsing({ id: '4B9A', source: 'Ramuh', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4B9A', source: 'Ramuh', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4B9A', source: 'Ramuh', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4B9A', source: 'ラムウ', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4B9A', source: '라무', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4B9A', source: '拉姆', capture: false }),
      condition: function(data) {
        return !data.surgeProtection;
      },
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Grab an orb',
          de: 'Einen Orb nehmen',
          fr: 'Prenez un orbe',
          cn: '吃球',
          ko: '구슬 줍기',
        },
      },
    },
    {
      id: 'E5N Stormcloud',
      netRegex: NetRegexes.headMarker({ id: '006E' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Drop cloud outside',
          de: 'Wolken draußen ablegen',
          fr: 'Déposez le nuage à l\'extérieur',
          cn: '外侧放雷云',
          ko: '바깥으로 구름 유도',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Ramuh': 'Ramuh',
        'Will Of Ramuh': 'Ramuh-Spiegelung',
        'Will Of Ixion': 'Ixion-Spiegelung',
      },
      'replaceText': {
        'Volt Strike': 'Voltschlag',
        'Tribunal Summons': 'Gedankenentstehung',
        'Thunderstorm': 'Gewitter',
        'Stratospear Summons': 'Stromgenerierung',
        'Stormcloud Summons': 'Elektrizitätsgenerierung',
        '(?<! )Judgment Volts': 'Gewitter des Urteils',
        'Judgment Jolt': 'Blitz des Urteils',
        'Impact': 'Impakt',
        'Gallop': 'Galopp',
        'Fury\'s Bolt': 'Wütender Blitz',
        'Divine Judgment Volts': 'Göttliches Gewitter des Urteils',
        'Deadly Discharge': 'Tödliche Entladung',
        'Crippling Blow': 'Verkrüppelnder Schlag',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Ramuh': 'Ramuh',
        'Will Of Ramuh': 'Réplique de Ramuh',
        'Will Of Ixion': 'Réplique d\'Ixion',
      },
      'replaceText': {
        'Volt Strike': 'Frappe d\'éclair',
        'Tribunal Summons': 'Manifestations de l\'esprit',
        'Thunderstorm': 'Tempête de foudre',
        'Stratospear Summons': 'Conjuration de dards',
        'Stormcloud Summons': 'Nuage d\'orage',
        '(?<! )Judgment Volts': 'Éclair de chaleur du jugement',
        'Judgment Jolt': 'Front orageux du jugement',
        'Impact': 'Impact',
        'Gallop': 'Galop',
        'Fury\'s Bolt': 'Boules de foudre',
        'Divine Judgment Volts': 'Éclair de chaleur du jugement impérial',
        'Deadly Discharge': 'Décharge mortelle',
        'Crippling Blow': 'Coup handicapant',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        '(?<! )Ramuh': 'ラムウ',
        'Will Of Ramuh': 'ラムウ・ミラージュ',
        'Will Of Ixion': 'イクシオン・ミラージュ',
      },
      'replaceText': {
        'Volt Strike': 'ボルトストライク',
        'Tribunal Summons': '思念体生成',
        'Thunderstorm': 'サンダーストーム',
        'Stratospear Summons': '武具生成',
        'Stormcloud Summons': '雷雲生成',
        '(?<! )Judgment Volts': '裁きの熱雷',
        'Judgment Jolt': '裁きの界雷',
        'Impact': '衝撃',
        'Gallop': 'ギャロップ',
        'Fury\'s Bolt': 'チャージボルト',
        'Divine Judgment Volts': '裁きの熱雷・天帝',
        'Deadly Discharge': 'デッドリーディスチャージ',
        'Crippling Blow': '痛打',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        '(?<! )Ramuh': '拉姆',
        'Will Of Ramuh': '拉姆幻影',
        'Will Of Ixion': '伊克西翁幻影',
      },
      'replaceText': {
        'Crippling Blow': '痛击',
        'Stratospear Summons': '生成武具',
        'Impact': '冲击',
        'Judgment Jolt': '制裁之界雷',
        'Stormcloud Summons': '生成雷暴云',
        '(?<! )Judgment Volts': '制裁之热雷',
        'Fury\'s Bolt': '蓄雷',
        'Divine Judgment Volts': '制裁之热雷·天帝',
        'Tribunal Summons': '生成幻影',
        'Deadly Discharge': '死亡冲锋',
        'Gallop': '飞驰',
        'Thunderstorm': '雷暴',
        'Volt Strike': '雷电强袭',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        '(?<! )Ramuh': '라무',
        'Will Of Ramuh': '라무의 환영',
        'Will Of Ixion': '익시온의 환영',
      },
      'replaceText': {
        'Crippling Blow': '통타',
        'Stratospear Summons': '무기 생성',
        'Impact': '충격',
        'Judgment Jolt': '심판의 계뢰',
        'Stormcloud Summons': '번개구름 생성',
        '(?<! )Judgment Volts': '심판의 열뢰',
        'Fury\'s Bolt': '번개 충전',
        'Divine Judgment Volts': '천제의 심판의 열뢰',
        'Tribunal Summons': '사념체 생성',
        'Deadly Discharge': '죽음의 방전',
        'Gallop': '습보',
        'Thunderstorm': '번개 폭풍',
        'Volt Strike': '전기 충격',
      },
    },
  ],
};
