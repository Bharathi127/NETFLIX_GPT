import OpenAI from 'openai';
import { API_KEY } from './Constants';

const openai = new OpenAI({
  apiKey:API_KEY, 
  dangerouslyAllowBrowser: true// defaults to process.env["OPENAI_API_KEY"]
});

export default openai
