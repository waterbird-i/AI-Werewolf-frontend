import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/qianfan/v2/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer bce-v3/ALTAK-4MXeYiZAz5LYQ8vSzlJE6/4bad1f6ecd8a0621665294bd56e036692675a0e1`
        },
        body: JSON.stringify({
          model: "deepseek-v3",
          messages: [
            {
              role: "user",
              content: input
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // 打印结果到控制台
      setResponse(data.result || data.message || '无响应内容');
    } catch (error) {
      console.error('Error:', error);
      setResponse(`请求失败：${error instanceof Error ? error.message : '未知错误'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入你的问题..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? '发送中...' : '发送'}
        </button>
      </form>
      <div className="response-area">
        {response}
      </div>
    </div>
  );
}

export default App;
