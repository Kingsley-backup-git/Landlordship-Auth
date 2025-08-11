import { GiTeePipe } from "react-icons/gi";
import { PiTelevisionDuotone } from "react-icons/pi";
import { PiCircuitryDuotone } from "react-icons/pi";
export const MaintenanceOptions = [
    {
        header: "Plumbing",
        text: "Drains, faucets, pipes, pumps, sprinkler systems",
        icon: GiTeePipe,
        subType: [
            { header: "Toilet" },
            { header: "Sink" },
            { header: "Sprinklers" }
        ]
    },
    {
        header: "Appliances",
        text: "Fridge, stove, dishwasher, heating & cooling.",
        icon: PiTelevisionDuotone,
        subType: [
            { header: "Refrigerator" },
            { header: "Oven / Stove" },
            { header: "Dishwasher" },
            { header: "Washing Machine" },
            { header: "Air Conditioner" },
            { header: "Heater" }
        ]
    },
    {
        header: "Electrical",
        text: "Lighting, power outlets, circuit breakers, and telephone systems.",
        icon: PiCircuitryDuotone,
        subType: [
            { header: "Lighting" },
            { header: "Power Outlets" },
            { header: "Circuit Breakers" },
            { header: "Wiring" },
            { header: "Telephone Systems" }
        ]
    }
];
