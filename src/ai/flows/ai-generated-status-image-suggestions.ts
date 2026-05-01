'use server';
/**
 * @fileOverview Provides AI-powered suggestions for status image creation based on a given quote.
 *
 * - generateStatusImageSuggestions - A function that generates design suggestions for a status image.
 * - AiGeneratedStatusImageSuggestionsInput - The input type for the generateStatusImageSuggestions function.
 * - AiGeneratedStatusImageSuggestionsOutput - The return type for the generateStatusImageSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiGeneratedStatusImageSuggestionsInputSchema = z.object({
  quote: z.string().describe('The quote text for which to generate status image suggestions.'),
});
export type AiGeneratedStatusImageSuggestionsInput = z.infer<typeof AiGeneratedStatusImageSuggestionsInputSchema>;

const AiGeneratedStatusImageSuggestionsOutputSchema = z.object({
  backgroundSuggestions: z.array(z.string()).describe('Suggested descriptions for background images that complement the quote, e.g., "a serene forest at dawn", "abstract geometric patterns in blue and gold".'),
  colorPaletteSuggestions: z.array(z.object({
    primary: z.string().describe('Primary color in hex code (e.g., #RRGGBB).'),
    secondary: z.string().describe('Secondary color in hex code (e.g., #RRGGBB).'),
    accent: z.string().describe('Accent color in hex code (e.g., #RRGGBB).'),
  })).describe('Suggested complementary color palettes as hex codes.'),
  textLayoutSuggestions: z.array(z.string()).describe('Suggested text layout options, including font styles, alignment, and positioning, e.g., "Modern sans-serif font, centered, with bold heading and light body text", "Elegant serif font, left-aligned, with increased line spacing".'),
});
export type AiGeneratedStatusImageSuggestionsOutput = z.infer<typeof AiGeneratedStatusImageSuggestionsOutputSchema>;

export async function generateStatusImageSuggestions(input: AiGeneratedStatusImageSuggestionsInput): Promise<AiGeneratedStatusImageSuggestionsOutput> {
  return aiGeneratedStatusImageSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiGeneratedStatusImageSuggestionsPrompt',
  input: {schema: AiGeneratedStatusImageSuggestionsInputSchema},
  output: {schema: AiGeneratedStatusImageSuggestionsOutputSchema},
  prompt: `You are an expert graphic designer specialized in creating visually stunning social media status images.
Given a quote, your task is to suggest visually appealing background images, complementary color palettes, and elegant text layout options.

Consider the mood, theme, and key words of the quote when generating suggestions.
Ensure the suggestions are creative, professional, and easy to implement.

Quote: "{{{quote}}}"

Please provide your suggestions in the following JSON format:
{{{jsonSchema AiGeneratedStatusImageSuggestionsOutputSchema}}}`,
});

const aiGeneratedStatusImageSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiGeneratedStatusImageSuggestionsFlow',
    inputSchema: AiGeneratedStatusImageSuggestionsInputSchema,
    outputSchema: AiGeneratedStatusImageSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
