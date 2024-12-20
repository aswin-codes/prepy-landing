import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Privacy Policy & Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Privacy Policy Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Privacy Policy</h2>
          <p className="text-gray-600 mb-8">
            At Prepy, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect
            your data.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Data Collection</h3>
              <p className="text-gray-600 mb-4">
                Prepy collects only the following user information:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                <li>Email Address</li>
                <li>Encrypted Password</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All data is stored securely and protected using JWT (JSON Web Tokens).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Document Handling</h3>
              <p className="text-gray-600">
                Prepy does not store any documents uploaded by users. Uploaded files are processed directly through
                our integrated Large Language Model (LLM) and are not retained on our servers. Information fetched
                during the process is stored locally on your device only.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Third-Party Services</h3>
              <p className="text-gray-600">
                Prepy uses third-party services (e.g., LLMs) strictly for processing user-provided documents.
                These services adhere to strict privacy guidelines and do not retain your data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Security</h3>
              <p className="text-gray-600">
                We prioritize the security of your data by employing industry-standard encryption and security
                protocols to protect your information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Changes to this Privacy Policy</h3>
              <p className="text-gray-600">
                We reserve the right to update this Privacy Policy at any time. Users will be notified of any changes
                through an update on the app or website.
              </p>
            </div>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Terms and Conditions</h2>
          <p className="text-gray-600 mb-8">
            By using Prepy, you agree to the following terms and conditions:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">User Responsibility</h3>
              <p className="text-gray-600">
                Users are responsible for the accuracy of the information they provide while using Prepy. Uploaded
                documents should not contain any malicious or illegal content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Usage Restrictions</h3>
              <p className="text-gray-600">
                Prepy is designed for personal and educational purposes. Commercial use of the app is prohibited
                without explicit permission from the developers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Liability</h3>
              <p className="text-gray-600">
                Prepy is not responsible for any inaccuracies or errors in the generated content. Users should verify
                the accuracy of the provided information before relying on it for critical decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Termination</h3>
              <p className="text-gray-600">
                We reserve the right to terminate user accounts that violate these terms or engage in malicious
                activities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Governing Law</h3>
              <p className="text-gray-600">
                These terms and conditions are governed by the laws of India. Any disputes arising from
                the use of Prepy will be resolved in accordance with applicable laws.
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 py-8">
          <p>&copy; {new Date().getFullYear()} Prepy. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;