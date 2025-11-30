import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS to allow frontend requests
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      // List of allowed origins
      const allowedOrigins = [
        'http://localhost:5173',
        'http://localhost:3000',
      ];
      
      // Check if origin matches allowed patterns
      const isAllowed = allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.endsWith('.netlify.app');
      
      if (isAllowed) {
        callback(null, true);
      } else {
        console.log('Blocked origin:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
}
bootstrap();
