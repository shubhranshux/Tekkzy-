export function ProductVisual({ type, accent }: { type: string; accent: string }) {
  return (
    <div className={`product-visual ${type}`} style={{ "--accent": accent } as React.CSSProperties}>
      <div className="visual-top"><i /><i /><i /><span /></div>
      <div className="visual-sidebar"><b /><b /><b /><b /><b /><b /></div>
      {type === "analytics" && <><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line" /><div className="chart-area" /></>}
      {type === "ai" && <><div className="chat-dot" /><div className="chat-bubble big" /><div className="chat-bubble small" /><div className="chat-bubble reply" /></>}
      {type === "automation" && <><div className="flow-node n1" /><div className="flow-node n2" /><div className="flow-node n3" /><div className="flow-node n4" /><div className="flow-line l1" /><div className="flow-line l2" /><div className="flow-line l3" /></>}
      {(type === "erp" || type === "crm") && <><div className="visual-table"><i /><i /><i /><i /><i /></div><div className="donut" /><div className="mini-stat" /></>}
      {type === "hr" && <><div className="hr-profile" /><div className="hr-profile p2" /><div className="hr-profile p3" /><div className="hr-bar" /><div className="hr-bar b2" /><div className="hr-bar b3" /></>}
      {type === "inventory" && <><div className="inv-box" /><div className="inv-box x2" /><div className="inv-box x3" /><div className="inv-meter" /><div className="inv-label" /></>}
      {type === "marketing" && <><div className="mkt-funnel" /><div className="mkt-bar" /><div className="mkt-bar m2" /><div className="mkt-bar m3" /><div className="mkt-dot" /></>}
    </div>
  );
}
