export interface Service {
  id: number;
  name: string;
  price: number;
}

export interface Section {
  id: number;
  name: string;
  services: Service[];
}

export interface MenuResponse {
  sections: Section[];
}
