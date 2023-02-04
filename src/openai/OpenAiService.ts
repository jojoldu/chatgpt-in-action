import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenAiService {
  private readonly openai: OpenAIApi;

  constructor(apiKey = process.env.OPENAI_API_KEY) {
    this.openai = new OpenAIApi(
      new Configuration({
        apiKey,
      }),
    );
  }

  async getAnswer(question: string): Promise<string> {
    try {
      const completion = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: question,
        temperature: 0.6,
      });

      return completion.data.choices[0].text;
    } catch (error) {
      const message = `Error with OpenAI API request: ${
        error.message
      }, status=${error.response.status}, response=${JSON.stringify(
        error.response.data,
      )}`;
      console.error(message);
      return message;
    }
  }
}
