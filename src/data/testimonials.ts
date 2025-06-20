export interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  photoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rage Nail",
    title: "Content creator",
    testimonial: "I use Pits n' Giggles mainly for the OBS stream overlay—makes it easy for my viewers to follow my lap times and help with consistency. The pace comparison overlay's been especially useful during races to get real-time feedback on where I'm gaining or losing time."
  },
  {
    name: "Scurl",
    title: "League admin",
    testimonial: "The amount of overview Pits n' Giggles provides is an absolute gamechanger for me as a League Admin and Race Engineer. It combines extensive telemetry with a congenial design, which makes analyzing data as easy as it could get. It's simply a must have!",
  }
];