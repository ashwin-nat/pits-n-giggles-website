export interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  photoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Katpadi Kumar",
    title: "Monza T1 Enjoyer",
    testimonial: "I like car.",
  },
  {
    name: "Sarah K.",
    title: "F1 Game Player",
    testimonial: "Being able to compare my telemetry against rivals mid race is such an advantage!",
    photoUrl: "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg"
  },
  {
    name: "James R.",
    title: "Assetto Corsa Driver",
    testimonial: "Being able to compare my telemetry with my teammates has transformed our practice sessions. We're all pushing each other to improve using the data.",
  }
];