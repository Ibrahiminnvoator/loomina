"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Wand2, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
});

export default function ImageGenerator() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      // TODO: Implement image generation using fal.ai API
      // For now, we'll use a placeholder image
      await new Promise(resolve => setTimeout(resolve, 2000));
      setImage('https://source.unsplash.com/random/400x400');
      toast({
        title: "Image generated successfully!",
        description: "Your AI-generated image is ready.",
      });
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 bg-card rounded-3xl shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        Visualize Your Idea
        <Star className="ml-2 h-5 w-5" />
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Describe the image you want to generate..." 
                    {...field} 
                    className="rounded-full p-4 text-lg bg-background/90 dark:bg-gray-700/90 border-2 border-secondary focus:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full rounded-full p-4 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg" 
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-6 w-6" />
                Generate Image
              </>
            )}
          </Button>
        </form>
      </Form>

      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <img src={image} alt="Generated" className="w-full h-auto rounded-xl shadow-lg" />
        </motion.div>
      )}
    </motion.div>
  );
}