/*:
 * @plugindesc Ship-Like Waving Motion for Combat Scene in RPG Maker MZ
 * @target MZ
 * @author Mintyy
 * @url https://mintyy-works-rosetta-stone.gitbook.io/
 * @help
 * This plugin makes the combat scene move in a waving motion as if it
 * takes place on a ship. The developer can adjust the wave speed via
 * plugin parameters.
 *
 * @param waveSpeed
 * @text Wave Speed
 * @type number
 * @min 0
 * @decimals 2
 * @default 0.5
 * @desc Adjusts the speed of the waving motion. Higher values increase the speed.
 *
 * Terms of Use:
 * - Free to use and modify for commercial and non-commercial projects.
 */
function _0x1c41(_0x2b1f59,_0x374235){const _0x4daf32=_0x4daf();return _0x1c41=function(_0x1c41d1,_0x3f8e56){_0x1c41d1=_0x1c41d1-0x140;let _0x1a3e63=_0x4daf32[_0x1c41d1];return _0x1a3e63;},_0x1c41(_0x2b1f59,_0x374235);}function _0x4daf(){const _0x42be8e=['4388025bxLuSg','4076196zyygoa','forEach','updateWaveMotion','updateWaveEffect','4338505SFPKBn','48047104BBqoze','Mintyy_ShipWaveCombat','2MmBjNx','frameCount','call','waveSpeed','_waveBaseY','4588560RzROsB','prototype','3170034iqmdeb','update','cos','703448HgNtRX'];_0x4daf=function(){return _0x42be8e;};return _0x4daf();}(function(_0x4bacce,_0x48410d){const _0x100f9c=_0x1c41,_0x25aa27=_0x4bacce();while(!![]){try{const _0x1f8068=parseInt(_0x100f9c(0x151))/0x1*(-parseInt(_0x100f9c(0x147))/0x2)+-parseInt(_0x100f9c(0x152))/0x3+-parseInt(_0x100f9c(0x140))/0x4+-parseInt(_0x100f9c(0x144))/0x5+-parseInt(_0x100f9c(0x14c))/0x6+-parseInt(_0x100f9c(0x14e))/0x7+parseInt(_0x100f9c(0x145))/0x8;if(_0x1f8068===_0x48410d)break;else _0x25aa27['push'](_0x25aa27['shift']());}catch(_0x934980){_0x25aa27['push'](_0x25aa27['shift']());}}}(_0x4daf,0xb38a1),((()=>{const _0x872bce=_0x1c41,_0x2fd87d=_0x872bce(0x146),_0x14ff6d=PluginManager['parameters'](_0x2fd87d),_0x147acb=Number(_0x14ff6d[_0x872bce(0x14a)]||0.5),_0x92ae79=Spriteset_Battle['prototype']['update'];Spriteset_Battle['prototype'][_0x872bce(0x14f)]=function(){const _0x1e0755=_0x872bce;_0x92ae79[_0x1e0755(0x149)](this),this[_0x1e0755(0x142)]();},Spriteset_Battle[_0x872bce(0x14d)]['updateWaveMotion']=function(){const _0x3189a3=_0x872bce,_0x3a2086=0xa,_0x12f9c7=_0x147acb*0.1,_0x48db57=Graphics[_0x3189a3(0x148)]*_0x12f9c7,_0x25f638=Math[_0x3189a3(0x150)](_0x48db57)*_0x3a2086*0.5;this['children'][_0x3189a3(0x141)](_0x30a77c=>{_0x30a77c instanceof Sprite&&(_0x30a77c['y']+=_0x25f638);});};const _0x37391c=Scene_Battle[_0x872bce(0x14d)][_0x872bce(0x14f)];Scene_Battle[_0x872bce(0x14d)]['update']=function(){const _0x29ec6a=_0x872bce;_0x37391c[_0x29ec6a(0x149)](this),this[_0x29ec6a(0x143)]();},Scene_Battle[_0x872bce(0x14d)][_0x872bce(0x143)]=function(){const _0x3d7fdd=_0x872bce;if(!this[_0x3d7fdd(0x14b)])this[_0x3d7fdd(0x14b)]=this['y'];const _0x1952d3=0x5,_0x1833c5=_0x147acb*0.05,_0x296d01=Graphics[_0x3d7fdd(0x148)]*_0x1833c5;this['y']=this[_0x3d7fdd(0x14b)]+Math[_0x3d7fdd(0x150)](_0x296d01)*_0x1952d3*0.5;};})()));
