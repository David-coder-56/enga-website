import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "cbq77g30",
  dataset: "production",
  useCdn: false, // Set to FALSE temporarily to bypass cache and see if data flows
  apiVersion: "2024-03-04", // Use a slightly more stable standard version
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);