import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class SoundboardMod extends PolyMod {
    play(url) {
        new Audio(url).play();
    }

    init = (pml) => {
        this.pml = pml;
        pml.registerBindCategory("Soundboard");
        pml.registerKeybind("Vine Boom", "sb_vineboom", "keydown", "Digit1", null, () => {
            this.play("https://cdn.jsdelivr.net/gh/WindowCleanerPT/polyqol/sounds/vineboom.mp3");
        });
        pml.registerKeybind("Car Honk", "sb_honk", "keydown", "Digit2", null, () => {
            this.play("https://cdn.jsdelivr.net/gh/WindowCleanerPT/polyqol/sounds/honk.mp3");
        });
        pml.registerKeybind("Beep", "sb_beep", "keydown", "Digit3", null, () => {
            this.play("https://cdn.jsdelivr.net/gh/WindowCleanerPT/polyqol/sounds/beep.mp3");
        });
        pml.registerKeybind("Motorcycle Rev", "sb_rev", "keydown", "Digit4", null, () => {
            this.play("https://cdn.jsdelivr.net/gh/WindowCleanerPT/polyqol/sounds/rev.mp3");
        });
    }
}

export let polyMod = new SoundboardMod();
