import { LovelaceCardConfig } from "custom-card-helpers";

export interface RealtimeEnergyDistributionCardConfig
  extends LovelaceCardConfig {
  grid_entity?: string;
  battery_to_home_entity?: string;
  battery_charge_entity?: string;
  grid_to_home_entity?: string;
  solar_to_battery_entity?: string;
  solar_to_grid_entity?: string;
  solar_to_home_entity?: string;
}
