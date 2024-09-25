import { Column } from "@ant-design/plots";

function App() {
  const config: any = () => ({
    data: [
      {
        time: "2024-9-25",
        type: "收入",
        value: 100,
      },
      {
        time: "2024-9-26",
        type: "支出",
        value: 300,
      },
    ],
    xField: "time",
    yField: "value",
    seriesField: "type",
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  });

  return (
    <div className="App">
      <header className="App-header">子应用</header>
      <Column {...config} />
    </div>
  );
}

export default App;
