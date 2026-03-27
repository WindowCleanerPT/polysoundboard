import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class SoundboardMod extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        pml.registerBindCategory("Soundboard");
    }
}

export let polyMod = new SoundboardMod();
