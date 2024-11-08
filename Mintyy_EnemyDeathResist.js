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

var Imported = Imported || {};
Imported.Mintyy_EnemyResistDeath = true;

var Mintyy = Mintyy || {};
Mintyy.EE = Mintyy.EE || {};
(function($){
	Mintyy.EE.Game_Enemy_initialize = Game_Enemy.prototype.initialize;
	$.prototype.initialize = function(enemyId, x, y) {
	    Mintyy.EE.Game_Enemy_initialize.call(this, enemyId, x, y);
	    this._resistCounter = eval($dataEnemies[enemyId].meta.deathResist);
	};  
	$.prototype.onDamage = function(value) {
	    Game_Battler.prototype.onDamage.call(this, value);
        
	    if(this._resistCounter) {
            this.perform_resistCounterDamage();
            
        }
	};

	$.prototype.perform_resistCounterDamage = function() {
		this._resistCounter -= 1;
		if (this._resistCounter < 0) {
			this.addState(this.deathStateId());
		} else {
			this.removeState(this.deathStateId());
		}
	}
	$.prototype.stateResistSet = function(stateId) {
	    var exRes = Game_BattlerBase.prototype.stateResistSet.call(this, stateId);
	    if(this._resistCounter) {
	    	if (this._resistCounter < 0) this.removeState(this.deathStateId());
	    }
	    return exRes;
	};

})(Game_Enemy);