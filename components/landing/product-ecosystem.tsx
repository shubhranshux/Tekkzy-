"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  Database,
  DollarSign,
  FileText,
  Filter,
  Globe,
  Layers,
  Lock,
  Megaphone,
  MessageSquare,
  Package,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const products = [
  { name: "ERP", icon: BriefcaseBusiness, accent: "#1762ef", category: "Core Operations", badge: "Command Center" },
  { name: "CRM", icon: Users, accent: "#3f60ea", category: "Revenue & Deals", badge: "Pipeline" },
  { name: "HR Suite", icon: Users, accent: "#e05690", category: "People & Staff", badge: "Workforce" },
  { name: "Inventory", icon: Package, accent: "#d97b1e", category: "Warehouse & Stock", badge: "Multi-Bay" },
  { name: "Analytics", icon: BarChart3, accent: "#4565cf", category: "Executive BI", badge: "Metrics" },
  { name: "AI Assistant", icon: Bot, accent: "#7157ee", category: "Autonomous Copilot", badge: "GenAI" },
  { name: "Automation", icon: Workflow, accent: "#20a68c", category: "Event Pipelines", badge: "Zero-Code" },
  { name: "Digital Marketing", icon: Megaphone, accent: "#2ba88e", category: "Growth & Campaigns", badge: "Ad ROI" },
  { name: "SEO", icon: Search, accent: "#7d5ce7", category: "Search Dominance", badge: "Rank #1" },
];

/* ────────────────────────────────────────────── */
/*  1. ERP: Full Operations Command Center        */
/* ────────────────────────────────────────────── */
function ErpVisual() {
  return (
    <div className="pv pv-erp">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Operations Hub</span>
          <h4 className="pv-title">ERP Command Center</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-live-pill"><span className="pv-live-dot" /> All 6 Systems Synced</span>
        </div>
      </div>

      <div className="pv-erp-kpi-row">
        <div className="pv-erp-kpi">
          <small>Net Revenue</small>
          <strong>₹84.6L</strong>
          <span className="pv-growth-tag">+22.4% MoM</span>
        </div>
        <div className="pv-erp-kpi">
          <small>Active Workflows</small>
          <strong>1,480</strong>
          <span className="pv-sub-tag">99.9% Uptime</span>
        </div>
        <div className="pv-erp-kpi">
          <small>Capacity Load</small>
          <strong>89.2%</strong>
          <span className="pv-sub-tag">Balanced</span>
        </div>
      </div>

      <div className="pv-erp-modules-grid">
        {[
          { name: "Financial Ledger", icon: DollarSign, status: "100% Reconciled", state: "Live", color: "#1762ef" },
          { name: "Supply Chain", icon: Package, status: "18 Routes Active", state: "Optimal", color: "#0ea5e9" },
          { name: "Workforce & HR", icon: Users, status: "348 Active Staff", state: "98% Present", color: "#e05690" },
          { name: "Production & Stock", icon: Layers, status: "42.8K Units Tracked", state: "In Stock", color: "#d97b1e" },
          { name: "Sales Pipeline", icon: TrendingUp, status: "₹1.42 Cr Pipeline", state: "34 Won", color: "#20a68c" },
          { name: "Compliance & Audit", icon: ShieldCheck, status: "ISO 27001 Certified", state: "Audit Ready", color: "#7d5ce7" },
        ].map((m) => {
          const MIcon = m.icon;
          return (
            <div key={m.name} className="pv-erp-module-card">
              <div className="pv-erp-mod-icon" style={{ color: m.color, background: `${m.color}15` }}>
                <MIcon size={14} />
              </div>
              <div className="pv-erp-mod-info">
                <b>{m.name}</b>
                <small>{m.status}</small>
              </div>
              <span className="pv-erp-mod-badge">{m.state}</span>
            </div>
          );
        })}
      </div>

      <div className="pv-erp-sync-footer">
        <div className="pv-sync-label">
          <Cpu size={12} /> Real-time Node Sync:
        </div>
        <div className="pv-sync-nodes">
          <span><i /> Mumbai</span>
          <span><i /> Delhi</span>
          <span><i /> Bengaluru</span>
          <span><i /> Singapore</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  2. CRM: Sales Pipeline & Deal Velocity        */
/* ────────────────────────────────────────────── */
function CrmVisual() {
  return (
    <div className="pv pv-crm">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Revenue Velocity</span>
          <h4 className="pv-title">Sales Pipeline & CRM</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-stat-pill">Pipeline: <b>₹1.84 Cr</b></span>
        </div>
      </div>

      <div className="pv-crm-pipeline-bars">
        {[
          { stage: "New Inbound", count: 142, val: "₹48.5L", pct: 100, color: "#3f60ea" },
          { stage: "Qualified", count: 68, val: "₹62.0L", pct: 72, color: "#2563eb" },
          { stage: "In Negotiation", count: 24, val: "₹44.2L", pct: 46, color: "#d97b1e" },
          { stage: "Closed Won", count: 42, val: "₹29.3L", pct: 30, color: "#16a34a" },
        ].map((st) => (
          <div key={st.stage} className="pv-crm-p-step">
            <div className="pv-crm-p-meta">
              <span>{st.stage} <b>({st.count})</b></span>
              <strong>{st.val}</strong>
            </div>
            <div className="pv-crm-track">
              <div
                className="pv-crm-fill"
                style={{ width: `${st.pct}%`, background: st.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pv-crm-deals-list">
        <div className="pv-crm-deals-head">
          <span>Active Priority Deals</span>
          <small>Real-time Win Probability</small>
        </div>
        {[
          { name: "Acme Global Solutions", deal: "₹14.5L", stage: "Proposal", prob: "88%", owner: "Priya S.", tag: "Enterprise" },
          { name: "TechNexus Systems", deal: "₹8.2L", stage: "Qualified", prob: "64%", owner: "Rahul M.", tag: "SaaS Scale" },
          { name: "Apex Logistics Group", deal: "₹21.0L", stage: "Negotiation", prob: "45%", owner: "Amit K.", tag: "Custom ERP" },
        ].map((d) => (
          <div key={d.name} className="pv-crm-deal-row">
            <div className="pv-crm-deal-left">
              <span className="pv-crm-deal-avatar">{d.owner.slice(0, 2)}</span>
              <div>
                <b>{d.name}</b>
                <small>{d.owner} · <span className="pv-tag-sm">{d.tag}</span></small>
              </div>
            </div>
            <div className="pv-crm-deal-mid">
              <span>{d.stage}</span>
            </div>
            <div className="pv-crm-deal-right">
              <strong>{d.deal}</strong>
              <span className="pv-crm-prob-badge">{d.prob}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pv-crm-footer-team">
        <div className="pv-crm-team-avatars">
          <span>PS</span><span>RM</span><span>AK</span><span>NK</span><span>SI</span>
          <small>+12 sales closers active now</small>
        </div>
        <div className="pv-crm-q-badge">Quarterly Quota: <b>138% Achieved</b></div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  3. HR SUITE: People & Organization Hub        */
/* ────────────────────────────────────────────── */
function HrVisual() {
  return (
    <div className="pv pv-hr">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">People First</span>
          <h4 className="pv-title">Workforce & HR Suite</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-stat-pill"><b>348</b> Total Staff</span>
        </div>
      </div>

      <div className="pv-hr-main-grid">
        <div className="pv-hr-gauge-card">
          <div className="pv-hr-radial">
            <svg viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f1f5f9" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="#e05690"
                strokeWidth="3"
                strokeDasharray="97.4 100"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div className="pv-hr-radial-text">
              <b>97.4%</b>
              <small>Present</small>
            </div>
          </div>
          <div className="pv-hr-radial-info">
            <strong>Daily Attendance</strong>
            <span>339 In Office / Remote · 9 On Leave</span>
          </div>
        </div>

        <div className="pv-hr-stats-quad">
          <div className="pv-hr-quad-cell">
            <small>Active Headcount</small>
            <b>348</b>
            <span>8 Departments</span>
          </div>
          <div className="pv-hr-quad-cell">
            <small>Open Positions</small>
            <b style={{ color: "#e05690" }}>14</b>
            <span>42 Interviewing</span>
          </div>
          <div className="pv-hr-quad-cell">
            <small>Talent Retention</small>
            <b>94.8%</b>
            <span className="pv-green">Top Tier</span>
          </div>
          <div className="pv-hr-quad-cell">
            <small>Payroll Cycle</small>
            <b>₹42.8L</b>
            <span>Auto-processed</span>
          </div>
        </div>
      </div>

      <div className="pv-hr-dept-bar-sec">
        <div className="pv-hr-dept-head">
          <span>Headcount Distribution</span>
          <small>Engineering · Sales · Design · Operations</small>
        </div>
        <div className="pv-hr-multi-bar">
          <div style={{ width: "42%", background: "#e05690" }} title="Engineering (42%)" />
          <div style={{ width: "26%", background: "#3f60ea" }} title="Sales (26%)" />
          <div style={{ width: "18%", background: "#20a68c" }} title="Design (18%)" />
          <div style={{ width: "14%", background: "#d97b1e" }} title="Operations (14%)" />
        </div>
      </div>

      <div className="pv-hr-team-strip">
        {[
          { name: "Aarav Sharma", role: "Sr. Architect", status: "Active", hue: 210 },
          { name: "Meera Patel", role: "Product Lead", status: "In Meeting", hue: 330 },
          { name: "Devansh Nair", role: "DevOps Eng", status: "Active", hue: 160 },
          { name: "Kavya Reddy", role: "UI Designer", status: "Available", hue: 280 },
        ].map((member) => (
          <div key={member.name} className="pv-hr-member-chip">
            <span className="pv-hr-avatar-dot" style={{ background: `hsl(${member.hue}, 70%, 60%)` }}>
              {member.name.slice(0, 1)}
            </span>
            <div>
              <b>{member.name}</b>
              <small>{member.role}</small>
            </div>
            <span className="pv-hr-status-indicator">{member.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  4. INVENTORY: Warehouse Operations & SKU Map  */
/* ────────────────────────────────────────────── */
function InventoryVisual() {
  return (
    <div className="pv pv-inv">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Supply Chain</span>
          <h4 className="pv-title">Warehouse & SKU Operations</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-alert-pill"><AlertCircle size={11} /> 2 Restock Alerts</span>
        </div>
      </div>

      <div className="pv-inv-metrics-top">
        <div className="pv-inv-stat">
          <small>Total Tracked SKUs</small>
          <strong>42,850</strong>
          <span>Across 4 Hubs</span>
        </div>
        <div className="pv-inv-stat">
          <small>Stock Valuation</small>
          <strong>₹1.28 Cr</strong>
          <span className="pv-green">+8.4% Turnover</span>
        </div>
        <div className="pv-inv-stat">
          <small>Fulfillment Accuracy</small>
          <strong>99.8%</strong>
          <span>Same-day dispatch</span>
        </div>
      </div>

      <div className="pv-inv-categories">
        {[
          { cat: "Raw Materials & Metals", count: "14,200 units", cap: 88, color: "#16a34a", status: "Optimal" },
          { cat: "Finished Goods & Devices", count: "18,400 units", cap: 74, color: "#2563eb", status: "In Stock" },
          { cat: "Packaging & Cardboard", count: "8,120 units", cap: 94, color: "#d97b1e", status: "High Cap" },
          { cat: "Electronic Components", count: "2,130 units", cap: 28, color: "#dc2626", status: "Order Placed" },
        ].map((c) => (
          <div key={c.cat} className="pv-inv-cat-row">
            <div className="pv-inv-cat-name">
              <span className="pv-inv-cat-dot" style={{ background: c.color }} />
              <b>{c.cat}</b>
              <small>{c.count}</small>
            </div>
            <div className="pv-inv-cat-bar">
              <div style={{ width: `${c.cap}%`, background: c.color }} />
            </div>
            <span className="pv-inv-cat-pct">{c.cap}%</span>
            <span className="pv-inv-cat-status" style={{ color: c.color }}>{c.status}</span>
          </div>
        ))}
      </div>

      <div className="pv-inv-bays-grid">
        <div className="pv-inv-bays-title">
          <span>Active Warehouse Bay Floor Load</span>
          <small>Main Logistics Center (Bhiwandi Hub)</small>
        </div>
        <div className="pv-inv-bays-cells">
          {[
            { bay: "Bay A-01", load: "92%", type: "Heavy Cargo" },
            { bay: "Bay B-04", load: "78%", type: "Fast Moving" },
            { bay: "Bay C-02", load: "84%", type: "Bulk Goods" },
            { bay: "Bay D-08", load: "62%", type: "Ready to Dispatch" },
          ].map((b) => (
            <div key={b.bay} className="pv-inv-bay-card">
              <b>{b.bay}</b>
              <small>{b.type}</small>
              <div className="pv-inv-bay-meter">
                <div style={{ width: b.load }} />
              </div>
              <span>{b.load} Capacity</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-inv-live-dispatch">
        <Package size={13} />
        <span><b>Latest Dispatch:</b> Shipment #TK-9842 (320 units) cleared Customs Gate 4</span>
        <small>2m ago</small>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  5. ANALYTICS: High-Density BI Canvas          */
/* ────────────────────────────────────────────── */
function AnalyticsVisual() {
  return (
    <div className="pv pv-analytics">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Live Telemetry</span>
          <h4 className="pv-title">Business Intelligence & Analytics</h4>
        </div>
        <div className="pv-header-right">
          <div className="pv-analytics-filter">
            <span className="active">30D</span>
            <span>90D</span>
            <span>1Y</span>
          </div>
        </div>
      </div>

      <div className="pv-analytics-kpis">
        <div className="pv-analytics-kpi-card">
          <small>Total Revenue</small>
          <strong>₹92.4L</strong>
          <span className="pv-growth-tag">+28.4% YoY</span>
        </div>
        <div className="pv-analytics-kpi-card">
          <small>Conversion Rate</small>
          <strong>4.82%</strong>
          <span className="pv-growth-tag">+1.2%</span>
        </div>
        <div className="pv-analytics-kpi-card">
          <small>Avg Order Value</small>
          <strong>₹14,250</strong>
          <span className="pv-growth-tag">+16.8%</span>
        </div>
        <div className="pv-analytics-kpi-card">
          <small>Total Sessions</small>
          <strong>348K</strong>
          <span className="pv-growth-tag">+34.1%</span>
        </div>
      </div>

      <div className="pv-analytics-chart-wrap">
        <div className="pv-chart-y-axis">
          <span>₹100L</span>
          <span>₹75L</span>
          <span>₹50L</span>
          <span>₹25L</span>
          <span>0</span>
        </div>
        <div className="pv-chart-surface">
          <div className="pv-chart-gridlines">
            <span /><span /><span /><span /><span />
          </div>
          <svg viewBox="0 0 540 160" preserveAspectRatio="none" className="pv-analytics-svg">
            <defs>
              <linearGradient id="anagrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4565cf" stopOpacity=".35" />
                <stop offset="100%" stopColor="#4565cf" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 130 C40 120 70 100 110 88 S170 82 220 65 S280 72 340 45 S410 38 460 24 S510 16 540 10 V160 H0Z"
              fill="url(#anagrad)"
            />
            <path
              d="M0 130 C40 120 70 100 110 88 S170 82 220 65 S280 72 340 45 S410 38 460 24 S510 16 540 10"
              fill="none"
              stroke="#4565cf"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Chart datapoint indicators */}
            <circle cx="110" cy="88" r="4" fill="#4565cf" stroke="#fff" strokeWidth="2" />
            <circle cx="220" cy="65" r="4" fill="#4565cf" stroke="#fff" strokeWidth="2" />
            <circle cx="340" cy="45" r="4" fill="#4565cf" stroke="#fff" strokeWidth="2" />
            <circle cx="460" cy="24" r="4" fill="#4565cf" stroke="#fff" strokeWidth="2" />
            <circle cx="540" cy="10" r="5" fill="#20a68c" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="pv-analytics-x-months">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
      </div>

      <div className="pv-analytics-channels-footer">
        <span className="pv-chan-title">Revenue by Channel:</span>
        <div className="pv-chan-items">
          <span><b style={{ background: "#4565cf" }} /> Organic (38%)</span>
          <span><b style={{ background: "#20a68c" }} /> Direct Platform (31%)</span>
          <span><b style={{ background: "#d97b1e" }} /> Enterprise Outbound (19%)</span>
          <span><b style={{ background: "#7d5ce7" }} /> Referral (12%)</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  6. AI ASSISTANT: Tekkzy Copilot Workspace     */
/* ────────────────────────────────────────────── */
function AiVisual() {
  return (
    <div className="pv pv-ai">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Tekkzy Copilot</span>
          <h4 className="pv-title">Autonomous AI Executive Agent</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-ai-status-chip">
            <i className="pv-live-dot" /> Claude 3.5 & GPT-4o · <b>0.3s</b>
          </span>
        </div>
      </div>

      <div className="pv-ai-chat-thread">
        <div className="pv-ai-msg pv-ai-user-msg">
          <div className="pv-ai-msg-head">
            <b>Shubhranshu (COO)</b>
            <small>10:24 AM</small>
          </div>
          <p>Analyze Q3 performance across all departments and highlight our top growth levers.</p>
        </div>

        <div className="pv-ai-msg pv-ai-bot-msg">
          <div className="pv-ai-bot-badge">
            <Sparkles size={13} />
            <span>Tekkzy Intelligence Engine</span>
            <small>Live Cross-System Audit</small>
          </div>
          <p>
            Q3 net revenue reached <b>₹92.4L (+28.4% QoQ)</b>. The primary expansion drivers were ERP adoption in manufacturing clients and automated invoice collection in CRM.
          </p>
          <div className="pv-ai-insights-box">
            <div className="pv-ai-ins-item">
              <CheckCircle2 size={13} style={{ color: "#16a34a" }} />
              <span><b>Logistics Expansion:</b> 18 mid-market enterprise accounts ready for upsell.</span>
            </div>
            <div className="pv-ai-ins-item">
              <CheckCircle2 size={13} style={{ color: "#16a34a" }} />
              <span><b>Automation Savings:</b> Automated approvals eliminated 420 staff hours / month.</span>
            </div>
            <div className="pv-ai-ins-item">
              <AlertCircle size={13} style={{ color: "#d97b1e" }} />
              <span><b>Inventory Action:</b> Reorder placed for electronics bay to avoid stockout.</span>
            </div>
          </div>
        </div>

        <div className="pv-ai-prompts-row">
          <small>Suggested Next Steps:</small>
          <div className="pv-ai-pills">
            <span>Generate Executive Slide Deck</span>
            <span>Draft Email to 18 Enterprise Leads</span>
            <span>Export Forecast (CSV)</span>
          </div>
        </div>
      </div>

      <div className="pv-ai-input-bar">
        <div className="pv-ai-input-field">
          <MessageSquare size={14} className="pv-ai-icon-muted" />
          <span>Ask Tekkzy AI anything about revenue, supply chain, or staff...</span>
        </div>
        <button type="button" className="pv-ai-send-btn" aria-label="Send query">
          <Send size={13} />
        </button>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  7. AUTOMATION: Multi-Branch Flow Engine       */
/* ────────────────────────────────────────────── */
function AutomationVisual() {
  return (
    <div className="pv pv-auto">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">No-Code Orchestration</span>
          <h4 className="pv-title">Autonomous Workflow Engine</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-stat-pill"><b>1,480</b> Runs Today · <b>0 Errors</b></span>
        </div>
      </div>

      <div className="pv-auto-flow-canvas">
        <div className="pv-auto-node pv-auto-node-trigger">
          <div className="pv-auto-node-top">
            <span className="pv-auto-step-num">01</span>
            <small>Webhook Trigger</small>
          </div>
          <b>New B2B Order Received</b>
          <span>Payload Parsed & Verified</span>
        </div>

        <div className="pv-auto-connector pv-auto-conn-done">
          <ArrowRight size={14} />
        </div>

        <div className="pv-auto-node pv-auto-node-decision">
          <div className="pv-auto-node-top">
            <span className="pv-auto-step-num">02</span>
            <small>Condition Rule</small>
          </div>
          <b>Order Value &gt; ₹50,000?</b>
          <div className="pv-auto-branches">
            <span className="pv-branch-yes">VIP Route</span>
            <span className="pv-branch-no">Standard</span>
          </div>
        </div>

        <div className="pv-auto-connector pv-auto-conn-active">
          <ArrowRight size={14} />
        </div>

        <div className="pv-auto-node pv-auto-node-action">
          <div className="pv-auto-node-top">
            <span className="pv-auto-step-num">03</span>
            <small>Multi-System Sync</small>
          </div>
          <b>Execute Simultaneous Actions</b>
          <div className="pv-auto-action-badges">
            <span><Check size={10} /> Ledger Updated</span>
            <span><Check size={10} /> Bay Allocated</span>
            <span><Check size={10} /> Invoice Sent</span>
          </div>
        </div>
      </div>

      <div className="pv-auto-metrics-grid">
        <div className="pv-auto-metric-cell">
          <Clock size={16} style={{ color: "#20a68c" }} />
          <div>
            <b>420 Hours</b>
            <small>Saved Every Month</small>
          </div>
        </div>
        <div className="pv-auto-metric-cell">
          <Zap size={16} style={{ color: "#20a68c" }} />
          <div>
            <b>1.2 Seconds</b>
            <small>Average Execution Latency</small>
          </div>
        </div>
        <div className="pv-auto-metric-cell">
          <ShieldCheck size={16} style={{ color: "#20a68c" }} />
          <div>
            <b>99.98%</b>
            <small>Execution Reliability</small>
          </div>
        </div>
      </div>

      <div className="pv-auto-log-footer">
        <div className="pv-auto-log-dot" />
        <span><b>Live Log:</b> Order #TK-9921 triggered workflow &apos;Auto-Fulfill &amp; Sync&apos; — Finished successfully in 0.84s</span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  8. DIGITAL MARKETING: Omnichannel Suite       */
/* ────────────────────────────────────────────── */
function MarketingVisual() {
  return (
    <div className="pv pv-mkt">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Growth Engine</span>
          <h4 className="pv-title">Omnichannel Marketing Campaign</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-stat-pill">Blended ROAS: <b>4.8x</b></span>
        </div>
      </div>

      <div className="pv-mkt-channels-grid">
        {[
          { chan: "Google Ads (Search & PMax)", spend: "₹1.4L", rev: "₹5.8L", roas: "4.1x", leads: "8,420 Clicks", color: "#2563eb" },
          { chan: "Meta & Instagram Ads", spend: "₹1.2L", rev: "₹6.2L", roas: "5.2x", leads: "14.2K Clicks", color: "#e05690" },
          { chan: "LinkedIn Enterprise B2B", spend: "₹80K", rev: "₹4.8L", roas: "6.0x", leads: "284 MQLs", color: "#0ea5e9" },
          { chan: "Automated Email Sequences", spend: "₹40K", rev: "₹3.2L", roas: "8.0x", leads: "46.2% Opens", color: "#20a68c" },
        ].map((c) => (
          <div key={c.chan} className="pv-mkt-chan-card">
            <div className="pv-mkt-chan-head">
              <span className="pv-mkt-chan-dot" style={{ background: c.color }} />
              <b>{c.chan}</b>
              <span className="pv-mkt-roas-badge">{c.roas} ROAS</span>
            </div>
            <div className="pv-mkt-chan-numbers">
              <div>
                <small>Spend</small>
                <strong>{c.spend}</strong>
              </div>
              <div>
                <small>Revenue</small>
                <strong style={{ color: "#16a34a" }}>{c.rev}</strong>
              </div>
              <div className="pv-mkt-chan-leads">
                <small>{c.leads}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pv-mkt-funnel-sec">
        <div className="pv-mkt-funnel-head">
          <span>Full Conversion Funnel</span>
          <small className="pv-mkt-funnel-summary">
            <span>2.4M Impressions</span>
            <ArrowRight size={11} aria-hidden="true" />
            <span>2,840 Paying Customers</span>
          </small>
        </div>
        <div className="pv-mkt-funnel-steps">
          {[
            { label: "1. Impressions", count: "2.4M", pct: 100, barPct: "100%" },
            { label: "2. Site Clicks", count: "168K", pct: 7.0, barPct: "72%" },
            { label: "3. Qualified Leads", count: "14.2K", pct: 8.4, barPct: "48%" },
            { label: "4. Customers", count: "2,840", pct: 20.0, barPct: "28%" },
          ].map((f) => (
            <div key={f.label} className="pv-mkt-f-step">
              <div className="pv-mkt-f-meta">
                <span>{f.label}</span>
                <b>{f.count}</b>
              </div>
              <div className="pv-mkt-f-bar-track">
                <div className="pv-mkt-f-bar-fill" style={{ width: f.barPct }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pv-mkt-creative-footer">
        <Megaphone size={14} style={{ color: "#20a68c" }} />
        <span><b>Top Performing Creative:</b> &quot;Scale Operations with Tekkzy v3&quot; — CTR 4.8% (Top 1% in SaaS benchmarks)</span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  9. SEO: Search Intelligence & Keyword Rankings */
/* ────────────────────────────────────────────── */
function SeoVisual() {
  return (
    <div className="pv pv-seo">
      <div className="pv-header">
        <div className="pv-header-left">
          <span className="pv-pill-tag">Organic Visibility</span>
          <h4 className="pv-title">Search Intelligence &amp; Rankings</h4>
        </div>
        <div className="pv-header-right">
          <span className="pv-stat-pill">Organic Traffic: <b>184.2K / mo</b> (+38%)</span>
        </div>
      </div>

      <div className="pv-seo-table-head">
        <span className="pv-seo-th-rank">Rank</span>
        <span className="pv-seo-th-kw">Target Keyword</span>
        <span className="pv-seo-th-vol">Search Volume</span>
        <span className="pv-seo-th-diff">Difficulty</span>
        <span className="pv-seo-th-trend">30D Delta</span>
      </div>

      <div className="pv-seo-list">
        {[
          { pos: 1, kw: "enterprise cloud erp solutions", vol: "28.4K/mo", diff: "Medium", diffColor: "#2563eb", change: "+12 spots", isTop: true },
          { pos: 3, kw: "intelligent business automation software", vol: "18.2K/mo", diff: "Competitive", diffColor: "#7d5ce7", change: "+8 spots", isTop: true },
          { pos: 5, kw: "b2b sales pipeline crm platform", vol: "14.6K/mo", diff: "Medium", diffColor: "#2563eb", change: "+5 spots", isTop: true },
          { pos: 8, kw: "multi warehouse inventory tracker", vol: "12.0K/mo", diff: "Low", diffColor: "#16a34a", change: "+9 spots", isTop: false },
          { pos: 11, kw: "ai copilot for enterprise analytics", vol: "24.5K/mo", diff: "Competitive", diffColor: "#7d5ce7", change: "+14 spots", isTop: false },
        ].map((item) => (
          <div key={item.kw} className={`pv-seo-row ${item.isTop ? "pv-seo-top" : ""}`}>
            <div className="pv-seo-pos-badge">#{item.pos}</div>
            <div className="pv-seo-kw-cell">
              <b>{item.kw}</b>
              <small>Global SERP · Top 10 Google</small>
            </div>
            <div className="pv-seo-vol-cell">
              <strong>{item.vol}</strong>
            </div>
            <div className="pv-seo-diff-cell">
              <span className="pv-seo-diff-pill" style={{ color: item.diffColor, background: `${item.diffColor}14` }}>
                {item.diff}
              </span>
            </div>
            <div className="pv-seo-trend-cell">
              <span className="pv-seo-gain">
                <ArrowUpRight size={13} /> {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pv-seo-audit-grid">
        <div className="pv-seo-audit-card">
          <small>Domain Authority</small>
          <div className="pv-seo-meter-line">
            <div style={{ width: "78%" }} />
          </div>
          <div className="pv-seo-meter-val">
            <span>Score</span>
            <b>78 / 100</b>
          </div>
        </div>
        <div className="pv-seo-audit-card">
          <small>Quality Backlinks</small>
          <strong>48,650</strong>
          <span className="pv-green">98.2% Dofollow</span>
        </div>
        <div className="pv-seo-audit-card">
          <small>Core Web Vitals</small>
          <strong>99 / 100</strong>
          <span className="pv-green">Passes All 3 Metrics</span>
        </div>
      </div>
    </div>
  );
}

const visualMap: Record<string, () => React.JSX.Element> = {
  ERP: ErpVisual,
  CRM: CrmVisual,
  "HR Suite": HrVisual,
  Inventory: InventoryVisual,
  Analytics: AnalyticsVisual,
  "AI Assistant": AiVisual,
  Automation: AutomationVisual,
  "Digital Marketing": MarketingVisual,
  SEO: SeoVisual,
};

/* ────────────────────────────────────────────── */
/*  MAIN SECTION                                 */
/* ────────────────────────────────────────────── */

export default function ProductEcosystem() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    el.classList.remove("pv-entering");
    void el.offsetWidth;
    el.classList.add("pv-entering");
  }, [activeProduct.name]);

  const Visual = visualMap[activeProduct.name];

  return (
    <section className="platform-section section-shell" id="product-ecosystem">
      <div className="platform-intro">
        <div className="landing-label"><span /> Our Product Ecosystem</div>
        <h2>Everything You Need to <span>Run and Grow</span> Your Business</h2>
        <p>A complete suite of business tools, designed to work better together.</p>
        <div className="product-list" role="tablist" aria-label="Tekkzy products">
          {products.map((product) => {
            const Icon = product.icon;
            const isActive = activeProduct.name === product.name;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`product-tab-btn ${isActive ? "selected" : ""}`}
                key={product.name}
                onClick={() => setActiveProduct(product)}
                style={{ "--ecosystem-accent": product.accent } as React.CSSProperties}
              >
                <div className="product-tab-left">
                  <div className="product-tab-icon-box" style={{ background: `${product.accent}14`, color: product.accent }}>
                    <Icon size={14} />
                  </div>
                  <div className="product-tab-text">
                    <span className="product-tab-title">{product.name}</span>
                    <span className="product-tab-cat">{product.category}</span>
                  </div>
                </div>
                <div className="product-tab-right">
                  <span className="product-tab-badge">{product.badge}</span>
                  <ChevronRight size={13} className="product-tab-arrow" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="platform-visual pv-visual-wrap" style={{ "--ecosystem-accent": activeProduct.accent } as React.CSSProperties}>
        {/* MacOS Chrome Top Bar */}
        <div className="pv-chrome-bar">
          <div className="pv-chrome-dots">
            <span className="pv-chrome-dot red" />
            <span className="pv-chrome-dot yellow" />
            <span className="pv-chrome-dot green" />
          </div>
          <div className="pv-chrome-url">
            <Lock size={11} className="pv-chrome-lock" />
            <span>tekkzy.cloud/app/{activeProduct.name.toLowerCase().replace(/\s+/g, "-")}</span>
          </div>
          <div className="pv-chrome-status">
            <span className="pv-live-dot" />
            <span>Live Sync Active</span>
          </div>
        </div>

        <div ref={visualRef} className="pv-shell" key={activeProduct.name}>
          {Visual && <Visual />}
        </div>

        {/* Dashboard Status Bar Footer */}
        <div className="pv-chrome-footer">
          <div className="pv-chrome-footer-left">
            <span className="pv-footer-node-indicator" />
            <span>Cluster: <b>us-east-prod-01</b></span>
            <span className="pv-footer-sep">·</span>
            <span>Latency: <b>14ms</b></span>
            <span className="pv-footer-sep">·</span>
            <span>Encryption: <b>AES-256</b></span>
          </div>
          <div className="pv-chrome-footer-right">
            <span className="pv-footer-health">100% Operational</span>
          </div>
        </div>
      </div>
    </section>
  );
}
