/*:
 * @target MZ
 * @plugindesc Adds a smart jumping mechanic with obstacle detection and customizable ranges for RPG Maker MZ.
 * @author Mintyy
 * @url https://mintyyworks.itch.io/
 *
 * @param DefaultJumpDistance
 * @text Default Jump Distance
 * @type number
 * @min 1
 * @default 2
 * @desc The default jump distance if none is specified in the plugin command.
 *
 * @param BypassEvents
 * @text Bypass Events
 * @type boolean
 * @default false
 * @desc Allow jumping through events (true = yes, false = no).
 *
 * @command SmartJump
 * @text Smart Jumping
 * @desc The smart jumping command
 *
 * @arg distance
 * @text Jump distance
 * @type number
 * @default 2
 * @desc Distance of the jump.
 *
 * @arg direction
 * @text Jumping Direction
 * @type string
 * @default right
 * @desc Direction of the jump.
 *
 * @command SmartJumpTo
 * @text Smart Jumping
 * @desc The smart jumping command
 *
 * @arg x
 * @text X Jumping Direction
 * @type number
 * @desc x of the jump.
 *
 * @arg y
 * @text Y Jumping Direction
 * @type string
 * @desc y of the jump.
 *
 * @help
 * This plugin allows for a smart jumping mechanic that dynamically checks for
 * terrain, obstacles, and jump ranges. It also supports plugin commands to
 * trigger jumps with specified distances and directions.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 * 1. SmartJump [distance] [direction]
 *    Example: SmartJump 3 down
 *    Makes the player jump 3 tiles in the down direction. Valid directions are:
 *    up, down, left, right.
 *
 * 2. SmartJumpTo [x] [y]
 *    Example: SmartJumpTo 10 15
 *    Makes the player jump to a specific tile (x, y).
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 * <NoJump>
 *    Place this notetag in a map's event to prevent jumping onto or over it.
 *
 * ============================================================================
 * How It Works
 * ============================================================================
 * - Checks for terrain passability and events when jumping.
 * - Prevents the player from jumping onto impassable tiles or "NoJump" events.
 * - Allows customization of jump distance and direction through plugin commands.
 */

function _0xccc1(){const _0xb78663=['1192425rWwomp','169631mdlbks','DefaultJumpDistance','performSmartJumpTo','registerCommand','distance','NoJump','event','SmartJumpTo','parameters','247098RPgXow','Jump\x20blocked:\x20Target\x20location\x20is\x20not\x20valid.','17dTftCl','prototype','eventsXy','jump','meta','150YcsOeW','24BfTlzX','hasNoJumpTag','canPass','BypassEvents','36281uaMdiK','true','some','15DGCufQ','24qYzNXg','isValid','14828wpdtXG','25ZNSCZb','direction','SmartJump','14086cccduW','performSmartJump','call','log','1762173IiRntK','_scene','canJumpTo'];_0xccc1=function(){return _0xb78663;};return _0xccc1();}function _0x38ef(_0x38a3cf,_0x31a1a8){const _0xccc1ec=_0xccc1();return _0x38ef=function(_0x38ef40,_0x26653a){_0x38ef40=_0x38ef40-0x171;let _0xf44cbb=_0xccc1ec[_0x38ef40];return _0xf44cbb;},_0x38ef(_0x38a3cf,_0x31a1a8);}(function(_0x4862b4,_0x4bb603){const _0x2e7ee4=_0x38ef,_0x534365=_0x4862b4();while(!![]){try{const _0x1d4857=parseInt(_0x2e7ee4(0x179))/0x1*(parseInt(_0x2e7ee4(0x18d))/0x2)+-parseInt(_0x2e7ee4(0x186))/0x3*(parseInt(_0x2e7ee4(0x189))/0x4)+parseInt(_0x2e7ee4(0x18a))/0x5*(-parseInt(_0x2e7ee4(0x177))/0x6)+parseInt(_0x2e7ee4(0x183))/0x7*(parseInt(_0x2e7ee4(0x17f))/0x8)+-parseInt(_0x2e7ee4(0x191))/0x9+-parseInt(_0x2e7ee4(0x17e))/0xa*(-parseInt(_0x2e7ee4(0x195))/0xb)+parseInt(_0x2e7ee4(0x187))/0xc*(parseInt(_0x2e7ee4(0x194))/0xd);if(_0x1d4857===_0x4bb603)break;else _0x534365['push'](_0x534365['shift']());}catch(_0x2fc041){_0x534365['push'](_0x534365['shift']());}}}(_0xccc1,0x1fb06),((()=>{const _0x7da871=_0x38ef,_0x1566c1='SmartJump',_0x2bfad3=PluginManager[_0x7da871(0x176)](_0x1566c1),_0x1282c2=Number(_0x2bfad3[_0x7da871(0x196)]||0x2),_0xac1c80=_0x2bfad3[_0x7da871(0x182)]===_0x7da871(0x184);PluginManager[_0x7da871(0x171)](_0x1566c1,_0x7da871(0x18c),_0x5efe8c=>{const _0x5af7dc=_0x7da871,_0x2d38c3=Number(_0x5efe8c[_0x5af7dc(0x172)])||_0x1282c2,_0x38540c=_0x5efe8c[_0x5af7dc(0x18b)];SceneManager[_0x5af7dc(0x192)][_0x5af7dc(0x18e)](_0x2d38c3,_0x38540c);}),PluginManager[_0x7da871(0x171)](_0x1566c1,_0x7da871(0x175),_0x474599=>{const _0x5a4be7=_0x7da871,_0x2b7907=Number(_0x474599['x']),_0x10c594=Number(_0x474599['y']);SceneManager[_0x5a4be7(0x192)][_0x5a4be7(0x197)](_0x2b7907,_0x10c594);}),Scene_Map[_0x7da871(0x17a)][_0x7da871(0x18e)]=function(_0x1bd452,_0x3debca){const _0x41dbfa=_0x7da871,_0x4dde39={'left':-_0x1bd452,'right':_0x1bd452,'up':0x0,'down':0x0}[_0x3debca],_0x4092cd={'left':0x0,'right':0x0,'up':-_0x1bd452,'down':_0x1bd452}[_0x3debca];if(_0x4dde39!==undefined&&_0x4092cd!==undefined){const _0x2bc114=$gamePlayer['x']+_0x4dde39,_0x91c888=$gamePlayer['y']+_0x4092cd;this[_0x41dbfa(0x193)](_0x2bc114,_0x91c888)?$gamePlayer[_0x41dbfa(0x17c)](_0x4dde39,_0x4092cd):console['log']('Jump\x20blocked:\x20Target\x20location\x20is\x20not\x20valid.');}},Scene_Map[_0x7da871(0x17a)][_0x7da871(0x197)]=function(_0xc08586,_0x19c4b5){const _0x265429=_0x7da871,_0x37228e=_0xc08586-$gamePlayer['x'],_0x378330=_0x19c4b5-$gamePlayer['y'];this[_0x265429(0x193)](_0xc08586,_0x19c4b5)?$gamePlayer[_0x265429(0x17c)](_0x37228e,_0x378330):console[_0x265429(0x190)](_0x265429(0x178));},Scene_Map['prototype'][_0x7da871(0x193)]=function(_0x434b17,_0x59c5fc){const _0x3be839=_0x7da871;if(!$gameMap[_0x3be839(0x188)](_0x434b17,_0x59c5fc))return![];if(!$gameMap['isPassable'](_0x434b17,_0x59c5fc,0x2))return![];if(!_0xac1c80){const _0x42997a=$gameMap['eventsXy'](_0x434b17,_0x59c5fc);if(_0x42997a[_0x3be839(0x185)](_0x524068=>_0x524068[_0x3be839(0x174)]()[_0x3be839(0x17d)][_0x3be839(0x173)]))return![];}return!![];},Game_Event[_0x7da871(0x17a)][_0x7da871(0x180)]=function(){const _0x23d7c0=_0x7da871;return!!this['event']()[_0x23d7c0(0x17d)][_0x23d7c0(0x173)];};const _0x3f5e31=Game_CharacterBase[_0x7da871(0x17a)]['canPass'];Game_CharacterBase[_0x7da871(0x17a)][_0x7da871(0x181)]=function(_0x5a5aea,_0x2cc5e7,_0x52b280){const _0x4d7916=_0x7da871;if(!_0xac1c80){const _0x41de41=$gameMap[_0x4d7916(0x17b)](_0x5a5aea,_0x2cc5e7);if(_0x41de41[_0x4d7916(0x185)](_0x3bcd72=>_0x3bcd72[_0x4d7916(0x180)]()))return![];}return _0x3f5e31[_0x4d7916(0x18f)](this,_0x5a5aea,_0x2cc5e7,_0x52b280);};})()));
