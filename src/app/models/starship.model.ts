import { Macchine } from './macchine.model';
export class Starship extends Macchine {
  starship_class: string;
  hyperdrive_rating: string;
}

export const StartShipFields = [
  {
    label: 'Name',
    field: 'name'
  },

  {
    label: 'Cargo Capacity',
    field: 'cargo_capacity'
  },

  {
    label: 'Consumables',
    field: 'consumables'
  },

  {
    label: 'Cost in Credits',
    field: 'cost_in_credits'
  },

  {
    label: 'Crew',
    field: 'crew'
  },
  {
    label: 'Hyperdrive rating',
    field: 'hyperdrive_rating'
  },

  {
    label: 'Length',
    field: 'length'
  },
  {
    label: 'Manufacturer',
    field: 'manufacturer'
  },
  {
    label: 'Max Atmosphering Speed',
    field: 'max_atmosphering_speed'
  },
  {
    label: 'model',
    field: 'model'
  },
  {
    label: 'Passengers',
    field: 'passengers'
  }
];
