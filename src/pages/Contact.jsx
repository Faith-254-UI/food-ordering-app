function Contact() {
  return (
    <div className="p-6 text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h1>
      <p className="mb-4 text-gray-700">
        We'd love to hear from you! Whether it's feedback, questions, or just saying hello — reach out anytime.
      </p>
      <p className="mb-2 text-gray-700">
        📧 Email us at{' '}
        <a
          href="mailto:hello@foodiesapp.com"
          className="text-blue-600 underline hover:text-blue-800"
        >
          hello@foodiesapp.com
        </a>
      </p>
      <p className="mb-6 text-gray-700">
        📞 Call us at{' '}
        <span className="font-semibold text-gray-900">+254 712 345 678</span>
      </p>
      <p className="text-sm text-gray-500">
        Available Monday to Friday, 9 AM – 5 PM EAT.
      </p>
    </div>
  );
}

export default Contact;
