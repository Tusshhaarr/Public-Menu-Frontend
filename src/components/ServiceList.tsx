import type { Service } from "../types/menu";

interface Props {
  services: Service[];
}

export default function ServiceList({ services }: Props) {
  return (
    <div className="services">
      {services.map(service => (
        <div key={service.id} className="service">
          <span>{service.name}</span>
          <span>₹{service.price}</span>
        </div>
      ))}
    </div>
  );
}
