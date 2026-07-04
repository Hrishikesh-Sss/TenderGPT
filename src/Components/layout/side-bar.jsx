import React, { useState } from 'react';

const SideToolbar = () => {
  const [activeItem, setActiveItem] = useState('New chat');

  const mainItems = [
    { label: 'New chat', icon: '+' },
    { label: 'Chat History', icon: '💬' },
    { label: 'Projects', icon: '📁' },
    { label: 'Graphs', icon: '📊' },
    // { label: 'Code', icon: '</>' },
    { label: 'User Settings',  icon: '⚙️'}, 
  ];
  

  const productSlots = Array.from({ length: 2 }, (_, index) => ({
    id: index,
    title: '',
  }));


  return (
    <aside style={styles.sidebar}>
      <div style={styles.topBar}>
        <div style={styles.brandRow}>
          {/* <div style={styles.brandIcon}>□</div> */}
          <div>
            <div style={styles.brandName}>Toolbar</div>
          </div>
        </div>
        <div style={styles.actionRow}>
          <button type="button" style={styles.iconButton}>🔍</button>
          <button type="button" style={styles.iconButton}>≡</button>
        </div>
      </div>

      <div style={styles.menuSection}>
        {mainItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActiveItem(item.label)}
            style={activeItem === item.label ? styles.menuItemActive : styles.menuItem}
          >
            <span style={styles.menuIcon}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div style={styles.sectionBlock}>
        <div style={styles.sectionHeader}>Products</div>
        {productSlots.map((slot) => (
          <div key={slot.id} style={styles.emptyCard}>
            <span style={styles.emptyText}>Empty</span>
          </div>
        ))}
      </div>

      {/* <div style={styles.sectionBlock}>
        <div style={styles.sectionHeader}>Recents</div>
        {recentSlots.map((slot) => (
          <div key={slot.id} style={styles.recentItem}>
            <div style={styles.recentDot} />
            <span style={styles.emptyText}>Empty</span>
          </div>
        ))}
      </div> */}
    </aside>
  );
};

const styles = {
  sidebar: {
    position:'fixed',
    top:0,
    left:0,    
    width: 280,
    minHeight: '100vh',
    padding: 20,
    background: '#000000',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    boxSizing: 'border-box',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  brandIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    background: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 600,
  },
  actionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    border: 'none',
    background: '#1f2937',
    color: '#f5f7fa',
    cursor: 'pointer',
    fontSize: 14,
  },
  menuSection: {
    display: 'grid',
    gap: 10,
  },
  menuItem: {
    width: '100%',
    textAlign: 'left',
    padding: '12px 14px',
    borderRadius: 14,
    background: '#181a1f',
    border: '1px solid transparent',
    color: '#f5f7fa',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
  },
  menuItemActive: {
    width: '100%',
    textAlign: 'left',
    padding: '12px 14px',
    borderRadius: 14,
    background: '#2d3748',
    border: '1px solid #4f5b78',
    color: '#f5f7fa',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
  },
  menuIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: '#111315',
    display: 'grid',
    placeItems: 'center',
    fontSize: 14,
  },
  sectionBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  sectionHeader: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    color: '#8b96a5',
  },
  emptyCard: {
    minHeight: 52,
    borderRadius: 16,
    border: '1px dashed #2e3849',
    background: '#14171d',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280',
    fontSize: 14,
  },
  recentItem: {
    minHeight: 44,
    borderRadius: 14,
    background: '#14171d',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 12px',
    color: '#6b7280',
    fontSize: 14,
  },
  recentDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#4b9ce2',
  },
  emptyText: {
    opacity: 0.7,
  },
};

export default SideToolbar;
