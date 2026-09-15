export default function Logo({ className = "", dark = false }) {
  const color = dark ? "#0b0b0d" : "#f4f1ea";
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="1" y="1" width="24" height="24" stroke="#c9a464" strokeWidth="1" />
        <path d="M13 5L19 21H16.5L13 11.5L9.5 21H7L13 5Z" fill="#c9a464" />
      </svg>
      <span
        className="font-display tracking-[0.2em] text-lg leading-none"
        style={{ color }}
      >
        ATELIER <span className="text-[#c9a464]">NOIR</span>
      </span>
    </div>
  );
}
