//=============================================================
// Mintyy_EnemyDeathResist.js
//=============================================================

/*:
* @target MZ
* @plugindesc v1.0 Allows the enemy to stock a few Death Resist times before dying.
* @author Mintyy - mintyyworks.itch.io
*
* @help

=====================================================
Enemy Death Resist Plugin
Author: Mintyy

Current Version: 1.0
Date Created: 11 / 3 / 2024
=====================================================

Description:

This plugin allows a death resist counter for enemies.
By death resist counter, this means that the enemy
will revive itself as long as the death resist counter
is not 0. This is to have enemies that will stand
up and revive themselves not unless you really kill
them and drain their death counters.

This plugin does not have or require any parameters.

Instructions:

In your Enemy's note box, place this tag:

<deathResist: x>

where x is the times that the enemy can resist death.

For example, you placed:

<deathResist: 1>

The enemy would resist death ONE time.

*
*/

function _0x4549(_0x57aaf3,_0x1d950a){var _0x51ee49=_0x51ee();return _0x4549=function(_0x4549cb,_0x54104f){_0x4549cb=_0x4549cb-0xa3;var _0x3d00be=_0x51ee49[_0x4549cb];return _0x3d00be;},_0x4549(_0x57aaf3,_0x1d950a);}var _0x53c977=_0x4549;(function(_0x3b66fb,_0x66e00c){var _0x208869=_0x4549,_0x3a81be=_0x3b66fb();while(!![]){try{var _0x56889c=-parseInt(_0x208869(0xb0))/0x1*(-parseInt(_0x208869(0xad))/0x2)+-parseInt(_0x208869(0xaa))/0x3+-parseInt(_0x208869(0xb8))/0x4+-parseInt(_0x208869(0xa4))/0x5+-parseInt(_0x208869(0xaf))/0x6+parseInt(_0x208869(0xb5))/0x7+parseInt(_0x208869(0xa8))/0x8*(parseInt(_0x208869(0xab))/0x9);if(_0x56889c===_0x66e00c)break;else _0x3a81be['push'](_0x3a81be['shift']());}catch(_0x579888){_0x3a81be['push'](_0x3a81be['shift']());}}}(_0x51ee,0x36c8f));var Imported=Imported||{};Imported[_0x53c977(0xb4)]=!![];var Mintyy=Mintyy||{};Mintyy['EE']=Mintyy['EE']||{},function(_0x4578ae){var _0x1eec9c=_0x53c977;Mintyy['EE'][_0x1eec9c(0xae)]=Game_Enemy[_0x1eec9c(0xb3)][_0x1eec9c(0xac)],_0x4578ae['prototype']['initialize']=function(_0x28b279,_0x4f60f5,_0x5864d7){var _0x3852e1=_0x1eec9c;Mintyy['EE']['Game_Enemy_initialize'][_0x3852e1(0xb6)](this,_0x28b279,_0x4f60f5,_0x5864d7),this[_0x3852e1(0xa6)]=eval($dataEnemies[_0x28b279][_0x3852e1(0xa3)][_0x3852e1(0xb2)]);},_0x4578ae['prototype'][_0x1eec9c(0xa5)]=function(_0x9325b5){var _0x3e490a=_0x1eec9c;Game_Battler[_0x3e490a(0xb3)][_0x3e490a(0xa5)]['call'](this,_0x9325b5),this[_0x3e490a(0xa6)]&&this['perform_resistCounterDamage']();},_0x4578ae[_0x1eec9c(0xb3)][_0x1eec9c(0xa9)]=function(){var _0x2ecd2e=_0x1eec9c;this[_0x2ecd2e(0xa6)]-=0x1,this['_resistCounter']<0x0?this[_0x2ecd2e(0xb1)](this[_0x2ecd2e(0xa7)]()):this['removeState'](this[_0x2ecd2e(0xa7)]());},_0x4578ae['prototype'][_0x1eec9c(0xb7)]=function(_0x5ae93f){var _0x207da2=_0x1eec9c,_0x501ccf=Game_BattlerBase[_0x207da2(0xb3)][_0x207da2(0xb7)][_0x207da2(0xb6)](this,_0x5ae93f);if(this[_0x207da2(0xa6)]){if(this['_resistCounter']<0x0)this['removeState'](this[_0x207da2(0xa7)]());}return _0x501ccf;};}(Game_Enemy);function _0x51ee(){var _0x2e5b55=['perform_resistCounterDamage','886797BjKTWy','8142426LGXRBj','initialize','4BpEpuF','Game_Enemy_initialize','2172336DHyjlZ','181691sUNASY','addState','deathResist','prototype','Mintyy_EnemyResistDeath','2357194yiPVwY','call','stateResistSet','1556060TLHQYc','meta','1668845jCWseP','onDamage','_resistCounter','deathStateId','8unZwfZ'];_0x51ee=function(){return _0x2e5b55;};return _0x51ee();}
