import dotenv from 'dotenv';
import { config as getConfig } from '@gecommerce/config';

// Load environment variables first
dotenv.config();

export const config = getConfig();
