import Chart from "react-apexcharts";

const Home = () => {
  // Configuración del gráfico de barras
  const barChartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    },
  };

  const barChartSeries = [
    {
      name: "Ventas",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100, 110, 120],
    },
  ];

  // Configuración del gráfico de dona
  const donutChartOptions = {
    labels: ["Disponible", "Vendido", "Reservado"],
  };

  const donutChartSeries = [44, 55, 41];

  return (
    <div className="space-y-6 relative">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Gráfico de barras */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Ventas Mensuales</h2>
        <Chart
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
        />
      </div>

      {/* Gráfico de dona */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Inventario</h2>
        <Chart
          options={donutChartOptions}
          series={donutChartSeries}
          type="donut"
          height={350}
        />
      </div>
    </div>
  );
};

export default Home;