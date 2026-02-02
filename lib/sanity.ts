import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'f5l2gwnt',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-13',
  token: 'skvvtLXfX7dULwG9IAJ9BoyMJK0XVFk6emrL1SrJsFmgzBzrvAp3eif8ThEsZZ0s3dlWLth7Zjv39l6j0yuENQdi2HROcDtbgkPd4Eg2GfYG3wF42rpHbyBstLR2wflVaRv3mXEnXqVB9p8hEzDguQrwgaTTbEFiBBGNObVaaK6N6JyxyOac',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return undefined;
  return builder.image(source);
}