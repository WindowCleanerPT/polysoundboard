import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.0/PolyTypes.js";

class PolyQOL extends PolyMod {
    init = (pml) => {
        this.pml = pml;
    }

    onGameLoad = () => {
        // your mod logic here
    }
}

export let polyMod = new PolyQOL();
