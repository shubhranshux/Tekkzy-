"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Warehouse, Truck, BarChart3, QrCode, Bell, RefreshCw, MapPin, Layers, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function InventoryPage() {
  return (
    <main>
      {/* Warehouse-themed hero with stock cards — unique */}
      <section style={{ padding: "120px 24px 80px", background: "linear-gradient(180deg, #fff7ed 0%, #fff 60%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ borderColor: "#d97b1e40" }}>
              <Package size={14} /> TEKKZY INVENTORY
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: "clamp(42px, 6vw, 68px)", letterSpacing: "-2px", marginTop: "24px" }}>
              Know Exactly What&apos;s<br /><span style={{ color: "#d97b1e" }}>In Stock.</span> Always.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ maxWidth: "600px", margin: "20px auto 36px", fontSize: "18px", lineHeight: "1.7", color: "#4a5d7a" }}>
              Track every item across every warehouse in real-time. Automate reorders, prevent stockouts, and optimize your supply chain with AI-powered demand forecasting.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#d97b1e", borderColor: "#d97b1e" }}>Start Tracking <ArrowRight size={16} /></Link>
            </motion.div>
          </div>

          {/* Live stock dashboard — unique */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { sku: "SKU-0042", name: "Wireless Mouse", stock: 1247, status: "In Stock", color: "#1ba77e", warehouse: "Mumbai" },
              { sku: "SKU-0108", name: "USB-C Hub", stock: 23, status: "Low Stock", color: "#f59e0b", warehouse: "Delhi" },
              { sku: "SKU-0215", name: "Mechanical Keyboard", stock: 0, status: "Out of Stock", color: "#e54d4d", warehouse: "Bangalore" },
              { sku: "SKU-0089", name: "Monitor Stand", stock: 456, status: "In Stock", color: "#1ba77e", warehouse: "Mumbai" },
              { sku: "SKU-0301", name: "Webcam Pro", stock: 89, status: "Reorder Soon", color: "#d97b1e", warehouse: "Hyderabad" },
            ].map((item, i) => (
              <motion.div key={item.sku} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.08 }} style={{ padding: "20px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0", borderLeft: `3px solid ${item.color}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8" }}>{item.sku}</span>
                  <span style={{ fontSize: "10px", fontWeight: 800, color: item.color, background: `${item.color}12`, padding: "2px 8px", borderRadius: "10px" }}>{item.status}</span>
                </div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#0b152a", marginBottom: "4px" }}>{item.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#4a5d7a" }}>
                  <span>Qty: <strong>{item.stock.toLocaleString()}</strong></span>
                  <span><MapPin size={12} style={{ display: "inline" }} /> {item.warehouse}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature blocks — large cards with icons */}
      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {[
            { icon: Warehouse, title: "Multi-Warehouse", desc: "Manage unlimited warehouses, zones, racks, and bins. Transfer stock between locations with automated documentation and tracking.", color: "#d97b1e", bg: "#fff7ed" },
            { icon: QrCode, title: "Barcode & QR Scanning", desc: "Scan items for instant lookups, receiving, picking, packing, and stocktaking. Support for 1D barcodes, QR codes, and RFID tags.", color: "#1760ed", bg: "#eff6ff" },
            { icon: Bell, title: "Smart Alerts", desc: "Get notified about low stock, expiring items, overdue shipments, and unusual consumption patterns before they become problems.", color: "#e54d4d", bg: "#fef2f2" },
            { icon: TrendingUp, title: "Demand Forecasting", desc: "AI analyzes historical data, seasonality, trends, and market signals to predict future demand and optimize reorder quantities.", color: "#1ba77e", bg: "#ecfdf5" },
            { icon: Truck, title: "Purchase & Receiving", desc: "Automated purchase orders, vendor management, goods receipt notes, quality checks, and three-way matching with invoices.", color: "#896dff", bg: "#f5f3ff" },
            { icon: BarChart3, title: "Inventory Analytics", desc: "ABC analysis, stock aging reports, turnover ratios, dead stock identification, and inventory valuation methods (FIFO, LIFO, WAC).", color: "#36b2ba", bg: "#ecfeff" },
          ].map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ padding: "36px", background: f.bg, borderRadius: "18px", border: "1px solid #e2e8f0" }}>
              <f.icon size={32} style={{ color: f.color, marginBottom: "20px" }} />
              <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Never run out of stock again.</h2><p>See how Tekkzy Inventory gives you complete control over your supply chain.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact" style={{ background: "#d97b1e", borderColor: "#d97b1e" }}>Start Tracking <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/product">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
