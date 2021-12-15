import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

// TODO: Lyssa Frostbite and Seek
// TODO: Ladon Lord cleave directions
// TODO: Hermes correct meteor
// TODO: Hermes mirror dodge direction

export interface Data extends RaidbossData {
  isHermes?: boolean;
}

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.KtisisHyperboreia,
  timelineFile: 'ktisis_hyperboreia.txt',
  triggers: [
    {
      id: 'Ktisis Lyssa Skull Dasher',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '625E', source: 'Lyssa' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Ktisis Lyssa Frigid Stomp',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '625D', source: 'Lyssa', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Ktisis Lyssa Heavy Smash',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '625C', source: 'Lyssa' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Ktisis Ladon Lord Scratch',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '648F', source: 'Ladon Lord' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'Ktisis Ladon Lord Intimidation',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '648D', source: 'Ladon Lord', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Ktisis Ladon Lord Pyric Blast',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '648E', source: 'Ladon Lord' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Ktisis Hermes Trimegistos',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '651E', source: 'Hermes', capture: false }),
      response: Responses.aoe(),
      run: (data) => data.isHermes = true,
    },
    {
      id: 'Ktisis Hermes True Tornado',
      // StartsUsing line is self-targeted.
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '00DA' }),
      // This headmarker is used for the first two bosses but only Hermes cleaves.
      condition: (data) => data.isHermes,
      response: Responses.tankCleave('alert'),
    },
    {
      id: 'Ktisis Hermes True Aero',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '652B', source: 'Hermes', capture: false }),
      response: Responses.spread(),
    },
    {
      id: 'Ktisis Hermes True Bravery',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6533', source: 'Hermes' }),
      condition: (data) => data.CanSilence(),
      response: Responses.interrupt(),
    },
    {
      id: 'Ktisis Hermes Meteor Cosmic Kiss',
      type: 'Ability',
      netRegex: NetRegexes.ability({ id: '6523', source: 'Meteor', capture: false }),
      suppressSeconds: 5,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Hide behind unbroken meteor',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Concept Review': 'Konzeptbewertung',
        'Hermes': 'Hermes',
        'Ice Pillar': 'Eissäule',
        'Karukeion': 'Kerykeion',
        'Ladon Lord': 'Ladon-Lord',
        'Lyssa': 'Lyssa',
        'Meteor': 'Meteor',
        'Pyric Sphere': 'Pyrische Sphäre',
        'The Celestial Sphere': 'Astralzone',
        'The Frozen Sphere': 'Kaltzone',
      },
      'replaceText': {
        'Cosmic Kiss': 'Einschlag',
        'Double': 'Doppel',
        'Frigid Stomp': 'Froststampfer',
        'Frostbite and Seek': 'In eisige Winde gehüllt',
        'Heavy Smash': 'Schwerer Klopfer',
        'Hermetica': 'Hermetika',
        'Ice Pillar': 'Eissäule',
        'Icicall': 'Eiszapfen-Brüller',
        'Inhale': 'Inhalieren',
        'Intimidation': 'Einschüchterungsversuch',
        'Meteor': 'Meteor',
        'Pillar Pierce': 'Säulendurchschlag',
        'Punishing Slice': 'Strafender Schlitzer',
        'Pyric Blast': 'Pyrischer Rumms',
        'Pyric Breath': 'Pyrischer Atem',
        'Pyric Sphere': 'Pyrische Sphäre',
        'Quadruple': 'Quadrupel',
        'Scratch': 'Schramme',
        'Skull Dasher': 'Schädelzertrümmerer',
        'Trismegistos': 'Trismegistus',
        'True Aero(?! I)': 'Vollkommener Wind',
        'True Aero II': 'Vollkommenes Windra',
        'True Aero IV': 'Vollkommenes Windka',
        'True Tornado': 'Vollkommener Tornado',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Concept Review': 'Salle d\'évaluation',
        'Hermes': 'Hermès',
        'Ice Pillar': 'Pilier de glace',
        'Karukeion': 'kerykeion',
        'Ladon Lord': 'seigneur Ladon',
        'Lyssa': 'Lyssa',
        'Meteor': 'Météore',
        'Pyric Sphere': 'Sphère pyrogène',
        'The Celestial Sphere': 'Voûte céleste',
        'The Frozen Sphere': 'Glacier artificiel',
      },
      'replaceText': {
        'Cosmic Kiss': 'Impact de canon',
        'Double': 'Double',
        'Frigid Stomp': 'Piétinement glacial',
        'Frostbite and Seek': 'Gelure furtive',
        'Heavy Smash': 'Fracas violent',
        'Hermetica': 'Hermética',
        'Ice Pillar': 'Pilier de glace',
        'Icicall': 'Stalactite rugissante',
        'Inhale': 'Inhalation',
        'Intimidation': 'Intimidation',
        'Meteor': 'Météore',
        'Pillar Pierce': 'Empalement',
        'Punishing Slice': 'Tranchage punitif',
        'Pyric Blast': 'Souffle pyrogène',
        'Pyric Breath': 'Bouffée pyrogène',
        'Pyric Sphere': 'Sphère pyrogène',
        'Quadruple': 'Quadruple',
        'Scratch': 'Griffade',
        'Skull Dasher': 'Charge du crâne',
        'Trismegistos': 'Trismégistos',
        'True Aero(?! I)': 'Vent véritable',
        'True Aero II': 'Extra Vent véritable',
        'True Aero IV': 'Giga Vent véritable',
        'True Tornado': 'Tornade véritable',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Concept Review': '創造生物評価室',
        'Hermes': 'ヘルメス',
        'Ice Pillar': '氷柱',
        'Karukeion': 'ケリュケイオン',
        'Ladon Lord': 'ラドンロード',
        'Lyssa': 'リッサ',
        'Meteor': 'メテオ',
        'Pyric Sphere': 'パイリックスフィア',
        'The Celestial Sphere': '天脈創造環境',
        'The Frozen Sphere': '寒冷創造環境',
      },
      'replaceText': {
        'Cosmic Kiss': '着弾',
        'Double': 'ダブル',
        'Frigid Stomp': 'フリジッドストンプ',
        'Frostbite and Seek': 'フロストバイト・アンドシーク',
        'Heavy Smash': 'ヘビースマッシュ',
        'Hermetica': 'ヘルメチカ',
        'Ice Pillar': '氷柱',
        'Icicall': 'アイシクルロア',
        'Inhale': 'インヘイル',
        'Intimidation': 'インティミデーション',
        'Meteor': 'メテオ',
        'Pillar Pierce': '激突',
        'Punishing Slice': 'パニッシングスライス',
        'Pyric Blast': 'パイリックブラスト',
        'Pyric Breath': 'パイリックブレス',
        'Pyric Sphere': 'パイリックスフィア',
        'Quadruple': 'クアドラプル',
        'Scratch': 'スクラッチ',
        'Skull Dasher': 'スカルダッシャー',
        'Trismegistos': 'トリスメギストス',
        'True Aero(?! I)': 'トゥルー・エアロ',
        'True Aero II': 'トゥルー・エアロラ',
        'True Aero IV': 'トゥルー・エアロジャ',
        'True Tornado': 'トゥルー・トルネド',
      },
    },
  ],
};

export default triggerSet;
