import CityImprovement from '@civ-clone/core-city-improvement/CityImprovement';
import Unhappiness from '@civ-clone/base-city-yield-unhappiness/Unhappiness';
import Yield from '@civ-clone/core-yield/Yield';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class CityImprovementContent extends Unhappiness {
  #cityImprovement: CityImprovement;

  constructor(value: number | Yield, cityImprovement: CityImprovement) {
    super(value, cityImprovement.id());

    this.#cityImprovement = cityImprovement;
  }

  cityImprovement(): CityImprovement {
    return this.#cityImprovement;
  }
}

makeNegative(CityImprovementContent);

export default CityImprovementContent;
