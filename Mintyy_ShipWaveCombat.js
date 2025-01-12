/*:
 * @plugindesc Ship-Like Waving Motion for Combat Scene in RPG Maker MZ
 * @target MZ
 * @author Mintyy
 * @url https://mintyy-works-rosetta-stone.gitbook.io/
 * @help
 * This plugin makes the combat scene move in a waving motion as if it
 * takes place on a ship. The developer can adjust the wave speed via
 * plugin parameters. The waving motion is activated only in specific
 * regions as specified in the plugin parameters.
 *
 * @param waveSpeed
 * @text Wave Speed
 * @type number
 * @min 0
 * @decimals 2
 * @default 0.5
 * @desc Adjusts the speed of the waving motion. Higher values increase the speed.
 *
 * @param waveRegions
 * @text Wave Regions
 * @type number[]
 * @default []
 * @desc List of region IDs where ship wave combat is activated. Outside these regions, normal combat occurs.
 *
 * Terms of Use:
 * - Free to use and modify for commercial and non-commercial projects.
 */

(() => {
    const PLUGIN_NAME = "Mintyy_ShipWaveCombat";
    const parameters = PluginManager.parameters(PLUGIN_NAME);
    const waveSpeed = Number(parameters["waveSpeed"] || 0.5);
    const waveRegions = JSON.parse(parameters["waveRegions"] || "[]").map(Number);

    const alias_SpritesetBattle_update = Spriteset_Battle.prototype.update;
    Spriteset_Battle.prototype.update = function() {
        alias_SpritesetBattle_update.call(this);
        if (SceneManager._scene.isWaveBattle()) {
            this.updateWaveMotion();
        }
    };

    Spriteset_Battle.prototype.updateWaveMotion = function() {
        const waveAmplitude = 10; // Adjust amplitude of the wave
        const waveFrequency = waveSpeed * 0.1; // Adjust frequency based on speed parameter
        const time = Graphics.frameCount * waveFrequency;

        const waveY = Math.cos(time) * waveAmplitude * 0.5; // Slightly reduce vertical movement

        this.children.forEach(child => {
            if (child instanceof Sprite) {
                child.y += waveY;
            }
        });
    };

    const alias_SceneBattle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        alias_SceneBattle_update.call(this);
        if (this.isWaveBattle()) {
            this.updateWaveEffect();
        }
    };

    Scene_Battle.prototype.updateWaveEffect = function() {
        if (!this._waveBaseY) this._waveBaseY = this.y;

        const waveAmplitude = 5; // Adjust amplitude of the scene itself
        const waveFrequency = waveSpeed * 0.05; // Adjust frequency based on speed parameter
        const time = Graphics.frameCount * waveFrequency;

        this.y = this._waveBaseY + Math.cos(time) * waveAmplitude * 0.5;
    };

    Scene_Battle.prototype.isWaveBattle = function() {
        const x = $gamePlayer.x;
        const y = $gamePlayer.y;
        const regionId = $gameMap.regionId(x, y);
        return waveRegions.includes(regionId);
    };
})();
