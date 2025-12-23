import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("payments");
  const [theme, setTheme] = useState("light");

  // Sample data
  const metrics = {
    revenue: 85420,
    revenueChange: "+12.5%",
    occupancy: 75,
    occupancyChange: "+3.2%",
    tenants: 42,
    newTenants: 5,
    pendingPayments: 12400,
    overdue: 3,
    vacantRooms: 8,
    maintenance: 7,
  };

  const recentPayments = [
    {
      id: 1,
      tenant: "John Doe",
      amount: 8500,
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: 2,
      tenant: "Jane Smith",
      amount: 7500,
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: 3,
      tenant: "Bob Johnson",
      amount: 9000,
      status: "overdue",
      date: "2024-01-05",
    },
    {
      id: 4,
      tenant: "Alice Brown",
      amount: 8000,
      status: "completed",
      date: "2024-01-12",
    },
  ];

  const maintenanceRequests = [
    {
      id: 1,
      title: "AC Not Working",
      priority: "urgent",
      room: "101",
      status: "pending",
    },
    {
      id: 2,
      title: "Leaking Tap",
      priority: "high",
      room: "205",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Light Repair",
      priority: "medium",
      room: "304",
      status: "pending",
    },
  ];

  const urgentAlerts = [
    {
      id: 1,
      type: "payment",
      title: "Overdue Payment",
      description: "3 payments overdue by 5+ days",
      priority: "high",
    },
    {
      id: 2,
      type: "maintenance",
      title: "Urgent Repair",
      description: "AC repair needed in Room 101",
      priority: "urgent",
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 65000 },
    { month: "Feb", revenue: 72000 },
    { month: "Mar", revenue: 80000 },
    { month: "Apr", revenue: 78000 },
    { month: "May", revenue: 85000 },
    { month: "Jun", revenue: 92000 },
  ];

  const occupancyData = [
    { type: "Occupied", value: 75, color: "#16A34A" },
    { type: "Vacant", value: 15, color: "#DC2626" },
    { type: "Maintenance", value: 10, color: "#F59E0B" },
  ];

  const getStatusBadge = (status) => {
    const colors = {
      completed: "#16A34A",
      pending: "#F59E0B",
      overdue: "#DC2626",
      "in-progress": "#2563EB",
    };
    return (
      <span
        className="status-badge"
        style={{ backgroundColor: colors[status] || "#64748B" }}
      >
        {status}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      urgent: "#DC2626",
      high: "#F59E0B",
      medium: "#3B82F6",
      low: "#16A34A",
    };
    return (
      <span
        className="priority-badge"
        style={{ backgroundColor: colors[priority] }}
      >
        {priority}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      {/* Level 1: Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <h3>Monthly Revenue</h3>
            <span className="metric-icon revenue">₹</span>
          </div>
          <div className="metric-value">{formatCurrency(metrics.revenue)}</div>
          <div className="metric-change positive">{metrics.revenueChange}</div>
          <div className="metric-progress">
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#E2E8F0" }}
            >
              <div
                className="progress-fill"
                style={{ width: "85%", backgroundColor: "#16A34A" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Occupancy Rate</h3>
            <span className="metric-icon occupancy">🏠</span>
          </div>
          <div className="metric-value">{metrics.occupancy}%</div>
          <div className="metric-change positive">
            {metrics.occupancyChange}
          </div>
          <div className="metric-progress">
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#E2E8F0" }}
            >
              <div
                className="progress-fill"
                style={{
                  width: `${metrics.occupancy}%`,
                  backgroundColor: "#2563EB",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Active Tenants</h3>
            <span className="metric-icon tenants">👥</span>
          </div>
          <div className="metric-value">{metrics.tenants}</div>
          <div className="metric-subtitle">
            +{metrics.newTenants} new this month
          </div>
          <div className="metric-progress">
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#E2E8F0" }}
            >
              <div
                className="progress-fill"
                style={{ width: "90%", backgroundColor: "#3B82F6" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3>Pending Payments</h3>
            <span className="metric-icon payments">⚠️</span>
          </div>
          <div className="metric-value">
            {formatCurrency(metrics.pendingPayments)}
          </div>
          <div className="metric-subtitle">
            {metrics.overdue} overdue payments
          </div>
          <div className="metric-progress">
            <div
              className="progress-bar"
              style={{ width: "100%", backgroundColor: "#E2E8F0" }}
            >
              <div
                className="progress-fill"
                style={{ width: "60%", backgroundColor: "#F59E0B" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Level 2 & 3: Charts and Actions */}
      <div className="content-grid">
        {/* Revenue Chart */}
        <div className="chart-card">
          <div className="card-header">
            <h3>Revenue Trend (Last 6 Months)</h3>
            <span className="chart-badge growing">Growing</span>
          </div>
          <div className="chart-container">
            <div className="chart-bars">
              {revenueData.map((item, index) => (
                <div key={index} className="chart-bar-group">
                  <div className="chart-bar-label">{item.month}</div>
                  <div className="chart-bar">
                    <div
                      className="chart-bar-fill"
                      style={{
                        height: `${(item.revenue / 100000) * 100}%`,
                        backgroundColor: "#2563EB",
                      }}
                    ></div>
                  </div>
                  <div className="chart-bar-value">
                    ₹{(item.revenue / 1000).toFixed(0)}K
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Alerts */}
        <div className="actions-card">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-btn">
              <span className="action-icon">➕</span>
              <span>Add New Tenant</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">💰</span>
              <span>Mark Payment</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">🔧</span>
              <span>Create Ticket</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              <span>Generate Report</span>
            </button>
          </div>

          <div className="alerts-section">
            <h4>Urgent Alerts ({urgentAlerts.length})</h4>
            {urgentAlerts.map((alert) => (
              <div key={alert.id} className={`alert-item ${alert.priority}`}>
                <div className="alert-icon">
                  {alert.type === "payment" ? "💰" : "🔧"}
                </div>
                <div className="alert-content">
                  <div className="alert-title">{alert.title}</div>
                  <div className="alert-description">{alert.description}</div>
                </div>
                <span className="alert-priority">{alert.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Occupancy Distribution */}
      <div className="content-grid">
        <div className="chart-card">
          <div className="card-header">
            <h3>Room Occupancy Distribution</h3>
          </div>
          <div className="pie-chart-container">
            <div className="pie-chart">
              <div
                className="pie-chart-slice"
                style={{
                  "--value": occupancyData[0].value,
                  "--color": occupancyData[0].color,
                }}
              ></div>
              <div
                className="pie-chart-slice"
                style={{
                  "--value": occupancyData[1].value,
                  "--color": occupancyData[1].color,
                  "--offset": occupancyData[0].value,
                }}
              ></div>
              <div
                className="pie-chart-slice"
                style={{
                  "--value": occupancyData[2].value,
                  "--color": occupancyData[2].color,
                  "--offset": occupancyData[0].value + occupancyData[1].value,
                }}
              ></div>
              <div className="pie-chart-center"></div>
            </div>
            <div className="pie-legend">
              {occupancyData.map((item, index) => (
                <div key={index} className="legend-item">
                  <span
                    className="legend-color"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="legend-label">{item.type}</span>
                  <span className="legend-value">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="events-card">
          <h3>Upcoming This Week</h3>
          <div className="events-list">
            <div className="event-item">
              <div className="event-content">
                <div className="event-title">Lease Renewals</div>
                <div className="event-description">
                  2 tenants due for renewal
                </div>
              </div>
              <span className="event-time">3 days</span>
            </div>
            <div className="event-item">
              <div className="event-content">
                <div className="event-title">Security Deposits</div>
                <div className="event-description">₹25,000 to be returned</div>
              </div>
              <span className="event-time">5 days</span>
            </div>
            <div className="event-item">
              <div className="event-content">
                <div className="event-title">Maintenance Schedule</div>
                <div className="event-description">Monthly inspection due</div>
              </div>
              <span className="event-time">Tomorrow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Level 4: Tabs Section */}
      <div className="tabs-section">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === "payments" ? "active" : ""}`}
            onClick={() => setActiveTab("payments")}
          >
            Recent Payments ({recentPayments.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "maintenance" ? "active" : ""}`}
            onClick={() => setActiveTab("maintenance")}
          >
            Maintenance ({maintenanceRequests.length})
          </button>
          <button
            className={`tab-btn ${activeTab === "tenants" ? "active" : ""}`}
            onClick={() => setActiveTab("tenants")}
          >
            New Tenants
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === "payments" && (
            <div className="payments-table">
              <table>
                <thead>
                  <tr>
                    <th>Tenant</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.tenant}</td>
                      <td className="amount-cell">
                        {formatCurrency(payment.amount)}
                      </td>
                      <td>{getStatusBadge(payment.status)}</td>
                      <td>{new Date(payment.date).toLocaleDateString()}</td>
                      <td>
                        <button className="view-btn">View →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="view-all">
                <button className="btn-link">View All Payments →</button>
              </div>
            </div>
          )}

          {activeTab === "maintenance" && (
            <div className="maintenance-grid">
              {maintenanceRequests.map((request) => (
                <div key={request.id} className="maintenance-card">
                  <div className="maintenance-header">
                    <div>
                      <h4>{request.title}</h4>
                      <p>Room {request.room}</p>
                    </div>
                    {getPriorityBadge(request.priority)}
                  </div>
                  <div className="maintenance-footer">
                    {getStatusBadge(request.status)}
                    <button className="icon-btn">⋮</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tenants" && (
            <div className="tenants-grid">
              <div className="tenant-card">
                <div className="tenant-avatar">JD</div>
                <div className="tenant-info">
                  <h4>John Doe</h4>
                  <p>Room 101 • New tenant</p>
                </div>
                <span className="tenant-tag new">New</span>
              </div>
              <div className="tenant-card">
                <div className="tenant-avatar">JS</div>
                <div className="tenant-info">
                  <h4>Jane Smith</h4>
                  <p>Room 205 • 2 weeks</p>
                </div>
              </div>
              <div className="tenant-card">
                <div className="tenant-avatar">BJ</div>
                <div className="tenant-info">
                  <h4>Bob Johnson</h4>
                  <p>Room 304 • 1 month</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Performance Metrics Footer */}
      <div className="performance-grid">
        <div className="performance-card">
          <div className="performance-label">Collection Efficiency</div>
          <div className="performance-value success">94%</div>
        </div>
        <div className="performance-card">
          <div className="performance-label">Tenant Retention</div>
          <div className="performance-value info">88%</div>
        </div>
        <div className="performance-card">
          <div className="performance-label">Avg Occupancy</div>
          <div className="performance-value primary">75%</div>
        </div>
        <div className="performance-card">
          <div className="performance-label">System Health</div>
          <div className="performance-value">
            <span className="health-dot"></span>
            All Good
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
