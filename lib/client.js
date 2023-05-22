import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url';

// sanity client used to connect to sanity studio
//dataset is used to connect to the dataset in sanity studio
// useCdn: true is used to get the latest data from the studio
export const client = sanityClient({
  projectId: "zjhtbfyq",
  dataset: "production",
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
