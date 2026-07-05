// src/app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-400 font-sans px-4 sm:px-6 lg:px-8 py-24 flex justify-center">
      <div className="max-w-3xl w-full border border-slate-900 bg-slate-900/20 backdrop-blur-md rounded-xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-xs font-mono text-slate-500">Last Updated: July 5, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">1. Minimal Data Collection Principles</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Non-Registered Visitors:</strong> We do not track, collect, or store any data from individuals visiting our landing platform who have not explicitly signed up for an account.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Self-Hosted Implementations:</strong> We do not collect, intercept, or retain any data or vector telemetry from customers running self-hosted instances of Brixta Systems. Your data remains entirely within your control.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">2. Cookie Usage Policy</h2>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Public Visitors:</strong> We do not drop or store tracking cookies, analytical pixels, or behavioral data on anonymous website visitors.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Registered Users:</strong> We use strictly necessary authentication cookies exclusively for users who sign up and log into our platform. These cookies are utilized solely to maintain secure session states and verify user identities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-wide">3. Data Processing and Retention</h2>
          <p className="text-sm leading-relaxed">
            For registered cloud users, any data submitted for vector embedding generation is handled with strict retention limits.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">Immediate Deletion:</strong> Vector data is immediately wiped from our servers the moment it is successfully downloaded by the user.
          </p>
          <p className="text-sm leading-relaxed">
            <strong className="text-slate-300">60-Day Expiration:</strong> Any remaining undownloaded vectors are systematically cleared from our databases after 60 days.
          </p>
        </section>
      </div>
    </div>
  );
}