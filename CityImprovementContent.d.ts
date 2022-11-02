import CityImprovement from '@civ-clone/core-city-improvement/CityImprovement';
import Unhappiness from '@civ-clone/base-city-yield-unhappiness/Unhappiness';
import Yield from '@civ-clone/core-yield/Yield';
export declare class CityImprovementContent extends Unhappiness {
  #private;
  constructor(value: number | Yield, cityImprovement: CityImprovement);
  cityImprovement(): CityImprovement;
}
export default CityImprovementContent;
