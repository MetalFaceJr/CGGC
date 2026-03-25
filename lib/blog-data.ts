export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "beginner-guide-to-jiu-jitsu",
    title: "Beginner's Guide to Brazilian Jiu-Jitsu",
    excerpt: "Learn the fundamentals and get started on your grappling journey.",
    content: `
Brazilian Jiu-Jitsu is a martial art focused on grappling and submissions. Whether you're interested in competition or just fitness, BJJ offers something for everyone.

## Getting Started

The first thing to understand is that BJJ is about leverage and technique, not just strength. We welcome all experience levels and body types.

## Basic Positions

The most fundamental position in BJJ is the guard. When someone is on top of you, being in the guard position gives you control and escape options.

Other key positions include mount, side control, and back control. Understanding these positions is crucial to progressing in the sport.

## Benefits of Training

- Improved fitness and flexibility
- Increased confidence and discipline
- A welcoming community of grapplers
- Self-defense skills

Start your free trial this week!
    `,
    author: "Randy Roden",
    date: "2026-03-20",
    category: "Beginner Tips",
  },
  {
    id: "2",
    slug: "importance-of-strength-training",
    title: "Strength Training for Grapplers",
    excerpt: "How to complement your grappling training with proper strength and conditioning.",
    content: `
While grappling itself is an excellent workout, targeted strength training can significantly improve your performance on the mat.

## Why Strength Matters

Strength provides the foundation for executing techniques efficiently. It helps with:
- Maintaining positions
- Escaping from disadvantageous positions
- Preventing injuries

## Recommended Exercises

Focus on compound movements:
- Squats for leg strength
- Deadlifts for posterior chain
- Bench press for upper body
- Pull-ups for back and grip strength

## Recovery is Key

Don't overlook the importance of rest and recovery. Your muscles grow during recovery, not during the workout.

Train smart, train hard, and train often!
    `,
    author: "Brayan Reyes",
    date: "2026-03-15",
    category: "Training Tips",
  },
  {
    id: "3",
    slug: "no-gi-vs-gi-grappling",
    title: "No-Gi vs. Gi Grappling: What's the Difference?",
    excerpt: "Understanding the key differences between these two grappling styles.",
    content: `
Both Gi and No-Gi grappling are valuable, but they emphasize different techniques and strategies.

## Gi Grappling (Brazilian Jiu-Jitsu)

In Gi grappling, you wear a traditional uniform (gi) with a jacket and belt. This allows for additional grip and control options.

Benefits:
- More grip options with the uniform
- Emphasis on positional control
- Highly technical and detailed

## No-Gi Grappling (Submission Wrestling)

No-Gi grappling is faster-paced and more dynamic. Without the gi to grab, the emphasis shifts to leg locks and footlock submissions.

Benefits:
- Faster, more dynamic pace
- Similar to MMA positioning
- Great cardiovascular workout

## Why Both Matter

Training both styles makes you a complete grappler. Each teaches unique techniques and strategies that enhance your overall skills.

We offer both Gi and No-Gi classes at Calhoun GA Grappling Club!
    `,
    author: "Matt Hugh Boiles",
    date: "2026-03-10",
    category: "Techniques",
  },
  {
    id: "4",
    slug: "youth-grappling-benefits",
    title: "Benefits of Youth Grappling Programs",
    excerpt: "How grappling helps develop confidence, discipline, and physical fitness in young athletes.",
    content: `
Grappling is an excellent activity for children and teens. Beyond learning self-defense, young grapplers develop valuable life skills.

## Physical Benefits

- Improved strength and flexibility
- Enhanced coordination and body awareness
- Cardiovascular fitness
- Healthy outlet for energy

## Mental Benefits

- Increased confidence and self-esteem
- Discipline and focus
- Goal-setting and achievement
- Resilience through learning from losses

## Social Benefits

- Building friendships with teammates
- Learning respect and sportsmanship
- Being part of a supportive community
- Healthy competition

## Getting Your Child Started

Our youth programs are designed for kids ages 5 and up. We create a fun, safe environment where kids can learn and grow.

Classes are structured around positive reinforcement and technique development, not aggressive competition.

Enroll your child in a free trial class today!
    `,
    author: "Will Jordan",
    date: "2026-03-05",
    category: "Youth Programs",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
