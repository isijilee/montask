import { footerLinks } from "@/lib/montask-content";

export function MontaskFooter() {
  return (
    <footer className="pb-8 pt-4" id="footer">
      <div className="container-shell">
        <div className="flex flex-col gap-8 border-t border-[rgba(255,255,255,0.08)] py-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-[-0.05em] text-white">
              Montask
            </p>
            <p className="mt-2 text-sm text-[rgba(255,255,255,0.58)]">
              Монголд зориулсан freelance workflow.
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-[rgba(255,255,255,0.68)]">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                className="transition-colors duration-200 hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="text-sm text-[rgba(255,255,255,0.42)]">
          © 2026 Montask. Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
}
