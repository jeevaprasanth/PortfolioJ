// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_demo', // Demo service ID
  TEMPLATE_ID: 'template_demo', // Demo template ID
  PUBLIC_KEY: 'demo_public_key', // Demo public key
  
  // Email template parameters
  TEMPLATE_PARAMS: {
    to_name: 'Jeevaprasanth S',
    to_email: 'jeevaprasanth32@gmail.com', // Your email address
  }
};

// Email validation patterns
export const EMAIL_PATTERNS = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_NAME_LENGTH: 2,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
};

// Error messages
export const ERROR_MESSAGES = {
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters',
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  MESSAGE_REQUIRED: 'Message is required',
  MESSAGE_MIN_LENGTH: 'Message must be at least 10 characters',
  MESSAGE_MAX_LENGTH: 'Message must be less than 1000 characters',
  SEND_FAILED: 'Failed to send message. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  SEND_SUCCESS: 'Message sent successfully!',
  RESPONSE_PROMPT: 'I\'ll get back to you as soon as possible.',
};
