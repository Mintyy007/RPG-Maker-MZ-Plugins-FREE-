// Mintyy Battle System Switcher
// Version 1.0
// Author: Mintyy


/*:
* @author Mintyy
* @target MZ
* @plugindesc Switch battle systems via commands.

* @command SwitchBattleSystem
* @text 'Switch Battle System'
*  @ desc Switch the type of battle system.

* @arg battletype
* @text Battle Style
* @desc Type of Battle, write either front or sideview

* @arg battlemode
* @text ATB Mode
* @type number
* @desc write 1 or 0 (1 - true, 0 - false)

@help
Mintyy's Switch Battle System
Version 1.0
Requested by: A Familiar Friend (Discord)

A plugin that allows you to switch battle systems from 
front view to side view, ATB or Non-ATB.

For configurations, use the plugin command.

*/

Game_System.prototype.switchBattle = function(battleType, atb) {
    if (battleType == "front") {
        $dataSystem.optSideView = false
    }
    if (battleType == "sideview") {
        $dataSystem.optSideView = true
    }

    if (atb == 1) {
        $dataSystem.battleSystem = 1
    }
    if (atb == 0) {
        $dataSystem.battleSystem = 0
    }
}

PluginManager.registerCommand("MintyyMZ_BattleSystemSwitcher", 'SwitchBattleSystem' , args => {
    $gameSystem.switchBattle(args.battleType, args.battlemode);
});

