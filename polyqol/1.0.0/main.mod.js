import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

const BASE = "https://cdn.jsdelivr.net/gh/WindowCleanerPT/polysoundboard/sounds/";

class SoundboardMod extends PolyMod {
    play(url) {
        new Audio(url).play();
    }

    init = (pml) => {
        this.pml = pml;
        pml.registerBindCategory("Soundboard");
        pml.registerKeybind("Vine Boom", "sb_vineboom", "keydown", "Digit1", null, () => {
            this.play(BASE + "polyqol_sounds_bithuh-vine-boom-392646.mp3");
        });
        pml.registerKeybind("Car Honk", "sb_honk", "keydown", "Digit2", null, () => {
            this.play(BASE + "dragon-studio-car-honk-386166.mp3");
        });
        pml.registerKeybind("Beep", "sb_beep", "keydown", "Digit3", null, () => {
            this.play(BASE + "emircanalp-beep-125033%20(1).mp3");
        });
        pml.registerKeybind("Motorcycle Rev", "sb_rev", "keydown", "Digit4", null, () => {
            this.play(BASE + "tanweraman-motorcycle-engine-rev-2-337870.mp3");
        });
    }
}

export let polyMod = new SoundboardMod();
