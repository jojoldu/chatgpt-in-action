import { OpenAiService } from '../../src/openai/OpenAiService';

describe('OpenAiService', () => {
  let apiKey: string;
  let service: OpenAiService;

  beforeAll(() => {
    apiKey = process.env.OPENAI_API_KEY;
    service = new OpenAiService(apiKey);
  });

  it('답변얻기', async () => {
    const question = 'Where were the 1992 Olympics held?';
    const answer = await service.getAnswer(question);

    expect(answer).toContain('1992');
    expect(answer).toContain('Barcelona');
    expect(answer).toContain('Spain');
  });
});
