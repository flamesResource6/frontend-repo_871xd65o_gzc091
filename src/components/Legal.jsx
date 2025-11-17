export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="backdrop-blur-xl bg-white/50 border border-white/40 rounded-2xl p-6 text-center text-sm text-slate-600">
          © 2025 Checkbox. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-700 mb-6">
            This Privacy Policy explains how we collect, use, and share personal data when you use our notepad service. We are committed to protecting your privacy and complying with the General Data Protection Regulation (EU) 2016/679 (GDPR) and applicable data protection laws.
          </p>
          <div className="space-y-4 text-slate-700">
            <section>
              <h2 className="font-semibold text-slate-900">1. Data Controller</h2>
              <p>Checkbox ("we", "us") is the controller of your personal data for the purposes described in this policy.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">2. Personal Data We Process</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Account data: identifiers and contact information if you create an account in the future.</li>
                <li>Content data: the notes you write, categories you create, and related metadata.</li>
                <li>Usage data: device, log, and interaction information for performance and security.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">3. Legal Bases for Processing</h2>
              <p>We process personal data under the following legal bases: performance of a contract (Art. 6(1)(b) GDPR), legitimate interests (Art. 6(1)(f)), and consent (Art. 6(1)(a)) where required.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">4. Purposes of Processing</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide, operate, and secure the notepad and AI features.</li>
                <li>Improve quality, performance, and user experience.</li>
                <li>Prevent abuse and ensure service integrity.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">5. Data Retention</h2>
              <p>We retain data only as long as necessary for the purposes above or as required by law. You can request deletion of your notes at any time.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">6. International Transfers</h2>
              <p>When transferring data outside the EEA/UK, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs).</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">7. Your Rights</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access, rectification, erasure, restriction, objection, and data portability (Arts. 15–21 GDPR).</li>
                <li>Right to withdraw consent at any time where processing relies on consent.</li>
                <li>Right to lodge a complaint with a supervisory authority.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">8. Security</h2>
              <p>We implement technical and organizational measures to protect data, including encryption in transit, access controls, and monitoring.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">9. Processors and Sharing</h2>
              <p>We use trusted service providers under data processing agreements. We do not sell personal data.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">10. Children</h2>
              <p>The service is not directed to children under 16. If you believe we have collected data from a child, contact us to delete it.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">11. Contact</h2>
              <p>To exercise your rights or ask questions, contact: privacy@checkbox.example</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">12. Changes</h2>
              <p>We may update this policy. We will notify you of material changes and update the effective date.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-700 mb-6">
            These Terms of Service govern your access to and use of the notepad service. By using the service you agree to these terms. Please read them carefully.
          </p>
          <div className="space-y-4 text-slate-700">
            <section>
              <h2 className="font-semibold text-slate-900">1. Use of Service</h2>
              <p>You may use the service only in compliance with applicable laws. You are responsible for content you create and for maintaining the security of your account if one exists.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">2. User Content</h2>
              <p>You retain ownership of notes you create. By using AI features, you grant us a limited license to process your content to provide and improve the service.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">3. Acceptable Use</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>No illegal, infringing, or harmful content.</li>
                <li>No attempt to disrupt or overload the service.</li>
                <li>No reverse engineering or scraping outside allowed APIs.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">4. Intellectual Property</h2>
              <p>The service, UI, and underlying technology are owned by Checkbox and its licensors. You may not copy or modify the service code except as allowed by law.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">5. Disclaimers</h2>
              <p>The service is provided "as is" without warranties. We do not guarantee uninterrupted operation or error-free AI outputs.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">6. Limitation of Liability</h2>
              <p>To the extent permitted by law, Checkbox will not be liable for indirect, incidental, special, consequential, or punitive damages.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">7. Termination</h2>
              <p>We may suspend or terminate access for violation of these terms. You may stop using the service at any time.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">8. Governing Law</h2>
              <p>These terms are governed by applicable laws of your jurisdiction where consumer protections apply, otherwise by the laws of the country of establishment.</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">9. Contact</h2>
              <p>For questions about these terms, contact: legal@checkbox.example</p>
            </section>
            <section>
              <h2 className="font-semibold text-slate-900">10. Changes</h2>
              <p>We may update these terms. Continued use after changes constitutes acceptance.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
