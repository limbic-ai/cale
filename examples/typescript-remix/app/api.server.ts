import * as cale from "@cale-app/sdk";

const config = new cale.Configuration({ apiKey: process.env.CALE_API_KEY });

export const api = {
  services: new cale.ServicesApi(config),
  offers: new cale.OffersApi(config),
  reservations: new cale.ReservationsApi(config),
  customers: new cale.CustomersApi(config),
  providers: new cale.ProvidersApi(config),
};
