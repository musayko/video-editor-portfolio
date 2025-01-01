import WhatsAppButton from '../components/WhatsAppButton';
import { contactConfig } from '../config/contact';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="max-w-md">
        <p className="mb-6">
          Feel free to reach out to me directly through WhatsApp. I'll get back to you as soon as possible.
        </p>
        <WhatsAppButton 
          phoneNumber={contactConfig.whatsapp.phoneNumber}
          message={contactConfig.whatsapp.defaultMessage}
        />
      </div>
    </div>
  );
} 