import React from 'react';

const Sidebar: React.FC = () => (
  <aside style={{ width: '200px', padding: '10px', backgroundColor: '#f4f4f4', position: 'fixed', left: 0, top: '50px' }}>
    <input type="text" placeholder="Поиск..." style={{ width: '100%', marginBottom: '10px' }} />
    <label>
      <input type="checkbox" /> Показывать только с ненулевым количеством
    </label>
    <select style={{ width: '100%', marginTop: '10px' }}>
      <option>Категория 1</option>
      <option>Категория 2</option>
    </select>
  </aside>
);

export default Sidebar;