/*:
 * @target MZ
 * @plugindesc Changes an enemy's sprite in battle when its HP is at or below 20%.
 * @author Mintyy
 * @url https://github.com/Mintyy007
 * 
 * @help 
 * 
 *
 * This plugin allows you to set a new sprite for an enemy when its HP falls 
 * below 20% during battle. Use the following notetag in the enemy's note box:
 * 
 * <dyingSprite: filename>
 * 
 * Replace "filename" with the name of the image in your "img/enemies/" folder 
 * that you want to display when the enemy's HP is at or below 20%.
 * 
 * Example:
 * <dyingSprite:Slime_Weak>
 * 
 * Notes:
 * - Ensure the specified sprite file exists in "img/enemies/".
 * - The sprite will automatically revert back if healed above 20% HP.
 * 
 * No plugin commands are needed.
 */

function _0x1046(){const _0x15c231=['call','300388cdtken','536604RSRkWT','_enemy','battlerName','50gbnEGZ','meta','_enemySpriteName','15219uGgrqK','40QALtVA','48NqUPFW','updateBitmap','246829VvMogd','1fcuHiG','574731dGqYZF','63231HToKmD','loadBitmap','prototype','hpRate','4KWoTdu','enemy','updateDyingSprite','995535qCZxWO'];_0x1046=function(){return _0x15c231;};return _0x1046();}function _0x579a(_0x531d6b,_0x276e72){const _0x1046de=_0x1046();return _0x579a=function(_0x579aed,_0x355679){_0x579aed=_0x579aed-0xea;let _0x2e4db0=_0x1046de[_0x579aed];return _0x2e4db0;},_0x579a(_0x531d6b,_0x276e72);}(function(_0x2b5a4e,_0x25003b){const _0x120531=_0x579a,_0x3cd5e0=_0x2b5a4e();while(!![]){try{const _0x5b56fb=-parseInt(_0x120531(0xf8))/0x1*(-parseInt(_0x120531(0xec))/0x2)+-parseInt(_0x120531(0xf9))/0x3*(-parseInt(_0x120531(0xfe))/0x4)+-parseInt(_0x120531(0xea))/0x5+-parseInt(_0x120531(0xf5))/0x6*(-parseInt(_0x120531(0xfa))/0x7)+parseInt(_0x120531(0xf4))/0x8*(-parseInt(_0x120531(0xf3))/0x9)+-parseInt(_0x120531(0xf0))/0xa*(parseInt(_0x120531(0xf7))/0xb)+parseInt(_0x120531(0xed))/0xc;if(_0x5b56fb===_0x25003b)break;else _0x3cd5e0['push'](_0x3cd5e0['shift']());}catch(_0x12bedc){_0x3cd5e0['push'](_0x3cd5e0['shift']());}}}(_0x1046,0x21ef3),((()=>{const _0x4529fd=_0x579a,_0x3007a2=Sprite_Enemy[_0x4529fd(0xfc)][_0x4529fd(0xf6)];Sprite_Enemy[_0x4529fd(0xfc)][_0x4529fd(0xf6)]=function(){const _0x17e615=_0x4529fd;_0x3007a2[_0x17e615(0xeb)](this),this['updateDyingSprite']();},Sprite_Enemy[_0x4529fd(0xfc)][_0x4529fd(0x100)]=function(){const _0x454f02=_0x4529fd,_0x5065e3=this[_0x454f02(0xee)];if(!_0x5065e3)return;const _0xfeb44d=_0x5065e3[_0x454f02(0xff)]()[_0x454f02(0xf1)]['dyingSprite'];if(!_0xfeb44d)return;const _0x2c2173=_0x5065e3[_0x454f02(0xfd)](),_0x2439bc=_0x2c2173<=0.2?_0xfeb44d:_0x5065e3[_0x454f02(0xef)]();this[_0x454f02(0xf2)]!==_0x2439bc&&(this['_enemySpriteName']=_0x2439bc,this[_0x454f02(0xfb)](_0x2439bc));},Sprite_Enemy[_0x4529fd(0xfc)][_0x4529fd(0xfb)]=function(_0x8dde26){const _0x5e0368=_0x4529fd,_0x2eda13='img/enemies/';this['bitmap']=ImageManager[_0x5e0368(0xfb)](_0x2eda13,_0x8dde26);};})()));
