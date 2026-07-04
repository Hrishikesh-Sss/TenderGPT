import React from 'react';

function Questionbar({ value, onChange, onSearch, placeholder = 'Search or ask anything after uploading the pdf...' }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onSearch?.(value); }}
        placeholder={placeholder}
        style={styles.input}
      />
      <button aria-label="search" onClick={() => onSearch?.(value)} style={styles.searchButton}>Search</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 300,
    padding: '6px 6px 6px 16px',
    borderRadius: 10,
    background: '#292a2a',
    width: '90%',
    boxShadow: '0 1px 3px rgba(2,6,23,0.6)',
    maxWidth: '750px',
    margin: '16px auto'
  },
  input: {
    flex: 1,
    width: '100%',
    height: 35,
    borderRadius: 20,
    border: 'none',
    padding: '0 30px',
    background: 'transparent',
    color: 'white',
    outline: 'none',
    fontSize: '15px'
  },
  searchButton: {
    height: 40,
    padding: '0 15px',
    borderRadius: 8,
    border: 'none',
    background: '#f7f5f5',
    color: '#070707',
    cursor: 'pointer'
  }
};

export default Questionbar;