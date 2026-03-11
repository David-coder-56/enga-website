import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration using environment variables
export const client = createClient({
  apiVersion: "2026-03-11",
  projectId: "cbq77g30",
  dataset: "production",
  useCdn: false, // Set to FALSE temporarily to bypass cache and see if data flows apiVersion: "2024-03-04", // Use a slightly more stable standard version// false while developing to always fetch fresh content
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
