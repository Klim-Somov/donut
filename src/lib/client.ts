import { AcquiringClient } from "./proto/Acquiring_donutServiceClientPb";

export const acquiringClient = new AcquiringClient(
  window.location.origin,
  null
);
