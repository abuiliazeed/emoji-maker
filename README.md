# Emoji Generator

This project is a web application that allows users to generate custom emoji images using OpenAI's DALL-E 3 model. Built with Next.js and featuring a modern UI with shadcn/ui components, this app provides an interactive and fun way to create unique emojis based on text prompts.

## Features

- Generate custom emoji images using text prompts
- High-quality image output using DALL-E 3
- Responsive grid display of generated emojis
- Download and like functionality for generated emojis
- User authentication with Clerk
- Data persistence with Supabase

## Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [OpenAI API](https://openai.com/blog/openai-api)
- [Supabase](https://supabase.io)
- [Clerk](https://clerk.dev)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [Supabase Documentation](https://supabase.io/docs)
- [Clerk Documentation](https://docs.clerk.dev)

## Deployment

This app can be easily deployed on [Vercel](https://vercel.com), the platform from the creators of Next.js. For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
