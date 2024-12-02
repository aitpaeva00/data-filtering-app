import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]); // Исходный список данных
  const [searchTerm, setSearchTerm] = useState(''); // Строка поиска

  // Инициализация данных при первом рендере
  useEffect(() => {
    const fetchData = async () => {
      const sampleData = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
        { id: 6, name: 'Fig' },
        { id: 7, name: 'Grape' },
        { id: 8, name: 'Honeydew' },
        { id: 9, name: 'Kiwi' },
        { id: 10, name: 'Lemon' },
      ];
      setData(sampleData);
    };

    fetchData();
  }, []);

  // Фильтруем данные на основе строки поиска
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Data Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '100%',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id} style={{ padding: '5px 0' }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
