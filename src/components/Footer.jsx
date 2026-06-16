import { profile } from "../data/profile.js";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p>{profile.credentials}</p>
      </div>
    </footer>
  );
}

export default Footer;
