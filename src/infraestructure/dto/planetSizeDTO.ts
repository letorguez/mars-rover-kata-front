import {PlanetSize} from "@/domain/models/types/planetSize";

export class PlanetSizeDTO {
    constructor(private readonly height: number, private readonly width: number) {
    }

    toDomainObject(): PlanetSize {
        return {height: this.height, width: this.width};
    }
}