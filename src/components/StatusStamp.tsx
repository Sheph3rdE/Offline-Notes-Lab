interface StatusStampProps {
  online: boolean;
}

export function StatusStamp({ online }: StatusStampProps) {
  return (
    <div className="status-stamp">
      <span className={`status-dot ${online ? "online" : "offline"}`} />
      <span className={`status-text ${online ? "online" : "offline"}`}>
        {online ? "Online" : "Offline"}
      </span>
    </div>
  );
}
