export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="dotGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#fafafa" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#dotGrad)" />
      <circle cx="16" cy="16" r="6" fill="#0a0a0a" />
    </svg>
  );
}
