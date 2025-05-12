import { User, Subscription, ClipartImage } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Jane Cooper',
  email: 'jane@example.com',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  subscription: 'basic',
  createdAt: new Date('2023-01-15'),
};

export const subscriptionPlans: Subscription[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    features: ['3 clips per month', 'Basic prompt options', 'Standard resolution', 'Web downloads only'],
    imagesPerMonth: 3,
    tier: 'free',
  },
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    features: ['25 clips per month', 'Advanced prompt options', 'HD resolution', 'Commercial use license', 'Priority rendering'],
    imagesPerMonth: 25,
    tier: 'basic',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    features: ['100 clips per month', 'Expert prompt suggestions', '4K resolution', 'Bulk downloads', 'Commercial use license', 'Priority rendering', 'Custom styles'],
    imagesPerMonth: 100,
    tier: 'premium',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 49.99,
    features: ['Unlimited clips', 'Custom styles', 'API access', 'Team management', 'Dedicated support', 'Full commercial rights'],
    imagesPerMonth: 1000,
    tier: 'enterprise',
  },
];

export const mockImages: ClipartImage[] = [
  {
    id: '1',
    prompt: 'A cute cartoon cat playing with a ball of yarn',
    imageUrl: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userId: '1',
    createdAt: new Date('2023-05-12'),
    tags: ['cute', 'cat', 'cartoon', 'playful'],
    favorites: 124,
  },
  {
    id: '2',
    prompt: 'A robot teaching a class of children',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userId: '1',
    createdAt: new Date('2023-05-15'),
    tags: ['robot', 'education', 'future', 'technology'],
    favorites: 78,
  },
  {
    id: '3',
    prompt: 'A forest with magical creatures and a rainbow waterfall',
    imageUrl: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userId: '1',
    createdAt: new Date('2023-06-02'),
    tags: ['forest', 'magical', 'fantasy', 'nature'],
    favorites: 241,
  },
  {
    id: '4',
    prompt: 'An astronaut riding a dinosaur in space',
    imageUrl: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userId: '1',
    createdAt: new Date('2023-06-12'),
    tags: ['space', 'astronaut', 'dinosaur', 'funny'],
    favorites: 357,
  },
  {
    id: '5',
    prompt: 'A futuristic city with flying cars and tall skyscrapers',
    imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userId: '1',
    createdAt: new Date('2023-07-01'),
    tags: ['city', 'futuristic', 'technology', 'urban'],
    favorites: 189,
  },
  {
    id: '6',
    prompt: 'A medieval knight facing a dragon',
    imageUrl: 'https://images.pexels.com/photos/3334510/pexels-photo-3334510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    userId: '1',
    createdAt: new Date('2023-07-15'),
    tags: ['knight', 'dragon', 'medieval', 'fantasy'],
    favorites: 265,
  },
];

export const promptSuggestions = [
  'A cute cartoon animal in a natural setting',
  'A robot assistant helping with everyday tasks',
  'A fantasy landscape with magical elements',
  'A superhero with unique powers',
  'A futuristic vehicle or transportation',
  'A whimsical creature in an imaginary world',
  'A seasonal holiday scene with festive elements',
  'An underwater scene with colorful marine life',
  'A space exploration scene with planets and stars',
  'A food character with a funny expression',
];