/*:
*
* @plugindesc v1.0 This plugin mimics the Sneeze from FF6 Enemy Chupon.
* @author Mintyy - mintyworks.itch.io
*
* @param Sneeze States
* @desc The array list of state ids that will throw or boot the actor away. [] symbols are necessary.
* @default [56, 57, 58]
*

* @help This plugin does not have any plugin commands.

SOUL_SneezeFF6.js
Current Version: 1.0
Author: Mintyy

Introduction:

This plugin allows you to do the Sneeze technique of Chupon / Typhon. What the Sneeze
attack does is that it boots out the battle member affected with the state. In this
case, when you have a party member booted out from battle and won, the character
comes back in your party upon winning. When one member was booted out and you
escaped, the character will also come back.

Instructions:

Place the state ID on the [] of the Sneeze States parameter. Make sure you
separate them by using comma tags.

Create a skill for the enemy that has the Effects: State and add Sneeze
there.

Compatibility Issues:

None so far after creation.

For support, please visit:
soulxregalia.wordpress.com


*/

var Imported = Imported || {};
Imported.SOUL_SneezeFF6 = true;

var Mintyy = Mintyy || {};
Mintyy.Sneeze = Mintyy.Sneeze || {};

var xxparam = PluginManager.parameters('SOUL_SneezeFF6');
Mintyy.Sneeze.stateList = eval(xxparam['Sneeze States']);

(function($){
	Mintyy.Sneeze.Game_System_initialize = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		Mintyy.Sneeze.Game_System_initialize.call(this);
		this._duplicatedParty = [];
	}	
})();

(function($){
	Mintyy.Sneeze.BattleManager_setup = BattleManager.setup;
	BattleManager.setup = function(troopId, canEscape, canLose) {
	    Mintyy.Sneeze.BattleManager_setup.call(this, troopId, canEscape, canLose);
	    $gameSystem._duplicatedParty = $gameParty.allMembers().slice(0);
	};

 	Mintyy.Sneeze.BattleManager_processEscape = BattleManager.processEscape;
	$.processEscape = function() {
	    Mintyy.Sneeze.BattleManager_processEscape.call(this);
	    if ($gameTemp.sneezeUsed && this._escaped) {
	    	this.partyRestore();
	    }
	}; 	

	Mintyy.Sneeze.BattleManager_processVictory = BattleManager.processVictory;
	$.processVictory = function() {
	    Mintyy.Sneeze.BattleManager_processVictory.call(this);
	    this.victory = true;
	    if ($gameTemp.sneezeUsed) {
	    	this.partyRestore();
	    }
	};

	Mintyy.Sneeze.BattleManager_endBattle = BattleManager.endBattle;
	$.endBattle = function(result) {
	    Mintyy.Sneeze.BattleManager_endBattle.call(this, result);
	    if (this.victory) {
	    	this.victory = false;
	    	this.partyRestore();
	    }
	};	

	$.partyRestore = function() {
		for (var i = 0; i < $gameParty.allMembers().length; i++) {
			$gameParty.removeActor($gameParty.allMembers()[i]._actorId);
		}
		for (var i = 0; i < $gameSystem._duplicatedParty.length; i++) {
			$gameParty.addActor($gameSystem._duplicatedParty[i]._actorId);
		}		
		$gameTemp.sneezeUsed = false;
	}

	$.partyCancelFight = function() {
		if ($gameParty.battleMembers().length <= 0) {
			return true;
		}
	}

	Mintyy.Sneeze.BattleManager_invokeAction = BattleManager.invokeAction;
	$.invokeAction = function(subject, target) {
	    Mintyy.Sneeze.BattleManager_invokeAction.call(this, subject, target);
	    if (target instanceof Game_Actor) {
	    	for (var i = 0; i < Mintyy.Sneeze.stateList.length; i++) {
		    	if (target.isStateAffected(Mintyy.Sneeze.stateList[i])) {
		    		$gameParty.removeActor(target._actorId);
		    		$gameTemp.sneezeUsed = true;
		    	} 		
	    	}

	    }

	};		


	$.processSneezeSuccess = function() {
	    $gameParty.removeBattleStates();
	    $gameParty.performEscape();
	    SoundManager.playEscape();
	    var success = true;
	    if (success) {
	        this._escaped = true;
	        this.processAbort();
	    }
	    return success;
	};

	Mintyy.Sneeze.BattleManager_update = BattleManager.update;
	$.update = function() {
		Mintyy.Sneeze.BattleManager_update.call(this);
		if ($gameTemp.sneezeUsed) {
		    if (this.partyCancelFight()) {
		    	this.processSneezeSuccess();
		    }
		}
		if (this._escaped) {
			SceneManager.pop();
			this.partyRestore();
		}
	};

})(BattleManager); 

(function($){
	Mintyy.Sneeze.Game_Temp_initialize = Game_Temp.prototype.initialize;
	$.prototype.initialize = function() {
	    Mintyy.Sneeze.Game_Temp_initialize.call(this);
	    this.sneezeUsed = false;
	};

})(Game_Temp);
