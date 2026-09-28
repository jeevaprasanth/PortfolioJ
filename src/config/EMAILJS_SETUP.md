# EmailJS Setup Guide

To enable real-time email sending functionality, you need to configure EmailJS with your own credentials.

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to Email Services in your dashboard
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to Email Templates in your dashboard
2. Click "Create New Template"
3. Use the following template structure:

**Template Name:** Contact Form
**Subject:** New Contact Form Message from {{from_name}}
**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Sent to: {{to_name}} ({{to_email}})
```

4. Note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to Account -> API Keys
2. Copy your **Public Key**

## Step 5: Update Configuration
Update the `src/config/emailjs.js` file with your credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
  PUBLIC_KEY: 'your_public_key_here',
  
  TEMPLATE_PARAMS: {
    to_name: 'Jeevaprasanth S',
    to_email: 'jeevaprasanth32@gmail.com',
  }
};
```

## Step 6: Test the Functionality
1. Start your development server
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email for the message

## Features Included
- Real-time email sending
- Form validation
- Error handling with specific messages
- Success feedback with animations
- Character counter for message field
- Loading states
- Network error handling

## Troubleshooting
- **Network Error**: Check your internet connection
- **Authentication Failed**: Verify your EmailJS credentials
- **Invalid Configuration**: Ensure service and template IDs are correct
- **Rate Limiting**: EmailJS free tier has daily limits

## Security Notes
- Your Public Key is safe to expose in frontend code
- Never share your Private Key
- Consider using reCAPTCHA for production to prevent spam
